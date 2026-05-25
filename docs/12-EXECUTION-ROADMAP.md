# 12 — Execution Roadmap

The sprint-level plan for content production, ordered by urgency and dependency. This doc answers: **"What do I build next, in what order, and why?"**

**Week-by-week dates and slugs:** [`docs/PUBLISHING-CALENDAR.md`](./PUBLISHING-CALENDAR.md) — use that file for *when* to publish. Use this file for *why* phases exist and dependency gates.

Last updated: May 25, 2026

---

## Current state snapshot

*Counts from `docs/AUTHORITY-MAP.md` (May 25, 2026).*

| Metric | Count |
|--------|-------|
| Published articles | 11 |
| Coming Soon stubs on cluster hubs | 0 |
| Net New (ready to write) | 83 |
| Requiring differentiation | 8 |
| Live clusters | 4 of 5 |
| Master Prompt remaining | 4 (#7–10) |

---

## Phase 1: Coming Soon Emergency — COMPLETED (May 2026)

**Status:** Closed. Hub gray cards removed May 25, 2026; 11 topics reverted to Net New in AUTHORITY-MAP. Four May articles published (signs, weight, cost, PSW). Historical triage below.

**Goal (original):** Eliminate all thin content before the 60-day deadline. Every Coming Soon stub must either become a full article or be removed from the cluster page.

### Decision framework

Not all 15 stubs can realistically be filled before the deadline. Triage using this priority:

| Priority | Criteria | Action |
|----------|----------|--------|
| **P1 — Fill** | Master Prompt articles + high-search-volume stubs | Write full article |
| **P2 — Fill if possible** | Stubs in clusters with live articles (Dementia, Caregiver, Navigating) | Write if time allows |
| **P3 — Remove** | Low-priority topics unlikely to ship by deadline | Remove from hub page, keep in AUTHORITY-MAP as Net New (Brain Injury hub cards removed May 2026) |

### P1 — Must fill (6 articles)

These are either Master Prompt priority articles or own high-value keywords:

| # | Article | Cluster | Why P1 |
|---|---------|---------|--------|
| 1 | When Siblings Disagree About a Parent's Care | Caregiver | Master Prompt #2 |
| 2 | How to Know When It Is Time | Navigating | Master Prompt #4 (replaces "Signs Your Parent Needs Home Care") |
| 3 | How Much Does Home Care Cost in Ontario? | Navigating | Owns "home care cost Ontario" — highest commercial intent keyword |
| 4 | What Does a PSW Actually Do? | Navigating | High search volume, role explainer |
| 5 | Managing Behaviour Changes in Dementia | Dementia | High search volume, extends strongest cluster |
| 6 | Communication Strategies for Dementia | Dementia | Complements #5, extends strongest cluster |

### P2 — Fill if time allows (6 articles)

| # | Article | Cluster |
|---|---------|---------|
| 7 | Late Stage Dementia: What Families Need to Know | Dementia |
| 8 | Balancing Work and Caregiving | Caregiver |
| 9 | The Emotional Impact of Caring for Aging Parents | Caregiver |
| 10 | How Families Can Share Care Responsibilities | Caregiver |
| 11 | Signs Your Parent Needs Home Care | Navigating |
| 12 | When a Parent Resists Home Care | Navigating |

### P3 — Remove by May 21 if not filled (4 stubs)

| # | Article | Cluster | Reason |
|---|---------|---------|--------|
| 13 | How to Choose a Home Care Provider in Ontario | Navigating | Can wait — lower priority than cost/PSW |
| 14 | Private vs. Public Home Care in Ontario | Navigating | Can wait |
| 15 | Understanding Ontario Health atHome | Navigating | Can wait |
| 16 | Questions to Ask Before Hiring Home Care | Navigating | ⚠️ Also has a redirect to remove |

**To remove a stub:** Delete the entry from the `articles` array in the cluster hub `page.tsx`. Keep the entry in AUTHORITY-MAP but change status back to `Net New`. Do NOT delete the redirect if one exists.

### Phase 1 calendar

| Week | Dates | Target |
|------|-------|--------|
| Week 1 | May 5–9 | Write P1 articles #1–3 |
| Week 2 | May 12–16 | Write P1 articles #4–6 + start P2 if ahead |
| Week 3 | May 19–21 | Finish P2 articles. Remove any unfilled P3 stubs (Navigating 13–16). Update AUTHORITY-MAP. Resubmit sitemap to GSC. |

---

## Phase 2: Master Prompt Completion (June 2026)

**Goal:** Publish the remaining 4 Master Prompt articles (#7–10). MP #1–6 and pillar are live. These form the emotional backbone of the site — the trust-building narrative arc across Navigating and Caregiver clusters.

| Order | Article | Cluster | AUTHORITY-MAP # | Calendar |
|-------|---------|---------|-----------------|----------|
| 1 | Navigating the System | Navigating | MP #7 | Jun 3, 2026 |
| 2 | The Guilt of Getting Help | Caregiver | MP #8 | Jun 10, 2026 |
| 3 | When the Situation Changes Overnight | Navigating | MP #9 | Jun 17, 2026 |
| 4 | What Trust Actually Means | Navigating | MP #10 | Jun 24, 2026 |

**Pace:** 1 article per week — see [`PUBLISHING-CALENDAR.md`](./PUBLISHING-CALENDAR.md) Phase A.

**Voice:** These are emotional pillars, not keyword articles. Follow `07-VOICE-AND-TONE.md` exactly. Lead with empathy, follow with expertise.

**After each publish:**
1. Update AUTHORITY-MAP status → Published
2. Add internal links from 2–3 existing articles
3. Submit URL to GSC
4. Update `PUBLISHING-CALENDAR.md` Published log

---

## Phase 2b: Former hub topics (July — September 2026)

**Goal:** Publish the 11 articles that were removed from cluster hub Coming Soon cards. Scheduled in [`PUBLISHING-CALENDAR.md`](./PUBLISHING-CALENDAR.md) Phase B (navigating → caregiver → dementia).

---

## Phase 3: Cluster Depth (September 2026 — February 2027)

**Goal:** Build out the three strongest clusters to 8–10 published articles each. This is the threshold where Google starts treating a cluster as topically authoritative.

### Dementia & Memory Care (target: 10 published, currently 3 live + 3 in Phase 2b calendar)

Write 7 Net New articles. Priority order:
1. How to Keep Someone with Dementia Safe at Home (#7)
2. When Should Someone with Dementia Stop Driving? (#8)
3. Creating Routines for Dementia Patients (#10)
4. How Dementia Affects Sleep (#11)
5. Hospital Discharge Planning for Dementia (#14)
6. Helping Someone with Dementia Bathe Safely (#15)
7. When Dementia Care Requires 24-Hour Support (#16)

Skip #9 (Stages of Alzheimer's) and #13 (Home Safety Checklist for Dementia) until differentiation is resolved — see `10-KEYWORD-OWNERSHIP.md`.

### Navigating Home Care (target: 10 published, currently 7 live + 5 in Phase 2b calendar)

Write 8 Net New articles after P1/P2 stubs are filled. Priority:
1. Navigating the System (#11 — also MP #7, may be done in Phase 2)
2. Helping Aging Parents Stay Independent (#15)
3. How Many Hours of Care Are Needed (#23)
4. Preventing Hospital Readmissions (#30)
5. Supporting Seniors After Surgery (#31)
6. Medication Reminders for Seniors (#18)
7. Companionship and Senior Isolation (#22)
8. How to Create a Care Plan for Parents (#32)

### Family Caregiver Support (target: 8 published, currently 4 live + 3 in Phase 2b calendar)

Write 6 Net New articles after P2 stubs are filled. Priority:
1. The Weight You Are Carrying (#7 — also MP #5, may be done in Phase 2)
2. The Guilt of Getting Help (#8 — also MP #8, may be done in Phase 2)
3. Preparing for Decline Conversations (#9)
4. Caregiving and Mental Health (#13)
5. Caregiver Support Resources in Toronto (#16 — high local SEO)
6. Planning Family Meetings Around Care (#18)

---

## Phase 4: New Cluster Launch — Cost of Care (September — October 2026)

**Goal:** Launch the fifth cluster with hub page + 3–4 seed articles.

### Prerequisites (complete before writing any article)
- [ ] Create cluster hub page at `/resources/cost-of-care-planning/`
- [ ] Add cluster hub to sitemap
- [ ] Add cluster card to `/resources/` hub page
- [ ] Add cluster to footer navigation
- [ ] Update `02-CONTENT-CLUSTERS.md` status from "PLANNED" to "LIVE"

### Seed articles (publish in this order)
1. Average Home Care Costs in Toronto (#1) — owns primary keyword
2. How Families Pay for Home Care (#3) — decision support
3. Long-Term Care vs. Home Care: Costs Compared (#2) — comparison
4. Insurance Coverage for Home Care in Ontario (#4) — practical

**Pace:** 1 article per week = hub + 4 articles in 5 weeks. Dates in [`PUBLISHING-CALENDAR.md`](./PUBLISHING-CALENDAR.md) Phase E (assign when prerequisites are scheduled).

---

## Phase 5: Brain Injury & Scale (March 2027+ per calendar)

**Goal:** Build Brain Injury cluster from 0 to 6+ published articles. Begin filling long-tail articles across all clusters.

### Brain Injury priority (first 6)
1. Life After Acquired Brain Injury: A Family Guide (#1)
2. Stroke Recovery at Home: What to Expect (#2)
3. Cognitive and Emotional Changes After Brain Injury (#3)
4. Returning Home After Rehabilitation (#4)
5. What Does a Rehabilitation Support Worker Do? (#5)
6. Brain Injury Fatigue Explained (#7)

### Cross-cluster long-tail
- Fill remaining Net New articles across all clusters
- Resolve all "Differentiate" entries (8 total — see AUTHORITY-MAP)
- Assign orphan article (Spring Safety Checklist) to a cluster

---

## Decision gates

Before moving to the next phase, confirm:

| Gate | Condition |
|------|-----------|
| Phase 1 → 2 | ✅ Zero Coming Soon cards on hubs (May 2026). |
| Phase 2 → 2b | MP #7–10 published. Narrative arc complete. |
| Phase 2b → 3 | 11 former hub topics published. |
| Phase 3 → 4 | At least 2 clusters have 8+ published articles. Internal linking mesh is strong. |
| Phase 4 → 5 | Cost of Care hub is live with 4+ articles. No new Coming Soon stubs created without content ready. |

---

## Operational rules

1. **One article at a time.** Don't start a new article until the previous one is published, links are added, AUTHORITY-MAP is updated, and GSC is submitted.
2. **No new Coming Soon stubs.** Publish directly from Net New; add hub cards only when the article is live (`status: 'live'`).
3. **Weekly audit.** Every Monday, check: Is this week's slot in `PUBLISHING-CALENDAR.md` still accurate? Is AUTHORITY-MAP up to date? Are there broken links?
4. **Keyword check before writing.** Before starting any article, check `10-KEYWORD-OWNERSHIP.md` to confirm no other page owns the same keyword.
5. **Publish checklist every time.** Use `06-PUBLISHING-CHECKLIST.md` for every article. No exceptions.

---

## Calendar summary

**Do not maintain duplicate week tables here.** Use [`docs/PUBLISHING-CALENDAR.md`](./PUBLISHING-CALENDAR.md):

| Phase | Calendar section | Approx. span |
|-------|------------------|--------------|
| A | Master Prompt #7–10 | Jun 2026 |
| B | 11 former hub topics | Jul–Sep 2026 |
| C | Cluster depth | Sep 2026 – Feb 2027 |
| D | Brain Injury seed | Mar–May 2027 |
| E | Cost of Care (after hub build) | Jun 2027+ |

**Target by end of 2026:** ~26 published articles (11 today + 15 from Phases A–B in calendar).
