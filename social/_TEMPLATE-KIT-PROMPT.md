# Cursor Prompt — Generate Social Media Kit

Copy the prompt below into Cursor when an article publishes and you need to generate its social media kit + strategy brief.

This prompt produces both:
- `social/briefs/BRIEF-[slug].md`
- `social/kits/KIT-[slug].docx`

---

## Standard prompt (copy this)

```
Per AI-CONTEXT.md and docs/: generate a social media kit and strategy brief for [ARTICLE TITLE] at [LIVE URL].

Use the same format as social/kits/KIT-signs-parent-needs-home-care.docx and social/briefs/BRIEF-signs-parent-needs-home-care.md as reference templates. (Lean kit format — May 2026. Do not use older kits such as KIT-talking-to-parent-about-care.docx or KIT-what-no-one-tells-you-first-week-home-care.docx as structural references; they use redundant scaffolding.)

Required structure for the kit:

- A0 Pre-Post Brief (Heading2: "A0 — Pre-Post Brief")
  Use inline labelled paragraphs, not nested Heading3 sub-sections. Include:
  Article title (H1), SEO title, canonical URL, UTM strings (Facebook, LinkedIn, Instagram — full URLs with utm_campaign=[slug]), OG image spec, emotional entry point, key reframe, share target, pull quotes (Q1–Q4).
  Pull quotes appear ONLY here. Do not add a separate "Pull Quotes for Graphics" section at the end of the kit.

- A1 [Recognition / Transparency / Explainer] Post (Heading2) — separately labelled Facebook caption, LinkedIn caption, and Instagram caption. Publishes Day 1.

- A2 Reframe Post (Heading2) — three reframes (Heading3 per reframe), each with three platform-tuned captions labelled Facebook — Reframe N, LinkedIn — Reframe N, Instagram — Reframe N. Total of 9 A2 captions. Structural labels may use em dashes (e.g. "Facebook — Reframe 1"); caption prose must not.

- A3 Share-Prompt Post (Heading2) — 2 caption variants (Variant 1 — for…, Variant 2 — for…), each targeting a different recipient. Publishes Day 9.

- A4 Quiet Authority Post (Heading2) — LinkedIn Primary + LinkedIn Link-optional alternative. Publishes Day 11–12.

- 14-Day Distribution Summary (Heading2) — table or clear day-by-day schedule.

- Performance Metrics (Heading2) — primary and secondary metrics with UTM note.

- Voice Rules (Heading2) — inherited from docs/07-VOICE-AND-TONE.md. Include explicitly: no em dashes (—) in caption prose or A0 brief prose; use commas, periods, colons, parentheses, or line breaks instead. Structural section labels (A0 —, Facebook — Reframe 1) may keep em dashes.

Target length: ~1,500–1,700 words of usable content. Lean structure over redundant headings.

Required structure for the brief:
- What this article is + emotional entry + key reframe
- The URL (canonical, no UTM)
- Cluster + pub date
- Pull quotes
- Audience description + share target
- Tone reminder (what to lean into / avoid for THIS article specifically)
- Cross-promotion within the Master Prompt series
- Platform priorities
- Success metrics
- When to refresh
- Note: brief contains NO captions. Captions live only in the kit.

Before generating: read AUTHORITY-MAP.md to confirm the article is Published. If it is not, flag and stop. Read the live article URL to extract the actual H1, lead paragraph, pull quotes, and key reframe — do not invent material the article does not contain.

Before finalizing the kit: search caption and A0 prose for — (U+2014) and replace every instance in prose (not structural labels).

Output:
- social/kits/KIT-[slug].docx
- social/briefs/BRIEF-[slug].md

Use the slug from the article URL, lowercase with hyphens.

Flag any conflict with the governance docs before generating. If the article is not in AUTHORITY-MAP, or the URL does not resolve, or the slug violates docs/05-URL-CONVENTIONS.md, stop and report.
```

---

## How to use

1. Copy the prompt above.
2. Replace `[ARTICLE TITLE]` and `[LIVE URL]` with the article's title and full live URL.
3. Paste into Cursor.
4. Cursor reads governance docs, fetches the live article, generates both files.
5. Review the output for voice fidelity (per docs/07-VOICE-AND-TONE.md) — does it sound like Arcadia, or does it sound like AI-slop?
6. Spot-check: no em dashes in caption prose; pull quotes only in A0; no duplicate graphics section at end.
7. Once approved, the social media manager receives both files plus the live URL.

## What this prompt assumes

- The article is already published and live.
- The article is in `AUTHORITY-MAP.md` with status Published.
- The article URL follows `docs/05-URL-CONVENTIONS.md`.
- The article has identifiable pull quotes, a clear key reframe, and a recognizable emotional entry point. (If it does not, the article is not yet pillar-quality — fix the article before generating social.)

## What this prompt prevents

- Inventing material the article does not contain.
- Mixing strategy and execution into one document.
- Building captions that don't specify a platform.
- Creating files that don't follow the naming convention.
- Skipping the conflict check that catches drift between docs and live site.
- Duplicating pull quotes in a second kit section (older format drift).
- Bloated A0 with nested Heading3 blocks when inline labels suffice.
- Em dashes in social caption prose (per docs/07-VOICE-AND-TONE.md).

## Reference kits (lean format — use these)

| Kit | Brief | Notes |
|-----|-------|-------|
| `KIT-signs-parent-needs-home-care.docx` | `BRIEF-signs-parent-needs-home-care.md` | Master Prompt #4; full lean structure |
| `KIT-home-care-cost-ontario.docx` | `BRIEF-home-care-cost-ontario.md` | A1 labelled "Transparency Post" variant |
| `KIT-what-does-a-psw-do.docx` | `BRIEF-what-does-a-psw-do.md` | A1 labelled "Explainer Post" variant |

Do **not** use May 15/17 kits (`KIT-talking-to-parent-about-care`, `KIT-siblings-disagree-parent-care`, `KIT-what-no-one-tells-you-first-week-home-care`) as structural templates — they include redundant "Pull Quotes for Graphics" sections and heavier Heading3 nesting.

## Last updated

May 2026 — lean kit format locked (inline A0, single pull-quote location, em-dash rule in captions, May 22 reference kits).
