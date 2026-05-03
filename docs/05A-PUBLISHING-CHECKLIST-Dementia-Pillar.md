# 05A — Publishing Checklist (Dementia Pillar Page)

This checklist is specific to the **Dementia & Alzheimer's Condition Page**.

This is a **high-authority page**. Mistakes here affect the entire site.

---

## Phase 1 — Pre-Publish Validation

### 1. Content Integrity

- [ ] H1 = "Dementia & Alzheimer's Care at Home in Toronto"
- [ ] Emotional intro present (not clinical)
- [ ] Alzheimer's is included as a subsection (NOT separate page)
- [ ] No duplicate content from old Alzheimer's page
- [ ] Tone matches `07-VOICE-AND-TONE.md`

---

### 2. Structure Check

- [ ] Sections follow:
  - What families notice
  - What dementia is
  - Alzheimer's subsection
  - Progression
  - Safety
  - How care helps
  - When families call
  - FAQ
  - CTA

---

## Phase 2 — URL & Redirect (CRITICAL)

### 2.1 Confirm Final URL

```
/conditions/dementia-care-at-home/
```

### 2.2 Confirm Redirect

```
/conditions/alzheimers-care/ → 301 → /conditions/dementia-care-at-home/
```

This redirect exists in both `vercel.json` and `redirects.json`. Do not remove it — it protects external links and Google index entries.

---

## Phase 3 — Schema & SEO

- [ ] JSON-LD includes MedicalCondition + FAQPage + BreadcrumbList
- [ ] Canonical URL set to `https://www.arcadiahomecare.ca/conditions/dementia-care-at-home/`
- [ ] Meta title includes "Dementia & Alzheimer's"
- [ ] Meta description under 160 characters

---

## Phase 4 — Internal Links

- [ ] Links to primary service: `/our-services/dementia-alzheimers-home-care/`
- [ ] Links to cluster articles (published only)
- [ ] Links to `/how-care-starts/` or relevant decision page
- [ ] No links to Coming Soon stubs
- [ ] No links to `/conditions/alzheimers-care/` (redirects — use the canonical URL)

---

## Phase 5 — Post-Publish

- [ ] Verify page loads at canonical URL
- [ ] Verify `/conditions/alzheimers-care/` still redirects correctly
- [ ] Submit canonical URL to Google Search Console for indexing
- [ ] Update `docs/AUTHORITY-MAP.md` if any status changed
