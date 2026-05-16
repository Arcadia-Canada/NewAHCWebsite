# 06 — Publishing Checklist

The step-by-step workflow for publishing a new resource article on arcadiahomecare.ca.

**Stack (canonical):** Next.js 16, App Router, static export (`output: 'export'`), hosted on Vercel — articles live in `app/resources/[cluster]/[article-slug]/page.tsx`. See `docs/08-IMPLEMENTATION-BLUEPRINT.md` for file structure, metadata, and JSON-LD.

**Time per article:** roughly 60–90 minutes the first time, ~30 minutes once the workflow is familiar.

**Last updated:** May 2026 — aligned phase numbers and **hard gates** with `.cursorrules` at the repo root.

---

## Hard gates — three steps you cannot skip

These match `.cursorrules`. If any of them is skipped, the article is **not** “done publishing.” (The May 2026 drift audit found published articles missing one or more of these — do not extend that pattern.)

| Gate | Phase | What | Why |
|------|-------|------|-----|
| **1** | **Phase 6** | Update the **cluster hub** (`app/resources/[cluster]/page.tsx`) so the article appears with correct title, description, link, and `live` vs `coming` status. | Readers landing on the cluster cannot find the article otherwise. |
| **2** | **Phase 7** | Update **`docs/AUTHORITY-MAP.md`** (and related inventory in the same pass — see Phase 7 checklist below). | Future AI and humans work from stale inventory otherwise. |
| **3** | **Phase 9** | Create **`social/briefs/BRIEF-[slug].md`** and **`social/kits/KIT-[slug].docx`** using templates + the prompt in `docs/CURSOR-CONTENT-PROMPTS.md` (“Generate social media kit and brief”). | Social distribution stays aligned with article voice and governance. |

> **Replacing a Coming Soon stub:** In Phase 6, switch that row to `live` and correct `href` / copy — do not leave a stub row that still links to thin or placeholder content.

---

## Phase 1 — Prepare the article (10–20 min)

### Primary path — Next.js page in the repo

✅ **1.1** — Confirm slug and cluster per `docs/05-URL-CONVENTIONS.md` and `docs/AUTHORITY-MAP.md`.

✅ **1.2** — Create or edit `app/resources/[cluster-slug]/[article-slug]/page.tsx` per `docs/08-IMPLEMENTATION-BLUEPRINT.md`: metadata (title, description, canonical, Open Graph), JSON-LD (Article, BreadcrumbList, FAQ if applicable, HomeHealthCare), voice per `docs/07-VOICE-AND-TONE.md`, internal links per `docs/03-INTERNAL-LINKING-RULES.md` (only targets that return HTTP 200).

✅ **1.3** — Read the page in the editor once end-to-end. Fix obvious typos, broken JSX, or schema copy that does not match visible FAQ text.

✅ **1.4** — Search the article file for em dashes (`—`). Per `docs/07-VOICE-AND-TONE.md`, replace every instance in body copy, metadata, Open Graph text, and FAQ/schema strings before publish.

### Legacy / optional — archived HTML drafts

Some older articles were drafted as `[slug]-PROD.html` / `[slug]-DEV.html`. Those files are **not** the publishing path for new Next.js articles; they may be used only as personal archives or if explicitly named as a reference. Do not treat them as the source of truth once the article exists in `app/`.

---

## Phase 2 — Test locally (10 min)

✅ **2.1** — From the repo root: `npm run dev`

✅ **2.2** — Open `http://localhost:3000` and navigate to the article path (include trailing slash to match production).

✅ **2.3** — Check: H1, summary, body, FAQ behaviour, internal links (spot-check), CTAs, mobile layout.

✅ **2.4** — Run `npm run build` and confirm the static export completes with **zero errors** before pushing.

---

## Phase 3 — Deploy to production (5 min)

### Arcadia canonical: Vercel + GitHub

✅ **3.1** — Commit the article (and any same-change governance edits) with a clear message, e.g. `Publish: [short article title]`.

✅ **3.2** — Push to `main` (or merge a PR that targets `main`). Vercel builds and deploys automatically.

✅ **3.3** — Wait for the deployment to finish, then open the **live** canonical URL (see `alternates.canonical` on the page).

### Other platforms (reference only)

If the site were ever on WordPress, Webflow, or another CMS, the deploy steps would live in that platform’s UI. Arcadia’s live stack is **Next.js on Vercel** — use **3.1–3.3** above.

---

## Phase 4 — Test the live URL (10 min)

Target shape:

```
https://www.arcadiahomecare.ca/resources/[cluster-slug]/[article-slug]/
```

✅ **4.1** — Confirm 200, correct H1, readable body, working FAQ, internal links (click several), phone and contact CTAs.

✅ **4.2** — Social previews: Facebook Sharing Debugger and LinkedIn Post Inspector (paste the live URL).

✅ **4.3** — Schema: Google Rich Results Test — Article, BreadcrumbList, FAQ (if present), HomeHealthCare should parse. Fix per `docs/04-SCHEMA-STANDARDS.md`.

---

## Phase 5 — Google Search Console (5 min)

✅ **5.1** — Inspect the live URL in Search Console for property `arcadiahomecare.ca`.

