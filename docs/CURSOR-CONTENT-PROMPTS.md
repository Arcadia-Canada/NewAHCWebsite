# Cursor prompts for content work

Copy any block below into Cursor chat when you want the assistant to follow Arcadia governance (`AI-CONTEXT.md` and `docs/`).

Last updated: May 2026 — tightened the doc-reading list, added explicit `/social/` exclusion to prevent token bloat.

---

## Standard article request (default compliance)

```
Following AI-CONTEXT.md and docs/: write [ARTICLE TITLE] for the [CLUSTER NAME] cluster.

Read in full: docs/02-CONTENT-CLUSTERS.md, docs/07-VOICE-AND-TONE.md, docs/AUTHORITY-MAP.md, docs/03-INTERNAL-LINKING-RULES.md.

Reference as needed: docs/05-URL-CONVENTIONS.md (for slug), docs/04-SCHEMA-STANDARDS.md (for schema blocks), docs/CLUSTER-LINK-MAP.md (for cluster-specific structure).

Do NOT read /social/ — per-article briefs and kits are not relevant to generating a new article. They are read only by the social-asset prompt below.

Do NOT read past *-PROD.html or *-DEV.html files unless I explicitly name one as a voice reference. The authority map tracks published articles; reading their HTML is not needed for new article generation.

Propose internal links only to URLs that are live on arcadiahomecare.ca. If the topic is not in AUTHORITY-MAP or conflicts with another entry, say so before drafting. If any element of your draft (slug, URL, schema, link, voice) conflicts with what the governance docs specify, flag the conflict and propose the governance-compliant version before continuing.
```

**How to use:** Replace `[ARTICLE TITLE]` and `[CLUSTER NAME]` (for example `Navigating Home Care` or `Family Caregiver Support`), then paste into Cursor.

**Why the doc list is tightened:** The previous version named 7 docs to read in full. Most blog work only needs 4 in full plus 3 as references. The new structure cuts ~30% of context cost without losing governance fidelity.

**Why the `/social/` exclusion matters:** Without it, Cursor may index brief and kit files (~64,000 tokens) that have zero relevance to writing a different article. The `.cursorignore` file at the repo root also enforces this, but stating it explicitly in the prompt prevents the AI from going hunting.

**Why the conflict-flagging clause matters:** Without it, an AI assistant may silently "resolve" a conflict between your request and the docs by following your request and overriding the docs. The clause forces the AI to surface every disagreement for your decision before drafting.

---

## Shorter version

```
Per AI-CONTEXT and docs/: draft [TITLE] for cluster [NAME]. Read 02-CONTENT-CLUSTERS, 07-VOICE-AND-TONE, AUTHORITY-MAP, 03-INTERNAL-LINKING-RULES in full. Reference 05-URL-CONVENTIONS, 04-SCHEMA-STANDARDS, CLUSTER-LINK-MAP as needed. Skip /social/ entirely. Use Arcadia voice, live URLs only for internal links. Flag any conflict between my request and governance before drafting.
```

---

## Generate social media kit and brief (run after publishing)

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

Before generating: read the live article URL to extract the actual H1, lead paragraph, pull quotes, and key reframe — do not invent material the article does not contain. Confirm the article is in docs/AUTHORITY-MAP.md with status Published. If not, flag and stop.

Read docs/07-VOICE-AND-TONE.md for the voice rules.
```

**How to use:** Replace `[ARTICLE TITLE]`, `[LIVE URL]`, and `[slug]`. Run this to complete **Phase 9** of `docs/06-PUBLISHING-CHECKLIST.md` (social brief + kit — a hard gate).

---

## After you publish (update inventory)

```
The article [TITLE] is now live at [FULL URL]. Update docs/AUTHORITY-MAP.md to Published and add that URL. Update docs/CLUSTER-LINK-MAP.md: move the article to "Published articles" in its cluster section, add its outbound links, update counts, and update the Master Prompt table if applicable. Update docs/10-KEYWORD-OWNERSHIP.md: move the keyword entry to "Published resource articles." Note any doc conflicts with the live site.
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
Per docs/AUTHORITY-MAP.md and AUTHORITY-MAP-DRIFT-AUDIT.md: fetch each of the 4 live cluster hub pages on arcadiahomecare.ca. Extract every published article displayed on each hub. Cross-reference against AUTHORITY-MAP.md status Published entries. Report any article that is Published in the map but missing from its cluster hub, OR displayed on a hub but missing from the map.

Do not edit any files. Report findings only. I will decide which fixes to apply.
```

---

## Download / open this file

- **In your repo:** the file is at `docs/CURSOR-CONTENT-PROMPTS.md`.
- **From GitHub:** open this file in the repo → click **Raw** → browser **Save As…** (or right-click → Save).

---

## Last updated

May 2026 — tightened the doc-reading list to 4 full reads + 3 references for blog generation. Added explicit `/social/` exclusion and HTML draft exclusion to prevent token bloat. Added prompts for social asset generation, post-publish inventory updates, and cluster hub drift checks. The conflict-flagging clause remains the most important safeguard — without it, governance erodes silently.
