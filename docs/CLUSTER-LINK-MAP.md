# Cluster & Linking Map

The structural map of all five content clusters, their linking targets, and the current state of published content. **Read this file before writing any new article** to understand where the article sits in the architecture and what it must link to.

For the article-by-article inventory (status, action, notes), see `AUTHORITY-MAP.md`.
For linking rules (anchor text, dedup, Coming Soon policy), see `03-INTERNAL-LINKING-RULES.md`.

Last updated: May 2026

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
| **Published** | 1 (pillar) |
| **Coming Soon stubs on cluster page** | 8 |
| **Net New** | 25 |

**Published articles:**

| Article | URL | Role |
|---------|-----|------|
| When the Person You Love Needs More Help Than You Can Give | `/resources/navigating-home-care/when-parent-needs-more-help/` | **PILLAR** |

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
| **Total articles** | 17 |
| **Published** | 2 |
| **Coming Soon stubs on cluster page** | 4 |
| **Net New** | 11 |

**Published articles:**

| Article | URL | Role |
|---------|-----|------|
| The Conversation You Keep Putting Off | `/resources/family-caregiver-support/talking-to-parent-about-care/` | Master Prompt #1 |
| The Exhaustion You Have Stopped Noticing | `/resources/family-caregiver-support/caregiver-burnout-warning-signs/` | Caregiver Burnout article |

**Article #1 outbound links:**
- Cluster: `/resources/family-caregiver-support/`
- Services: `/our-services/case-management/`, `/our-services/respite-care/`
- Conditions: `/conditions/caregiver-burnout-support/`, `/conditions/dementia-care-at-home/`
- Cross-cluster: `/resources/navigating-home-care/when-parent-needs-more-help/` (pillar)
- Decision: `/how-care-starts/`, `/how-care-starts/first-conversation/`
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
- `/resources/family-caregiver-support/siblings-disagree-parent-care/`
- `/resources/family-caregiver-support/emotional-impact-caregiving/`
- `/resources/family-caregiver-support/sharing-care-responsibilities/`

---

### 3. Dementia & Memory Care

| Field | Value |
|-------|-------|
| **Cluster URL** | `/resources/dementia-memory-care/` |
| **Primary service** | `/our-services/dementia-alzheimers-home-care/` |
| **Primary condition** | `/conditions/dementia-care-at-home/` |
| **Total articles** | 14 |
| **Published** | 3 |
| **Coming Soon stubs on cluster page** | 3 |
| **Net New** | 8 |

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
| **Total articles** | 19 |
| **Published** | 0 |
| **Coming Soon stubs** | 0 |
| **Net New** | 19 |

No published articles yet. Cluster hub page exists.

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
| 2 | When Siblings Disagree About Care | Caregiver | Coming Soon | -- |
| 3 | What No One Tells You About the First Week | Navigating | Net New | -- |
| 4 | How to Know When It Is Time | Navigating | Coming Soon | -- |
| 5 | The Weight You Are Carrying | Caregiver | Net New | -- |
| 6 | What Good Care Actually Looks Like | Navigating | Coming Soon | -- |
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
| Dementia Care at Home | `/conditions/dementia-care-at-home/` |
| Alzheimer's Care | `/conditions/alzheimers-care/` |
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
| Building Your Care Plan | `/how-care-starts/building-your-care-plan/` |
| Meeting Your Care Team | `/how-care-starts/meeting-your-care-team/` |

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

## Known discrepancies (flagged May 2026)

These conflicts between the AUTHORITY-MAP and the live codebase were identified during the creation of this file. The live site is canonical per `AI-CONTEXT.md`.

1. **Dementia #2 in AUTHORITY-MAP:** "How to Talk to a Parent About Memory Loss" is listed as Published but does not exist as a page. The actual published articles are *Early Signs*, *Normal Aging vs. Dementia*, and *Introducing Home Care for Dementia*.
2. **Dementia Coming Soon count:** AUTHORITY-MAP says 2 stubs. The cluster page actually has 3 stubs (including "Late Stage Dementia" which is not in the AUTHORITY-MAP).
3. ~~**Caregiver Burnout redirect:** RESOLVED — standalone article now published at `/resources/family-caregiver-support/caregiver-burnout-warning-signs/`. Redirect removed.~~
4. **Family Caregiver Coming Soon count:** AUTHORITY-MAP says 3 stubs. The cluster page has 4 stubs (including "How Families Can Share Care Responsibilities" and "Emotional Impact of Caregiving").
5. **Article #1 status in cluster table:** The Conversation You Keep Putting Off is Published in the Master Prompt table but still listed as Net New in the Family Caregiver cluster table (row 7).
