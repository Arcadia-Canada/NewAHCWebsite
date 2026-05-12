# /social/ — Per-Article Social Media Assets

Two files are produced for every published article. They do different jobs and are deliberately not interchangeable.

## Folder structure

```
social/
├── README.md                   ← this file
├── _TEMPLATE-BRIEF.md          ← starter for new strategy briefs
├── _TEMPLATE-KIT-PROMPT.md     ← Cursor prompt for generating new kits
├── briefs/                     ← strategy docs (one per article)
│   └── BRIEF-[slug].md
└── kits/                       ← execution docs (one per article)
    └── KIT-[slug].docx
```

## What each file is for

### `BRIEF-[slug].md` — strategy

**Read once when the article publishes.** Sets the frame in the social media manager's head: who this article is for, what reader moment it catches, how it fits inside the Master Prompt arc, what tone to hit, what success looks like.

**No captions.** If you want a caption, open the kit.

The brief is for orientation. It is what a thoughtful agency would brief a writer with before sitting down to write copy. Once the social media manager has read it, they should not need to re-read it for that article.

### `KIT-[slug].docx` — execution

**Opened weekly, every week, for the 14-day distribution window.** Contains the A0 brief at the top (production specs only), then four sections of platform-labelled, copy-paste-ready captions:

- **A1 Recognition** (Day 1) — Facebook + LinkedIn + Instagram captions, separately labelled
- **A2 Reframe** (Day 2–3) — three reframes, each in three platform versions = 9 captions
- **A3 Share-Prompt** (Day 5–7) — captions designed to generate forwards
- **A4 Quiet Authority** (Day 10–14) — LinkedIn caption for the professional audience

Every caption already has the article URL with the right platform-specific UTM string baked in. The social media manager copies the caption, pastes it into Facebook (or LinkedIn, or Instagram), and posts. That is the workflow.

## Why two files

A skilled social media manager works in two modes:

- **Strategic mode** — happens once per article, when the article publishes. Read the brief. Understand the piece. Internalize the audience and tone.
- **Execution mode** — happens repeatedly across the 14-day window. Open the kit. Find the right caption for today's post. Copy. Paste. Schedule.

Putting strategy and execution in the same document means:
- The strategy gets re-read every week, which is wasteful.
- The captions get buried inside long-form prose, which is slow.
- The two formats fight for primacy and dilute each other.

Two files. Clear roles. Zero overlap.

## Naming convention

Both files use the article's URL slug:

- Article URL: `/resources/family-caregiver-support/talking-to-parent-about-care/`
- Slug: `talking-to-parent-about-care`
- Brief file: `BRIEF-talking-to-parent-about-care.md`
- Kit file: `KIT-talking-to-parent-about-care.docx`

This means the social media manager can find the right brief and kit from the article's URL alone — no decoding required.

## How files get created

When a new article publishes, **both files must be created in the same workflow.** This is now Phase 8 of `docs/06-PUBLISHING-CHECKLIST.md`. Specifically:

1. The kit is generated from the kit template (`_TEMPLATE-KIT-PROMPT.md` is the Cursor prompt).
2. The brief is generated from the brief template (`_TEMPLATE-BRIEF.md` is the starter).
3. Both files land in this folder before the article is considered "published-and-distributed."
4. The social media manager is sent both files, plus the live URL.

Article is not "done" until both files exist.

## How to update an existing article's social assets

If the article's content meaningfully changes (revision, refresh, dateModified updated), the brief and kit should both be re-reviewed. Specifically:

- New pull quotes? Add them to both files.
- New URL (slug change with redirect)? Update both files. Add a note in the brief explaining the change so the social media manager doesn't link to a stale URL still cached in their scheduler.
- New cross-cluster connections (a related article published)? Update the brief's cross-promotion section.

If only minor edits happen (typo, small revision), no social refresh is required.

## Inventory tracking

The list of articles with completed social assets is tracked in `docs/AUTHORITY-MAP.md`. When both files exist for an article, the entry should show ✓ in the social column. If you find a published article without a brief and kit, that is a governance gap — generate the missing files immediately.

## Last updated

May 2026 — initial version. Created when the kit format was upgraded to per-platform A2 captions and the strategy brief was separated from the execution kit.