✅ **5.2** — Request indexing if the URL is not yet on Google.

✅ **5.3** — One-time / periodic: sitemap submitted, preferred domain (www vs non-www) matches canonicals in the app.

---

## Phase 6 — Update the cluster hub (**HARD GATE**)

The new article **must** appear on `app/resources/[cluster-slug]/page.tsx`.

✅ **6.1** — Add or update the entry: title (aligned with live H1), one-line description, `href`, `status: 'live'` (or `'coming'` only for real stubs).

✅ **6.2** — If this is the **pillar** article for the cluster, keep the featured “Start here” (or equivalent) block per `docs/02-CONTENT-CLUSTERS.md`.

✅ **6.3** — If this publish **replaces** a Coming Soon stub, remove duplicate or stub behaviour — one row, live, no link to empty content.

Commit cluster hub changes in the same release as the article when possible.

---

## Phase 7 — Update inventory (**HARD GATE**)

Keep governance and the live site in sync in **one commit** when practical.

✅ **7.1** — **`docs/AUTHORITY-MAP.md`** — Set status to **Published**, add the live URL, remove or adjust Coming Soon tracker rows if applicable.

✅ **7.2** — **`docs/CLUSTER-LINK-MAP.md`** — Move the article to Published in its cluster, outbound links, counts, Master Prompt table if needed.

✅ **7.3** — **`docs/10-KEYWORD-OWNERSHIP.md`** — Move keyword rows to the published section when this article owns that keyword.

✅ **7.4** — **`app/sitemap.ts`** — Include the new URL so the static sitemap matches the site.

---

## Phase 8 — Optional: quick handoff note

If someone else posts to social without using the repo: still complete **Phase 9** first. Optional email: live URL + pointer to `social/briefs/BRIEF-[slug].md` and `social/kits/KIT-[slug].docx` in GitHub. Do **not** treat an informal email as a substitute for Phase 9 files.

---

## Phase 9 — Social brief + kit (**HARD GATE**)

✅ **9.1** — Use **`docs/CURSOR-CONTENT-PROMPTS.md`** → section **“Generate social media kit and brief (run after publishing)”** in Cursor (or equivalent process). Read only: `social/_TEMPLATE-BRIEF.md`, `social/_TEMPLATE-KIT-PROMPT.md`, and **one** named example brief + kit as references in that prompt — not the whole `briefs/` or `kits/` folders.

✅ **9.2** — Write **`social/briefs/BRIEF-[slug].md`** and **`social/kits/KIT-[slug].docx`** with naming aligned to the article slug.

✅ **9.3** — Confirm pull quotes and captions match the **live** article (H1, lead, reframe) — do not invent content not on the page.

Commit `social/` additions with the rest of the publish or immediately after in a follow-up commit the same day.

---

## Phase 10 — One week later (5 min)

✅ **10.1** — GSC: confirm “URL is on Google.”

✅ **10.2** — Performance: note queries, CTR, average position; tune title/description on the Next.js page if needed.

---

## Phase 11 — Quarterly review (10 min)

Per site maintenance discipline:

✅ Internal links still resolve (200).

✅ Schema fields still match reality (rating, reviews, hours, address, phone) per live site.

✅ Government/program names and stats still accurate.

✅ Voice still matches `docs/07-VOICE-AND-TONE.md`.

Update `dateModified` in Article JSON-LD when you materially change the page.

---

## Common problems and fixes

**Build fails on `npm run build`**
Fix TypeScript/JSX errors and broken imports in `app/` before redeploying. Static export must be clean.

**Rich Results show errors**
Usually duplicate or invalid JSON-LD. Compare to `docs/04-SCHEMA-STANDARDS.md`; FAQ visible text must match FAQ schema exactly.

**Wrong URL after publish**
Changing URLs hurts SEO; use `docs/05-URL-CONVENTIONS.md` up front. If a URL must change, add **301** redirects in `vercel.json` and mirror in `redirects.json` per `docs/08-IMPLEMENTATION-BLUEPRINT.md`.

**Internal link goes to a Coming Soon stub**
Not allowed for publish. Link only to live pages, or use an HTML comment placeholder for future targets: `<!-- FUTURE-LINK: /path/ -->`.

---

## Platform-specific notes (Arcadia — filled in)

**Platform:** Vercel + Next.js 16 (static export)  
**Repo:** GitHub (`Arcadia-Canada/NewAHCWebsite` or successor)  
**Production URL:** `https://www.arcadiahomecare.ca` (canonicals use `www`)  
**Deploy:** Push to `main` → Vercel production build → static assets to CDN  

**CMS quirks:** Content is code in `app/` — there is no WordPress-style CMS for articles. Edits are PRs/commits.

**Auto-injected schema:** None from a plugin. Article pages ship hand-authored JSON-LD in `page.tsx`.

**Sitemap:** `app/sitemap.ts` — must be updated for each new URL (see Phase 7).

**Redirects:** `vercel.json` (and `redirects.json` as reference). Next export does not apply redirects at build time; Vercel serves them.

---

## Redirects and URL permanence

If a published slug must change, add a **301** redirect and update inventory docs. Never remove a redirect without checking external links / GSC. Details: `docs/05-URL-CONVENTIONS.md` and `vercel.json`.
