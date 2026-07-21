# Content Sync Reconciliation — 2026-07-20

Generated after deploying the dementia pair (main @ `34a328c`). Covers Problems 2, 3, 4.

Source of truth used: `Arcadia_Content_Governance_Master_UPDATED.xlsx` (attached) + live site (curl-verified) + `docs/.cache/calendar.csv` (operational calendar).

Legend: live URLs below were all verified `200` on 2026-07-20.

---

## PROBLEM 2 — Live Content Calendar (the Google Sheet tab synced to `docs/.cache/calendar.csv`)

Schema: `Article Title, Site, Cluster, Status, Target Publish Date, Keyword (must match Reserved Keywords), Social Posted?`

### 2A. Rows to ADD (7 live HC articles currently absent as Published rows)

Paste-ready (CSV), Social Posted values are recommendations — confirm actuals:

```csv
How Much Does Home Care Cost in Ontario?,HC,Navigating Home Care,Published,2026-05-22,home care cost Ontario,Yes
Signs Your Parent Needs Home Care,HC,Navigating Home Care,Published,2026-05-22,signs your parent needs home care,Yes
What Does a PSW Actually Do?,HC,Navigating Home Care,Published,2026-05-22,what does a PSW actually do,Yes
The Weight You Are Carrying and Why It Matters,HC,Family Caregiver Support,Published,2026-05-22,emotional toll of caregiving,Yes
Spring Home Safety Checklist for Seniors,HC,Navigating Home Care,Published,,KEYWORD UNRESOLVED (see note),Verify
How to Keep Someone with Dementia Safe at Home,HC,Dementia & Memory Care,Published,2026-07-09,dementia home safety,No — deployed today
When Should Someone with Dementia Stop Driving?,HC,Dementia & Memory Care,Published,2026-07-09,dementia stop driving,No — deployed today
```

Notes:
- Live slugs (for reference): `/resources/navigating-home-care/home-care-cost-ontario/`, `/resources/navigating-home-care/signs-parent-needs-home-care/`, `/resources/navigating-home-care/what-does-a-psw-do/`, `/resources/family-caregiver-support/weight-of-caregiving/`, `/resources/spring-home-safety-checklist-for-seniors/`, `/resources/dementia-memory-care/dementia-home-safety/`, `/resources/dementia-memory-care/dementia-when-to-stop-driving/`.
- Spring is an orphan/top-level article (not under a cluster). `docs/10-KEYWORD-OWNERSHIP.md` line 141 flags it for a merge/differentiate decision vs "Home Safety for Seniors (Navigating #17)". Do NOT reserve a keyword for it until that is resolved.

---

## PROBLEM 3 — Social Posted? column (recommended values)

The column is 100% blank. Recommended values (CONFIRM actuals — only you know what was posted):

| Article | Kit status | Live | Recommended Social Posted? |
|---|---|---|---|
| Caregiver Burnout: Warning Signs | done | yes | Yes |
| Normal Aging vs. Dementia | done | yes | Yes |
| How to Introduce Home Care to a Parent with Dementia | done | yes | Yes |
| When the Person You Love Needs More Help | done | yes | Yes |
| The Conversation You Keep Putting Off | done | yes | Yes |
| What Good Care Actually Looks Like | done | yes | Yes |
| When Siblings Disagree About a Parent's Care | done | yes | Yes |
| What No One Tells You About the First Week | done | yes | Yes |
| How Much Does Home Care Cost in Ontario? | done | yes | Yes |
| Signs Your Parent Needs Home Care | done | yes | Yes |
| What Does a PSW Actually Do? | done | yes | Yes |
| The Weight You Are Carrying | done | yes | Yes |
| Spring Home Safety Checklist for Seniors | done | yes | Verify |
| How to Keep Someone with Dementia Safe at Home | done | yes (today) | No (release kit next) |
| When Should Someone with Dementia Stop Driving? | done | yes (today) | No (release kit next) |
| Early Signs of Dementia in a Parent | FLAGGED (rewrite) | yes | leave blank (in review queue) |
| The Guilt of Getting Help | FLAGGED (draft) | no | leave blank (not live) |

---

## PROBLEM 4 — Early Signs kit/brief mismatch

- Article is LIVE at `/resources/dementia-memory-care/early-signs-of-dementia-in-a-parent/` (200).
- Kit + brief flagged FOR REVIEW because a rewrite sits in `drafts/articles/early-signs-of-dementia-in-a-parent/`.
- Decision needed (see REVIEW-QUEUE-2026-07-20.md). Recommended: keep the live page, confirm kit matches it, remove REVIEW flag, post; hold the rewrite as a `-REWRITE` variant until it ships.

