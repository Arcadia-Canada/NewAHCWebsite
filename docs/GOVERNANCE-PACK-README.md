# Arcadia Governance Pack — Read This First

This is your operating system for everything content-related on arcadiahomecare.ca.

You are the developer. You are the strategist. You are the publisher. This pack is designed for that — one person, with AI assistance, running a content operation that would normally require a team of three.

---

## What's in this pack

```
NewAHCWebsite/   (this repo)
├── AI-CONTEXT.md                     ← Master file for AI: read first.
├── .cursorrules                      ← Tells Cursor to read AI-CONTEXT + docs/ before new content.
└── docs/
    ├── GOVERNANCE-PACK-README.md     ← Human overview (this file)
    ├── CURSOR-CONTENT-PROMPTS.md     ← Ready-to-copy prompts for Cursor chat
    ├── EXTERNAL-STRATEGY-REFERENCES.md ← PDFs on OneDrive: when to use vs this repo
    ├── 01-SITE-ARCHITECTURE.md       ← The 6 site sections + URL patterns
    ├── 02-CONTENT-CLUSTERS.md        ← The 5 clusters + rules for new articles
    ├── 03-INTERNAL-LINKING-RULES.md  ← How pages link to each other
    ├── 04-SCHEMA-STANDARDS.md        ← JSON-LD types and the canonical org schema
    ├── 05-URL-CONVENTIONS.md         ← Slug rules and URL patterns
    ├── 06-PUBLISHING-CHECKLIST.md    ← Step-by-step publish workflow
    ├── 07-VOICE-AND-TONE.md          ← Editorial voice — the actual asset
    └── AUTHORITY-MAP.md              ← The 102-article inventory + status tracker + Coming Soon deadline tracker
```

---

## What to do with these files (the answer to your actual question)

**Ensure all 12 files are in your website's Git repo** (this project).

Yes — every single one. Here's where they go:

### Step 1 — Add `AI-CONTEXT.md` to the root of your repo

When Cursor opens a project, it reads files at the root first. Putting `AI-CONTEXT.md` at the very top of your repo means Cursor (and any other AI tool — Claude, Copilot, etc.) reads it before doing anything else.

```
NewAHCWebsite/
├── AI-CONTEXT.md         ← here
├── docs/
├── app/
└── ...
```

### Step 2 — Use a `docs/` folder in your repo for the remaining pack files

```
NewAHCWebsite/
├── AI-CONTEXT.md
├── .cursorrules
├── docs/
│   ├── GOVERNANCE-PACK-README.md
│   ├── CURSOR-CONTENT-PROMPTS.md   ← Copy-paste prompts for Cursor (download / open locally)
│   ├── EXTERNAL-STRATEGY-REFERENCES.md
│   ├── 01-SITE-ARCHITECTURE.md
│   ├── 02-CONTENT-CLUSTERS.md
│   ├── 03-INTERNAL-LINKING-RULES.md
│   ├── 04-SCHEMA-STANDARDS.md
│   ├── 05-URL-CONVENTIONS.md
│   ├── 06-PUBLISHING-CHECKLIST.md
│   ├── 07-VOICE-AND-TONE.md
│   └── AUTHORITY-MAP.md
├── app/
└── ...
```

### Step 3 — Commit and push

If your site is on a Git-based deploy (Vercel, Netlify, GitHub Pages), commit these files and push. They will deploy alongside the site but won't be visible to users — they're just there for AI tools.

If your site is on WordPress, Webflow, or a CMS that doesn't expose a repo, **still keep these files in a Cursor project on your local machine**. Open that project whenever you're working on content. The files don't need to be deployed to do their job.

---

## Why putting them in the repo (or Cursor project) matters

This is the part most people get wrong. Saving these as PDFs in Google Drive is *almost* useless for AI-assisted work. Putting them in the repo is the difference between:

**❌ Without governance in the repo:**
> *You*: "Cursor, write the next article in the Family Caregiver cluster."
>
> *Cursor*: *makes up cluster name, invents URL pattern, generates wrong schema, links to articles that don't exist, writes in generic listicle voice*

**✅ With governance in the repo:**
> *You*: "Cursor, write the next article in the Family Caregiver cluster."
>
> *Cursor*: *reads AI-CONTEXT, reads cluster file, reads voice file, reads authority map, sees that 'The Conversation You Keep Putting Off' is the highest-priority Net New article, reads linking rules, generates the article using exact URL pattern, correct schema, valid internal links, and Arcadia voice*

