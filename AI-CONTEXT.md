# AI-CONTEXT — Arcadia Home Care (arcadiahomecare.ca)

You are an AI assistant helping publish content for arcadiahomecare.ca. This file is your north star. Read it before any task.

---

## Order of Authority

1. **The live site** is canonical. If a doc contradicts what's live, trust the live site and update the doc.
2. **This file (AI-CONTEXT.md)** is the master orientation.
3. **`docs/`** contains detailed governance (voice, clusters, schema, URL rules, publishing workflow).
4. **The Google Sheet** (Reserved Keywords + Article Master + Content Calendar) is the source of truth for keyword ownership and publication schedules.

---

## Project Context

**Arcadia Home Care** — Toronto/GTA senior home care services. Website: arcadiahomecare.ca

**Tech stack:** Next.js 16, App Router, static export, Vercel hosting.

**Sister sites:** arcadiarehab.ca (Rehab) and eldercareconcierge.ca (ECC). All three share keyword registry and cross-site linking governance.

**Purpose:** Educational content for adult children and seniors navigating caregiving, daily living support, and home modification. B2C + B2B (advisor-facing on selected topics).

---

## Site Lane — What HC Owns

**DO publish on HC:**
- Caregiver burden and emotional support
- Daily living assistance (bathing, dressing, meal prep, medication management)
- PSW and paid care guidance
- Fall response and home safety
- Dementia signs, behaviors, conversation tactics
- Navigating the home care system (assessment, funding, private vs. public)
- Financial and insurance topics (eldercare costs, benefit programs)

**DO NOT publish on HC — these belong to Rehab or ECC:**
- Exercise, strength training, balance, active recovery (→ Rehab)
- Therapy coordination and rehabilitation (→ Rehab)
- Lawyer/legal/financial strategy for estates and elder law (→ ECC)

This lane is enforced by the HARD GATE keyword registry. Violating it will break cross-site coherence.

---

## Content Rules

### Voice
**Read:** `docs/07-VOICE-AND-TONE.md` for the complete voice spec.

**TL;DR:**
- Educational, warm, actionable. Write like you're talking to an intelligent adult who is stressed and busy.
- No corporate voice ("We at Arcadia believe..."). No motivational platitudes ("You've got this!").
- No em dashes (—) in any copy. Use commas, colons, parentheses, or line breaks instead.
- No exclamation points unless the article demands it.
- Lead with the reader's situation, not the brand.
- Use "you," "your parent," "your family" — direct address throughout.
- Link generously to other live articles, but never to Coming Soon stubs or broken URLs.

### Content Structure
**Read:** `docs/02-CONTENT-CLUSTERS.md` and `docs/AUTHORITY-MAP.md`

HC has 5 clusters:
1. **Family Caregiver** — emotional, relational, navigating conversations
2. **Daily Living & Safety** — practical support, home modification, accident response
3. **Health & Medication** — medication management, common conditions, professional coordination
4. **Navigating the System** — home care assessment, funding, private options, seniors benefits
5. **Finances & Planning** — cost of care, insurance, benefit programs

Each article lives at: `https://www.arcadiahomecare.ca/resources/[cluster-slug]/[article-slug]/`

### Publishing Workflow
**Read:** `docs/06-PUBLISHING-CHECKLIST.md` for the full 11-phase workflow.

**Hard gates you cannot skip:**
1. **Phase 6:** Update cluster hub so article appears in the cluster listing
2. **Phase 7:** Update `docs/AUTHORITY-MAP.md` to mark article as Published
3. **Phase 9:** Generate `social/briefs/BRIEF-[slug].md` and `social/kits/KIT-[slug].docx`

If any hard gate is skipped, the article is not done publishing.

---

## HARD GATE — Cross-site Keyword Registry

Before drafting, scheduling, or outlining ANY article:

1. **Read** `docs/CROSS-SITE-KEYWORD-REGISTRY.md`.
2. **Confirm** the target keyword is reserved to THIS site (HC) in that file.
3. **If the keyword is owned by another Arcadia site (Rehab / ECC), or appears in HARD BLOCKS, or is unlisted:** STOP. Do not draft. Flag the conflict and wait for it to be reserved in the Master Sheet.
4. **If the registry's "Generated" date is more than 7 days old:** Tell the user to run `npm run sync:registry` before trusting it.

