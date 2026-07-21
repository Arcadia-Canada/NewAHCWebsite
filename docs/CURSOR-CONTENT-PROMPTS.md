# Cursor prompts for content work

Copy any block below into Cursor chat when you want the assistant to follow Arcadia governance (`AI-CONTEXT.md` and `docs/`).

Last updated: 2026-07-06 — integrated master prompt workflow with brief-approval checkpoint, added reframe-sourcing and UTM rules to social kit prompt, added pre-run reservation check, tightened doc-reading list.

**Article implementation spec:** `docs/08-IMPLEMENTATION-BLUEPRINT.md` §3a (FAQ count, voice-search phrasing, `llms.txt` auto-sync).

---

## Master prompt article run (PRIMARY WORKFLOW)

```
Following AI-CONTEXT.md and docs/: produce the full article package for the variables below using docs/CONTENT-PRODUCTION-ENGINE-MASTER-PROMPT.md as the governing process.

Read in full: docs/CONTENT-PRODUCTION-ENGINE-MASTER-PROMPT.md, docs/02-CONTENT-CLUSTERS.md, docs/07-VOICE-AND-TONE.md, docs/AUTHORITY-MAP.md, docs/03-INTERNAL-LINKING-RULES.md, docs/08-IMPLEMENTATION-BLUEPRINT.md (§3a FAQ + voice-search + llms.txt).
Reference as needed: docs/05-URL-CONVENTIONS.md, docs/04-SCHEMA-STANDARDS.md, docs/CLUSTERLINKMAP.md.
Do NOT read /social/ or any *-PROD.html / *-DEV.html files.

**TWO-PHASE OUTPUT:**
Phase 1: Produce the Content Brief (Part 2 of master prompt) and STOP. Do not draft anything until I approve the brief.
Phase 2: After I approve, produce the full remaining output contract (Draft through Final QA checklist, output items 5–14 from the master prompt).

Hard rules — non-negotiable:
- No invented facts, statistics, case studies, testimonials, or quotes. Use [STAT NEEDED] and [REVIEW] flags instead.
- No differentiation claims unless I supplied [COMPETITOR_ANGLE] in the variables. If empty, write "none supplied" and proceed without differentiators.
- No em dashes (—) anywhere in the draft. Use commas, periods, colons, or parentheses instead.
- Propose internal links only to URLs live on arcadiahomecare.ca.
- If anything conflicts with governance docs (keyword owner, cluster, URL, voice, schema), flag before drafting and propose the governance-compliant version.
- Clinical/legal/financial claims must cite sources or carry [REVIEW] flags. No hedged claims without hedge language ("may," "often," "in many cases").
- Resource articles: minimum 6 FAQ questions with matching FAQPage JSON-LD; at least 2 conversational voice-search phrases in FAQ answers (see docs/08-IMPLEMENTATION-BLUEPRINT.md §3a).
- Article audience in schema and copy must match [TARGET_AUDIENCE] and cluster persona (docs/02-CONTENT-CLUSTERS.md).
- Do not hand-edit public/llms.txt; it auto-syncs on commit/build when FAQ/schema changes (docs/PRECOMMIT-HOOK.md).

RUNTIME VARIABLES (fill before pasting):
[SITE]                HC | REHAB | ECC
[COMPANY_NAME]        Arcadia Home Care | Arcadia Rehab | Eldercare Concierge
[SERVICE]             
[TARGET_AUDIENCE]     
[AWARENESS_LEVEL]     Unaware | Problem-aware | Solution-aware | Product-aware
[LOCATION]            Toronto / GTA / Ontario
[PRIMARY_KEYWORD]     (verify reserved in Sheet first — Step 1 prerequisite)
[SECONDARY_KEYWORDS]  
[SEARCH_INTENT]       Informational | Evaluative | Navigational | Transactional
[FUNNEL_STAGE]        Awareness | Consideration | Decision
[PAGE_ROLE]           Resource Article | Condition Page | Service Page | Cluster Hub | Journey | Lead Magnet
[LIVE_CLUSTER]        (existing approved cluster — no article creates a new cluster)
[EMOTIONAL_ENTRY]     
[KEY_REFRAME]         
[PRIMARY_CONVERSION]  
[SECONDARY_CONVERSION]
[CTA_STYLE]           Thought-close | Soft | Moderate | Direct
[INTERNAL_LINKS]      (parent cluster hub + siblings + one service/condition page, from CLUSTERLINKMAP)
[COMPETITOR_ANGLE]    (leave empty if undefined; model will not invent)
[REQUIRED_SOURCES]    (acceptable authorities for this topic)
[CLINICAL_REVIEWER]   (name of office reviewer — will be recorded in Sheet col O at sign-off)
[UTM_CAMPAIGN]        (campaign slug for derivatives)
```

