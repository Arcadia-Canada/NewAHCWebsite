#!/usr/bin/env node
/**
 * scripts/repo-inventory.mjs
 *
 * READ-ONLY repository inventory. Produces a single markdown report at
 * docs/.cache/REPO-INVENTORY-REPORT.md mapping what physically exists in
 * the repo, so a docs/governance restructure is built on verified facts.
 *
 * - Node.js built-ins only (node:fs, node:path, node:url).
 * - Changes nothing except the one report file (creates docs/.cache/ if needed).
 * - Never throws on a missing path; notes it and continues.
 * - Always exits 0.
 *
 * Usage: node scripts/repo-inventory.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const APP = path.join(ROOT, 'app')
const DOCS = path.join(ROOT, 'docs')

// ── Safe filesystem helpers (never throw) ──────────────────────────────────────
const exists = (p) => {
  try { return fs.existsSync(p) } catch { return false }
}
const isDir = (p) => {
  try { return fs.statSync(p).isDirectory() } catch { return false }
}
const read = (p) => {
  try { return fs.readFileSync(p, 'utf8') } catch { return null }
}
const lineCount = (p) => {
  const t = read(p)
  if (t === null) return 0
  return t.split('\n').length
}
const listDir = (p) => {
  try { return fs.readdirSync(p) } catch { return [] }
}

function walk(dir, filterFn) {
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
      } else if (!filterFn || filterFn(full)) {
        out.push(full)
      }
    }
  }
  return out
}

const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/')

// route from an app/.../page.tsx path: strip app/ and /page.tsx, add slashes
function routeOf(pageFile) {
  let r = path.relative(APP, pageFile).split(path.sep).join('/')
  r = r.replace(/\/?page\.tsx$/, '')
  if (r === '') return '/'
  return `/${r}/`
}

// Resolve a route to a page.tsx, allowing literal-first then [dynamic] folders.
// Returns { status: 'RESOLVES' | 'RESOLVES-DYNAMIC' | 'DEAD' }
function resolveRoute(route) {
  const clean = route.split('#')[0].split('?')[0]
  const segs = clean.split('/').filter(Boolean)
  let cur = APP
  let usedDynamic = false
  for (const seg of segs) {
    const literal = path.join(cur, seg)
    if (isDir(literal)) {
      cur = literal
      continue
    }
    // look for a dynamic [param] folder
    const dyn = listDir(cur).find((e) => /^\[.+\]$/.test(e) && isDir(path.join(cur, e)))
    if (dyn) {
      cur = path.join(cur, dyn)
      usedDynamic = true
      continue
    }
    return { status: 'DEAD' }
  }
  if (exists(path.join(cur, 'page.tsx')) || exists(path.join(cur, 'page.ts'))) {
    return { status: usedDynamic ? 'RESOLVES-DYNAMIC' : 'RESOLVES' }
  }
  return { status: 'DEAD' }
}

// Extract internal href targets (Link/a) from source, starting with '/'
function extractHrefs(src) {
  const hrefs = []
  const re = /href=(?:"(\/[^"#?\s]*?)"|'(\/[^'#?\s]*?)'|\{(?:"(\/[^"#?\s]*?)"|'(\/[^'#?\s]*?)')\})/g
  let m
  while ((m = re.exec(src)) !== null) {
    hrefs.push(m[1] ?? m[2] ?? m[3] ?? m[4])
  }
  return hrefs
}

// Parse a cluster hub's `articles` array → [{ href, status, title }]
function parseHubArticles(hubSrc) {
  if (!hubSrc) return []
  const start = hubSrc.indexOf('const articles')
  if (start === -1) return []
  const open = hubSrc.indexOf('[', start)
  if (open === -1) return []
  // find matching close bracket
  let depth = 0, end = -1
  for (let i = open; i < hubSrc.length; i++) {
    if (hubSrc[i] === '[') depth++
    else if (hubSrc[i] === ']') { depth--; if (depth === 0) { end = i; break } }
  }
  if (end === -1) return []
  const block = hubSrc.slice(open, end + 1)
  const entries = []
  // split into object literals
  const objRe = /\{([^{}]*)\}/g
  let m
  while ((m = objRe.exec(block)) !== null) {
    const body = m[1]
    const href = (body.match(/href:\s*['"](\/[^'"]+)['"]/) || [])[1]
    const status = (body.match(/status:\s*['"]?(live|coming)['"]?/) || [])[1]
    const title = (body.match(/title:\s*['"]([^'"]+)['"]/) || [])[1]
    if (href) entries.push({ href, status: status || 'unknown', title: title || '' })
  }
  return entries
}

const out = []
const w = (s = '') => out.push(s)

// Totals collected for the footer
const totals = {
  articles: 0,
  hubs: 0,
  services: 0,
  conditions: 0,
  locations: 0,
  howCareStarts: 0,
  other: 0,
  docs: 0,
  scripts: 0,
  deadLinks: 0,
  comingSoonLinks: 0,
  emDashFiles: 0,
  orphanDocs: 0,
  orphanArticles: 0,
  brokenHubs: 0,
  staleStubs: 0,
}

// ── Gather all app page.tsx files once ──────────────────────────────────────────
const pageFiles = walk(APP, (f) => f.endsWith('page.tsx') || f.endsWith('page.ts'))

function classify(route) {
  const segs = route.split('/').filter(Boolean)
  if (segs[0] === 'resources') {
    if (segs.length === 1) return 'resources-hub'
    if (segs.length === 2) return 'resources-cluster-hub'
    return 'resources-article'
  }
  if (segs[0] === 'our-services') return segs.length <= 1 ? 'other' : 'service'
  if (segs[0] === 'conditions') return segs.length <= 1 ? 'other' : 'condition'
  if (segs[0] === 'locations') return segs.length <= 1 ? 'other' : 'location'
  if (segs[0] === 'how-care-starts') return segs.length <= 1 ? 'other' : 'how-care-starts'
  return 'other'
}

w('# Repository Inventory Report')
w('')
w('Read-only scan of the local working tree. Generated by `scripts/repo-inventory.mjs`.')
w('')

// ════════════════════════════════════════════════════════════════════════════════
// SECTION 1: CONTENT INVENTORY
// ════════════════════════════════════════════════════════════════════════════════
w('## Section 1 — Content Inventory')
w('')

const articleRows = []
const hubArticleHrefs = {} // cluster → Set(hrefs)

// Pre-index cluster hubs and their article hrefs
for (const pf of pageFiles) {
  const route = routeOf(pf)
  if (classify(route) === 'resources-cluster-hub') {
    const cluster = route.split('/').filter(Boolean)[1]
    const hrefs = new Set(parseHubArticles(read(pf)).map((e) => e.href.replace(/\/$/, '')))
    hubArticleHrefs[cluster] = hrefs
  }
}

const byType = {}
for (const pf of pageFiles) {
  const route = routeOf(pf)
  const type = classify(route)
  byType[type] = (byType[type] || 0) + 1
}

w('### All routes')
w('')
w('| Route | Type | File |')
w('|---|---|---|')
for (const pf of pageFiles.slice().sort((a, b) => routeOf(a).localeCompare(routeOf(b)))) {
  const route = routeOf(pf)
  w(`| \`${route}\` | ${classify(route)} | \`${rel(pf)}\` |`)
}
w('')

// Resource articles: MATCHED / ORPHAN / HUB-MISSING
w('### Resource articles vs. cluster hub listing')
w('')
w('| Article route | Cluster | Hub linkage |')
w('|---|---|---|')
for (const pf of pageFiles) {
  const route = routeOf(pf)
  if (classify(route) !== 'resources-article') continue
  totals.articles++
  const segs = route.split('/').filter(Boolean)
  const cluster = segs[1]
  const hubFile = path.join(APP, 'resources', cluster, 'page.tsx')
  let linkage
  if (!exists(hubFile)) linkage = 'HUB-MISSING'
  else if ((hubArticleHrefs[cluster] || new Set()).has(route.replace(/\/$/, ''))) linkage = 'MATCHED'
  else { linkage = 'ORPHAN'; totals.orphanArticles++ }
  articleRows.push({ route, cluster, linkage })
  const flag = linkage === 'MATCHED' ? linkage : `**${linkage}**`
  w(`| \`${route}\` | ${cluster} | ${flag} |`)
}
w('')

totals.hubs = byType['resources-cluster-hub'] || 0
totals.services = byType['service'] || 0
totals.conditions = byType['condition'] || 0
totals.locations = byType['location'] || 0
totals.howCareStarts = byType['how-care-starts'] || 0
totals.other = byType['other'] || 0

w('### Counts')
w('')
w(`- Resource articles: **${totals.articles}**`)
w(`- Resource cluster hubs: **${totals.hubs}**`)
w(`- Service pages: **${totals.services}**`)
w(`- Condition pages: **${totals.conditions}**`)
w(`- Location pages: **${totals.locations}**`)
w(`- How-care-starts pages: **${totals.howCareStarts}**`)
w(`- Other / hub / top-level pages: **${totals.other}**`)
w(`- Total \`page.tsx\` files: **${pageFiles.length}**`)
if (totals.orphanArticles > 0) w(`- ⚠️ **ORPHAN articles (exist but not listed on hub): ${totals.orphanArticles}**`)
w('')

// ════════════════════════════════════════════════════════════════════════════════
// SECTION 2: CLUSTER HUB STATE
// ════════════════════════════════════════════════════════════════════════════════
w('## Section 2 — Cluster Hub State')
w('')

const comingSoonTargets = new Set() // hrefs flagged coming / stale-stub

for (const pf of pageFiles) {
  const route = routeOf(pf)
  if (classify(route) !== 'resources-cluster-hub') continue
  const cluster = route.split('/').filter(Boolean)[1]
  const entries = parseHubArticles(read(pf))
  w(`### \`${route}\``)
  w('')
  if (entries.length === 0) {
    w('_No `articles` array found (placeholder hub or no listed articles)._')
    w('')
    continue
  }
  w('| Article | Status | File check |')
  w('|---|---|---|')
  for (const e of entries) {
    const slugSegs = e.href.replace(/^\/|\/$/g, '').split('/')
    const articleFile = path.join(APP, ...slugSegs, 'page.tsx')
    const fileThere = exists(articleFile)
    let flag
    if (e.status === 'live' && !fileThere) { flag = '**BROKEN (live, no file)**'; totals.brokenHubs++ }
    else if (e.status === 'coming' && fileThere) { flag = '**STALE-STUB (coming, file exists)**'; totals.staleStubs++; comingSoonTargets.add(e.href.replace(/\/$/, '')) }
    else if (e.status === 'live' && fileThere) flag = 'OK'
    else { flag = 'COMING (no file, expected)'; comingSoonTargets.add(e.href.replace(/\/$/, '')) }
    w(`| ${e.title || e.href} | \`${e.status}\` | ${flag} |`)
  }
  w('')
}

if (totals.brokenHubs === 0 && totals.staleStubs === 0) {
  w('_No BROKEN or STALE-STUB hub entries detected._')
  w('')
}

// ════════════════════════════════════════════════════════════════════════════════
// SECTION 3: INTERNAL LINK GRAPH
// ════════════════════════════════════════════════════════════════════════════════
w('## Section 3 — Internal Link Graph')
w('')

const inbound = new Map() // target → Set(source routes)
for (const pf of pageFiles) {
  const srcRoute = routeOf(pf)
  const src = read(pf)
  if (!src) continue
  for (const href of new Set(extractHrefs(src))) {
    if (!inbound.has(href)) inbound.set(href, new Set())
    inbound.get(href).add(srcRoute)
  }
}

const targets = [...inbound.keys()].sort()
const dead = []
const comingLinks = []
const resolveCache = {}

w('| Target | Inbound | Resolution |')
w('|---|---:|---|')
for (const t of targets) {
  const count = inbound.get(t).size
  const norm = t.replace(/\/$/, '')
  const res = (resolveCache[t] ||= resolveRoute(t))
  let resLabel = res.status
  if (res.status === 'DEAD') { dead.push(t); resLabel = '**DEAD**' }
  if (comingSoonTargets.has(norm)) { comingLinks.push(t); resLabel += ' · **COMING-SOON-LINK**' }
  w(`| \`${t}\` | ${count} | ${resLabel} |`)
}
w('')

totals.deadLinks = dead.length
totals.comingSoonLinks = comingLinks.length

w('### Linking-rule violations')
w('')
if (dead.length === 0 && comingLinks.length === 0) {
  w('_None detected._')
} else {
  if (dead.length) {
    w(`**DEAD link targets (${dead.length}):**`)
    for (const d of dead) w(`- \`${d}\` (linked from ${inbound.get(d).size} page(s))`)
    w('')
  }
  if (comingLinks.length) {
    w(`**COMING-SOON link targets (${comingLinks.length}):**`)
    for (const c of comingLinks) w(`- \`${c}\` (linked from ${inbound.get(c).size} page(s))`)
  }
}
w('')

// ════════════════════════════════════════════════════════════════════════════════
// SECTION 4: DOCS INVENTORY
// ════════════════════════════════════════════════════════════════════════════════
w('## Section 4 — Docs Inventory')
w('')

const aiContext = read(path.join(ROOT, 'AI-CONTEXT.md')) || ''
const cursorRules = read(path.join(ROOT, '.cursorrules')) || ''
const packReadme = read(path.join(DOCS, 'GOVERNANCE-PACK-README.md')) || ''

// docs/ top-level + one subdir deep
const docFiles = []
for (const entry of listDir(DOCS)) {
  const full = path.join(DOCS, entry)
  if (isDir(full)) {
    for (const sub of listDir(full)) {
      if (sub.endsWith('.md')) docFiles.push(path.join(full, sub))
    }
  } else if (entry.endsWith('.md')) {
    docFiles.push(full)
  }
}
docFiles.sort()

w('| Doc | Lines | AI-CONTEXT | .cursorrules | PACK-README | Flag |')
w('|---|---:|:---:|:---:|:---:|---|')
for (const df of docFiles) {
  totals.docs++
  const base = path.basename(df)
  const inAi = aiContext.includes(base)
  const inRules = cursorRules.includes(base)
  const inPack = packReadme.includes(base)
  const orphan = !inAi && !inRules && !inPack
  if (orphan) totals.orphanDocs++
  w(`| \`${rel(df)}\` | ${lineCount(df)} | ${inAi ? 'Y' : '·'} | ${inRules ? 'Y' : '·'} | ${inPack ? 'Y' : '·'} | ${orphan ? '**ORPHAN-DOC**' : ''} |`)
}
w('')

// ════════════════════════════════════════════════════════════════════════════════
// SECTION 5: CURSOR + CONTROL-PLANE INVENTORY
// ════════════════════════════════════════════════════════════════════════════════
w('## Section 5 — Cursor + Control-Plane Inventory')
w('')

function firstLines(p, n = 20) {
  const t = read(p)
  if (t === null) return ''
  return t.split('\n').slice(0, n).join(' ').replace(/\s+/g, ' ').slice(0, 140)
}

function reportFile(label, p, note) {
  if (exists(p)) {
    w(`- **${label}**: EXISTS (${lineCount(p)} lines) — ${note || firstLines(p)}`)
    return true
  }
  w(`- **${label}**: MISSING`)
  return false
}

reportFile('AI-CONTEXT.md', path.join(ROOT, 'AI-CONTEXT.md'))
reportFile('.cursorrules', path.join(ROOT, '.cursorrules'))
reportFile('.cursorignore', path.join(ROOT, '.cursorignore'))

// .cursor/ directory
w('- **.cursor/ directory**:')
const cursorDir = path.join(ROOT, '.cursor')
if (!isDir(cursorDir)) {
  w('  - MISSING')
} else {
  const cfiles = walk(cursorDir, () => true)
  if (cfiles.length === 0) w('  - (empty)')
  for (const cf of cfiles.sort()) w(`  - \`${rel(cf)}\` (${lineCount(cf)} lines)`)
}

// package.json scripts
const pkgRaw = read(path.join(ROOT, 'package.json'))
if (pkgRaw) {
  let keys = []
  try { keys = Object.keys((JSON.parse(pkgRaw).scripts) || {}) } catch { keys = [] }
  w(`- **package.json**: EXISTS — scripts: ${keys.length ? keys.map((k) => `\`${k}\``).join(', ') : '(none)'}`)
} else {
  w('- **package.json**: MISSING')
}

// next.config.*
const nextCfg = ['next.config.ts', 'next.config.mjs', 'next.config.js'].filter((f) => exists(path.join(ROOT, f)))
w(`- **next.config**: ${nextCfg.length ? nextCfg.map((f) => `\`${f}\``).join(', ') + ' EXISTS' : 'MISSING'}`)

reportFile('vercel.json', path.join(ROOT, 'vercel.json'), 'Vercel config (redirects/headers)')
reportFile('redirects.json', path.join(ROOT, 'redirects.json'), 'redirect reference/backup')
reportFile('tsconfig.json', path.join(ROOT, 'tsconfig.json'), 'TypeScript config')

// sitemap.ts + route count (generated dynamically from filesystem)
const sitemapFile = path.join(APP, 'sitemap.ts')
if (exists(sitemapFile)) {
  const staticRoutes = pageFiles
    .map(routeOf)
    .filter((r) => !r.includes('['))
  const uniqueStatic = new Set(staticRoutes)
  const customMatches = (read(sitemapFile).match(/["'`]\/[a-z0-9\-/]+["'`]/gi) || []).length
  w(`- **app/sitemap.ts**: EXISTS (${lineCount(sitemapFile)} lines) — routes generated dynamically from the filesystem; ~${uniqueStatic.size} static page routes + ${customMatches} hardcoded custom-route literals`)
} else {
  w('- **app/sitemap.ts**: MISSING')
}

// scripts/ directory
w('- **scripts/ directory**:')
const scriptDir = path.join(ROOT, 'scripts')
const scriptFiles = walk(scriptDir, () => true).sort()
totals.scripts = scriptFiles.filter((f) => /\.(mjs|js|ts|py)$/.test(f)).length
if (scriptFiles.length === 0) w('  - (empty or missing)')
for (const sf of scriptFiles) w(`  - \`${rel(sf)}\` (${lineCount(sf)} lines)`)
w('')

// Referenced-but-missing control files
w('### Referenced-but-missing check')
w('')
const refMissing = []
const controlRefs = [
  ['.cursorrules', path.join(ROOT, '.cursorrules')],
  ['AI-CONTEXT.md', path.join(ROOT, 'AI-CONTEXT.md')],
  ['vercel.json', path.join(ROOT, 'vercel.json')],
  ['redirects.json', path.join(ROOT, 'redirects.json')],
]
const refCorpus = aiContext + '\n' + cursorRules + '\n' + packReadme
for (const [name, p] of controlRefs) {
  if (refCorpus.includes(name) && !exists(p)) refMissing.push(name)
}
if (refMissing.length === 0) w('_No control-plane files are referenced-but-missing._')
else for (const r of refMissing) w(`- **MISSING but referenced**: \`${r}\``)
w('')

// ════════════════════════════════════════════════════════════════════════════════
// SECTION 6: DUPLICATION SIGNALS
// ════════════════════════════════════════════════════════════════════════════════
w('## Section 6 — Duplication Signals')
w('')

const keywordDocs = []
const inventoryDocs = []
const urlListDocs = []

for (const df of docFiles) {
  const t = read(df) || ''
  const lines = t.split('\n')
  let hasKeywordTable = false
  let hasInventoryTable = false
  for (const line of lines) {
    if (!line.trim().startsWith('|')) continue
    if (/keyword/i.test(line)) hasKeywordTable = true
    if (/status|published|coming|net new/i.test(line) && /\b(url|slug|href)\b/i.test(line)) hasInventoryTable = true
  }
  // inventory: status-like table header + presence of inventory status words in body
  if (!hasInventoryTable && /\|.*status.*\|/i.test(t) && /(net new|coming soon|published)/i.test(t)) hasInventoryTable = true
  const urlHits = (t.match(/\/(our-services|conditions|how-care-starts)\//g) || []).length
  if (hasKeywordTable) keywordDocs.push(rel(df))
  if (hasInventoryTable) inventoryDocs.push(rel(df))
  if (urlHits >= 3) urlListDocs.push(rel(df))
}

w('**Docs containing a keyword-column table (possible Reserved-Keywords duplication):**')
w('')
if (keywordDocs.length) keywordDocs.forEach((d) => w(`- \`${d}\``)); else w('_None._')
w('')
w('**Docs containing an article-inventory table (URL/slug + status):**')
w('')
if (inventoryDocs.length) inventoryDocs.forEach((d) => w(`- \`${d}\``)); else w('_None._')
w('')
w('**Docs containing service/condition/decision URL lists (3+ link targets):**')
w('')
if (urlListDocs.length) urlListDocs.forEach((d) => w(`- \`${d}\``)); else w('_None._')
w('')

// ════════════════════════════════════════════════════════════════════════════════
// SECTION 7: CLEANLINESS FLAGS
// ════════════════════════════════════════════════════════════════════════════════
w('## Section 7 — Cleanliness Flags')
w('')

const emDashFiles = []
const lovedOneFiles = []
const selfLinkFiles = []
const noSchemaFiles = []

for (const pf of pageFiles) {
  const src = read(pf)
  if (src === null) continue
  const route = routeOf(pf)
  const lines = src.split('\n')

  // em dash
  const emLines = []
  lines.forEach((l, i) => { if (l.includes('\u2014')) emLines.push(i + 1) })
  if (emLines.length) emDashFiles.push({ route, file: rel(pf), lines: emLines })

  // loved one
  if (/loved one/i.test(src)) lovedOneFiles.push(rel(pf))

  // self link (Link/a href === own route; breadcrumb schema uses item:, not href=)
  if (extractHrefs(src).some((h) => h.replace(/\/$/, '') === route.replace(/\/$/, ''))) {
    selfLinkFiles.push({ route, file: rel(pf) })
  }

  // missing schema
  if (!src.includes('application/ld+json')) noSchemaFiles.push(rel(pf))
}

totals.emDashFiles = emDashFiles.length

w('### Em dash (U+2014) in app pages')
w('')
if (emDashFiles.length === 0) w('_None._')
else for (const e of emDashFiles) w(`- **\`${e.file}\`** — lines ${e.lines.join(', ')}`)
w('')

w('### "loved one" phrase in app pages')
w('')
if (lovedOneFiles.length === 0) w('_None._')
else for (const f of lovedOneFiles) w(`- **\`${f}\`**`)
w('')

w('### Self-linking pages')
w('')
if (selfLinkFiles.length === 0) w('_None._')
else for (const s of selfLinkFiles) w(`- **\`${s.file}\`** links to its own route \`${s.route}\``)
w('')

w('### Pages missing JSON-LD schema block')
w('')
if (noSchemaFiles.length === 0) w('_None._')
else for (const f of noSchemaFiles) w(`- **\`${f}\`**`)
w('')

// ════════════════════════════════════════════════════════════════════════════════
// FOOTER
// ════════════════════════════════════════════════════════════════════════════════
w('## Report Footer')
w('')
w(`- Scan timestamp: ${new Date().toISOString()}`)
w('- Totals:')
w(`  - Articles: ${totals.articles} · Cluster hubs: ${totals.hubs} · Services: ${totals.services} · Conditions: ${totals.conditions} · Locations: ${totals.locations}`)
w(`  - Docs: ${totals.docs} · Scripts: ${totals.scripts}`)
w(`  - **Dead links: ${totals.deadLinks}** · **Coming-soon links: ${totals.comingSoonLinks}** · **Orphan articles: ${totals.orphanArticles}** · **Broken hubs: ${totals.brokenHubs}** · **Stale stubs: ${totals.staleStubs}**`)
w(`  - **Em-dash files: ${totals.emDashFiles}** · **Orphan docs: ${totals.orphanDocs}**`)
w('')
w('> This scan reflects the local working tree only. It does not verify what is deployed to production. Live-site state must be checked separately.')
w('')

// ── Write report (the only file this script creates) ───────────────────────────
const cacheDir = path.join(DOCS, '.cache')
try {
  if (!exists(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true })
  const outFile = path.join(cacheDir, 'REPO-INVENTORY-REPORT.md')
  fs.writeFileSync(outFile, out.join('\n'), 'utf8')
  console.log(`Report written: ${rel(outFile)}`)
  console.log(
    `Articles ${totals.articles} · Hubs ${totals.hubs} · Docs ${totals.docs} · ` +
    `Dead links ${totals.deadLinks} · Em-dash files ${totals.emDashFiles} · Orphan docs ${totals.orphanDocs}`
  )
} catch (e) {
  console.log(`Could not write report: ${String(e && e.message || e)}`)
}

process.exit(0)