This gate supersedes any softer keyword-check language elsewhere. "Differentiate by framing" is NOT an escape hatch.

---

## Clusters & URLs

| Cluster | Slug | URL Pattern |
|---------|------|-------------|
| Family Caregiver | family-caregiver | /resources/family-caregiver/[slug]/ |
| Daily Living & Safety | daily-living-safety | /resources/daily-living-safety/[slug]/ |
| Health & Medication | health-medication | /resources/health-medication/[slug]/ |
| Navigating the System | navigating-system | /resources/navigating-system/[slug]/ |
| Finances & Planning | finances-planning | /resources/finances-planning/[slug]/ |

**See `docs/05-URL-CONVENTIONS.md` for slug rules.** Slugs are lowercase, hyphen-separated, no numbers, no special chars.

---

## Governance Documents

**For detailed reference, read these in this order:**

1. `docs/GOVERNANCE-PACK-README.md` — overview of what governs the site
2. `docs/02-CONTENT-CLUSTERS.md` — cluster definitions and content rules
3. `docs/07-VOICE-AND-TONE.md` — voice spec (the actual asset)
4. `docs/AUTHORITY-MAP.md` — inventory of all 102+ articles, status (Published / Coming Soon / Planned), deadlines
5. `docs/06-PUBLISHING-CHECKLIST.md` — step-by-step publish workflow with hard gates
6. `docs/03-INTERNAL-LINKING-RULES.md` — how to link between articles
7. `docs/04-SCHEMA-STANDARDS.md` — JSON-LD schema requirements
8. `docs/05-URL-CONVENTIONS.md` — slug and URL rules
9. `docs/01-SITE-ARCHITECTURE.md` — site structure (6 main sections)
10. `docs/CURSOR-CONTENT-PROMPTS.md` — copy-paste prompts for Cursor (drafting, social, audits)

---

## When You're Drafting an Article

1. **Confirm the keyword is reserved** (HARD GATE, above).
2. **Read the cluster definition** in `docs/02-CONTENT-CLUSTERS.md`.
3. **Read 2–3 published articles in that cluster** to absorb the voice and linking pattern.
4. **Read `docs/07-VOICE-AND-TONE.md`** and check your draft against it before handing off.
5. **Use the draft prompt in `docs/CURSOR-CONTENT-PROMPTS.md`** for consistency.

---

## When You're Publishing an Article

1. **Follow `docs/06-PUBLISHING-CHECKLIST.md` exactly** — all 11 phases.
2. **Hit the three hard gates:** cluster hub update (Phase 6), AUTHORITY-MAP update (Phase 7), social brief + kit (Phase 9).
3. **Test locally** (`npm run dev`), then test live (Search Console, Rich Results, social previews).

---

## When You're Generating Social

**The social brief + kit is a hard gate (Phase 9).** Do not skip it.

1. **Read the published article** at the live URL.
2. **Use the prompt in `docs/CURSOR-CONTENT-PROMPTS.md`** — section "Generate social media kit and brief."
3. **Reference only:**
   - `social/_TEMPLATE-BRIEF.md`
   - `social/_TEMPLATE-KIT-PROMPT.md`
   - One existing BRIEF example
   - One existing KIT example
4. **Output:**
   - `social/briefs/BRIEF-[slug].md` (strategy, no captions)
   - `social/kits/KIT-[slug].docx` (execution, ready-to-paste captions)

---

## Cross-Site Coordination

**Three sites, one keyword registry:**

- HC owns: caregiving, daily living, dementia, system navigation, finances
- Rehab owns: exercise, strength, balance, active recovery, therapy coordination
- ECC owns: legal, financial strategy, advisor-facing content

**If you're unsure where a topic belongs,** check `docs/CROSS-SITE-KEYWORD-REGISTRY.md` first. If the keyword isn't reserved yet, flag it.

---

## Last Updated

July 8, 2026 — Complete AI-CONTEXT for HC. Reflects GOVERNANCE-PACK-README structure and Phase 9 social workflow.
