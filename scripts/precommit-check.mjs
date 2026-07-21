#!/usr/bin/env node
/**
 * scripts/precommit-check.mjs
 *
 * The prevention layer. Runs on staged files before every commit so the
 * backlogs (em dashes, banned phrases, unreserved keywords) never re-accumulate.
 *
 * Install once per clone:  npm run hooks:install
 * Run manually:            npm run precommit
 *
 * Checks, in order:
 *   1. Em dash (U+2014) in site copy                     — BLOCKING
 *   2. Banned phrase "loved one"                         — BLOCKING
 *   3. Discouraged "seniors" / "elderly" as nouns        — advisory
 *   4. Cross-site keyword collision                      — BLOCKING
 *   5. Unreserved new content route                      — advisory
 *   6. Stale keyword cache                               — advisory
 *
 * Exit 0 = commit proceeds (advisories printed)
 * Exit 1 = commit blocked
 *
 * Scope: only files staged for commit, and only site copy for the text checks.
 * Governance docs under docs/ are exempt from the em dash rule, since the rule
 * is about published copy, not internal prose.
 *
 * HONEST LIMITATION: `git commit --no-verify` bypasses this, and nothing in a
 * local hook can prevent that. Treat this as the fast feedback loop, not the
 * enforcement boundary. The real gate is CI running `npm run precommit` against
 * the pushed branch. See docs/PRECOMMIT-HOOK.md.
 */

import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// ── ANSI helpers, matching validate-article.mjs ───────────────────────────────
const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
}

const log = {
  head: (s) => console.log(`\n${C.bold}${C.cyan}── ${s} ──${C.reset}`),
  pass: (s) => console.log(`${C.green}✓${C.reset} ${s}`),
  fail: (s) => console.log(`${C.red}✗${C.reset} ${C.bold}${s}${C.reset}`),
  warn: (s) => console.log(`${C.yellow}⚠${C.reset} ${s}`),
  info: (s) => console.log(`${C.dim}  ${s}${C.reset}`),
}

let blocking = 0
let advisory = 0

// ── Which site is this repo? ──────────────────────────────────────────────────
// Owner codes match the Sheet's "Owner Site" column.
const SITE_BY_PKG = {
  'arcadia-health-alliance': 'AHA',
  'arcadia-home-care': 'HC',
  'arcadia-rehab': 'REHAB',
  homecare: 'ECC',
}

function detectSite() {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'))
    return SITE_BY_PKG[pkg.name] ?? null
  } catch {
    return null
  }
}

const SITE = detectSite()

// ── Staged files ──────────────────────────────────────────────────────────────
/**
 * Git reports staged paths relative to the repository root, which is not always
 * the package root. Rehab is the case that matters: its git root is the parent
 * directory and the app lives in `arcadia-rehab/`, so every staged path arrives
 * prefixed. Without stripping it, no file matches the copy or route patterns and
 * the hook silently passes everything.
 */
const PREFIX = (() => {
  try {
    return execSync('git rev-parse --show-prefix', { cwd: ROOT, encoding: 'utf8' }).trim()
  } catch {
    return ''
  }
})()

/** Package-relative path -> repository-relative path, for git plumbing. */
const toRepoPath = (file) => PREFIX + file

function stagedFiles() {
  try {
    const out = execSync('git diff --cached --name-only --diff-filter=ACM', {
      cwd: ROOT,
      encoding: 'utf8',
    })
    return out
      .split('\n')
      .filter(Boolean)
      // Ignore anything staged outside this package (sibling packages in the
      // same repo are not ours to validate).
      .filter((f) => !PREFIX || f.startsWith(PREFIX))
      .map((f) => (PREFIX ? f.slice(PREFIX.length) : f))
      .filter(Boolean)
  } catch {
    return []
  }
}

/** Site copy: the files whose text reaches a reader. */
function isCopy(file) {
  if (!/\.(tsx|mdx)$/.test(file)) return false
  return /^(app|src\/app|components|src\/components)\//.test(file)
}

/** A content route page, e.g. app/resources/cluster/slug/page.tsx */
function isContentPage(file) {
  return /^(app|src\/app)\/.+\/page\.tsx$/.test(file)
}

