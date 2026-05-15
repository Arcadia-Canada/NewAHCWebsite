# 11 — Site Audit: Live vs. Docs

A repeatable process for verifying that the live site matches the governance documentation. Run this audit quarterly, after major deployments, or whenever you suspect drift.

Last updated: May 3, 2026

---

## When to run this audit

| Trigger | Scope |
|---------|-------|
| **Quarterly** (Jan, Apr, Jul, Oct) | Full audit — all sections |
| **After merging a feature branch** | Sections affected by the merge |
| **After publishing 5+ articles** | Article inventory + cluster counts |
| **After changing site structure** (new section, new cluster, URL changes) | Full audit |
| **When onboarding a new contributor** | Full audit (ensures docs are trustworthy) |

---

## Section 1: Article inventory audit

Compare `AUTHORITY-MAP.md` against the live codebase.

### Step 1: Count published articles

```bash
# From project root — count all article page.tsx files under resource clusters
find app/resources -mindepth 3 -name "page.tsx" | wc -l
```

Compare this number to the "Published" count in `AUTHORITY-MAP.md > Summary by status`.

### Step 2: Verify each published article

For every article marked `Published` in the AUTHORITY-MAP:

- [ ] The file exists at the documented path
- [ ] The canonical URL in the file matches the documented URL
- [ ] The page loads on localhost without errors
- [ ] The article appears on its cluster hub page with `status: 'live'`

### Step 3: Verify Coming Soon stubs

For every entry marked `Coming Soon` in the AUTHORITY-MAP:

- [ ] The stub appears on the cluster hub page with `status: 'coming'`
- [ ] No standalone `page.tsx` exists for the stub (stubs are hub-only cards)
- [ ] The deadline date has not passed (if it has — fill or remove immediately)
- [ ] No other article on the site links to the stub URL

### Step 4: Check for orphans

```bash
# Find article pages not tracked in AUTHORITY-MAP
# Compare file paths against documented URLs
find app/resources -name "page.tsx" | sort
```

Every file should correspond to either a cluster hub page or an article entry in `AUTHORITY-MAP.md`. Files that don't match are orphans.

---

## Section 2: Cluster count audit

Compare counts across three docs that all track them:

| Cluster | AUTHORITY-MAP count | 02-CONTENT-CLUSTERS count | CLUSTER-LINK-MAP count | Match? |
|---------|--------------------:|-------------------------:|-----------------------:|--------|
| Dementia | | | | |
| Brain Injury | | | | |
| Navigating | | | | |
| Caregiver | | | | |
| Cost of Care | | | | |

Fill in the numbers from each doc. All three must agree for every cluster. If they don't, update the stale doc(s) to match the AUTHORITY-MAP (which is the source of truth).

Also verify:
- [ ] Published article counts match across all three docs
- [ ] Coming Soon stub counts match across all three docs
- [ ] Net New counts match across all three docs

---

## Section 3: Condition and service page audit

### Conditions

Compare `.cursorrules > CONDITIONS` section against the live codebase:

```bash
ls app/conditions/*/page.tsx
```

- [ ] Every listed condition has a `page.tsx`
- [ ] No unlisted condition pages exist in the codebase
- [ ] The conditions hub (`app/conditions/page.tsx`) lists all live conditions
- [ ] `docs/01-SITE-ARCHITECTURE.md` condition count matches reality
- [ ] No condition page has a redirect that makes it unreachable

### Services

Compare `.cursorrules > SERVICES` section against the live codebase:

```bash
ls app/our-services/*/page.tsx
```

- [ ] Every listed service has a `page.tsx`
- [ ] No unlisted service pages exist
- [ ] The services hub lists all live services

---

## Section 4: Internal link audit

Run a full crawl of the site to check for broken links:

```bash
# Start dev server
npm run dev

# For each page, extract internal links and verify they return 200
# Use curl to check status codes:
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/path/
```

Check for:
- [ ] No links return 404
- [ ] No links point to URLs that 301/308 redirect (use the canonical destination instead)
- [ ] No links point to Coming Soon stub URLs
- [ ] No pages link to themselves (breadcrumb exempt)
- [ ] No duplicate links to the same target on one page

---

## Section 5: Redirect audit

Compare `vercel.json` redirects against `redirects.json`:

- [ ] Every redirect in `vercel.json` has a matching entry in `redirects.json`
- [ ] No redirect points to a URL that itself redirects (no chains)
- [ ] No redirect points to a 404
- [ ] Redirects for deleted pages are preserved (e.g., `/conditions/alzheimers-care/`)

### Known intentional redirects (verify these still work)

