#!/usr/bin/env node
/**
 * scripts/fix-emdashes.mjs
 *
 * Two-pass em-dash (U+2014 / &mdash;) fixer for .tsx files under app/.
 * The voice rule (docs/07-VOICE-AND-TONE.md) bans em dashes in page copy.
 *
 *   node scripts/fix-emdashes.mjs --scan   (default) READ-ONLY except for
 *       writing docs/.cache/EMDASH-REVIEW.md
 *   node scripts/fix-emdashes.mjs --apply  reads the (human-edited) review
 *       file and applies ONLY rows whose Approve? column is exactly "yes"
 *
 * Node built-ins only. Never throws on missing files. Operates only on
 * app/**.tsx. Does not commit.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const APP = path.join(ROOT, 'app')
const CACHE_DIR = path.join(ROOT, 'docs', '.cache')
const REVIEW_FILE = path.join(CACHE_DIR, 'EMDASH-REVIEW.md')

const EM = '\u2014'
const EN = '\u2013'
const TOKEN_RE = /\u2014|&mdash;/gi

// ── safe fs helpers ────────────────────────────────────────────────────────────
const exists = (p) => { try { return fs.existsSync(p) } catch { return false } }
const isDir = (p) => { try { return fs.statSync(p).isDirectory() } catch { return false } }
const read = (p) => { try { return fs.readFileSync(p, 'utf8') } catch { return null } }
const listDir = (p) => { try { return fs.readdirSync(p) } catch { return [] } }
const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/')

function walkTsx(dir) {
  const out = []
  if (!isDir(dir)) return out
  const stack = [dir]
  while (stack.length) {
    const cur = stack.pop()
    for (const entry of listDir(cur)) {
      const full = path.join(cur, entry)
      if (isDir(full)) {
        if (entry === 'node_modules' || entry === '.next' || entry === '.git') continue
        stack.push(full)
      } else if (full.endsWith('.tsx')) {
        out.push(full)
      }
    }
  }
  return out.sort()
}

// ── find JSON-LD schema object ranges (absolute char offsets) ───────────────────
function findSchemaRanges(src) {
  const ranges = []
  const re = /@context/gi
  let m
  while ((m = re.exec(src)) !== null) {
    // walk left to the opening '{' of the enclosing object
    let depth = 0, open = -1
    for (let i = m.index; i >= 0; i--) {
      const c = src[i]
      if (c === '}') depth++
      else if (c === '{') { if (depth === 0) { open = i; break } depth-- }
    }
    if (open === -1) continue
    // walk right to its matching '}'
    let d = 0, close = -1
    for (let i = open; i < src.length; i++) {
      const c = src[i]
      if (c === '{') d++
      else if (c === '}') { d--; if (d === 0) { close = i; break } }
    }
    if (close === -1) close = src.length
    ranges.push([open, close])
  }
  return ranges
}
const inRanges = (off, ranges) => ranges.some(([a, b]) => off >= a && off <= b)

function lineStarts(src) {
  const lines = src.split('\n')
  const starts = new Array(lines.length)
  let acc = 0
  for (let i = 0; i < lines.length; i++) { starts[i] = acc; acc += lines[i].length + 1 }
  return { lines, starts }
}

// ── skip-context detection for a token at idx within `line` ─────────────────────
function skipReason(line, idx) {
  if (/^\s*import\b/.test(line) || /^\s*}\s*from\s+['"]/.test(line)) return 'import'
  const pre = line.slice(0, idx)
  const slash = pre.indexOf('//')
  if (slash !== -1 && pre[slash - 1] !== ':') return 'developer comment'
  if (/^\s*(\*|\/\*)/.test(line)) return 'developer comment'
  if (/className\s*=\s*["'`][^"'`]*$/.test(pre)) return 'className string'
  if (/["'`](https?:\/\/|\/)[^"'`\s]*$/.test(pre)) return 'URL string'
  return null
}

const approveFor = (cat) =>
  (cat === 'SPACED-COMMA' || cat === 'ENTITY') ? 'yes'
    : (cat === 'SKIPPED' ? 'no' : 'REVIEW')

/**
 * Classify a single token occurrence.
 * Returns { category, approve, span:[start,end], insert, fromText } where
 * span is the [start,end) slice of `line` to replace with `insert`.
 * Deterministic: --scan and --apply call this identically.
 */
