# Publishing Calendar

Planned publish schedule for arcadiahomecare.ca resource articles. **One article per week** unless noted. Target publish day: **Tuesday** (adjust as needed).

**Phase rationale and gates:** [`docs/12-EXECUTION-ROADMAP.md`](./12-EXECUTION-ROADMAP.md)  
**Status per article:** [`docs/AUTHORITY-MAP.md`](./AUTHORITY-MAP.md)  
**Orientation for AI:** [`AI-CONTEXT.md`](../AI-CONTEXT.md)  
**Print / share:** [`PUBLISHING-CALENDAR.docx`](./PUBLISHING-CALENDAR.docx) (regenerate: `python3 scripts/build-publishing-calendar-docx.py`)

**Live tracker:** Update `docs/AUTHORITY-MAP.md` when an article ships. This calendar is the planning view only.

**Last updated:** May 25, 2026  
**Schedule starts:** June 3, 2026 (first open slot after Coming Soon hub cleanup)

---

## Pace and rules

| Rule | Detail |
|------|--------|
| Default cadence | 1 article / week |
| Priority order | Master Prompt #7–10 → former hub topics (11) → cluster depth (roadmap) |
| Voice articles (MP series) | Follow `docs/07-VOICE-AND-TONE.md`; brief + kit required (Phase 9) |
| Keyword / explainer articles | Same publishing checklist; can batch research |
| Skip weeks | Mark **SKIP** in calendar (holidays, capacity); do not double up the following week unless intentional |
| URL slugs | Confirm in `docs/05-URL-CONVENTIONS.md` before writing; pick once |

### Per-article checklist (every publish)

1. Article live at permanent URL (HTTP 200)
2. Cluster hub updated (`app/resources/[cluster]/page.tsx`, `status: 'live'`)
3. `docs/AUTHORITY-MAP.md` → **Published** + URL + date
4. `docs/10-KEYWORD-OWNERSHIP.md` if new keyword (when applicable)
5. Internal links from 2–3 existing articles
6. `social/briefs/BRIEF-[slug].md` + `social/kits/KIT-[slug].docx` (`social/_TEMPLATE-KIT-PROMPT.md`)
7. GSC: request indexing for new URL
8. Remove cluster redirect if AUTHORITY-MAP notes ⚠️ redirect

---

## Phase A — Master Prompt completion (June 2026)

Emotional backbone. **Do not reorder** without updating the narrative arc in `docs/02-CONTENT-CLUSTERS.md`.

| Week of | Target date | MP # | Article (working H1) | Cluster | Planned slug |
|---------|-------------|------|----------------------|---------|--------------|
| Jun 3 | 2026-06-03 | 7 | Navigating the System When It Wasn't Built for You | Navigating | `navigating-the-system` |
| Jun 10 | 2026-06-10 | 8 | The Guilt of Getting Help | Caregiver | `guilt-of-getting-help` |
| Jun 17 | 2026-06-17 | 9 | When the Situation Changes Overnight | Navigating | `when-situation-changes-overnight` |
| Jun 24 | 2026-06-24 | 10 | What Trust Actually Means When Handing Over Responsibility | Navigating | `what-trust-means-in-home-care` |

**Phase A complete:** ~2026-06-24

---

## Phase B — Former hub topics (July–September 2026)

Eleven topics removed from Coming Soon gray cards (May 25, 2026). Grouped by cluster and logical reader journey (system → provider → caregiver → dementia progression).

### July 2026 — Navigating (system + hiring)

| Week of | Target date | Article | Cluster | Planned slug | Notes |
|---------|-------------|---------|---------|--------------|-------|
| Jul 1 | 2026-07-01 | When a Parent Resists Home Care | Navigating | `when-a-parent-resists-home-care` | ⚠️ Remove redirect before publish |
| Jul 8 | 2026-07-08 | Private vs. Public Home Care in Ontario | Navigating | `private-vs-public-home-care-ontario` | Before OHIP deep dive |
| Jul 15 | 2026-07-15 | Understanding Ontario Health atHome | Navigating | `ontario-health-athome-funded-care` | |
| Jul 22 | 2026-07-22 | How to Choose a Home Care Provider in Ontario | Navigating | `choosing-home-care-provider-ontario` | |
| Jul 29 | 2026-07-29 | Questions to Ask Before Hiring Home Care | Navigating | `questions-before-hiring-home-care` | ⚠️ Remove redirect before publish |

### August 2026 — Family Caregiver Support

