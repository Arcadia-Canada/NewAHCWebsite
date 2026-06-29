#!/usr/bin/env node
/**
 * scripts/sync-from-sheet.mjs
 *
 * Pulls the central Arcadia Google Sheet (Reserved Keywords + Content
 * Calendar tabs) into a local read-only cache under docs/.cache/ so Cursor
 * can consult current keyword reservations and calendar status without
 * needing network access mid-task.
 *
 * - Node built-ins only (node:fs, node:path, node:url, node:https).
 * - Read-only on the Sheet (published CSV endpoints, no auth, no write).
 * - Only writes files under docs/.cache/.
 * - Exit 0 only when BOTH tabs fetch + validate. Any network failure or
 *   validation failure (including a partial: one tab ok, one failed) exits 1
 *   and reports which tab failed.
 *
 * Usage: node scripts/sync-from-sheet.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CACHE_DIR = path.join(ROOT, 'docs', '.cache')

const SHEETS = {
  keywords: {
    label: 'Reserved Keywords',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQdM3gAjIqq-TuSwWI7KL9asvp_pyzwii6DKPwN-75qZn-wyAG-OFmekEsBQodgfQ/pub?gid=1572070477&single=true&output=csv',
    outFile: path.join(CACHE_DIR, 'keywords.csv'),
    expectedHeader: 'Keyword / Topic',
  },
  calendar: {
    label: 'Content Calendar',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQdM3gAjIqq-TuSwWI7KL9asvp_pyzwii6DKPwN-75qZn-wyAG-OFmekEsBQodgfQ/pub?gid=441274467&single=true&output=csv',
    outFile: path.join(CACHE_DIR, 'calendar.csv'),
    expectedHeader: 'Article Title',
  },
}

// Fetch a URL, following redirects explicitly (Google Sheets redirects once).
function fetchCsv(url, redirectsLeft = 6) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'arcadia-sheet-sync/1.0' } }, (res) => {
      const { statusCode, headers } = res
      if ([301, 302, 303, 307, 308].includes(statusCode)) {
        res.resume() // discard body
        if (redirectsLeft <= 0) return reject(new Error('too many redirects'))
        if (!headers.location) return reject(new Error(`redirect ${statusCode} with no Location header`))
        const next = new URL(headers.location, url).toString()
        return resolve(fetchCsv(next, redirectsLeft - 1))
      }
      if (statusCode !== 200) {
        res.resume()
        return reject(new Error(`HTTP ${statusCode}`))
      }
      let data = ''
      res.setEncoding('utf8')
      res.on('data', (c) => { data += c })
      res.on('end', () => resolve(data))
    })
    req.on('error', reject)
    req.setTimeout(30000, () => req.destroy(new Error('request timed out after 30s')))
  })
}

// Minimal CSV: split lines, split first line on commas. Strip BOM/quotes.
function firstHeader(csv) {
  const firstLine = csv.split(/\r?\n/)[0] || ''
  const firstCell = firstLine.split(',')[0] || ''
  return firstCell.replace(/^\uFEFF/, '').replace(/^"|"$/g, '').trim()
}
function dataRowCount(csv) {
  const lines = csv.split(/\r?\n/).filter((l) => l.trim() !== '')
  return Math.max(0, lines.length - 1)
}

async function main() {
  try {
    if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true })
  } catch (e) {
    console.error(`Could not create ${path.relative(ROOT, CACHE_DIR)}: ${e.message}`)
    process.exit(1)
  }

  const results = {}
  let failures = 0

  for (const [key, cfg] of Object.entries(SHEETS)) {
    try {
      const csv = await fetchCsv(cfg.url)
      // write raw CSV regardless of validation so the fetched data is preserved
      try { fs.writeFileSync(cfg.outFile, csv, 'utf8') } catch (e) {
        console.error(`✗ ${cfg.label}: fetched but could not write file — ${e.message}`)
        failures++
        results[key] = { ok: false }
        continue
      }
      const header = firstHeader(csv)
      if (csv.trim() === '') {
        console.error(`✗ ${cfg.label}: fetched file is empty`)
        failures++
        results[key] = { ok: false }
        continue
      }
      if (header !== cfg.expectedHeader) {
        console.error(`✗ ${cfg.label}: unexpected first column header. Expected "${cfg.expectedHeader}", got "${header}"`)
        failures++
        results[key] = { ok: false }
        continue
      }
      results[key] = { ok: true, rows: dataRowCount(csv) }
    } catch (e) {
      console.error(`✗ ${cfg.label}: fetch failed — ${e.message}`)
      failures++
      results[key] = { ok: false }
    }
  }

  if (failures > 0) {
    const failed = Object.entries(SHEETS)
      .filter(([k]) => !results[k]?.ok)
      .map(([, c]) => c.label)
      .join(', ')
    console.error(`\nSync incomplete. Failed tab(s): ${failed}. No metadata written.`)
    process.exit(1)
  }

  // both ok → write metadata
  const lastSync = new Date().toISOString()
  const meta = {
    lastSync,
    keywordsRows: results.keywords.rows,
    calendarRows: results.calendar.rows,
    keywordsUrl: SHEETS.keywords.url,
    calendarUrl: SHEETS.calendar.url,
  }
  try {
    fs.writeFileSync(path.join(CACHE_DIR, 'sync-meta.json'), JSON.stringify(meta, null, 2) + '\n', 'utf8')
  } catch (e) {
    console.error(`✗ Could not write sync-meta.json — ${e.message}`)
    process.exit(1)
  }

  const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/')
  console.log(`✓ ${SHEETS.keywords.label}: ${results.keywords.rows} rows synced → ${rel(SHEETS.keywords.outFile)}`)
  console.log(`✓ ${SHEETS.calendar.label}: ${results.calendar.rows} rows synced → ${rel(SHEETS.calendar.outFile)}`)
  console.log(`✓ Metadata written → ${rel(path.join(CACHE_DIR, 'sync-meta.json'))}`)
  console.log(`Last sync: ${lastSync}`)

  console.log('')
  console.log('---')
  console.log('HOW TO USE THIS DATA IN CURSOR:')
  console.log('Before any content task, check docs/.cache/keywords.csv to:')
  console.log('- Confirm your target keyword is not already reserved by another site')
  console.log('- Identify the Owner Site and Status for related keywords')
  console.log('Before scheduling any article, check docs/.cache/calendar.csv to:')
  console.log('- See what is already published or planned across all three sites')
  console.log('- Confirm the keyword in your new article matches an entry in keywords.csv')
  console.log('RULE: No article gets a planned date until its keyword is in keywords.csv with the correct Owner Site.')
  console.log('---')

  process.exit(0)
}

main().catch((e) => {
  console.error(`Unexpected error: ${e && e.message ? e.message : e}`)
  process.exit(1)
})
