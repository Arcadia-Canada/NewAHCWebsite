# Cursor prompts for content work

Copy any block below into Cursor chat when you want the assistant to follow Arcadia governance (`AI-CONTEXT.md` and `docs/`).

---

## Standard article request (default compliance)

```
Following AI-CONTEXT.md and docs/: write [ARTICLE TITLE] for the [CLUSTER NAME] cluster. Read docs/CLUSTER-LINK-MAP.md, docs/02-CONTENT-CLUSTERS.md, docs/AUTHORITY-MAP.md, docs/07-VOICE-AND-TONE.md, docs/03-INTERNAL-LINKING-RULES.md, docs/05-URL-CONVENTIONS.md, and docs/04-SCHEMA-STANDARDS.md. Use CLUSTER-LINK-MAP.md to verify the cluster structure, linking targets, and pre-draft checklist before writing. Propose internal links only to URLs that are live on arcadiahomecare.ca. If the topic is not in AUTHORITY-MAP or conflicts with another entry, say so before drafting. If any element of your draft (slug, URL, schema, link, voice) conflicts with what the governance docs specify, flag the conflict and propose the governance-compliant version before continuing.
```

**How to use:** Replace `[ARTICLE TITLE]` and `[CLUSTER NAME]` (for example `Navigating Home Care` or `Family Caregiver Support`), then paste into Cursor.

**Why the last sentence matters:** Without it, an AI assistant may silently "resolve" a conflict between your request and the docs by following your request and overriding the docs. The conflict-flagging clause forces the AI to surface every disagreement for your decision before drafting. This is how governance stays intact instead of eroding one well-intentioned override at a time.

---

## Shorter version

```
Per AI-CONTEXT and docs/: draft [TITLE] for cluster [NAME]. Check CLUSTER-LINK-MAP and AUTHORITY-MAP, use Arcadia voice, live URLs only for internal links. Flag any conflict between my request and the governance docs before drafting.
```

---

## After you publish (update inventory)

```
The article [TITLE] is now live at [FULL URL]. Update docs/AUTHORITY-MAP.md to Published and add that URL. Update docs/CLUSTER-LINK-MAP.md: move the article to "Published articles" in its cluster section, add its outbound links, update counts, and update the Master Prompt table if applicable. Note any doc conflicts with the live site.
```

---

## Editing an existing article

```
Per AI-CONTEXT and docs/: I want to edit [ARTICLE TITLE] at [URL]. The change is [WHAT YOU WANT TO CHANGE]. Before editing, confirm the change does not violate docs/05-URL-CONVENTIONS.md (URL stays the same), docs/04-SCHEMA-STANDARDS.md (schema stays valid), or docs/07-VOICE-AND-TONE.md (voice stays consistent). If it does, flag and propose alternatives.
```

---

## Adding a new internal link to an existing article

```
Per docs/03-INTERNAL-LINKING-RULES.md: I want to add a link in [ARTICLE URL] from the phrase "[ANCHOR TEXT]" to [TARGET URL]. Confirm the target URL is live on arcadiahomecare.ca, the anchor text is natural and descriptive, and the link does not duplicate an existing link to the same target on the page.
```

---

## Quarterly review (per docs/06-PUBLISHING-CHECKLIST.md Phase 10)

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

## Download / open this file

- **In your repo:** the file is at `docs/CURSOR-CONTENT-PROMPTS.md`.
- **From GitHub:** open this file in the repo → click **Raw** → browser **Save As…** (or right-click → Save).

---

## Last updated

May 2026 — added `CLUSTER-LINK-MAP.md` reference to standard and shorter prompts. Added conflict-flagging clause and prompts for editing, internal linking, quarterly review, schema updates, and stale-doc detection.