| Week of | Target date | Article | Cluster | Planned slug |
|---------|-------------|---------|---------|--------------|
| Aug 5 | 2026-08-05 | Balancing Work and Caregiving | Caregiver | `balancing-work-and-caregiving` |
| Aug 12 | 2026-08-12 | The Emotional Impact of Caring for Aging Parents | Caregiver | `emotional-impact-caregiving` |
| Aug 19 | 2026-08-19 | How Families Can Share Care Responsibilities | Caregiver | `sharing-care-responsibilities` |

### September 2026 — Dementia & Memory Care

| Week of | Target date | Article | Cluster | Planned slug |
|---------|-------------|---------|---------|--------------|
| Sep 2 | 2026-09-02 | Managing Behaviour Changes in Dementia | Dementia | `managing-dementia-behaviour-changes` |
| Sep 9 | 2026-09-09 | Communication Strategies for Dementia | Dementia | `communication-strategies-dementia` |
| Sep 16 | 2026-09-16 | Late Stage Dementia: What Families Need to Know | Dementia | `late-stage-dementia` |

**Phase B complete:** ~2026-09-16  
**Cumulative new articles (Phases A+B):** 15

---

## Phase C — Cluster depth (September 2026–February 2027)

Goal: bring **Dementia**, **Navigating**, and **Caregiver** clusters toward 8–10 published articles each. Alternate clusters weekly to avoid fatigue. Order follows `docs/12-EXECUTION-ROADMAP.md` Phase 3 priorities.

| Week of | Target date | Article | Cluster | AUTHORITY-MAP # |
|---------|-------------|---------|---------|-----------------|
| Sep 23 | 2026-09-23 | How to Keep Someone with Dementia Safe at Home | Dementia | Dem #7 |
| Sep 30 | 2026-09-30 | Helping Aging Parents Stay Independent | Navigating | Nav #15 |
| Oct 7 | 2026-10-07 | Preparing for Decline Conversations | Caregiver | Care #9 |
| Oct 14 | 2026-10-14 | When Should Someone with Dementia Stop Driving? | Dementia | Dem #8 |
| Oct 21 | 2026-10-21 | How Many Hours of Care Are Needed | Navigating | Nav #23 |
| Oct 28 | 2026-10-28 | Caregiving and Mental Health | Caregiver | Care #13 |
| Nov 4 | 2026-11-04 | Creating Routines for Dementia Patients | Dementia | Dem #10 |
| Nov 11 | 2026-11-11 | Preventing Hospital Readmissions | Navigating | Nav #30 |
| Nov 18 | 2026-11-18 | Caregiver Support Resources in Toronto | Caregiver | Care #16 |
| Nov 25 | 2026-11-25 | How Dementia Affects Sleep | Dementia | Dem #11 |
| Dec 2 | 2026-12-02 | Companionship and Senior Isolation | Navigating | Nav #22 |
| Dec 9 | 2026-12-09 | Hospital Discharge Planning for Dementia | Dementia | Dem #14 |
| Dec 16 | 2026-12-16 | **SKIP** (buffer / holidays) | — | — |
| Dec 23 | 2026-12-23 | **SKIP** | — | — |
| Dec 30 | 2026-12-30 | **SKIP** | — | — |
| Jan 6 | 2027-01-06 | Planning Family Meetings Around Care | Caregiver | Care #18 |
| Jan 13 | 2027-01-13 | Helping Someone with Dementia Bathe Safely | Dementia | Dem #15 |
| Jan 20 | 2027-01-20 | Medication Reminders for Seniors | Navigating | Nav #18 |
| Jan 27 | 2027-01-27 | Supporting Seniors After Surgery | Navigating | Nav #31 |
| Feb 3 | 2027-02-03 | When Dementia Care Requires 24-Hour Support | Dementia | Dem #16 |
| Feb 10 | 2027-02-10 | How to Create a Care Plan for Parents | Navigating | Nav #32 |
| Feb 17 | 2027-02-17 | When Family Caregiving Becomes Too Much | Caregiver | Care #15 |

**Phase C complete:** ~2027-02-17  
**Cumulative scheduled through Feb 2027:** 36 new articles (15 + 21)

---

## Phase D — Brain Injury cluster seed (March–May 2027)

Brain Injury hub has **no** published articles yet. Publish pillar-style guide first, then rotate through former hub topics.

