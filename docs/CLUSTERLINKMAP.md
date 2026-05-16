# Cluster & Linking Map

The structural map of all five content clusters, their linking targets, and the current state of published content. **Read this file before writing any new article** to understand where the article sits in the architecture and what it must link to.

For the article-by-article inventory (status, action, notes), see `AUTHORITY-MAP.md`.
For linking rules (anchor text, dedup, Coming Soon policy), see `03-INTERNAL-LINKING-RULES.md`.

Last updated: May 16, 2026 (Published Art. 2: When Siblings Disagree About a Parent's Care)

---

## Authority flow

```
EDUCATIONAL ARTICLES (trust + expertise)
        |
        v
CLUSTER HUB PAGES (organize + discover)
        |
    +---+---+
    v       v
CONDITION   SERVICE
 PAGES       PAGES
    |         |
    +----+----+
         v
  /how-care-starts/  (process clarity)
         |
         v
     /contact/  (conversion)
```

Every internal link on the site should serve this flow. Authority moves from educational content toward conversion pages. Links that move sideways (article-to-article within a cluster) keep readers in the ecosystem. Links that move backward (service page linking to an article) build trust before asking for action.

---

## The five clusters

### 1. Navigating Home Care (largest cluster)

| Field | Value |
|-------|-------|
| **Cluster URL** | `/resources/navigating-home-care/` |
| **Primary services** | `/our-services/case-management/` + multiple |
| **Primary conditions** | Multiple (no single primary) |
| **Total articles** | 34 |
| **Published** | 2 (pillar + 1 article) |
| **Coming Soon stubs on cluster page** | 8 |
| **Net New** | 24 |

**Published articles:**

| Article | URL | Role |
|---------|-----|------|
| When the Person You Love Needs More Help Than You Can Give | `/resources/navigating-home-care/when-parent-needs-more-help/` | **PILLAR** |
| What Good Care Actually Looks Like | `/resources/navigating-home-care/recognizing-quality-home-care/` | Master Prompt #6 |

**Article #6 outbound links:**
- Cluster: `/resources/navigating-home-care/`
- Services: `/our-services/personal-support-daily-living/`, `/our-services/case-management/`
- Cross-cluster: `/resources/family-caregiver-support/caregiver-burnout-warning-signs/` (burnout article)
- Sibling: `/resources/navigating-home-care/when-parent-needs-more-help/` (pillar)
- Decision: `/how-care-starts/`, `/how-care-starts/matching-caregivers/`
- Conversion: `/contact/`

**Pillar outbound links:**
- Cluster: `/resources/navigating-home-care/`
- Services: `/our-services/case-management/`, `/our-services/dementia-alzheimers-home-care/`, `/our-services/hospital-discharge-support/`, `/our-services/rehabilitation-support/`, `/our-services/palliative-home-care/`
- Conditions: `/conditions/caregiver-burnout-support/`, `/conditions/frailty-fall-prevention/`
- Cross-cluster: `/resources/dementia-memory-care/`, `/resources/family-caregiver-support/`, `/resources/brain-injury-rehabilitation/`
- Decision: `/how-care-starts/`, `/how-care-starts/first-conversation/`
- Conversion: `/contact/`

**Coming Soon stubs (live but empty -- do NOT link to these from articles):**
- `/resources/navigating-home-care/signs-parent-needs-home-care/`
- `/resources/navigating-home-care/when-a-parent-resists-home-care/`
- `/resources/navigating-home-care/choosing-home-care-provider-ontario/`
- `/resources/navigating-home-care/private-vs-public-home-care-ontario/`
- `/resources/navigating-home-care/ontario-health-athome-funded-care/`
- `/resources/navigating-home-care/questions-before-hiring-home-care/`
- `/resources/navigating-home-care/home-care-cost-ontario/`
- `/resources/navigating-home-care/what-does-a-psw-do/`

---

### 2. Family Caregiver Support

| Field | Value |
|-------|-------|
| **Cluster URL** | `/resources/family-caregiver-support/` |
| **Primary service** | `/our-services/respite-care/` |
| **Primary condition** | `/conditions/caregiver-burnout-support/` |
| **Total articles** | 18 |
| **Published** | 3 |
| **Coming Soon stubs on cluster page** | 3 |
| **Net New** | 12 |

**Published articles:**

| Article | URL | Role |
|---------|-----|------|
| The Conversation You Keep Putting Off | `/resources/family-caregiver-support/talking-to-parent-about-care/` | Master Prompt #1 |
| The Exhaustion You Have Stopped Noticing | `/resources/family-caregiver-support/caregiver-burnout-warning-signs/` | Caregiver Burnout article |
| When Siblings Disagree About a Parent's Care | `/resources/family-caregiver-support/siblings-disagree-parent-care/` | Master Prompt #2 |

**Article #1 outbound links:**
- Cluster: `/resources/family-caregiver-support/`
- Services: `/our-services/case-management/`, `/our-services/respite-care/`
- Conditions: `/conditions/caregiver-burnout-support/`, `/conditions/dementia-care-at-home/`
- Cross-cluster: `/resources/navigating-home-care/when-parent-needs-more-help/` (pillar)
- Decision: `/how-care-starts/`, `/how-care-starts/first-conversation/`
- Conversion: `/contact/`

**Art. 2 (siblings) outbound links:**
- Cluster: `/resources/family-caregiver-support/`
- Services: `/our-services/respite-care/`, `/our-services/case-management/`
- Conditions: `/conditions/caregiver-burnout-support/`, `/conditions/dementia-care-at-home/`
- Cross-cluster: `/resources/navigating-home-care/when-parent-needs-more-help/` (pillar)
- Sibling: `/resources/family-caregiver-support/caregiver-burnout-warning-signs/`, `/resources/family-caregiver-support/talking-to-parent-about-care/`
- Decision: `/how-care-starts/`
- Conversion: `/contact/`

**Burnout article outbound links:**
- Cluster: `/resources/family-caregiver-support/`
- Services: `/our-services/respite-care/`, `/our-services/companion-care/`
- Conditions: `/conditions/caregiver-burnout-support/`
- Cross-cluster: `/resources/navigating-home-care/when-parent-needs-more-help/` (pillar)
- Sibling: `/resources/family-caregiver-support/talking-to-parent-about-care/` (Article #1)
- Decision: `/how-care-starts/`, `/how-care-starts/first-conversation/`
- Conversion: `/contact/`

**Coming Soon stubs (do NOT link to these):**
- `/resources/family-caregiver-support/balancing-work-and-caregiving/`
- `/resources/family-caregiver-support/emotional-impact-caregiving/`
- `/resources/family-caregiver-support/sharing-care-responsibilities/`

---

### 3. Dementia & Memory Care

| Field | Value |
|-------|-------|
| **Cluster URL** | `/resources/dementia-memory-care/` |
| **Primary service** | `/our-services/dementia-alzheimers-home-care/` |
| **Primary condition** | `/conditions/dementia-care-at-home/` |
| **Total articles** | 16 |
| **Published** | 3 |
| **Coming Soon stubs on cluster page** | 3 |
| **Net New** | 10 |

**Published articles:**

| Article | URL |
|---------|-----|
| Early Signs of Dementia in a Parent | `/resources/dementia-memory-care/early-signs-of-dementia-in-a-parent/` |
| Normal Aging vs. Dementia: What's the Difference? | `/resources/dementia-memory-care/normal-aging-vs-dementia/` |
| How to Introduce Home Care to a Parent with Dementia | `/resources/dementia-memory-care/introducing-home-care-dementia/` |

**Coming Soon stubs (do NOT link to these):**
- `/resources/dementia-memory-care/managing-dementia-behaviour-changes/`
- `/resources/dementia-memory-care/communication-strategies-dementia/`
- `/resources/dementia-memory-care/late-stage-dementia/`

---

### 4. Brain Injury & Rehabilitation

| Field | Value |
|-------|-------|
| **Cluster URL** | `/resources/brain-injury-rehabilitation/` |
| **Primary service** | `/our-services/acquired-brain-injury-home-care/` |
| **Primary condition** | `/conditions/acquired-brain-injury-support/` |
| **Total articles** | 20 |
| **Published** | 0 |
| **Coming Soon stubs on cluster page** | 0 |
| **Net New** | 20 |

No published articles yet. Cluster hub page lists no Coming Soon cards (six planned topics remain **Net New** in `AUTHORITY-MAP.md` until published).

**Planned article URLs (not live — use `<!-- FUTURE-LINK -->` until pages exist):**
- `/resources/brain-injury-rehabilitation/life-after-brain-injury/`
- `/resources/brain-injury-rehabilitation/stroke-recovery-at-home/`
- `/resources/brain-injury-rehabilitation/cognitive-emotional-changes-brain-injury/`
- `/resources/brain-injury-rehabilitation/returning-home-after-rehab/`
- `/resources/brain-injury-rehabilitation/rehabilitation-support-worker/`
- `/resources/brain-injury-rehabilitation/mobility-support-after-surgery/`

---

### 5. Cost of Care & Planning (PLANNED -- NOT YET LIVE)

| Field | Value |
|-------|-------|
| **Cluster URL** | `/resources/cost-of-care-planning/` -- **DOES NOT EXIST** |
| **Total articles** | 14 |
| **Published** | 0 |
| **Net New** | 14 |

**Blocked.** The cluster page must be created before any article in this cluster can be published. Do not write articles for this cluster until the hub page is live.

---

## Master Prompt priority articles

These 11 articles are the production priority. They share an emotional, trust-led voice and form a narrative arc across the Navigating and Caregiver clusters.

| # | Article | Cluster | Status | URL |
|---|---------|---------|--------|-----|
| **P** | When the Person You Love Needs More Help | Navigating | **Published** | `/resources/navigating-home-care/when-parent-needs-more-help/` |
| 1 | The Conversation You Keep Putting Off | Caregiver | **Published** | `/resources/family-caregiver-support/talking-to-parent-about-care/` |
| 2 | When Siblings Disagree About Care | Caregiver | **Published** | `/resources/family-caregiver-support/siblings-disagree-parent-care/` |
| 3 | What No One Tells You About the First Week | Navigating | Net New | -- |
| 4 | How to Know When It Is Time | Navigating | Coming Soon | -- |
| 5 | The Weight You Are Carrying | Caregiver | Net New | -- |
| 6 | What Good Care Actually Looks Like | Navigating | **Published** | `/resources/navigating-home-care/recognizing-quality-home-care/` |
| 7 | Navigating the System | Navigating | Net New | -- |
| 8 | The Guilt of Getting Help | Caregiver | Net New | -- |
| 9 | When the Situation Changes Overnight | Navigating | Net New | -- |
| 10 | What Trust Actually Means | Navigating | Net New | -- |

---

## Required links per article type

### Every resource article must link to:

1. **Parent cluster page** (1 link, near top or in breadcrumb context)
2. **Primary service page** for the cluster (1 link)
3. **Relevant condition page** (1 link, when applicable)
4. **1-2 published sibling articles** in the same cluster
5. **Optionally 1 cross-cluster article** (when the topic genuinely supports it)
6. **`/how-care-starts/`** or a sub-page (decision route)
7. **`/contact/`** (conversion, typically in CTA)

### Link budget by article type:

| Type | Internal links |
|------|---------------|
| Pillar | 8-15 |
| Standard cluster article | 4-8 |
| Short article (under 800 words) | 3-5 |

### Do NOT link to:

- Coming Soon stubs (use `<!-- FUTURE-LINK -->` comments instead)
- The article's own URL (breadcrumb is exempt)
- The same target twice on one page
- External sites (rare exceptions for Ontario Health atHome)

---

## Cross-cluster linking opportunities

| From cluster | To cluster | When |
|-------------|-----------|------|
| Navigating -> Caregiver | When an article discusses family emotional burden |
| Caregiver -> Navigating | When an article references practical care decisions |
| Navigating -> Dementia | When an article touches cognitive decline specifically |
| Dementia -> Navigating | When an article's reader needs the broader decision framework |
| Navigating -> Brain Injury | When discussing hospital discharge or rehabilitation |
| Any -> Cost of Care | **BLOCKED** -- cluster page does not exist yet |

---

## Service and condition pages (link targets)

### Service pages (12 total -- all live)

| Service | URL |
|---------|-----|
| Dementia & Alzheimer's Home Care | `/our-services/dementia-alzheimers-home-care/` |
| Acquired Brain Injury Home Care | `/our-services/acquired-brain-injury-home-care/` |
| Rehabilitation Support | `/our-services/rehabilitation-support/` |
| Hospital Discharge Support | `/our-services/hospital-discharge-support/` |
| Palliative Home Care | `/our-services/palliative-home-care/` |
| Personal Support & Daily Living | `/our-services/personal-support-daily-living/` |
| Companion Care | `/our-services/companion-care/` |
| Respite Care | `/our-services/respite-care/` |
| Overnight & 24-Hour Care | `/our-services/overnight-24-hour-care/` |
| Case Management | `/our-services/case-management/` |
| Light Housekeeping | `/our-services/light-housekeeping/` |
| Downsizing & Transition Support | `/our-services/downsizing-transition-support/` |

### Condition pages (9 total -- all live)

| Condition | URL |
|-----------|-----|
| Dementia & Alzheimer's Care | `/conditions/dementia-care-at-home/` |
| Stroke Recovery | `/conditions/stroke-recovery/` |
| Parkinson's Support | `/conditions/parkinsons-support/` |
| Acquired Brain Injury Support | `/conditions/acquired-brain-injury-support/` |
| Palliative & Serious Illness | `/conditions/palliative-serious-illness/` |
| Frailty & Fall Prevention | `/conditions/frailty-fall-prevention/` |
| Post-Hospital Recovery | `/conditions/post-hospital-recovery/` |
| Caregiver Burnout Support | `/conditions/caregiver-burnout-support/` |

### Decision pages (all live)

| Page | URL |
|------|-----|
| How Care Starts | `/how-care-starts/` |
| First Conversation | `/how-care-starts/first-conversation/` |
| Care Assessment | `/how-care-starts/care-assessment/` |
| Matching Caregivers | `/how-care-starts/matching-caregivers/` |
| Care Begins | `/how-care-starts/care-begins/` |
| Your Care Plan | `/how-care-starts/your-care-plan/` |
| Pricing and Funding | `/how-care-starts/pricing-and-funding/` |
| Referral Process | `/how-care-starts/referral-process/` |
| Ongoing Support | `/how-care-starts/ongoing-support/` |

---

## Pre-draft checklist

Before writing any new article, confirm:

- [ ] Article exists in `AUTHORITY-MAP.md` -- check status (Published / Coming Soon / Net New)
- [ ] No cannibalization -- no other article (published or planned) targets the same keyword
- [ ] Cluster page exists and is live
- [ ] Slug follows `05-URL-CONVENTIONS.md` (3-6 words, keyword-aware, not H1-literal)
- [ ] If replacing a Coming Soon stub, slug matches the stub exactly
- [ ] All proposed internal link targets are verified live (not 404, not Coming Soon)
- [ ] Link count within budget (4-8 for standard, 8-15 for pillar)
- [ ] No cross-links to Cost of Care cluster (not yet live)
- [ ] Schema type is correct per `04-SCHEMA-STANDARDS.md`
- [ ] Voice matches `07-VOICE-AND-TONE.md`

---

## How to update this file

When an article publishes:
1. Move it to the "Published articles" table for its cluster
2. Add its outbound links
3. Update the Master Prompt table status
4. Update counts in the cluster summary table
5. Update "Last updated" at the top

When a Coming Soon stub is filled:
1. Move it from "Coming Soon stubs" to "Published articles"
2. Remove the "do NOT link" note for that URL
3. Update counts

When a new cluster page is created:
1. Update that cluster's section from "PLANNED" to active
2. Unblock its articles for writing

---

## Known discrepancies (audited May 2026)

These conflicts between the AUTHORITY-MAP and the live codebase were identified during the creation of this file. The live site is canonical per `AI-CONTEXT.md`.

1. ~~**Dementia #2 in AUTHORITY-MAP:** RESOLVED — phantom entry removed. AUTHORITY-MAP now correctly lists the 3 published dementia articles.~~
2. ~~**Dementia Coming Soon count:** RESOLVED — AUTHORITY-MAP now correctly shows 3 stubs matching the cluster page.~~
3. ~~**Caregiver Burnout redirect:** RESOLVED — standalone article now published at `/resources/family-caregiver-support/caregiver-burnout-warning-signs/`. Redirect removed.~~
4. ~~**Family Caregiver Coming Soon count:** RESOLVED — AUTHORITY-MAP now correctly shows 4 stubs matching the cluster page.~~
5. ~~**Article #1 status in cluster table:** RESOLVED — Article #1 is now Published in both the Master Prompt table and the Family Caregiver cluster table.~~

### Active issues (May 2026 resync)

6. **Coming Soon stubs have no standalone pages.** All 15 "Coming Soon" entries exist only as grayed-out cards on cluster pages with `pointer-events: none`. None have their own `page.tsx`. The AUTHORITY-MAP definition "Stub page exists" is technically inaccurate — a more precise description is "Listed on cluster page but no standalone page." Two Navigating stubs (`questions-before-hiring-home-care`, `when-a-parent-resists-home-care`) additionally have redirects in `vercel.json` pointing back to the cluster page.
7. **Orphan article.** `/resources/spring-home-safety-checklist-for-seniors/` exists as a standalone page but is not listed in any cluster in the AUTHORITY-MAP. It sits directly under `/resources/` rather than inside a cluster path.
8. **Alzheimer's condition page redirect conflict.** RESOLVED — standalone `page.tsx` deleted; `/conditions/alzheimers-care/` now 301-redirects to `/conditions/dementia-care-at-home/` as intended. Alzheimer's content lives as a subsection of the Dementia pillar page.