**How to use:** Fill the RUNTIME VARIABLES block from the governance Sheet + your strategy notes. Paste the entire block. Cursor will produce the brief first; you review and approve before Phase 2 draft.

**Why the brief-approval checkpoint:** In one-pass chat, streaming the brief → draft → audit is efficient. In Cursor, a faulty brief wastes a full article's token budget. Approving the brief first is your cheapest quality gate and prevents direction shifts mid-draft.

---

## New resource article — implement in Next.js (after brief approval)

```
Per docs/08-IMPLEMENTATION-BLUEPRINT.md: implement [ARTICLE SLUG] in app/resources/[cluster]/[slug]/page.tsx.

Requirements:
- Article + BreadcrumbList + FAQPage + HomeHealthCare JSON-LD
- const faqs array (6+ Q&As) mapped to both schema and visible .faq-section
- Article.audience.audienceType = [TARGET_AUDIENCE from brief]
- Voice per docs/07-VOICE-AND-TONE.md; cluster persona per docs/02-CONTENT-CLUSTERS.md
- At least 2 conversational phrases in FAQ answers (how do i, do you, can you, near me, etc. — see §3a)
- No em dashes; no links to Coming Soon stubs

After page.tsx:
1. npm run voice:report — confirm this URL is not in Priority Gaps
2. Update cluster hub (status: live), sitemap, AUTHORITY-MAP
3. Commit — pre-commit should stage public/llms.txt if hooks installed

Do not hand-edit public/llms.txt.
```

**How to use:** Run in Phase 2 after the content brief is approved. Replaces ad-hoc "write the page" instructions.

---

```
Before I draft [ARTICLE TITLE] targeting [PRIMARY KEYWORD]: check the local docs for conflicts. Search docs/10-KEYWORD-OWNERSHIP.md, docs/AUTHORITY-MAP.md, and docs/CLUSTERLINKMAP.md for any existing article or planned topic that targets or overlaps [PRIMARY KEYWORD]. Also check docs/CLUSTERLINKMAP.md to confirm [LIVE_CLUSTER] is an approved existing cluster (no Net New clusters). Report only — do not draft. I will verify the Governance Master Sheet separately and then run the master prompt article workflow.
```

**How to use:** Run this before the master prompt article run above. It catches gaps between your Sheet reservation and what the local docs already know about. Keep this manual oversight; Cursor checking local docs is your second line after your Sheet verification.

---

## Generate social media kit and brief (after publishing)

```
Per AI-CONTEXT.md and docs/: generate the social media kit and strategy brief for [ARTICLE TITLE] at [LIVE URL].

Reference these social files (and only these social files):
- social/_TEMPLATE-BRIEF.md  (the brief template)
- social/_TEMPLATE-KIT-PROMPT.md  (the kit format spec)
- social/kits/KIT-talking-to-parent-about-care.docx  (one existing kit as a structural reference)
- social/briefs/BRIEF-talking-to-parent-about-care.md  (one existing brief as a structural reference)

Do NOT read other briefs or kits. They are not relevant to this article.

Required output:
- social/briefs/BRIEF-[slug].md  (strategy doc, no captions)
- social/kits/KIT-[slug].docx    (execution doc with A0–A4 captions, per-platform labelling)

Required A2 structure: three reframes, each in three platform-tuned versions (Facebook, LinkedIn, Instagram). 9 A2 captions total per kit.

**Critical rules for social captions:**
- Captions must be sourced exclusively from the article's reframes, emotional framing, and practical guidance — NEVER from clinical claims, statistics, medical guidance, or hedged health statements, even paraphrased. Social compression strips context and turns hedged claims into fear-bait.
- Every link in every caption carries UTMs: utm_source={platform}&utm_medium=social&utm_campaign=[UTM_CAMPAIGN]&utm_content=[slug]. CTA register must match the article's funnel stage (Awareness → thought-close/checklist; Consideration → consultation; Decision → direct).
- Platform voice: Facebook = warm and relatable; LinkedIn = professional and practice-relevant (advisor-facing for ECC); Instagram = visual-first, short-form, personal story angle.

Before generating: read the live article URL to extract the actual H1, lead paragraph, pull quotes, and key reframe — do not invent material the article does not contain. Confirm the article is in docs/AUTHORITY-MAP.md with status Published. If not, flag and stop. Read docs/07-VOICE-AND-TONE.md for the voice rules.
```

**How to use:** Replace `[ARTICLE TITLE]`, `[LIVE URL]`, `[slug]`, and `[UTM_CAMPAIGN]`. Run this to complete **Phase 9** of `docs/06-PUBLISHING-CHECKLIST.md` (social brief + kit — a hard gate).

**Why the reframe-only rule matters:** Adult children weighing eldercare decisions respond to agency and reframing, not threat. Clinical claims in social captions, even hedged and sourced, function as fear-framing when isolated from the article's full context and reassurance. This rule isn't just compliance — it's correct persuasion psychology for your audience. Fear reduces help-seeking; reframes enable decision-making.