---

## xlsx corrections (apply in the Google Sheet master; these tabs are stale)

### Tab: Reserved Keywords

| Keyword / Topic | Field | Current | Change to |
|---|---|---|---|
| Home care cost Ontario | Status | PLANNED | PUBLISHED |
| Home care cost Ontario | Live URL | `/resources/navigating-home-care/home-care-cost-ontario/ (planned)` | `/resources/navigating-home-care/home-care-cost-ontario/` |
| Signs your parent needs home care | Status | PLANNED | PUBLISHED |
| Signs your parent needs home care | Live URL | `/resources/navigating-home-care/signs-parent-needs-home-care/ (planned)` | `/resources/navigating-home-care/signs-parent-needs-home-care/` |
| What does a PSW actually do | Status | PLANNED | PUBLISHED |
| What does a PSW actually do | Live URL | `(planned)` | `/resources/navigating-home-care/what-does-a-psw-do/` |
| emotional toll of caregiving | Status | PLANNED | PUBLISHED |
| emotional toll of caregiving | Live URL | `/resources/family-caregiver-support/ (planned)` | `/resources/family-caregiver-support/weight-of-caregiving/` |

(early signs of dementia = keep PUBLISHED — REWRITE NEEDED; dementia home safety + dementia stop driving already PUBLISHED — correct.)

### Tab: HC — Article Master

| Cluster / # / Title | Field | Current | Change to |
|---|---|---|---|
| Navigating #1 — Signs Your Parent Needs Home Care | Status | PLANNED | PUBLISHED |
| Navigating #1 | Live URL | (blank) | `/resources/navigating-home-care/signs-parent-needs-home-care/` |
| Navigating #7 — How Much Does Home Care Cost in Ontario? | Status | PLANNED | PUBLISHED |
| Navigating #7 | Live URL | (blank) | `/resources/navigating-home-care/home-care-cost-ontario/` |
| Navigating #8 — What Does a PSW Actually Do? | Status | PLANNED | PUBLISHED |
| Navigating #8 | Live URL | (blank) | `/resources/navigating-home-care/what-does-a-psw-do/` |
| Family #5 — The Weight You Are Carrying | Status | Net New | PUBLISHED |
| Family #5 | Live URL | (blank) | `/resources/family-caregiver-support/weight-of-caregiving/` |
| Family #5 | Action | Write | Keep |

### Tab: HC — Calendar (planning calendar — Outline rows that are actually live)

| Row (title) | Field | Current | Change to |
|---|---|---|---|
| Signs Your Parent Needs Home Care | URL | `.../signs-your-parent-needs-home-care/` | `.../signs-parent-needs-home-care/` |
| Signs Your Parent Needs Home Care | Status | Outline | Published |
| Signs Your Parent Needs Home Care | Date | 2026-07-24 | 2026-05-22 |
| The Weight You Are Carrying... | URL | `.../the-weight-you-are-carrying-and-why-it-matters/` | `.../weight-of-caregiving/` |
| The Weight You Are Carrying... | Status | Outline | Published |
| The Weight You Are Carrying... | Date | 2026-07-31 | 2026-05-22 |
| How Much Does Home Care Cost in Ontario? | URL | `.../how-much-does-home-care-cost-in-ontario/` | `.../home-care-cost-ontario/` |
| How Much Does Home Care Cost in Ontario? | Status | Outline | Published |
| How Much Does Home Care Cost in Ontario? | Date | 2026-09-18 | 2026-05-22 |
| What Does a PSW Actually Do? | URL | `.../what-does-a-psw-actually-do/` | `.../what-does-a-psw-do/` |
| What Does a PSW Actually Do? | Status | Outline | Published |
| What Does a PSW Actually Do? | Date | 2026-10-16 | 2026-05-22 |
| Early Signs of Dementia in a Parent | Status | Outline | Published (rewrite pending) |

CADENCE NOTE: marking the 4 above as Published (with their true May dates) frees their future 2026 slots. The topics are already live, so leaving them as "future work" was incorrect. If you want the freed Jul/Sep/Oct slots backfilled with new topics, that is a separate planning pass.

---

## Open decisions for you

1. Social Posted actuals for the 15 candidate rows (recommended values above).
2. Spring Home Safety Checklist: keyword ownership + cluster placement (orphan article, merge/differentiate pending).
3. Early Signs: ship the rewrite, or keep live page + drop REVIEW flag.
4. Calendar cadence: backfill the freed future slots now, or later.