function classifyToken(line, idx, tokenText, isSchema) {
  const skip = skipReason(line, idx)
  if (skip) {
    return { category: 'SKIPPED', approve: 'no', span: [idx, idx + tokenText.length], insert: tokenText, fromText: tokenText, skip }
  }

  const isEntity = /^&mdash;$/i.test(tokenText)
  const tokenEnd = idx + tokenText.length
  const charBefore = idx > 0 ? line[idx - 1] : ''
  const charAfter = tokenEnd < line.length ? line[tokenEnd] : ''
  const spacedBefore = charBefore === ' '
  const spacedAfter = charAfter === ' '

  // RANGE: no spaces on either side (e.g. "Monday—Friday", "1—2")
  if (!spacedBefore && !spacedAfter && charBefore !== '' && charAfter !== '') {
    return { category: 'RANGE', approve: approveFor('RANGE'), span: [idx, tokenEnd], insert: EN, fromText: tokenText }
  }

  // spaced on at least one side → sentence punctuation
  const start = spacedBefore ? idx - 1 : idx
  const end = spacedAfter ? tokenEnd + 1 : tokenEnd
  const fromText = line.slice(start, end)

  const after = line.slice(tokenEnd).replace(/^\s+/, '')
  const nextWord = (after.match(/^(\S+)/) || ['', ''])[1]
  const capitalized = /^[A-Z]/.test(nextWord)
  const clauseWords = after.split(/\s+/).filter(Boolean).length

  let category, insert
  if (isSchema) { category = 'SCHEMA-REVIEW'; insert = ', ' }
  else if (isEntity) { category = 'ENTITY'; insert = ', ' }
  else if (spacedBefore && spacedAfter && capitalized && clauseWords >= 5) { category = 'SPACED-PERIOD'; insert = '. ' }
  else if (spacedBefore && spacedAfter && capitalized) { category = 'MARGINAL'; insert = ', ' }
  else if (spacedBefore && spacedAfter) { category = 'SPACED-COMMA'; insert = ', ' }
  else { category = 'MARGINAL'; insert = ', ' } // one-sided spacing is irregular → review

  return { category, approve: approveFor(category), span: [start, end], insert, fromText }
}

// Collect every token instance across app/**.tsx in stable scan order.
function collectInstances() {
  const files = walkTsx(APP)
  const instances = []
  let id = 0
  for (const file of files) {
    const src = read(file)
    if (src === null) continue
    const schema = findSchemaRanges(src)
    const { lines, starts } = lineStarts(src)
    for (let li = 0; li < lines.length; li++) {
      const line = lines[li]
      let tokenIndexOnLine = -1
      let m
      TOKEN_RE.lastIndex = 0
      while ((m = TOKEN_RE.exec(line)) !== null) {
        tokenIndexOnLine++
        const idx = m.index
        const tokenText = m[0]
        const absOff = starts[li] + idx
        const isSchema = inRanges(absOff, schema)
        const c = classifyToken(line, idx, tokenText, isSchema)
        id++
        const ctxStart = Math.max(0, idx - 30)
        const ctxEnd = Math.min(line.length, idx + tokenText.length + 30)
        const context = line.slice(ctxStart, ctxEnd).replace(/\s+/g, ' ').replace(/\|/g, '/').trim()
        instances.push({
          id, file, fileRel: rel(file), line: li + 1, tokenIndexOnLine,
          context, ...c,
        })
      }
    }
  }
  return instances
}