| From | To | Status |
|------|----|--------|
| `/conditions/alzheimers-care/` | `/conditions/dementia-care-at-home/` | 301 |
| `/resources/navigating-home-care/when-a-parent-resists-home-care/` | `/resources/navigating-home-care/` | 301 |
| `/resources/navigating-home-care/questions-before-hiring-home-care/` | `/resources/navigating-home-care/` | 301 |

---

## Section 6: Schema audit

For each page type, verify schema is valid:

```
https://search.google.com/test/rich-results
```

Sample at least:
- [ ] 1 article from each cluster (pick the most recently published)
- [ ] 2 service pages
- [ ] 2 condition pages
- [ ] 1 location page
- [ ] Homepage

Check for:
- [ ] No schema errors or warnings
- [ ] No duplicate `@type` blocks on one page
- [ ] `aggregateRating` values match current Google reviews (currently 4.9 / 41 reviews)
- [ ] `telephone`, `address`, `openingHoursSpecification` match site footer

---

## Section 7: Sitemap audit

Compare `app/sitemap.ts` against the live site:

- [ ] Every published page is in the sitemap
- [ ] No Coming Soon stub URLs are in the sitemap
- [ ] No redirecting URLs are in the sitemap
- [ ] No deleted pages are in the sitemap
- [ ] The generated `sitemap.xml` is accessible at the live URL

---

## Section 8: Governance doc freshness

For each doc in `/docs/`, check:

| Doc | Key Check |
|-----|-----------|
| `AI-CONTEXT.md` | Does it reference all current docs? |
| `01-SITE-ARCHITECTURE.md` | Do section counts match reality? |
| `02-CONTENT-CLUSTERS.md` | Do article counts match AUTHORITY-MAP? |
| `03-INTERNAL-LINKING-RULES.md` | Does the condition page count match? |
| `04-SCHEMA-STANDARDS.md` | Does the org schema match live values (rating, reviews, phone)? |
| `05-URL-CONVENTIONS.md` | Any new URL patterns not documented? |
| `06-PUBLISHING-CHECKLIST.md` | Platform section filled for Vercel + Next.js? Hard gates (Phases 6, 7, 9) clearly marked? Social = Phase 9 brief+kit? |
| `07-VOICE-AND-TONE.md` | Still accurate to brand voice? |
| `AUTHORITY-MAP.md` | Last updated date is recent? All published articles marked? |
| `CLUSTER-LINK-MAP.md` | Counts match AUTHORITY-MAP? Issues section current? |
| `10-KEYWORD-OWNERSHIP.md` | All published articles have keyword entries? |
| `12-EXECUTION-ROADMAP.md` | Current phase still accurate? |
| `.cursorrules` | Rating, review count, conditions list, services list all current? |

---

## Audit output template

After completing the audit, fill in this template and save it as a dated entry at the bottom of this file:

```
### Audit: [DATE]

**Scope:** [Full / Partial — list sections audited]
**Auditor:** [Name or "AI-assisted"]

**Findings:**
1. [Finding — severity: critical/moderate/low]
2. [Finding]
3. [Finding]

**Actions taken:**
1. [Fix applied]
2. [Fix applied]

**Deferred:**
1. [Issue deferred — reason — target date]
```

---

## Audit history

### Audit: May 3, 2026

**Scope:** Full
**Auditor:** AI-assisted

**Findings:**
1. Alzheimer's standalone page conflicted with redirect — **critical** — resolved
2. Brain Injury cluster had 6 Coming Soon stubs not tracked in AUTHORITY-MAP — **moderate** — resolved
3. 13 stale internal links using redirect URLs instead of canonical destinations — **moderate** — resolved
4. Coming Soon stubs had no creation dates or deadlines — **moderate** — resolved
5. Docs 08–12 were placeholder files — **critical** — resolved
6. Keyword ownership was implicit — **critical** — resolved
7. No execution roadmap existed — **critical** — resolved
8. `/accessibility/` returns 404 — **low** — not linked from any page, deferred

**Actions taken:**
1. Deleted orphan alzheimers-care page, merged into Dementia entry
2. Synced Brain Injury stubs to AUTHORITY-MAP with dates
3. Fixed all 13 stale links across 11 files
4. Added Coming Soon deadline tracker to AUTHORITY-MAP
5. Wrote all 5 placeholder docs with real content
6. Created keyword-to-URL mapping for all page types
7. Created 5-phase execution roadmap with calendar

**Deferred:**
1. `/accessibility/` page — not linked from site, no user-facing 404 — create when AODA compliance review is done
2. `04-SCHEMA-STANDARDS.md` org schema shows rating 5.0/38 — live site is 4.9/41 — update doc on next schema review
