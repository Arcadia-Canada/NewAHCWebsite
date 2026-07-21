# ARCADIA CROSS-SITE BOUNDARIES — CANONICAL
**This is the single source of truth.** Repo copies in AHA, HC, Rehab, and ECC's `/docs` folders
are mirrors of this file, current only as of their last sync date (see footer).
If you are reading this inside a repo, check whether a newer canonical version exists
at [Arcadia Content Governance — Master](https://docs.google.com/spreadsheets/d/1EcU9frKxc9TxdCIKbc5u9peX9vS5udsb29Kf_1uyosk/edit?usp=sharing) before relying on it for a publishing decision.

**Sites covered:** Arcadia Health Alliance (arcadiahealth.ca / "AHA") · Arcadia Home Care (arcadiahomecare.ca / "HC") · Arcadia Rehab (arcadiarehab.ca / "Rehab") · ECC (eldercareconcierge.ca)

**Canonical version: 1.1 — updated 2026-07-20** (v1.0 created 2026-06-22)

---

## How to use this file

**Before writing a new article on any site:**
1. Search this file for your target keyword/topic.
2. If it's listed as owned by another site → don't write it as planned. Pick a different angle or a different topic.
3. If it's not listed → check the "Open / Unverified" section below in case it's mid-resolution.
4. If genuinely new and unclaimed → write it, then add it to the ownership table below and sync to all four repos.
5. **The Reserved Keywords table and Content Calendar live in the Google Sheet, not in this file.** This file documents the rules and conflict resolutions. The Sheet is where you check and reserve keywords day-to-day.

**When you publish something that changes ownership** (new article, a "Coming Soon" goes live, a planned piece gets cut or retargeted):
1. Update this canonical file first, adding a new row to the Sync Log table.
2. Copy the updated version into each of the four repos' `docs/ARCADIA-CROSS-SITE-BOUNDARIES-CANONICAL.md`, overwriting the old copy.
3. In each repo copy, mark that site's column Y for the new row, and update "Last synced (this file)" to today's date.

---

## The four-way intent split

Each site answers a different question. This is the first filter for any new topic.

| Site | The question it answers | Shorthand |
|---|---|---|
| **AHA** | "Who is Arcadia, and where do I start?" | **ORIENT** |
| **HC** | "I need hands-on help at home." | **HELP WITH** |
| **Rehab** | "I want to get stronger and stay independent." | **DO** |
| **ECC** | "I am a professional planning someone's care." | **PLAN / DECIDE** |

Intent framing alone does not guarantee distinct search outcomes. Per Conflicts 1–4 below, the published text has to actually hold to the intended lane.

---

## AHA lane definition (added v1.1)

Arcadia Health Alliance is the parent organization site. It exists to hold the
brand entity, route enquiries, and hire across all three divisions. **It is
structurally not a content site.**

### AHA owns

| Category | Examples | Why it belongs to AHA |
|---|---|---|
| **Brand and entity terms** | "Arcadia Health", "Arcadia Health Alliance", "Arcadia Health Toronto", "Arcadia divisions" | Nobody else can own the parent brand. |
| **Organizational terms** | "about Arcadia Health", "Arcadia leadership", "Arcadia accreditation", "is Arcadia legitimate" | Corporate trust queries, not service queries. |
| **Cross-division careers** | "Arcadia Health careers", "PSW jobs Toronto", "caregiver jobs GTA", "rehabilitation support therapist jobs", "Arcadia Health hiring" | One employer brand across three divisions. Splitting recruitment across three sites competes with itself for the same candidate pool. |
| **Which-team triage** | "which Arcadia service do I need", "Arcadia home care vs Arcadia rehab" | Only the parent can compare its own divisions neutrally. |
| **Referral partner (org level)** | "refer a client to Arcadia", "partner with Arcadia Health" | Organizational relationship, not a service enquiry. |

### AHA explicitly does NOT own

These belong to the divisions and AHA must not target them, at any depth:

- Any service term: home care, personal support, PSW, companionship, respite, palliative, dementia care, hospital discharge → **HC**
- Any movement term: exercise, strength, balance, fall prevention, aquatherapy, RST, cognitive vitality → **Rehab**
- Any advisor tooling term: assessment platform, care planning software, advisor reports → **ECC**
- Any geo service term: "home care Toronto", "senior rehab Toronto", and every location page variant → the owning division
- **"When a parent needs more help than you can give"** and its query cluster → **HC owns this, published.** This is the closest thing to an umbrella term that is already claimed. AHA must not write a competing orientation piece on recognizing decline.

### The bridge page rule

`/home-care/`, `/rehabilitation/`, and `/eldercare-concierge/` on AHA are **bridge
pages**: they describe a division and link out. They must never target the
division's head terms, publish articles, or duplicate cluster content.

This rule is also stated in `AI-CONTEXT.md` and in code at
`components/DivisionPage.tsx` in the AHA repo.

### Realistic expectation

AHA is a small site with no article pipeline. It will win brand terms and
careers terms, which are low-competition and genuinely its own. **It will not
out-rank HC's established pillars on broad care queries, and it should not try.**
If a broad term is worth owning and a division already owns it, the answer is to
strengthen the division's page, not to build a competing one on AHA.

---

## Resolved Boundaries (stable, no action needed)

### HC ↔ Rehab
**Status: genuinely resolved, verified 2026-06-22.** Both sites' existing boundary docs mirror each other exactly.

**Golden rule:** Rehab = "DO" (active exercise, movement, strength, recovery, rehabilitation). HC = "HELP WITH" (daily living support, personal care, household tasks, companionship).

| If the content is about... | It belongs to... |
|---|---|
| Exercise, strength training, balance, fall *prevention* through movement, recovery after surgery/injury, RST services | **Rehab** |
| Personal care (bathing, dressing, medication reminders), household help, companionship, PSW services, navigating the home care system, cost of home care | **HC** |
| Fall *response* (what to do after a fall happens) | HC (response/aftermath is care, not exercise) |
| RST vs. PSW comparison/triage | Rehab (RST is Rehab's service; this is Rehab explaining when *not* to call them) |

### HC: Dementia-specific content
**Status: resolved, no conflict.** `dementia-memory-care/introducing-home-care-dementia` is correctly scoped to dementia-specific mechanics (memory-safe framing, caregiver consistency, cognitive-stage-specific advice) — distinct from general resistance content on any site. No overlap with Rehab or ECC.

### Dementia vs. normal aging
**Status: resolved by redirect, verified live 2026-07-20.**
Rehab's `/blog/dementia-vs-normal-forgetfulness/` 308-redirects to HC's `/resources/dementia-memory-care/normal-aging-vs-dementia/` and serves HC's canonical. Rehab deferred; HC owns the term. This is the reference pattern for resolving a cross-domain collision: redirect plus matching canonical, not two differentiated pages.

---

## Active Conflicts (resolved direction, action pending)

### Conflict 1: Caregiver burnout / burden / stress / exhaustion / emotional toll
**Owner: HC, fully.**
- Live: `family-caregiver-support/caregiver-burnout-warning-signs`
- These terms (burnout/burden/stress/exhaustion/emotional toll) are one query cluster to search engines and AI answer engines — "advisory framing" doesn't create real separation if the published text overlaps.

**ECC action required:** FYN4 ("The Adult Child Caregiver's Burden") must be cut or retargeted before writing. If retargeted, it must stay strictly in a non-overlapping lane — e.g., burnout as a *financial/legal decision-making risk factor*, never general coping/validation content. **Status: HOLD, not yet resolved on ECC's side.**

### Conflict 2: Cost of care in Ontario
**Owner split — two distinct layers, not duplicated:**
- **HC owns:** the home-care-specific number — hourly PSW/agency rates, what's included. Live/planned at `navigating-home-care/home-care-cost-ontario`.
- **ECC owns:** the total eldercare financial picture — how home care cost compares to LTC, retirement homes, OHIP-funded options, legal/financial planning costs. ECC's article should link to HC's page for the home-care-specific figure rather than restating it.

**AHA is excluded from this conflict.** Cost content of any kind is out of AHA's lane. If AHA needs to reference cost, it links to HC or ECC.

**Deadline-sensitive:** ECC's cost article had a target publish date of 2026-07-22. Confirm this split is locked in before that date. **Status: HOLD pending confirmation, time-sensitive.**

### Conflict 3: "Parent resists / refuses help"
**Most exposed conflict — one page already live.**
- **Live today:** Rehab's `/blog/elderly-parent-refuses-help/` — "How to Help an Elderly Parent Who Refuses Help." Lever used: *reframe the language* (caregiver → exercise partner / coach). Confirmed live via screenshot 2026-06-22.
- **Live today:** HC's dementia-specific resistance content (see Resolved Boundaries above) — not a conflict, different population/mechanics.
- **Live today:** HC's broader pillar "When the Person You Love Needs More Help Than You Can Give" — covers recognizing decline, funding, emotional readiness broadly. Not specifically a "parent resists help" piece; minimal overlap with Rehab's article.
- **Planned, not yet live:** HC's own resource hub lists **"When a Parent Resists Home Care" as Coming Soon** — described as covering "why parents refuse help, and how to have conversations that reduce resistance without damaging trust. Includes dementia-specific guidance." Confirmed via live site screenshot 2026-06-22.
- **Planned, not yet live:** ECC's FD5 ("What If Mom or Dad Doesn't Want Help?") — pre-decision framing, before any service type is named.

**The risk going forward:** HC's planned "Coming Soon" description ("reduce resistance... without damaging trust") is close to Rehab's existing lever (reframing language to reduce resistance) — not identical, but close enough that HC's draft needs deliberate differentiation, not just different wording on the same mechanism.

**Resolution once HC writes its piece:**
- **Rehab keeps:** the RST/exercise-specific reframe lever ("caregiver" → "coach/exercise partner"). This is genuinely tied to Rehab's own service and is naturally distinct if kept tight to that lever.
- **HC should use a different lever** for its new piece — e.g., safety-risk framing, decision-readiness, or leaning fully into the dementia-specific angle its own description already promises, which would also reduce overlap with its own broader pillar.
- **ECC owns:** the pre-decision stage, before home care, PSWs, or RST are named at all.

**Status: HOLD.** Don't finalize HC's draft, or ECC's FD5, until HC's actual draft is checked against Rehab's live article side-by-side for lever overlap.

### Conflict 4: Careers and recruitment (new, v1.1)
**Owner: AHA, once its careers page is live.**

HC currently runs `/careers` and `/pre-hire`. Rehab and ECC have no careers content. Candidate-side queries ("PSW jobs Toronto", "caregiver jobs GTA") are one pool, and Arcadia hires into three divisions from it.

**Direction:** AHA `/careers/` becomes the single destination for recruitment. HC's `/careers` should either 301 to AHA's, or stay live as an HC-specific application page that canonicals to AHA and does not target generic job keywords.

**Do not action until AHA is live and indexed.** Redirecting HC's careers page before AHA ranks would lose the only careers traffic Arcadia currently has. **Status: HOLD until AHA launch confirmed.**

---

## ECC-Specific Boundary Notes (from ECC's own governance doc)

ECC's three-way intent split, for reference when evaluating any new ECC topic against HC/Rehab:
- **ECC = PLAN/DECIDE** — pre-service, advisory, financial/legal/family-decision content
- **HC = GET HANDS-ON CARE** — the actual service delivery, daily living support
- **Rehab = STAY STRONG** — exercise, recovery, active independence

This intent split is a useful starting filter, but per Conflicts 1–4 above, intent framing alone does not guarantee distinct search/AI-citation outcomes — the published text has to actually hold to the intended lane.

ECC's cross-linking to HC/Rehab is deliberately deferred (per ECC's own governance, 6–12 month timeline). This file's job is to stop ECC's *content* from colliding with HC/Rehab even while ECC's *links* stay deferred.

---

## Entity architecture (added v1.1)

The four sites stay on four separate domains. Nothing was migrated to
subdomains or subdirectories. The parent/division relationship is declared in
schema, not in DNS:

- AHA declares `subOrganization` for HC, Rehab, and ECC (`lib/schema.ts` in the AHA repo)
- **Each division site must declare `parentOrganization`** pointing at `https://www.arcadiahealth.ca/#organization`

Both directions are required. As of 2026-07-20 the AHA side is built and the
three division sides are **not yet added**. Until they are, the relationship is
asserted by only one party.

Rationale for keeping four domains: consolidating HC and Rehab under one domain
would convert every cross-site collision documented above into internal
cannibalization on a single site, and would migrate a continuously-live domain
(arcadiahomecare.ca, live since 2014) into one that was dormant from roughly
2021 to 2026. The redirect pattern under "Dementia vs. normal aging" resolves
collisions without that cost.

---

## Open / Unverified Items

- HC's full set of planned-but-unwritten articles (beyond what's visible on the live site) has not been comprehensively cross-checked against Rehab and ECC's planned content. This file reflects what's been verified through 2026-06-22 — new planned articles on any site should be checked against this file before drafting, and added once written.
- Rehab's and ECC's own internal docs (`10-KEYWORD-OWNERSHIP.md`) have not yet been updated to reference each other directly — this canonical file is the bridge until that's done.
- **The Sheet's Reserved Keywords tab is materially incomplete for Rehab and ECC** (verified 2026-07-20): it holds ~45 HC rows, 3 Rehab rows, and 0 ECC rows, while Rehab's local `10-KEYWORD-OWNERSHIP.md` lists roughly 30 reserved keywords that were never added. Until this is closed, a Rehab or ECC keyword check against the Sheet alone will return a false "unclaimed".
- AHA's careers consolidation (Conflict 4) is blocked on AHA launch.
- AHA's own keyword rows need adding to the Sheet, tagged AHA. See the paste-ready block in `docs/AHA-KEYWORD-ROWS-2026-07-20.md`.

---

## Sync Log

Mark Y or N for each site once you've pasted the matching canonical version into that site's docs file. Add a new dated block above this one each time the canonical file changes — most recent on top.

**2026-07-20 — Canonical v1.1** (added AHA as fourth site, AHA lane definition, bridge page rule, Conflict 4 careers, entity architecture section, dementia redirect resolution, Sheet completeness finding)
- AHA: Y
- HC: Y
- Rehab: Y
- ECC: Y

**2026-06-22 — Canonical v1.0 created** (merged HC↔Rehab boundary doc, ECC boundary doc, and Conflicts 1–3 resolution)
- HC: Y
- Rehab: Y
- ECC: N

**Last synced (this file):** 2026-07-20
