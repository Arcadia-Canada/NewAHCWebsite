# Site Audit Tracker

Audit completed: June 9, 2026. All items identified from codebase review.
Last updated: June 9, 2026

Track status with: `[ ]` Not started · `[~]` In progress · `[x]` Done

---

## Priority 1 — Quick wins (under 30 min each)

### Voice and copy

- [x] **Fix `lang` attribute** — `app/layout.tsx` line 43: change `lang="en"` to `lang="en-CA"` per locale standard in `AI-CONTEXT.md`
- [x] **Clean em dashes from homepage** — `app/page.tsx` still has `\u2014` / `&mdash;` in hero body, service card descriptions, DifferenceSection pillars, Locations section, and CTA section. Apply the same rule as the published articles.
- [x] **Replace "loved one" on homepage** — appears in at least 3 service card descriptions and the CTA section. Replace with "your parent," "the person you care for," or restructure the sentence. Ref: `docs/07-VOICE-AND-TONE.md`.
- [x] **Assign orphan article to a cluster** — `/resources/spring-home-safety-checklist-for-seniors/` is not in any cluster. Assign to Navigating Home Care or mark as standalone seasonal content and add it to `AUTHORITY-MAP.md`.

### Technical / SEO

- [x] **Fix `lang` attribute** (see above — one fix covers both)
- [ ] **Update hardcoded review count** — Google rating (4.9, 41 reviews) appears in three places: homepage schema (`app/page.tsx`), hero badge, and review widget. Verify the current count on Google and update all three if needed.

---

## Priority 2 — Coming Soon stubs (overdue since May 21, 2026)

- [x] **All 11 overdue Coming Soon cards removed** from cluster hubs (2026-06-09). Two dead redirects also removed from `redirects.json`. All 11 topics converted to Net New in `AUTHORITY-MAP.md`.

### ~~Navigating Home Care cluster~~

- [x] When a Parent Resists Home Care
- [x] How to Choose a Home Care Provider in Ontario
- [x] Private vs. Public Home Care in Ontario
- [x] Understanding Ontario Health atHome
- [x] Questions to Ask Before Hiring Home Care

### ~~Family Caregiver Support cluster~~

- [x] Balancing Work and Caregiving
- [x] The Emotional Impact of Caring for Aging Parents
- [x] How Families Can Share Care Responsibilities

### ~~Dementia & Memory Care cluster~~

- [x] Managing Behaviour Changes in Dementia
- [x] Communication Strategies for Dementia
- [x] Late Stage Dementia: What Families Need to Know

---

## Priority 3 — UI and design

- [x] **Consolidate duplicate review sections** — Removed `GoogleReviewsWidget` (kept `TestimonialsCarousel`). Also removed dead `googleReviews` array and the function. Google badge/rating still visible in hero.
- [x] **Add low-commitment CTA above the fold** — Added "Not sure where to start? Read our guides for families →" text link pointing to `/resources/` below the hero buttons.
- [x] **Reconsider service card emoji** — Replaced `⚡` (brain injury) with 🩻 and `📈` (rehabilitation) with 💪.

---

## Priority 4 — Content strategy (articles to write)

### Master Prompt series — remaining 4 articles

These complete the emotional narrative arc. Should be written in order.

- [ ] **Art. 7 — Navigating the System** (Navigating cluster) — Net New
- [ ] **Art. 8 — The Guilt of Getting Help** (Caregiver cluster) — Net New
- [ ] **Art. 9 — When the Situation Changes Overnight** (Navigating cluster) — Net New
- [ ] **Art. 10 — What Trust Actually Means** (Navigating cluster) — Net New

### Brain Injury cluster — highest strategic gap

0 of 20 articles published. Arcadia's clinical differentiator in this area is not reflected in the content. Suggested first three:

- [ ] **Life After Acquired Brain Injury: A Family Guide** — planned URL `/resources/brain-injury-rehabilitation/life-after-brain-injury/`
- [ ] **Stroke Recovery at Home: What to Expect** — planned URL `/resources/brain-injury-rehabilitation/stroke-recovery-at-home/`
- [ ] **Returning Home After Rehabilitation** — planned URL `/resources/brain-injury-rehabilitation/returning-home-after-rehab/`

### Coming Soon stubs (see Priority 2 above — write or remove)

---

## Priority 5 — Governance and process

- [x] **Create Cost of Care cluster page** — `app/resources/cost-of-care-planning/page.tsx` created 2026-06-09. Shows placeholder until first article publishes; links to existing cost guide in Navigating cluster.
- [x] **Confirm `CLUSTERLINKMAP.md` rename is consistent** — Updated all 6 files that still referenced the old `CLUSTER-LINK-MAP.md` name (`AI-CONTEXT.md`, `CURSOR-CONTENT-PROMPTS.md`, `06-PUBLISHING-CHECKLIST.md`, `08-IMPLEMENTATION-BLUEPRINT.md`, `09-CLUSTER-INTEGRITY-RULES.md`, `11-SITE-AUDIT-LIVE-VS-DOCS.md`).
- [x] **Add em-dash audit step to article pre-publish review** — Rule already in `06-PUBLISHING-CHECKLIST.md` (step 1.4) and standard prompt in `CURSOR-CONTENT-PROMPTS.md`. Added to shorter prompt variant as well (2026-06-09).

---

## Completed

| Date | Item |
|------|------|
| 2026-05-16 | Publish Art. 2: When Siblings Disagree About a Parent's Care |
| 2026-05-16 | Publish Art. 3: What No One Tells You About the First Week of Home Care |
| 2026-05-16 | Remove em dashes from Art. 2 (siblings article) |
| 2026-05-16 | Add em-dash ban to `docs/07-VOICE-AND-TONE.md`, `.cursorrules`, `docs/06-PUBLISHING-CHECKLIST.md`, `docs/CURSOR-CONTENT-PROMPTS.md` |
| 2026-05-22 | Publish Art. 4: Signs Your Parent Needs Home Care |
| 2026-05-22 | Publish Art. 5: The Weight You Are Carrying |
| 2026-05-22 | Publish How Much Does Home Care Cost in Ontario? |
| 2026-05-22 | Publish What Does a PSW Actually Do? |
| 2026-06-09 | Remove em dashes from Art. 3 (first week article) |
| 2026-06-09 | Fix `lang` attribute — `app/layout.tsx` changed to `lang="en-CA"` |
| 2026-06-09 | Remove em dashes from homepage (`app/page.tsx`) — 16 instances replaced |
| 2026-06-09 | Replace "loved one" on homepage (`app/page.tsx`) — 7 instances replaced |
| 2026-06-09 | Assign spring safety checklist to Navigating Home Care cluster; added card to hub |
| 2026-06-09 | Remove all 11 overdue Coming Soon cards from 3 cluster hubs; remove 2 dead redirects |
| 2026-06-09 | Priority 3 UI: remove duplicate reviews widget, add hero soft CTA, fix emoji |
| 2026-06-09 | Priority 5 governance: fix CLUSTERLINKMAP.md refs (6 files), em-dash in short prompt, create Cost of Care hub |

---

## How to use this file

- Work items in priority order unless a lower-priority item is blocked on something else.
- When an item is done: change `[ ]` to `[x]` and add a row to the Completed table above.
- When a new recommendation is identified: add it to the appropriate Priority section.
- Update "Last updated" at the top whenever this file changes.