| Week of | Target date | Article | Cluster | AUTHORITY-MAP # |
|---------|-------------|---------|---------|-----------------|
| Mar 3 | 2027-03-03 | Life After Acquired Brain Injury: A Family Guide | Brain Injury | BI #1 |
| Mar 10 | 2027-03-10 | Stroke Recovery at Home: What to Expect | Brain Injury | BI #2 |
| Mar 17 | 2027-03-17 | Cognitive and Emotional Changes After Brain Injury | Brain Injury | BI #3 |
| Mar 24 | 2027-03-24 | Returning Home After Rehabilitation | Brain Injury | BI #4 |
| Mar 31 | 2027-03-31 | What Does a Rehabilitation Support Worker Do? | Brain Injury | BI #5 |
| Apr 7 | 2027-04-07 | Mobility Support After Surgery or Illness | Brain Injury | BI #6 |
| Apr 14 | 2027-04-14 | Brain Injury Fatigue Explained | Brain Injury | BI #7 |
| Apr 21 | 2027-04-21 | Memory Problems After Brain Injury | Brain Injury | BI #13 |
| Apr 28 | 2027-04-28 | Insurance-Funded Brain Injury Support | Brain Injury | BI #18 |
| May 5 | 2027-05-05 | Brain Injury Recovery Timeline | Brain Injury | BI #19 |

---

## Phase E — Cost of Care cluster launch (June 2027+)

**Prerequisites before any article** (from `docs/12-EXECUTION-ROADMAP.md` Phase 4):

- [ ] Create `/resources/cost-of-care-planning/` hub page
- [ ] Add to sitemap, `/resources/` hub, footer nav
- [ ] Update `docs/02-CONTENT-CLUSTERS.md` to LIVE

Then publish **1 article / week**, starting with:

| Order | Article | Planned slug (from AUTHORITY-MAP) |
|-------|---------|-----------------------------------|
| 1 | Average Home Care Costs in Toronto | `average-home-care-costs-toronto` |
| 2 | Long-Term Care vs. Home Care: Costs Compared | TBD |
| 3 | How Families Pay for Home Care | TBD |
| 4 | Insurance Coverage for Home Care in Ontario | TBD |

*Assign exact dates when Phase E prerequisites are scheduled.*

---

## Monthly overview (2026)

| Month | Articles | Focus |
|-------|----------|--------|
| **Jun 2026** | 4 | Master Prompt #7–10 |
| **Jul 2026** | 5 | Navigating former stubs |
| **Aug 2026** | 3 | Caregiver former stubs |
| **Sep 2026** | 3 | Dementia former stubs |
| **Oct 2026** | 4 | Cluster depth (mixed) |
| **Nov 2026** | 4 | Cluster depth |
| **Dec 2026** | 1 + 3 SKIP | Light month; buffer |

| Month | Articles | Focus |
|-------|----------|--------|
| **Jan 2027** | 4 | Cluster depth |
| **Feb 2027** | 3 | Cluster depth wrap |
| **Mar–May 2027** | 10 | Brain Injury seed |
| **Jun 2027+** | TBD | Cost cluster (after hub build) |

---

## Backlog (not yet dated)

Articles in `docs/AUTHORITY-MAP.md` marked **Net New** or **Differentiate** beyond this calendar. Schedule into 2027 Q3+ after Phase E planning, or swap into open SKIP weeks.

High-value backlog (no date yet):

- Navigating: Planning Care After Hospital Discharge (#33), Supporting Mobility at Home (#19), Planning Care After Hospital Discharge
- Caregiver: How Families Make Care Decisions (#10), Supporting a Spouse with Dementia (#14)
- Dementia: Stages of Alzheimer's (#9 — **Differentiate** first), Home Safety Checklist for Dementia (#13 — **Differentiate**)
- Brain Injury: BI #8–12, #14–17, #20 (after Phase D seed)
- Cost cluster: all 14 articles (after hub exists)

**Differentiate before writing:** 8 articles in AUTHORITY-MAP — resolve angle per `docs/10-KEYWORD-OWNERSHIP.md` before adding to this calendar.

---

## How to update this calendar

When an article publishes early or slips:

1. Strike through the row or move it to a **Published** section at the bottom with actual date.
2. Shift subsequent weeks forward (do not compress voice articles in the MP series).
3. Note the change in `Last updated` at the top.
4. Keep `docs/AUTHORITY-MAP.md` as the source of truth for status.

### Published log (append here)

| Published | Article | Actual date | URL |
|-----------|---------|-------------|-----|
| 2026-05-25 | Brain Injury Behaviour Changes (interactive) | 2026-05-25 | `/resources/brain-injury-rehabilitation/brain-injury-behaviour-changes/` |

---

## Quick reference — next 4 weeks

| Date | Article |
|------|---------|
| 2026-06-03 | MP #7 — Navigating the System |
| 2026-06-10 | MP #8 — The Guilt of Getting Help |
| 2026-06-17 | MP #9 — When the Situation Changes Overnight |
| 2026-06-24 | MP #10 — What Trust Actually Means |