// ════════════════════════════════════════════════════════════════════════════════
// MODE: --scan
// ════════════════════════════════════════════════════════════════════════════════
function runScan() {
  const instances = collectInstances()

  const counts = {}
  let preApproved = 0, needReview = 0, skipped = 0
  for (const inst of instances) {
    counts[inst.category] = (counts[inst.category] || 0) + 1
    if (inst.approve === 'yes') preApproved++
    else if (inst.approve === 'no') skipped++
    else needReview++
  }

  const active = instances.filter((i) => i.category !== 'SKIPPED')
  const skippedRows = instances.filter((i) => i.category === 'SKIPPED')

  const fmtProposed = (inst) => {
    if (inst.category === 'SKIPPED') return '_(no change)_'
    const from = inst.fromText.replace(/\|/g, '/')
    return '`' + from + '` → `' + inst.insert + '`'
  }

  const rowLine = (inst) =>
    `| ${inst.id} | \`${inst.fileRel}\` | ${inst.line} | ${inst.context} | ${inst.category} | ${fmtProposed(inst)} | ${inst.approve} |`

  const out = []
  out.push('# Em Dash Review')
  out.push('')
  out.push('Generated by `scripts/fix-emdashes.mjs --scan`. **Read-only artifact.**')
  out.push('')
  out.push('Edit the **Approve?** column: set `yes` to apply a row, anything else')
  out.push('(`no`, `REVIEW`) to leave it untouched. Then run')
  out.push('`node scripts/fix-emdashes.mjs --apply`.')
  out.push('')
  out.push('Pre-approved categories: SPACED-COMMA, ENTITY. Everything else is set to')
  out.push('`REVIEW` and will NOT be applied until you change it to `yes`.')
  out.push('')
  out.push('| ID | File | Line# | Context | Category | Proposed replacement | Approve? |')
  out.push('|---:|---|---:|---|---|---|---|')
  for (const inst of active) out.push(rowLine(inst))
  out.push('')
  out.push('## Skipped (not proposed for change)')
  out.push('')
  out.push('| ID | File | Line# | Context | Category | Reason | Approve? |')
  out.push('|---:|---|---:|---|---|---|---|')
  for (const inst of skippedRows) {
    out.push(`| ${inst.id} | \`${inst.fileRel}\` | ${inst.line} | ${inst.context} | SKIPPED | ${inst.skip} | no |`)
  }
  out.push('')

  try {
    if (!exists(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true })
    fs.writeFileSync(REVIEW_FILE, out.join('\n'), 'utf8')
  } catch (e) {
    console.log(`Could not write review file: ${String(e && e.message || e)}`)
  }

  const fileCount = new Set(instances.map((i) => i.fileRel)).size
  console.log('Em dash scan complete.')
  console.log(`Total instances: ${instances.length} across ${fileCount} file(s)`)
  console.log('By category:')
  for (const cat of ['SPACED-COMMA', 'SPACED-PERIOD', 'MARGINAL', 'SCHEMA-REVIEW', 'RANGE', 'ENTITY', 'SKIPPED']) {
    if (counts[cat]) console.log(`  ${cat.padEnd(14)} ${counts[cat]}`)
  }
  console.log(`Pre-approved (yes): ${preApproved} · Need review: ${needReview} · Skipped: ${skipped}`)
  console.log(`Review file: ${rel(REVIEW_FILE)}`)
  console.log('Edit docs/.cache/EMDASH-REVIEW.md — set Approve? to yes or no for each row — then run node scripts/fix-emdashes.mjs --apply')
}

