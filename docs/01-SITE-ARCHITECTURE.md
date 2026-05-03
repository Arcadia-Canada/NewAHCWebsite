# 01 — Site Architecture

The Arcadia Home Care website uses **six distinct section types**. They are not interchangeable. Content planning must respect the boundaries between them.

## The six sections

| Section | URL Pattern | Role |
|---------|-------------|------|
| **Resources** (knowledge clusters) | `/resources/[cluster-slug]/[article-slug]/` | Educational articles grouped by topic. All SEO content lives here. 5 clusters (4 live, 1 planned). |
| **Services** | `/our-services/[service-slug]/` | 12 service pages. Conversion-focused. Not content pillars. Not interchangeable with resource articles. |
| **Conditions** | `/conditions/[condition-slug]/` | 8 condition pages. Education + trust + route to service. Sit between Resources and Services in the authority chain. |
| **Locations** | `/locations/[region-slug]/` | 5 regional pages (Toronto, York, Peel, Durham, Halton). Local SEO. |
| **How Care Starts** | `/how-care-starts/` | Journey/process pages. Reduces uncertainty. Not a content cluster. |
| **Contact / Consultation** | `/contact/` | Conversion endpoint. Every authority chain leads here. |

## Which section a new page belongs in

Decision tree:

- Is it educational content for families researching a topic? → **Resources**
- Is it describing a specific service Arcadia offers? → **Services**
- Is it explaining a medical condition Arcadia supports? → **Conditions**
- Is it about a specific city or region? → **Locations**
- Is it about the process of starting care with Arcadia? → **How Care Starts**
- Is it a contact form, consultation booking, or referral form? → **Contact**

If the answer doesn't fit any of these, **stop and confirm with the site owner before creating it**. The architecture above is fixed. New section types are not added without strategic approval.

## The authority chain

Authority flows downhill:

```
Resources (educational content)
    ↓
Conditions (trust + education for medical topics)
    ↓
Services (specific offerings)
    ↓
How Care Starts (process & journey)
    ↓
Contact (conversion)
```

Every educational article should ultimately funnel readers toward the relevant service or contact page — not directly, but through the natural flow of trust-building.

## Live cluster URLs

The five resource clusters and their canonical URLs:

| Cluster | URL | Status |
|---------|-----|--------|
| Dementia & Memory Care | `/resources/dementia-memory-care/` | Live |
| Brain Injury & Rehabilitation | `/resources/brain-injury-rehabilitation/` | Live |
| Navigating Home Care | `/resources/navigating-home-care/` | Live |
| Family Caregiver Support | `/resources/family-caregiver-support/` | Live |
| Cost of Care & Planning | `/resources/cost-of-care-planning/` | **Planned** — cluster page must be created before publishing any article in this cluster |

## Live service URLs

The 12 service pages currently on the site (verified live):

- `/our-services/dementia-alzheimers-home-care/`
- `/our-services/acquired-brain-injury-home-care/`
- `/our-services/rehabilitation-support/`
- `/our-services/hospital-discharge-support/`
- `/our-services/palliative-home-care/`
- `/our-services/case-management/`

*Note: 6 additional services exist per the homepage's "View All 12 Services" link. Verify slugs at `/our-services/` before linking to any service not in the list above.*

## Live condition URLs

All 8 condition pages are live (Alzheimer's merged into Dementia):

| Condition | URL |
|-----------|-----|
| Dementia & Alzheimer's Care | `/conditions/dementia-care-at-home/` |
| Stroke Recovery | `/conditions/stroke-recovery/` |
| Parkinson's Support | `/conditions/parkinsons-support/` |
| Acquired Brain Injury Support | `/conditions/acquired-brain-injury-support/` |
| Palliative & Serious Illness | `/conditions/palliative-serious-illness/` |
| Post-Hospital Recovery | `/conditions/post-hospital-recovery/` |
| Frailty & Fall Prevention | `/conditions/frailty-fall-prevention/` |
| Caregiver Burnout Support | `/conditions/caregiver-burnout-support/` |

## Live location URLs

| Region | URL |
|--------|-----|
| Toronto | `/locations/toronto/` |
| York Region | `/locations/york-region/` |
| Peel Region | `/locations/peel-region/` |
| Durham Region | `/locations/durham-region/` |
| Halton Region | `/locations/halton-region/` |

## What was eliminated from the architecture

These cluster names appeared in earlier blueprints. **Do not use them.** They have been removed from the architecture:

- ❌ "Aging at Home / Senior Care" — not a live cluster. All 20 articles redistributed to Navigating Home Care or Family Caregiver Support.
- ❌ "Home Care Services" as a content pillar — Services is a section, not a content cluster.
- ❌ "Dementia & Alzheimer's Care" as a cluster name — the live cluster is "Dementia & Memory Care."
- ❌ "Family Caregiver Guidance" as a cluster name — the live cluster is "Family Caregiver Support."
