# Internal Links Audit — Incomplete or Broken Targets

This document lists internal links that point to pages that either **do not exist (404)** or are **placeholder / not yet completed**, and summarizes **impact on Google** if you leave them as-is.

---

## 1. Links that return 404 (wrong URL or no page)

### 1.1 How Care Starts — wrong slug: `caregiver-matching` vs `matching-caregivers`

**Problem:** Many pages link to `/how-care-starts/caregiver-matching/`, but the actual route is `/how-care-starts/matching-caregivers/` (folder and [step] slug).

**Links to fix (point to non-existent URL):**
- **our-services:** companion-care, dementia-alzheimers-home-care, respite-care, acquired-brain-injury-home-care, personal-support-daily-living, rehabilitation-support, overnight-24-hour-care
- **conditions:** dementia-care-at-home
- **how-care-starts:** care-assessment, matching-caregivers (internal nav), first-conversation, care-begins, pricing-and-funding

**Impact:** Every "Caregiver Matching" sidebar/link on condition and service pages leads to 404.

---

### 1.2 How Care Starts — pages that don’t exist: `your-care-plan`, `ongoing-support`

**Problem:** Linked from several How Care Starts step pages; no route or `[step]` slug for these.

**Links to fix:**
- `/how-care-starts/your-care-plan/` — linked from care-assessment, matching-caregivers, care-begins, first-conversation (sidebar + “Next”)
- `/how-care-starts/ongoing-support/` — linked from matching-caregivers, care-assessment, care-begins, pricing-and-funding (sidebar + “Next”)

**Impact:** Users following the “How Care Starts” flow hit 404 on “Your Care Plan” and “Ongoing Support”.

---

### 1.3 Location city URLs — missing `-home-care` suffix

**Problem:** City pages are built only for slugs with `-home-care` (e.g. `north-york-home-care`). Most of the site links to short slugs (e.g. `north-york`, `markham`), which do not exist.

**Actual routes (work):**
- `/locations/toronto/`, `/locations/york-region/`, `/locations/peel-region/` (region pages)
- `/locations/toronto/north-york-home-care/`, `.../scarborough-home-care/`, `.../etobicoke-home-care/`
- `/locations/york-region/markham-home-care/`, `.../richmond-hill-home-care/`
- `/locations/peel-region/mississauga-home-care/`

**Broken links (404):** Used across many condition and service pages in body copy and sidebars:
- `/locations/toronto/north-york/`
- `/locations/toronto/scarborough/`
- `/locations/toronto/etobicoke/`
- `/locations/york-region/markham/`
- `/locations/york-region/richmond-hill/`
- `/locations/peel-region/mississauga/`

**Impact:** Almost every “North York”, “Scarborough”, “Etobicoke”, “Markham”, “Richmond Hill”, “Mississauga” link on condition/service pages goes to 404. Only the main Locations hub uses the correct `-home-care` URLs.

---

## 2. Links that work but point to placeholder / thin content

### 2.1 How Care Starts — generic [step] placeholder pages

These URLs are valid (served by `app/how-care-starts/[step]/page.tsx`) but use a generic template, not full content:

- `/how-care-starts/book-a-consultation/`
- `/how-care-starts/first-week-of-care/`
- `/how-care-starts/referral-process/`

(Also: `care-assessment`, `matching-caregivers`, `pricing-and-funding` have dedicated pages with real content.)

**Impact:** Low for SEO if the template has unique titles/meta; higher if content is thin or duplicate. UX suffers if the page feels unfinished.

---

### 2.2 Resources — placeholder guides (dynamic [guide] template)

These URLs are valid (served by `app/resources/[category]/[guide]/page.tsx`) but show generic placeholder text (“Reading time: ~X minutes · Replace with summary line”):

- `/resources/hospital-discharge-guides/transitioning-home-from-hospital/`
- `/resources/family-caregiving-guides/caring-for-your-loved-one/`
- `/resources/safety-at-home-guides/fall-prevention-at-home/`

**Linked from:**
- Resources hub (Dementia & Memory Care only has one real article; other three categories link to these placeholders)
- post-hospital-recovery (transitioning-home-from-hospital)
- companion-care (caring-for-your-loved-one)

**Impact:** Google can index them; risk of thin/duplicate content and weaker relevance until replaced with real articles.

---

## 3. Impact on Google if you leave them as-is

| Issue | SEO / Google impact | UX impact |
|-------|----------------------|-----------|
| **404s (caregiver-matching, your-care-plan, ongoing-support)** | Crawl budget wasted on dead ends; internal links pass no value to targets; Search Console may report “Not found”. Can slightly hurt trust if many important links are broken. | High — users hit error pages in key flows. |
| **404s (location city links without -home-care)** | Same as above; many internal links to location pages go nowhere. Location-themed pages look less connected. | High — “Toronto area” links fail across the site. |
| **Placeholder How Care Starts steps** | Lower if titles/descriptions are unique. Risk of thin content or near-duplicate template text. | Medium — steps feel unfinished. |
| **Placeholder resource guides** | Indexed as thin content; can dilute quality signals and relevance until replaced with real guides. | Medium — “Read guide” leads to placeholder. |

**Summary:**

- **Leaving 404s as-is:** Google will still index the rest of the site, but broken links add no value, can show up in Search Console, and over time can slightly hurt crawl efficiency and perceived quality. **User impact is high** (broken navigation and location links).
- **Leaving placeholders as-is:** Pages are indexable; risk is **thin or duplicate content** and a weaker content signal until those URLs have proper articles. **User impact is medium** (links work but content is clearly incomplete).

**Recommendations (short term):**

1. **Fix 404s that are easy wins:**  
   - Point every `/how-care-starts/caregiver-matching/` link to `/how-care-starts/matching-caregivers/`.  
   - Either add redirects or change links so city links use the `-home-care` slugs (e.g. `north-york` → `north-york-home-care`), or temporarily point city links to the region page (e.g. `/locations/toronto/`) until city pages are finalized.
2. **Your Care Plan / Ongoing Support:**  
   - Either create minimal “Coming soon” pages with 200 + canonical and noindex, or remove/hide these links until the pages exist (so you don’t send users or Google to 404s).
3. **Placeholder resource guides:**  
   - Either noindex the three placeholder guide URLs until content is ready, or leave as-is and accept some thin-content risk until you replace them with real articles.

If you want, the next step can be a concrete list of file-and-line edits for the caregiver-matching and location link fixes.