/** app/resources/x/y/page.tsx -> /resources/x/y/ */
function routeOf(file) {
  const rel = file.replace(/^(src\/)?app\//, '').replace(/\/page\.tsx$/, '')
  // Route groups like (marketing) are not part of the URL.
  const segments = rel.split('/').filter((s) => !/^\(.*\)$/.test(s))
  return '/' + (segments.length ? segments.join('/') + '/' : '')
}

function readStaged(file) {
  // Read the staged blob, not the working tree, so partial staging is respected.
  try {
    return execSync(`git show :${JSON.stringify(toRepoPath(file))}`, {
      cwd: ROOT,
      encoding: 'utf8',
      maxBuffer: 20 * 1024 * 1024,
    })
  } catch {
    try {
      return fs.readFileSync(path.join(ROOT, file), 'utf8')
    } catch {
      return ''
    }
  }
}

const files = stagedFiles()

if (files.length === 0) {
  console.log(`${C.dim}No staged files. Nothing to check.${C.reset}`)
  process.exit(0)
}

const copyFiles = files.filter(isCopy)

console.log(
  `${C.bold}Arcadia pre-commit${C.reset} ${C.dim}(site: ${SITE ?? 'unknown'}, ` +
    `${files.length} staged, ${copyFiles.length} copy)${C.reset}`,
)

// ══════════════════════════════════════════════════════════════════════════════
// 1 & 2 & 3. TEXT RULES
// ══════════════════════════════════════════════════════════════════════════════
log.head('Copy rules')

const EM_DASH = '—'

/**
 * Discouraged rather than banned. These terms are load-bearing in Rehab's live
 * slugs and in reserved keywords in the Sheet ("light housekeeping for seniors
 * toronto"), so blocking them would fail almost every Rehab commit and the hook
 * would simply get bypassed. Flagged so the choice stays deliberate.
 */
const DISCOURAGED = [
  { re: /\bseniors?\b/gi, label: '"senior(s)"', hint: 'prefer "older adults"' },
  { re: /\belderly\b/gi, label: '"elderly"', hint: 'prefer "older adults"' },
]

let textClean = true

for (const file of copyFiles) {
  const src = readStaged(file)
  const lines = src.split('\n')

  lines.forEach((line, i) => {
    const n = i + 1

    if (line.includes(EM_DASH)) {
      log.fail(`${file}:${n} em dash`)
      log.info(line.trim().slice(0, 110))
      blocking++
      textClean = false
    }

    if (/\bloved ones?\b/i.test(line)) {
      log.fail(`${file}:${n} banned phrase "loved one"`)
      log.info(line.trim().slice(0, 110))
      blocking++
      textClean = false
    }

    for (const d of DISCOURAGED) {
      d.re.lastIndex = 0
      // Ignore matches inside URLs, slugs, and import paths, where the term is
      // usually a reserved keyword rather than reader-facing copy.
      const stripped = line.replace(/https?:\/\/\S+|['"`]\/[^'"`]*['"`]|from\s+['"][^'"]+['"]/g, '')
      if (d.re.test(stripped)) {
        log.warn(`${file}:${n} ${d.label}, ${d.hint}`)
        advisory++
        textClean = false
      }
    }
  })
}

if (textClean) log.pass('No em dashes, banned phrases, or discouraged terms')

// ══════════════════════════════════════════════════════════════════════════════
// 4 & 5. KEYWORD OWNERSHIP
// ══════════════════════════════════════════════════════════════════════════════
log.head('Keyword ownership')

const CACHE = path.join(ROOT, 'docs', '.cache', 'keywords.csv')

/** Minimal CSV row splitter that respects double-quoted fields. */
function splitCsvRow(row) {
  const out = []
  let cur = ''
  let inQuotes = false
  for (let i = 0; i < row.length; i++) {
    const ch = row[i]
    if (ch === '"') {
      if (inQuotes && row[i + 1] === '"') {
        cur += '"'
        i++
      } else inQuotes = !inQuotes
    } else if (ch === ',' && !inQuotes) {
      out.push(cur)
      cur = ''
    } else cur += ch
  }
  out.push(cur)
  return out
}

function loadLedger() {
  if (!fs.existsSync(CACHE)) return null
  const rows = fs
    .readFileSync(CACHE, 'utf8')
    .split('\n')
    .filter(Boolean)
    .slice(1) // header
    .map(splitCsvRow)
  return rows
    .map((r) => ({
      keyword: (r[0] ?? '').trim(),
      owner: (r[1] ?? '').trim().toUpperCase(),
      status: (r[2] ?? '').trim(),
      url: (r[3] ?? '').trim(),
    }))
    .filter((r) => r.keyword)
}

const ledger = loadLedger()
const stagedRoutes = files.filter(isContentPage).map((f) => ({ file: f, route: routeOf(f) }))

if (!ledger) {
  log.warn('No docs/.cache/keywords.csv. Run `npm run sync` to fetch the ledger.')
  advisory++
} else if (stagedRoutes.length === 0) {
  log.pass('No content routes staged')
} else {
  let collisions = 0
  let unreserved = 0

  for (const { file, route } of stagedRoutes) {
    // A row whose Live URL points at this route but is owned by another site is
    // a genuine cross-site collision: two sites claiming one page.
    const owningRows = ledger.filter((r) => r.url.includes(route) && route !== '/')
    const foreign = owningRows.filter((r) => SITE && r.owner && r.owner !== SITE)

    if (foreign.length) {
      for (const r of foreign) {
        log.fail(`${file} collides with ${r.owner}: "${r.keyword}"`)
        log.info(`route ${route} is reserved to ${r.owner} at ${r.url}`)
        blocking++
        collisions++
      }
    } else if (owningRows.length === 0) {
      log.warn(`${file} route ${route} is not reserved in the ledger`)
      advisory++
      unreserved++
    }
  }

  if (!collisions && !unreserved) log.pass(`${stagedRoutes.length} content route(s) reserved correctly`)

  if (unreserved) {
    log.info('Rule: no article gets a planned date until its keyword is in the Sheet')
    log.info('with the correct Owner Site. Reserve it, then re-run `npm run sync`.')
  }
}

// ── 6. Cache staleness ────────────────────────────────────────────────────────
const META = path.join(ROOT, 'docs', '.cache', 'sync-meta.json')
const STALE_DAYS = 7

if (fs.existsSync(META)) {
  try {
    const meta = JSON.parse(fs.readFileSync(META, 'utf8'))
    const ageDays = (Date.now() - new Date(meta.lastSync).getTime()) / 86_400_000
    if (ageDays > STALE_DAYS) {
      log.warn(`Keyword cache is ${Math.floor(ageDays)} days old. Run \`npm run sync\`.`)
      advisory++
    }
  } catch {
    /* malformed meta is not worth blocking a commit over */
  }
}

/**
 * Known gap, recorded rather than silently tolerated: as of 2026-07-20 the
 * Sheet holds ~45 HC rows, 3 Rehab rows and 0 ECC rows, while Rehab's local
 * 10-KEYWORD-OWNERSHIP.md lists roughly 30 more. A clean result from check 4
 * therefore does not prove a term is unclaimed on Rehab or ECC.
 */
if (ledger && (SITE === 'REHAB' || SITE === 'ECC')) {
  const own = ledger.filter((r) => r.owner === SITE).length
  if (own < 10) {
    log.warn(`Ledger holds only ${own} ${SITE} rows. Cross-check 10-KEYWORD-OWNERSHIP.md by hand.`)
    advisory++
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// SUMMARY
// ══════════════════════════════════════════════════════════════════════════════
console.log()
if (blocking > 0) {
  console.log(
    `${C.red}${C.bold}Commit blocked${C.reset} ${C.dim}(${blocking} blocking, ${advisory} advisory)${C.reset}`,
  )
  console.log(`${C.dim}Fix the ✗ items above, restage, and commit again.${C.reset}`)
  process.exit(1)
}

console.log(
  `${C.green}${C.bold}Checks passed${C.reset} ${C.dim}(${advisory} advisory)${C.reset}`,
)
process.exit(0)
