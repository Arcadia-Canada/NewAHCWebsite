# 09 — Cluster Integrity Rules

Guards against cluster drift, orphan content, keyword cannibalization, and structural decay. This doc answers: **"How do I keep the content architecture clean as the site grows?"**

Last updated: May 3, 2026

---

## Core principle

Every resource article must belong to exactly one cluster. No orphans, no duplicates, no ambiguous ownership. If an article can't be cleanly assigned, it either needs a tighter angle or doesn't belong on the site.

---

## Rule 1: No orphan articles

An orphan article is a page under `/resources/` that doesn't belong to any cluster hub.

**Current orphan:** `/resources/spring-home-safety-checklist-for-seniors/` — documented in `AUTHORITY-MAP.md`. Must be assigned to a cluster or reclassified as a standalone seasonal page.

**How to check:** Every article URL must match the pattern `/resources/[cluster-slug]/[article-slug]/`. If a page sits directly under `/resources/` without a cluster prefix, it's an orphan.

**How to fix:**
1. Identify the best-fit cluster (check `02-CONTENT-CLUSTERS.md` for scope)
2. Move the file to `app/resources/[cluster-slug]/[article-slug]/page.tsx`
3. Set up a 301 redirect from the old URL to the new URL
4. Add the article to the cluster hub page
5. Add to `AUTHORITY-MAP.md` under the correct cluster
6. Update internal links across the site

---

## Rule 2: No cross-cluster keyword overlap

Two articles in different clusters must not target the same primary keyword. This is cannibalization — Google can't decide which page to rank, so both lose.

**How to check:** Before writing any article, search `10-KEYWORD-OWNERSHIP.md` for the intended primary keyword. If another page already owns it, either:
- Choose a different keyword angle
- Merge the planned article into the existing one
- Flag it as a "Differentiate" entry in `AUTHORITY-MAP.md` with a note explaining the angle

**Known conflicts (as of May 2026):** 8 entries flagged as "Differentiate" in `AUTHORITY-MAP.md`. See `10-KEYWORD-OWNERSHIP.md > Known conflicts` for the full list with resolution guidance.

---

## Rule 3: One cluster per topic area

Clusters should not overlap in scope. Each cluster owns a defined topic territory:

| Cluster | Owns | Does NOT Own |
|---------|------|-------------|
| Dementia & Memory Care | Dementia signs, behaviour, communication, safety, stages, sleep, nutrition (dementia-specific) | General aging, general nutrition |
| Brain Injury & Rehab | ABI, TBI, stroke recovery, cognitive rehab, brain injury fatigue, return to work | General rehab (belongs to Navigating) |
| Navigating Home Care | Decision-making, choosing providers, costs, PSW roles, independence, safety (general), hospital discharge (general) | Caregiver emotions, dementia-specific content |
| Family Caregiver Support | Burnout, sibling conflict, work-life balance, guilt, emotional impact, family meetings | Choosing providers (belongs to Navigating) |
| Cost of Care & Planning | Home care costs, insurance, financial planning, government programs, tax credits | General decision-making (belongs to Navigating) |

**When a topic straddles two clusters:**
1. Pick the cluster where the reader's intent is strongest
2. Cross-link to the other cluster in the article body
3. Document the decision in `AUTHORITY-MAP.md` notes

---

## Rule 4: Cluster hub pages must reflect reality

The articles listed on a cluster hub page must exactly match what's in `AUTHORITY-MAP.md` for that cluster. Specifically:

- Every `status: 'live'` article on the hub must be `Published` in the AUTHORITY-MAP
- Every `status: 'coming'` stub on the hub must be `Coming Soon` in the AUTHORITY-MAP
- No article should appear on the hub that isn't tracked in the AUTHORITY-MAP
- No published article should be missing from the hub

**Audit frequency:** Every time an article is published or a stub is added/removed. See `11-SITE-AUDIT-LIVE-VS-DOCS.md` for the full audit process.

---

## Rule 5: Coming Soon stubs don't count as content

A Coming Soon stub is a placeholder card on a cluster hub page. It is NOT:
- A published article
- A page Google should index (it has no standalone `page.tsx`)
- Something you should link to from other articles
- Evidence of topical authority

**Rules for stubs:**
- Maximum 60 days before fill or removal (enforced via `AUTHORITY-MAP.md` deadline tracker)
- Never link to stubs from article body text (use `<!-- FUTURE-LINK: /path/ -->` comments instead)
- Never create a stub without content ready or in active production
- After Phase 1 of `12-EXECUTION-ROADMAP.md`, no new stubs should be created — publish articles directly

---

## Rule 6: Cluster page must exist before any article

You cannot publish an article in a cluster that doesn't have a live hub page. The hub is the parent — articles are children.

**Currently blocked:** Cost of Care & Planning cluster. Hub page at `/resources/cost-of-care-planning/` does not exist. No articles can be published in this cluster until the hub is created. See `12-EXECUTION-ROADMAP.md` Phase 4 prerequisites.

---

## Rule 7: Internal links must stay within live content

When adding internal links to a new article:

| Target Status | Can Link To? |
|---------------|-------------|
| Published article | Yes |
| Live service page | Yes |
| Live condition page | Yes |
| Live location page | Yes |
| Coming Soon stub | **No** |
| Net New (doesn't exist) | **No** |
| Redirecting URL | **No** — use the destination URL |
| 404 page | **No** |

**Before committing any article,** verify every internal link target returns HTTP 200. Not 301, not 404 — 200.

---

## Rule 8: Don't split what should be merged

Resist the temptation to create separate articles for subtly different angles of the same topic. Signs you should merge instead of split:

- The two articles would target the same Google search query
- A reader searching for either title would be satisfied by the same article
- The content overlap would exceed 40%
- You can't write 1,200+ unique words for each without padding

When in doubt, write one strong article instead of two weak ones.

---

## Rule 9: Don't merge what should be split

Some topics look similar but serve different reader intents:

- "Caregiver burnout warning signs" (recognition) vs. "Managing daily caregiver stress" (coping) — different intents
- "Late stage dementia" (end-of-life planning) vs. "Stages of Alzheimer's" (full progression) — different scope
- "Home care costs in Ontario" (pricing) vs. "How families pay for home care" (payment models) — different questions

If the reader intent is genuinely different, keep them separate and cross-link.

---

## Rule 10: Cluster growth should be proportional

Avoid growing one cluster to 15 published articles while another has zero. Disproportionate clusters signal to Google that the site's expertise is narrow, not broad.

**Target by end of 2026:** Each of the 4 live clusters should have 8–10 published articles. Cost of Care should have 4+. See `12-EXECUTION-ROADMAP.md` for the phased plan.

---

## Integrity checklist (run quarterly)

- [ ] Every article under `/resources/` belongs to a cluster (no orphans)
- [ ] Every article's primary keyword is unique (no cannibalization — check `10-KEYWORD-OWNERSHIP.md`)
- [ ] Every cluster hub page matches `AUTHORITY-MAP.md` (live counts, stub counts, URLs)
- [ ] No articles link to Coming Soon stubs
- [ ] No articles link to redirecting URLs (use canonical destination)
- [ ] All "Differentiate" entries in AUTHORITY-MAP have resolution notes
- [ ] Coming Soon stubs with passed deadlines have been filled or removed
- [ ] `02-CONTENT-CLUSTERS.md` article counts match `AUTHORITY-MAP.md` counts
- [ ] `CLUSTER-LINK-MAP.md` published/stub/net-new counts match reality