---

## After you publish (update inventory)

```
The article [TITLE] is now live at [FULL URL]. Update docs/AUTHORITY-MAP.md to Published and add that URL. Update docs/CLUSTERLINKMAP.md: move the article to "Published articles" in its cluster section, add its outbound links, update counts, and update the Master Prompt table if applicable. Update docs/10-KEYWORD-OWNERSHIP.md: move the keyword entry to "Published resource articles." Note any doc conflicts with the live site.
```

---

## Editing an existing article

```
Per AI-CONTEXT and docs/: I want to edit [ARTICLE TITLE] at [URL]. The change is [WHAT YOU WANT TO CHANGE]. Before editing, confirm the change does not violate docs/05-URL-CONVENTIONS.md (URL stays the same), docs/04-SCHEMA-STANDARDS.md (schema stays valid), or docs/07-VOICE-AND-TONE.md (voice stays consistent). If it does, flag and propose alternatives.

Do NOT read /social/ unless the edit changes pull quotes, key reframe, or audience — in which case read the matching BRIEF-[slug].md and KIT-[slug].docx so we know what social assets need to be regenerated.
```

---

## Adding a new internal link to an existing article

```
Per docs/03-INTERNAL-LINKING-RULES.md: I want to add a link in [ARTICLE URL] from the phrase "[ANCHOR TEXT]" to [TARGET URL]. Confirm the target URL is live on arcadiahomecare.ca, the anchor text is natural and descriptive, and the link does not duplicate an existing link to the same target on the page.
```

---

## Quarterly review (per docs/06-PUBLISHING-CHECKLIST.md Phase 11)

```
Per AI-CONTEXT and docs/: I'm doing a quarterly review of [ARTICLE URL]. Check the article for: (1) broken internal links, (2) outdated schema values (rating, review count, hours, address, phone), (3) outdated content references (Ontario Health atHome, government programs, statistics), (4) voice drift from docs/07-VOICE-AND-TONE.md. Report findings before suggesting changes.
```

---

## Schema-only update

```
Per docs/04-SCHEMA-STANDARDS.md: Arcadia's [aggregateRating / phone / hours / address] has changed. The new value is [VALUE]. Update the canonical schema in docs/04-SCHEMA-STANDARDS.md, then list every page in the codebase that needs the same update. Do not modify pages individually until I confirm the list.
```

---

## When you suspect the docs are stale

```
Per AI-CONTEXT.md (the live site is canonical): I think docs/[FILE NAME] may be out of date. The live site at [URL] shows [WHAT YOU SAW]. Compare the doc to the live site and report any discrepancies. Do not edit either yet — just report.
```

---

## Cluster hub drift check (run quarterly)

```
Per docs/AUTHORITY-MAP.md: fetch each of the 5 live cluster hub pages on arcadiahomecare.ca. Extract every published article displayed on each hub. Cross-reference against AUTHORITY-MAP.md status Published entries. Report any article that is Published in the map but missing from its cluster hub, OR displayed on a hub but missing from the map.

Do not edit any files. Report findings only. I will decide which fixes to apply.
```

---

## Download / open this file

- **In your repo:** the file is at `docs/CURSOR-CONTENT-PROMPTS.md`.
- **From GitHub:** open this file in the repo → click **Raw** → browser **Save As…** (or right-click → Save).

---

## Installation checklist

Before using these prompts regularly:

1. Add `docs/CONTENT-PRODUCTION-ENGINE-MASTER-PROMPT.md` to the HC repo and commit.
2. Add this line to `AI-CONTEXT.md`: "All article generation follows docs/CONTENT-PRODUCTION-ENGINE-MASTER-PROMPT.md; its output contract supersedes ad-hoc drafting."
3. Create `docs/CURSOR-CONTENT-PROMPTS.md` in each of HC, Rehab, and ECC repos with site-specific URL substitutions (don't share one file across repos).
4. Run a production readiness test: use the master prompt article run on 3–5 topics spanning different clusters/intents. Score each output on the self-audit rubric. Do not mark the system as production-ready until outputs are consistent.

---

## Last updated

2026-07-21 — Added §3a (FAQ, voice-search, llms.txt), new "implement in Next.js" prompt block, master-prompt hard rules for FAQs/llms/audience.

2026-07-06 — Integrated master-prompt runner as primary workflow with brief-approval checkpoint. Added pre-run reservation check for local doc conflicts. Updated social kit prompt with reframe-sourcing rule and UTM mandate. Clarified that social captions from fear-based claims reduce help-seeking in adult-children caregivers; reframes enable decisions. Kept conflict-flagging, after-publish inventory, quarterly review, schema updates, and drift checks unchanged — all sound.
