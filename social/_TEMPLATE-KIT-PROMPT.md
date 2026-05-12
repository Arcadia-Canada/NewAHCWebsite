# Cursor Prompt — Generate Social Media Kit

Copy the prompt below into Cursor when an article publishes and you need to generate its social media kit + strategy brief.

This prompt produces both:
- `social/briefs/BRIEF-[slug].md`
- `social/kits/KIT-[slug].docx`

---

## Standard prompt (copy this)

```
Per AI-CONTEXT.md and docs/: generate a social media kit and strategy brief for [ARTICLE TITLE] at [LIVE URL].

Use the same format as social/kits/KIT-talking-to-parent-about-care.docx and social/briefs/BRIEF-talking-to-parent-about-care.md as reference templates.

Required structure for the kit:
- A0 Pre-Post Brief — title, URL, cluster, role, slug, emotional entry, key reframe, share target, UTM strings, OG image spec, pull quotes
- A1 Recognition Post — separately labelled Facebook caption, LinkedIn caption, and Instagram caption
- A2 Reframe Post — three reframes, each in three platform-tuned versions (Facebook, LinkedIn, Instagram). Total of 9 A2 captions.
- A3 Share-Prompt Post — 2 caption variants targeting different recipients
- A4 Quiet Authority Post — LinkedIn caption for the professional audience + a link-optional alternative
- 14-Day Distribution Summary table
- Performance metrics
- Voice rules (inherited from docs/07-VOICE-AND-TONE.md)

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
6. Once approved, the social media manager receives both files plus the live URL.

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

## Last updated

May 2026 — initial version. Updated when the kit format moved to per-platform A2 captions.
