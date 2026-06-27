#!/usr/bin/env node
/**
 * scripts/validate-article.mjs
 *
 * Usage:  node scripts/validate-article.mjs app/resources/cluster/article/page.tsx
 *
 * Checks:
 *   1. Em dash (U+2014) anywhere in the file              — BLOCKING (exit 1)
 *   2. Internal link verification                          — BLOCKING for broken links
 *      • page.tsx exists at app/[path]/page.tsx
 *      • link target is not listed as status:'coming' in its hub
 *      • no duplicate href targets                        — advisory
 *   3. Spelling against /usr/share/dict/words              — advisory
 *      + custom allowlist at scripts/dictionary.txt
 *   4. Grammar: sentences >40 words, weak "It is/There is" — advisory
 *
 * Exit 0 = pass (advisory warnings OK)
 * Exit 1 = blocking issue found
 * Exit 2 = usage / file-not-found error
 */

import fs   from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// ── ANSI helpers ───────────────────────────────────────────────────────────────
const C = {
  reset:  '\x1b[0m',
  bold:   '\x1b[1m',
  dim:    '\x1b[2m',
  red:    '\x1b[31m',
  green:  '\x1b[32m',
  yellow: '\x1b[33m',
  cyan:   '\x1b[36m',
}

const log = {
  head: (s) => console.log(`\n${C.bold}${C.cyan}── ${s} ──${C.reset}`),
  pass: (s) => console.log(`${C.green}✓${C.reset} ${s}`),
  fail: (s) => console.log(`${C.red}✗${C.reset} ${C.bold}${s}${C.reset}`),
  warn: (s) => console.log(`${C.yellow}⚠${C.reset} ${s}`),
  info: (s) => console.log(`${C.dim}  ${s}${C.reset}`),
}

// ── Args ───────────────────────────────────────────────────────────────────────
const [,, target] = process.argv

if (!target) {
  console.error('Usage: node scripts/validate-article.mjs <path/to/page.tsx>')
  process.exit(2)
}

const absTarget = path.resolve(ROOT, target)
if (!fs.existsSync(absTarget)) {
  console.error(`File not found: ${absTarget}`)
  process.exit(2)
}

const src   = fs.readFileSync(absTarget, 'utf8')
const lines = src.split('\n')

let exitCode      = 0
let blockingCount = 0
let advisoryCount = 0

// ══════════════════════════════════════════════════════════════════════════════
// 1. EM DASH CHECK
// ══════════════════════════════════════════════════════════════════════════════
log.head('1. EM DASH CHECK')

const EM_DASH    = '\u2014'
const emDashHits = []

lines.forEach((line, i) => {
  if (line.includes(EM_DASH)) emDashHits.push({ n: i + 1, text: line.trim() })
})

if (emDashHits.length === 0) {
  log.pass('No em dashes found')
} else {
  for (const { n, text } of emDashHits) {
    log.fail(`Line ${n}: ${text.slice(0, 120)}`)
    blockingCount++
  }
  exitCode = 1
}

// ══════════════════════════════════════════════════════════════════════════════
// 2. INTERNAL LINK VERIFICATION
// ══════════════════════════════════════════════════════════════════════════════
log.head('2. INTERNAL LINK VERIFICATION')