The files are inert PDFs in Drive. They are an executable strategy in your repo.

---

## How to use the pack day-to-day

### When you want to publish a new blog article

1. Open Cursor in your website project.
2. Tell Cursor what you want: *"Write [article title] for the [cluster name] cluster, following the governance docs."*
3. Cursor reads the docs, drafts the article in the right voice, with the right schema, linking to the right pages.
4. Review the draft in `07-VOICE-AND-TONE.md` style — does it sound like a person, not a brochure?
5. Use `06-PUBLISHING-CHECKLIST.md` to publish it.
6. After publish, update `AUTHORITY-MAP.md` to mark the article as `Published`.

### When something on the site changes

If Arcadia's phone number changes, hours change, address changes, Google review count changes:

1. Open `04-SCHEMA-STANDARDS.md`.
2. Update the canonical org schema there.
3. Then update every page's schema to match — this is one search-and-replace across the codebase.

### When the strategy evolves

If you decide to add a new cluster, change a URL pattern, or add a new section:

1. Update the relevant doc file FIRST.
2. Then make the change on the site.
3. The doc is the source of truth for the strategy. The site is the source of truth for what's live.

---

## What the social media person needs

They do **not** need the full governance pack. Point them at:

- **`social/briefs/BRIEF-[slug].md`** — strategy (read once when the article goes live)
- **`social/kits/KIT-[slug].docx`** — copy-paste captions for the distribution window
- The **live article URL**

Those files are produced in **Phase 9** of `docs/06-PUBLISHING-CHECKLIST.md`. See `social/README.md` for the brief-vs-kit split. They do not need clusters, schema, or URL conventions unless they ask.

---

## What if you change platforms?

Arcadia’s live site is **Next.js 16 on Vercel** — `docs/06-PUBLISHING-CHECKLIST.md` is written for that stack (see **Platform-specific notes** at the bottom of that file).

If the site ever moves to another stack (e.g. a CMS):

- Most of this governance pack stays the same (architecture, clusters, voice, schema, URLs, authority map).
- **`docs/06-PUBLISHING-CHECKLIST.md`** must be updated so Phases 1–5 (build, deploy, QA) match the new “how.”
- **Hard gates** (Phases 6, 7, 9) stay conceptually the same even if file paths change — cluster visibility, inventory truth, and social brief+kit still must not be skipped.

---

## When something goes wrong with the docs

If you find:

- Two docs that contradict each other → the live site wins; update the docs to match.
- A doc that's wrong → fix the doc, commit, push.
- A doc that's missing something → add it. The pack is yours to grow.

The docs serve the site, not the other way around. Don't let them become precious.

---

## When to revisit this pack

- **Every quarter** — read through it once, end to end, with a notebook. Note anything that feels stale or wrong.
- **After every 10 articles published** — check whether the voice has drifted, whether linking is consistent, whether the authority map is up to date.
- **Whenever you onboard help** — even hiring a writer for one article, send them `02-CONTENT-CLUSTERS.md` and `07-VOICE-AND-TONE.md` first.

---

## One last thing

You said you built the entire site with AI assistance, and the developer you hired didn't work out. That experience taught you something most clients never learn: **a person hiring a developer is helpless without specs.** A person with specs can hire any developer or any AI and get reasonable results.

This pack is your specs. Treat it that way. When future-you, future-Claude, future-developer, or future-writer touches this site, they should be able to do good work because the docs told them how. That's the whole point.

---

## File checklist

Confirm these files exist in the repo:

- [ ] `AI-CONTEXT.md` (root of repo)
- [ ] `docs/GOVERNANCE-PACK-README.md`
- [ ] `docs/CURSOR-CONTENT-PROMPTS.md`
- [ ] `docs/EXTERNAL-STRATEGY-REFERENCES.md`
- [ ] `docs/01-SITE-ARCHITECTURE.md`
- [ ] `docs/02-CONTENT-CLUSTERS.md`
- [ ] `docs/03-INTERNAL-LINKING-RULES.md`
- [ ] `docs/04-SCHEMA-STANDARDS.md`
- [ ] `docs/05-URL-CONVENTIONS.md`
- [ ] `docs/06-PUBLISHING-CHECKLIST.md`
- [ ] `docs/07-VOICE-AND-TONE.md`
- [ ] `docs/AUTHORITY-MAP.md`

If any of these are missing, the pack is incomplete.
