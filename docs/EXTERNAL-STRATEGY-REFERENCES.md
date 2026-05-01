# External strategy references (PDFs)

Strategy PDFs live **outside this repository** (for example on Arcadia OneDrive). They are **not** copied into Git. This file records **what they are**, **when to use them**, and **how they rank** against repo docs and the live site.

---

## Order of authority (same as `AI-CONTEXT.md`)

1. **Live site** — `arcadiahomecare.ca` / `www.arcadiahomecare.ca` — canonical for URLs, navigation, and what actually exists.
2. **This repo** — `AI-CONTEXT.md` and `docs/*.md` — day-to-day execution for architecture, clusters, voice, linking, URL rules, schema targets, and the article inventory.
3. **PDFs below** — planning, operating system, and production workflow. Use them when the Markdown files do not spell out a process or checklist.

If a PDF disagrees with the live site or this repo’s current architecture, **the live site wins**. Update the PDF or the repo docs with the site owner; do not treat an old PDF line as a reason to break production URLs or cluster names.

---

## Where to find the files (on Arcadia systems)

Folder (typical): **OneDrive — Arcadia Home Care** → **Arcadia Social Media** → **Arcadia Home Care Social Media** → **Content Cluster and SEO Architecture Files**

Exact paths on a given machine may differ; search by **filename** if needed.

---

## PDF: Content & SEO Operating System (Development Edition)

**File:** `Arcadia_SEO_System_Development.pdf`  
**Also referred to as:** Content & SEO Operating System — Development Edition (April 2026)

**Role:** Canonical **operating system** for scaled content and SEO: phases (foundation through performance review), **keyword ownership**, page-role taxonomy, **internal linking governance**, **schema governance**, **Coming Soon** rules, master-prompt reconciliation, **technical checklist**, and related production gates.

**When to read it**

- Before treating a topic as “owned” by a keyword (avoid cannibalization).
- When defining or reviewing **production phases**, calendar discipline, or post-publish review.
- When the task touches **Coming Soon** policy, redirects, temporary `noindex`, or slug changes at scale.
- When `docs/04-SCHEMA-STANDARDS.md` is not enough detail for a complex page type.

**Relationship to this repo:** Complements `docs/01-SITE-ARCHITECTURE.md`, `docs/03-INTERNAL-LINKING-RULES.md`, `docs/04-SCHEMA-STANDARDS.md`, and `docs/AUTHORITY-MAP.md`. It does **not** replace them for slug patterns and cluster names—those stay in repo docs unless the live site has moved ahead.

---

## PDF: Arcadia Content Production System

**File:** `arcadia_content_production_system.pdf`

**Role:** Short **human workflow** from topic selection through draft, internal links, FAQs/schema, tone review, publish, and distribution.

**When to read it**

- As a **checklist** alongside `docs/06-PUBLISHING-CHECKLIST.md` for a new article or batch.

**Reconcile before acting:** Older wording in this PDF may reference retired ideas (for example “Knowledge Centre” or pillar labels that are not current). **Current** section names, cluster list, and URL patterns are defined in `docs/01-SITE-ARCHITECTURE.md`, `docs/02-CONTENT-CLUSTERS.md`, and `docs/05-URL-CONVENTIONS.md`, and confirmed on the **live site**.

---

## Related PDFs (optional; same folder)

If the site owner keeps these alongside the SEO system PDFs, they remain valid **strategy** references:

- **Site map + cluster blueprint** — unified site architecture and cluster summary (often titled like `Arcadia_Site_Map_Blueprint_Final.pdf`).
- **100-article authority map** — article-level inventory aligned to clusters (often titled like `Arcadia_100_Article_Map_Final.pdf`).

The **operational inventory in Git** is `docs/AUTHORITY-MAP.md`; keep it in sync with what is **live** after each publish.

---

## For AI tools (Cursor, etc.)

- Prefer **reading files in this repo** first so paths, slugs, and cluster names match the codebase.
- Open the PDFs **when** the user attaches them, pastes excerpts, or asks for keyword ownership / calendar / technical gate steps that are not fully duplicated in `docs/`.
- Never assume a PDF line overrides the **live** URL structure.

---

## Last updated

May 2026 — initial version: links repo governance to Arcadia SEO System and Content Production PDFs without storing them in Git.