// Matches: href="/...", href='/...', href={"/..."}, href={'/...'}
const HREF_RE = /href=(?:"(\/[^"#\s]*?)"|'(\/[^'#\s]*?)'|\{(?:"(\/[^"#\s]*?)"|'(\/[^'#\s]*?)')\})/g

const allHrefs = []
let m
while ((m = HREF_RE.exec(src)) !== null) {
  allHrefs.push(m[1] ?? m[2] ?? m[3] ?? m[4])
}

// Count occurrences for duplicate detection
const hrefFreq = new Map()
for (const h of allHrefs) hrefFreq.set(h, (hrefFreq.get(h) ?? 0) + 1)

// Hub-file cache
const hubCache = {}
function readHub(hubPath) {
  if (!(hubPath in hubCache)) {
    hubCache[hubPath] = fs.existsSync(hubPath) ? fs.readFileSync(hubPath, 'utf8') : null
  }
  return hubCache[hubPath]
}

// Check if a href is flagged as Coming Soon in its cluster hub
function isComingSoon(href) {
  const segs = href.replace(/^\/|\/$/g, '').split('/')
  if (segs.length < 2) return false

  // Hub is always the grandparent: app/<seg0>/<seg1>/page.tsx
  const hubPath = path.join(ROOT, 'app', segs[0], segs[1], 'page.tsx')
  const hubSrc  = readHub(hubPath)
  if (!hubSrc) return false

  const hubLines = hubSrc.split('\n')
  for (let i = 0; i < hubLines.length; i++) {
    if (!hubLines[i].includes(href)) continue
    // Check the surrounding ±6 lines for status: 'coming'
    const window = hubLines.slice(Math.max(0, i - 6), Math.min(hubLines.length, i + 6)).join('\n')
    if (/status:\s*['"]coming['"]/.test(window)) return true
  }
  return false
}

let linksChecked = 0, linksPassed = 0, linksFailed = 0

for (const href of [...new Set(allHrefs)]) {
  linksChecked++
  const clean    = href.replace(/\/$/, '')
  const segments = clean.split('/').filter(Boolean)
  const pagePath = path.join(ROOT, 'app', ...segments, 'page.tsx')

  if (!fs.existsSync(pagePath)) {
    log.fail(`BROKEN LINK: ${href}`)
    log.info(`Expected: app/${segments.join('/')}/page.tsx`)
    linksFailed++
    blockingCount++
    exitCode = 1
  } else {
    linksPassed++
    if (isComingSoon(href)) {
      log.warn(`Links to Coming Soon article: ${href}`)
      advisoryCount++
    }
  }
}

// Duplicates (advisory)
for (const [href, count] of hrefFreq.entries()) {
  if (count > 1) {
    log.warn(`Duplicate href (used ${count}×): ${href}`)
    advisoryCount++
  }
}

log.info(`${linksChecked} unique link(s) checked — ${linksPassed} passed, ${linksFailed} failed`)

// ══════════════════════════════════════════════════════════════════════════════
// 3. SPELLING
// ══════════════════════════════════════════════════════════════════════════════
log.head('3. SPELLING')

const SYSTEM_DICT  = '/usr/share/dict/words'
const CUSTOM_DICT  = path.join(ROOT, 'scripts', 'dictionary.txt')

const dictWords   = new Set()
const customWords = new Set()

if (fs.existsSync(SYSTEM_DICT)) {
  for (const w of fs.readFileSync(SYSTEM_DICT, 'utf8').split('\n')) {
    const t = w.trim().toLowerCase()
    if (t) dictWords.add(t)
  }
}
if (fs.existsSync(CUSTOM_DICT)) {
  for (const w of fs.readFileSync(CUSTOM_DICT, 'utf8').split('\n')) {
    const t = w.trim().toLowerCase()
    if (t && !t.startsWith('#')) customWords.add(t)
  }
}

// Extract prose text from the file (JSX text nodes + string literals)
function extractProse(source) {
  const chunks = []

  // JSX text nodes: text between > and < that contains spaces and letters
  const jsxTextRe = />([^<>{}\n]{15,})</g
  let mt
  while ((mt = jsxTextRe.exec(source)) !== null) {
    const s = mt[1].trim()
    if (s.includes(' ') && /[a-zA-Z]{3}/.test(s)) chunks.push(s)
  }

  // Long string literals that look like prose (contain spaces, not CSS/URLs)
  const strLitRe = /(?:^|[=:,({\[])[\s]*['"]([A-Za-z][^'"]{20,}?)['"]/gm
  while ((mt = strLitRe.exec(source)) !== null) {
    const s = mt[1]
    if (
      s.includes(' ') &&
      !/(?:https?:|#[0-9a-f]{3}|\\n|className|fontFamily|fontSize|rgba|clamp|serif|sans-serif|px[;,)]|\.tsx|\.md)/.test(s)
    ) chunks.push(s)
  }

  // Named schema/metadata fields that should be prose
  const schemaRe = /(?:description|headline|name|answer|text|content):\s*['"`]([^'"`\n]{20,})['"`]/g
  while ((mt = schemaRe.exec(source)) !== null) chunks.push(mt[1])

  return chunks.join(' ')
}

// Strip HTML entities before tokenising (prevents &mdash; → "mdash" etc.)
const prose  = extractProse(src).replace(/&[a-z]+;/gi, ' ')
const tokens = prose.match(/[a-zA-Z]+(?:'[a-zA-Z]+)*/g) ?? []

// Check a word: handles inflected forms by stripping common suffixes
function isKnown(word) {
  const lc = word.toLowerCase()
  if (dictWords.has(lc) || customWords.has(lc)) return true
  // Try stripping inflections and possessives
  const variants = [
    lc.replace(/'s$/, ''),
    lc.replace(/n't$/, ''),
    lc.replace(/ing$/, ''),
    lc.replace(/ing$/, 'e'),
    lc.replace(/ings$/, ''),
    lc.replace(/tion$/, 'te'),
    lc.replace(/tions$/, 'te'),
    lc.replace(/ly$/, ''),
    lc.replace(/ly$/, 'le'),
    lc.replace(/ily$/, 'y'),
    lc.replace(/ied$/, 'y'),
    lc.replace(/ies$/, 'y'),
    lc.replace(/ed$/, ''),
    lc.replace(/ed$/, 'e'),
    lc.replace(/([a-z])\1ed$/, '$1'),   // doubled consonant: flagged → flag
    lc.replace(/er$/, ''),
    lc.replace(/er$/, 'e'),
    lc.replace(/ers$/, ''),
    lc.replace(/est$/, ''),
    lc.replace(/est$/, 'e'),
    lc.replace(/ness$/, ''),
    lc.replace(/ment$/, ''),
    lc.replace(/ments$/, ''),
    lc.replace(/ful$/, ''),
    lc.replace(/less$/, ''),
    lc.replace(/s$/, ''),
  ]
  return variants.some(v => v !== lc && (dictWords.has(v) || customWords.has(v)))
}

if (dictWords.size === 0) {
  log.warn('System dictionary not found at /usr/share/dict/words — spell check skipped')
  advisoryCount++
} else {
  const unknown = new Set()

  for (const token of tokens) {
    if (token.length <= 2) continue
    if (/^[A-Z]{2,}$/.test(token)) continue  // ALL-CAPS abbreviation (PSW, GTA, etc.)
    if (/^\d/.test(token)) continue            // starts with digit
    if (!isKnown(token)) unknown.add(token)
  }

  if (unknown.size === 0) {
    log.pass(`No unrecognized words (${tokens.length} tokens checked)`)
  } else {
    log.warn(`${unknown.size} unrecognized word(s) — add to scripts/dictionary.txt if correct:`)
    const sorted = [...unknown].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    for (let i = 0; i < sorted.length; i += 6) {
      log.info(sorted.slice(i, i + 6).join('  '))
    }
    advisoryCount += unknown.size
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// 4. GRAMMAR (advisory)
// ══════════════════════════════════════════════════════════════════════════════
log.head('4. GRAMMAR (advisory)')

// Split into sentences on . ! ? followed by a capital letter or end of string
// Filter out schema keyword strings (contain 3+ commas — not prose)
const sentences = prose
  .replace(/\s+/g, ' ')
  .split(/(?<=[.!?])\s+(?=[A-Z"'])/)
  .map(s => s.trim())
  .filter(s => s.length > 0)
  .filter(s => (s.match(/,/g) ?? []).length < 4)

let longCount = 0, weakCount = 0

for (const sentence of sentences) {
  const wordCount = sentence.split(/\s+/).length

  if (wordCount > 40) {
    log.warn(`Run-on sentence (${wordCount} words): "${sentence.slice(0, 100)}…"`)
    longCount++
    advisoryCount++
  }

  // Common AI/passive opener patterns
  if (/^\s*(It\s+is\b|It\s+was\b|It\s+has\b|There\s+is\b|There\s+are\b|There\s+were\b|There\s+has\b)/i.test(sentence)) {
    log.warn(`Weak opener — "${sentence.slice(0, 90)}"`)
    weakCount++
    advisoryCount++
  }
}

if (longCount === 0) log.pass('No run-on sentences (>40 words)')
if (weakCount === 0) log.pass('No weak "It is / There is" openers')

// ══════════════════════════════════════════════════════════════════════════════
// SUMMARY
// ══════════════════════════════════════════════════════════════════════════════
log.head('SUMMARY')

const bCol = blockingCount  === 0 ? C.green  : C.red
const aCol = advisoryCount  === 0 ? C.green  : C.yellow

console.log(`  Blocking issues:   ${bCol}${blockingCount}${C.reset}`)
console.log(`  Advisory warnings: ${aCol}${advisoryCount}${C.reset}`)

if (exitCode === 0) {
  console.log(`\n${C.green}${C.bold}PASS${C.reset} — article is ready to commit\n`)
} else {
  console.log(`\n${C.red}${C.bold}FAIL${C.reset} — fix blocking issues before committing\n`)
}

process.exit(exitCode)