// ════════════════════════════════════════════════════════════════════════════════
// MODE: --apply
// ════════════════════════════════════════════════════════════════════════════════
function parseReview(content) {
  const rows = []
  for (const raw of content.split('\n')) {
    const line = raw.trim()
    if (!line.startsWith('|')) continue
    const cells = line.split('|').map((c) => c.trim())
    // cells[0] and last are empty due to leading/trailing pipes
    const id = parseInt(cells[1], 10)
    if (!Number.isInteger(id)) continue // header / separator rows
    const fileRel = (cells[2] || '').replace(/`/g, '')
    const lineNo = parseInt(cells[3], 10)
    const approve = (cells[7] || '').toLowerCase()
    if (!fileRel || !Number.isInteger(lineNo)) continue
    rows.push({ id, fileRel, line: lineNo, approve })
  }
  return rows
}

function runApply() {
  const content = read(REVIEW_FILE)
  if (content === null) {
    console.log(`No review file found at ${rel(REVIEW_FILE)}. Run --scan first.`)
    return
  }
  const rows = parseReview(content).sort((a, b) => a.id - b.id)

  // token index per row = position among rows sharing the same file+line (ID order)
  const groupSeen = new Map()
  for (const r of rows) {
    const key = `${r.fileRel}::${r.line}`
    const n = groupSeen.get(key) || 0
    r.tokenIndexOnLine = n
    groupSeen.set(key, n + 1)
  }

  const approvedByFile = new Map()
  for (const r of rows) {
    if (r.approve !== 'yes') continue
    if (!approvedByFile.has(r.fileRel)) approvedByFile.set(r.fileRel, [])
    approvedByFile.get(r.fileRel).push(r)
  }

  let applied = 0
  const touchedFiles = new Set()
  let notApproved = rows.filter((r) => r.approve !== 'yes').length
  const stale = []

  for (const [fileRel, approvedRows] of approvedByFile) {
    if (approvedRows.length === 0) continue
    const abs = path.join(ROOT, fileRel)
    const src = read(abs)
    if (src === null) { for (const r of approvedRows) stale.push({ ...r, why: 'file missing' }); continue }
    const schema = findSchemaRanges(src)
    const { lines, starts } = lineStarts(src)

    // group approved rows of this file by line
    const byLine = new Map()
    for (const r of approvedRows) {
      if (!byLine.has(r.line)) byLine.set(r.line, [])
      byLine.get(r.line).push(r)
    }

    let fileChanged = false
    for (const [lineNo, lrows] of byLine) {
      const li = lineNo - 1
      if (li < 0 || li >= lines.length) { for (const r of lrows) stale.push({ ...r, why: 'line out of range' }); continue }
      const line = lines[li]
      // re-scan tokens on this line
      const tokens = []
      let m
      TOKEN_RE.lastIndex = 0
      while ((m = TOKEN_RE.exec(line)) !== null) tokens.push({ idx: m.index, text: m[0] })

      // compute replacement spans for approved token indices
      const edits = []
      for (const r of lrows) {
        const tk = tokens[r.tokenIndexOnLine]
        if (!tk) { stale.push({ ...r, why: 'token not found (line changed)' }); continue }
        const absOff = starts[li] + tk.idx
        const isSchema = inRanges(absOff, schema)
        const c = classifyToken(line, tk.idx, tk.text, isSchema)
        if (c.category === 'SKIPPED') { stale.push({ ...r, why: 'now classified SKIPPED' }); continue }
        edits.push({ start: c.span[0], end: c.span[1], insert: c.insert, id: r.id })
      }
      if (edits.length === 0) continue
      // apply right-to-left so offsets stay valid
      edits.sort((a, b) => b.start - a.start)
      let newLine = line
      for (const e of edits) { newLine = newLine.slice(0, e.start) + e.insert + newLine.slice(e.end); applied++ }
      lines[li] = newLine
      fileChanged = true
    }

    if (fileChanged) {
      try { fs.writeFileSync(abs, lines.join('\n'), 'utf8'); touchedFiles.add(fileRel) }
      catch (e) { console.log(`Could not write ${fileRel}: ${String(e && e.message || e)}`) }
    }
  }

  console.log(`${applied} replacement(s) applied across ${touchedFiles.size} file(s).`)
  console.log(`${notApproved} row(s) skipped (not approved).`)
  if (stale.length) {
    console.log(`\n${stale.length} STALE row(s) skipped (file changed since scan):`)
    for (const s of stale) console.log(`  ID ${s.id} — ${s.fileRel}:${s.line} — ${s.why}`)
    console.log('Recommend re-running: node scripts/fix-emdashes.mjs --scan')
  }
  console.log('\nNothing committed. Review the git diff, then run')
  console.log('  node scripts/validate-article.mjs <file>   (or)   node scripts/repo-inventory.mjs')
  console.log('to confirm the em dash count dropped, then commit yourself.')
}

// ── entry ───────────────────────────────────────────────────────────────────────
const mode = process.argv.includes('--apply') ? 'apply' : 'scan'
try {
  if (mode === 'apply') runApply()
  else runScan()
} catch (e) {
  console.log(`Unexpected error (continuing, no changes guaranteed): ${String(e && e.message || e)}`)
}
process.exit(0)
