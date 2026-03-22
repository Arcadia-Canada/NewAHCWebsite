# Proposed exact edits — broken internal links (APPLIED)

## A. caregiver-matching → matching-caregivers (fix 404)

| File | Change |
|------|--------|
| All files below | Replace every `/how-care-starts/caregiver-matching/` with `/how-care-starts/matching-caregivers/` |

**Files:**  
`app/our-services/companion-care/page.tsx`, `app/our-services/dementia-alzheimers-home-care/page.tsx`, `app/our-services/respite-care/page.tsx`, `app/our-services/acquired-brain-injury-home-care/page.tsx`, `app/our-services/personal-support-daily-living/page.tsx`, `app/our-services/rehabilitation-support/page.tsx`, `app/our-services/overnight-24-hour-care/page.tsx`, `app/conditions/dementia-care-at-home/page.tsx`, `app/how-care-starts/care-assessment/page.tsx`, `app/how-care-starts/matching-caregivers/page.tsx`, `app/how-care-starts/first-conversation/page.tsx`, `app/how-care-starts/care-begins/page.tsx`, `app/how-care-starts/pricing-and-funding/page.tsx`

**matching-caregivers/page.tsx only:** Also update canonical and schema URL from `caregiver-matching` to `matching-caregivers` (comment line 1 and alternates/schema lines 15 and 51).

---

## B. your-care-plan and ongoing-support (fix 404 — point to hub for now)

| File | Change |
|------|--------|
| How Care Starts step pages | Replace `/how-care-starts/your-care-plan/` with `/how-care-starts/` and `/how-care-starts/ongoing-support/` with `/how-care-starts/` so links do not 404. |
| care-assessment/page.tsx | Change "Next: Your Care Plan →" button: href to `/how-care-starts/matching-caregivers/`, text to "Next: Matching Caregivers →". |
| care-begins/page.tsx | Change "Next: Ongoing Support →" button: href to `/how-care-starts/pricing-and-funding/`, text to "Next: Pricing and Funding →". |

**Files for your-care-plan/ongoing-support link replacement:**  
`app/how-care-starts/care-assessment/page.tsx`, `app/how-care-starts/matching-caregivers/page.tsx`, `app/how-care-starts/care-begins/page.tsx`, `app/how-care-starts/pricing-and-funding/page.tsx`, `app/how-care-starts/first-conversation/page.tsx`

---

## C. Location city links — add -home-care suffix (fix 404)

In every file that links to city pages, replace:

| From | To |
|------|----|
| `/locations/toronto/north-york/` | `/locations/toronto/north-york-home-care/` |
| `/locations/toronto/scarborough/` | `/locations/toronto/scarborough-home-care/` |
| `/locations/toronto/etobicoke/` | `/locations/toronto/etobicoke-home-care/` |
| `/locations/york-region/markham/` | `/locations/york-region/markham-home-care/` |
| `/locations/york-region/richmond-hill/` | `/locations/york-region/richmond-hill-home-care/` |
| `/locations/peel-region/mississauga/` | `/locations/peel-region/mississauga-home-care/` |

**Files:**  
`app/our-services/palliative-home-care/page.tsx`, `app/conditions/alzheimers-care/page.tsx`, `app/conditions/frailty-fall-prevention/page.tsx`, `app/conditions/post-hospital-recovery/page.tsx`, `app/conditions/palliative-serious-illness/page.tsx`, `app/our-services/downsizing-transition-support/page.tsx`, `app/conditions/caregiver-burnout-support/page.tsx`, `app/our-services/dementia-alzheimers-home-care/page.tsx`, `app/our-services/hospital-discharge-support/page.tsx`, `app/conditions/stroke-recovery/page.tsx`, `app/conditions/acquired-brain-injury-support/page.tsx`, `app/how-care-starts/referral-process/referral-form-page.tsx`, `app/our-services/personal-support-daily-living/page.tsx`, `app/our-services/companion-care/page.tsx`, `app/our-services/respite-care/page.tsx`, `app/our-services/acquired-brain-injury-home-care/page.tsx`, `app/our-services/overnight-24-hour-care/page.tsx`, `app/our-services/light-housekeeping/page.tsx` (if it has location links)

---

Applying all edits next.
