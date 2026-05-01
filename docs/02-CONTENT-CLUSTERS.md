# 02 — Content Clusters

The five resource clusters and the rules that govern them. Total inventory: **101 unique articles** across 5 clusters.

For the article-by-article inventory with status, action, and notes, see `AUTHORITY-MAP.md`.

## The five clusters

### Dementia & Memory Care
**URL:** `/resources/dementia-memory-care/`
**Primary service:** `/our-services/dementia-alzheimers-home-care/`
**Primary condition:** `/conditions/dementia-care-at-home/`
**Article count:** 16 (3 published, 3 Coming Soon, 10 net new)

Covers: dementia signs, behaviour changes, communication, safety, sleep, nutrition, hospital discharge for dementia, and 24-hour support thresholds.

### Brain Injury & Rehabilitation
**URL:** `/resources/brain-injury-rehabilitation/`
**Primary service:** `/our-services/acquired-brain-injury-home-care/`
**Primary condition:** `/conditions/acquired-brain-injury-support/`
**Article count:** 19 (all net new)

Covers: TBI recovery, cognitive rehab, brain injury fatigue, family adjustment, community reintegration, recovery timelines.

### Navigating Home Care *(largest cluster — primary decision-support hub)*
**URL:** `/resources/navigating-home-care/`
**Primary service:** `/our-services/case-management/` + multiple
**Primary conditions:** Multiple
**Article count:** 34 (2 published, 8 Coming Soon, 24 net new)

Covers: signs a parent needs care, choosing providers, public vs. private care, Ontario Health atHome, costs, PSW roles, the pillar emotional anchor, and redistributed Aging at Home topics.

The pillar article — **"When the Person You Love Needs More Help Than You Can Give"** — sits at the top of this cluster as a featured "Start here" entry. It is not a keyword-owner; it is the emotional entry point that funnels readers to the keyword articles below.

### Family Caregiver Support
**URL:** `/resources/family-caregiver-support/`
**Primary service:** `/our-services/respite-care/`
**Primary condition:** `/conditions/caregiver-burnout-support/`
**Article count:** 18 (2 published, 4 Coming Soon, 12 net new)

Covers: caregiver burnout, sibling disagreements, work-caregiving balance, the weight of caregiving, guilt, family meetings, GTA caregiver resources.

### Cost of Care & Planning *(PLANNED — not yet live)*
**URL:** `/resources/cost-of-care-planning/` *(does not exist yet)*
**Article count:** 14 (all net new)

Covers: home care costs in Toronto, long-term care vs. home care comparison, payment models, insurance, financial planning, government programs, tax credits.

⚠️ **Before publishing any article in this cluster, the cluster page itself must be created at `/resources/cost-of-care-planning/`.** Articles cannot exist without a parent cluster page.

## Rules for adding new articles

### Required steps before writing

1. **Confirm the cluster.** Every new article must map to one of the five clusters. No orphan articles.
2. **Check the authority map.** Look up the topic in `AUTHORITY-MAP.md`. If it's already there with a status of "Net New" or "Coming Soon," follow that entry's notes. If it's already "Published," do not duplicate.
3. **Check for cannibalization.** If a similar article already exists or is planned, either merge or differentiate. Two articles competing for the same keyword hurt both.
4. **Confirm the linked service and condition pages exist.** Articles should always link to a parent cluster, a relevant service, and (where applicable) a relevant condition page. If those targets don't exist yet, flag and resolve before writing.

### Status flags and what they mean

| Status | Meaning | Action |
|--------|---------|--------|
| **Published** | Live on site | Skip — do not duplicate |
| **Coming Soon** | Stub page exists with placeholder | Replace stub with full article |
| **Net New** | No page exists yet | Write fresh |
| **Conflict** | Overlaps another page | Merge or skip |
| **Differentiate** | Topic adjacent to existing page | Angle differently before writing |

### Coming Soon governance

Coming Soon stubs must be filled within **60 days** of being created or removed/`noindex`ed. A Coming Soon page that sits empty for months damages trust and SEO. If you can't write the article in 60 days, take down the stub.

## What does NOT belong in a resource cluster

- **Service descriptions.** Those go in `/our-services/`.
- **Condition explainers.** Those go in `/conditions/`.
- **Process pages.** Those go in `/how-care-starts/`.
- **Local SEO pages.** Those go in `/locations/`.
- **Press releases, news, events.** Not part of this site's content strategy. Discuss before adding any.

## Cluster-internal cross-linking

Within a cluster, articles should link to:
- The cluster page itself (one link, near the top or in breadcrumb)
- 1–2 sibling articles in the same cluster (where the topic supports it)
- The cluster's primary service page
- The cluster's primary condition page (where applicable)

See `03-INTERNAL-LINKING-RULES.md` for the full linking model.

## Master Prompt Priority Articles

11 articles (1 pillar + 10 supporting) are the production priority for the Navigating Home Care + Family Caregiver Support clusters. They share an emotional, trust-led voice and form a coherent narrative arc:

| # | Article | Cluster | Status |
|---|---------|---------|--------|
| P | When the Person You Love Needs More Help | Navigating | **Published** (pillar) |
| 1 | The Conversation You Keep Putting Off | Caregiver | **Published** |
| 2 | When Siblings Disagree About Care | Caregiver | Coming Soon |
| 3 | What No One Tells You About the First Week | Navigating | Net New |
| 4 | How to Know When It Is Time *(replaces "Signs Your Parent Needs Home Care")* | Navigating | Coming Soon |
| 5 | The Weight You Are Carrying | Caregiver | Net New |
| 6 | What Good Care Actually Looks Like | Navigating | **Published** |
| 7 | Navigating the System | Navigating | Net New |
| 8 | The Guilt of Getting Help | Caregiver | Net New |
| 9 | When the Situation Changes Overnight | Navigating | Net New |
| 10 | What Trust Actually Means | Navigating | Net New |

When writing these, follow the voice in `07-VOICE-AND-TONE.md` exactly. They are emotional pillars, not keyword articles.
