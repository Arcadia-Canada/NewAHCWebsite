# AI-CONTEXT.md

**Read this file first. It governs how AI tools should work on this project.**

This file lives at the top of the Arcadia Home Care website repository. Cursor, Claude, GitHub Copilot, and any other AI assistant working on this codebase should read this file before generating code, content, schema, or making site decisions.

This repository’s **`.cursorrules`** file instructs Cursor to follow this file and **`docs/`** before any new or updated site content is written or uploaded.

---

## What this site is

**Arcadia Home Care** is a specialized home care provider serving Toronto and the GTA since 2005. The website at `arcadiahomecare.ca` is a decision-support platform and knowledge hub for families navigating aging parents, dementia, brain injuries, and home care decisions.

The site has two jobs:
1. Earn search authority through educational articles.
2. Guide readers toward Arcadia's services through trust, not promotion.

## Who maintains this site

**One person.** The site owner is also the developer, content strategist, and publisher. They are not a professional developer. They built this site with AI assistance and they continue to maintain it the same way.

This means:
- AI tools should explain technical decisions in plain language
- Avoid suggesting tools, frameworks, or workflows that require a dev team to manage
- Prefer simple, documented, repeatable patterns over clever solutions
- When something needs deep technical work, say so explicitly and recommend hiring rather than walking the owner through 40 steps of debugging

## The single source of truth

**The live site at `arcadiahomecare.ca` is canonical.**

When this docs folder, a strategy PDF, or any other document conflicts with what is actually on the live site, the live site wins. Update the docs to match reality — do not change the site to match stale docs.

## Governance file map

Every governance document lives in `docs/` in this repo. Read the relevant file(s) before any task:

| File | Read this when... |
|------|-------------------|
| `docs/01-SITE-ARCHITECTURE.md` | Adding any new page, section, or URL |
| `docs/02-CONTENT-CLUSTERS.md` | Writing or planning a blog article |
| `docs/03-INTERNAL-LINKING-RULES.md` | Adding internal links to any page |
| `docs/04-SCHEMA-STANDARDS.md` | Generating JSON-LD or page metadata |
| `docs/05-URL-CONVENTIONS.md` | Choosing a slug or page URL |
| `docs/06-PUBLISHING-CHECKLIST.md` | Publishing a new blog article |
| `docs/07-VOICE-AND-TONE.md` | Writing or editing any user-facing copy |

Plus the article inventory:

| File | Purpose |
|------|---------|
| `docs/AUTHORITY-MAP.md` | The 98-article inventory: status, action, links per article |
| `docs/GOVERNANCE-PACK-README.md` | Overview of the pack (humans); optional for AI |

## How AI should approach common tasks

### "Write a new blog article"

1. Read `docs/02-CONTENT-CLUSTERS.md` to confirm which cluster it belongs to.
2. Read `docs/AUTHORITY-MAP.md` to find the article entry — check status (Net New, Coming Soon, Differentiate) and any linking notes.
3. Read `docs/07-VOICE-AND-TONE.md` to apply Arcadia's editorial voice.
4. Read `docs/03-INTERNAL-LINKING-RULES.md` for required and optional internal links.
5. Read `docs/04-SCHEMA-STANDARDS.md` for required JSON-LD blocks.
6. Produce the article using the same structure as the published pillar at `/resources/navigating-home-care/when-parent-needs-more-help/`.

### "Update internal links across the site"

1. Read `docs/03-INTERNAL-LINKING-RULES.md`.
2. Verify every target URL resolves on the live site before linking.
3. Do not link to Coming Soon or Net New articles unless they are confirmed live. Dead links hurt SEO and trust.

### "Generate schema for a new page"

1. Read `docs/04-SCHEMA-STANDARDS.md`.
2. Use the documented schema types only — do not introduce new ones without explicit approval.
3. Check whether the CMS or theme already auto-injects schema. Two of the same `@type` on one page is an error.

### "Publish a new blog article"

1. Use `docs/06-PUBLISHING-CHECKLIST.md` as the step-by-step.
2. Do not skip phases.

### "Create a new cluster, section, or URL pattern"

This requires explicit approval from the site owner. Do not do it unilaterally. Surface the request, explain the impact, wait for sign-off.

## What AI should NEVER do without permission

- Change cluster names, URL patterns, or the schema types specified in the standards
- Link to articles that are not yet published (i.e., do not exist on the live site)
- Migrate URLs without setting up 301 redirects
- Introduce new dependencies, frameworks, or build tools
- Create new sections of the site (Resources, Services, Conditions, Locations, How Care Starts, Contact are the only sections)
- Generate inflated word counts, listicles, or "SEO content" that contradicts the voice standards
- Reproduce competitor content or copyrighted material

## Language and tone defaults

- Locale: `en-CA` (Canadian English)
- Spelling: Canadian (organize, not organise; neighbour, not neighbor; centre, not center)
- Place naming: Toronto, GTA (Greater Toronto Area), Ontario
- Currency: CAD
- Date format: April 30, 2026 (not 30/04/2026 or 04/30/2026)
- Phone format: (844) 977-0050

## When the docs are wrong or out of date

If you find a conflict between docs and live site, or two docs that disagree:

1. Note the conflict explicitly to the site owner.
2. Default to the live site's pattern.
3. Recommend a doc update rather than a site change.

The docs serve the site, not the other way around.

## Last updated

May 2026 — governance pack added to the website repository (`AI-CONTEXT.md` + `docs/`). Update this section whenever any file in `docs/` changes meaningfully.
