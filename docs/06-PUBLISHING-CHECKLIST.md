# 06 — Publishing Checklist

The step-by-step workflow for publishing any new blog article on arcadiahomecare.ca. Designed for the site owner (who is also the developer) without dev experience.

**Time per article:** 60–90 minutes for the first one, ~30 minutes once the workflow is familiar.

---

## Phase 1 — Prepare the file (5 min)

✅ **1.1** — You should have two HTML files for each article:
- `[slug]-PROD.html` ← the file you upload
- `[slug]-DEV.html` ← keep in your archive (has internal comments)

✅ **1.2** — Open the PROD file in a plain text editor:
- **Recommended:** VS Code (free, the editor most modern devs use)
- **Alternative:** TextEdit on Mac (set to plain text mode), Notepad on Windows

✅ **1.3** — Read the file once, end to end. You're confirming nothing is obviously broken before any other steps.

---

## Phase 2 — Test locally (10 min)

For a static HTML article, you don't need a localhost server. The simplest preview:

✅ **2.1** — Find the PROD file on your computer.

✅ **2.2** — Double-click it. It opens in your default browser.

✅ **2.3** — Read through the rendered article. Check:
- Headline displays correctly
- Body text reads cleanly
- FAQ accordions open and close on click
- Images are present (or expected placeholders show as broken)
- Layout is readable

✅ **2.4** — If anything is visibly broken, stop and resolve before continuing. If it looks normal, move on.

> **Note:** This local preview shows the file using its baseline styling. The live site template will take over and the article will look different (better, usually) once published. That's expected.

---

## Phase 3 — Deploy to the live site

The deploy step depends on the platform Arcadia is on. Confirm before each publish.

### Identifying the platform (one-time setup)

Common signals:
- **WordPress** — admin URL is `arcadiahomecare.ca/wp-admin/`
- **Webflow** — login at webflow.com
- **Vercel + Next.js / static site** — repo on GitHub, auto-deploys on push (URL contains `dpl_` deployment IDs)
- **Other headless CMS** (Sanity, Contentful, etc.) — login at the CMS provider's URL

Once you know the platform, document it in this file's "Platform-specific notes" section at the bottom.

### Phase 3a — WordPress

✅ Log in to `arcadiahomecare.ca/wp-admin/`
✅ Posts → Add New
✅ Paste the H1 into the title field
✅ Switch editor to Code/Text view
✅ Open PROD HTML, copy everything between `<main>` and `</main>`, paste into editor
✅ Set permalink slug to match the URL convention (see `05-URL-CONVENTIONS.md`)
✅ Set category to the correct cluster
✅ Fill SEO plugin fields from `CMS-FIELDS.md` (if a Yoast/Rank Math/etc. exists)
✅ **Disable auto-schema for this post** if the plugin would generate `Article` or `FAQPage` schema — the HTML already contains them
✅ Save Draft → Preview → confirm → Publish

### Phase 3b — Webflow

✅ Log in to Webflow Designer for arcadiahomecare.ca
✅ Open the CMS → blog/article collection
✅ + New Item
✅ Fill labelled fields from `CMS-FIELDS.md`
✅ Paste body content into the rich text or HTML embed field
✅ Save Draft → Preview → Publish

### Phase 3c — Static site / Vercel deploy from Git

✅ Add the new HTML or markdown file to the repo at the correct path (matching the URL pattern)
✅ Commit with a descriptive message: `Publish: [article title]`
✅ Push to main
✅ Vercel auto-deploys
✅ Confirm the URL is live within ~2 minutes

### Phase 3d — Stuck on the platform

If you genuinely cannot figure out how to publish:

1. Hire a developer for one hour ($50–150 on Upwork or Fiverr) to walk you through the first publish on a video call
2. Document what they show you in this file
3. Every subsequent publish is yours

This is not failure. It is the cheapest, fastest way to learn the platform.

---

## Phase 4 — Test the live URL (10 min)

The article should now be live at:
```
https://www.arcadiahomecare.ca/resources/[cluster-slug]/[article-slug]/
```

✅ **4.1** — Open the URL. Confirm it loads.

✅ **4.2** — Quick visual review:
- Headline correct
- Body reads correctly
- FAQ accordions work
- Internal links go where they should (click 2-3)
- Phone link opens dialer (test on mobile)
- CTA button goes to `/contact/`

✅ **4.3** — Test social previews. Paste the live URL into:
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

Confirm the preview shows the correct title, description, and image (or expected placeholder if image isn't uploaded yet).

✅ **4.4** — Validate schema. Paste URL into:
- Google Rich Results Test: https://search.google.com/test/rich-results

Confirm: Article, Breadcrumbs, FAQ, and HomeHealthCare all parse without errors.

If any schema fails, the page is still live but won't get rich results. Fix per `04-SCHEMA-STANDARDS.md`.

---

## Phase 5 — Submit to Google Search Console (5 min)

✅ **5.1** — Go to https://search.google.com/search-console/

✅ **5.2** — Sign in with the account that has access to `arcadiahomecare.ca`. If you don't have access, the previous developer or original site owner can grant it via Settings → Users and permissions → Add User.

✅ **5.3** — Confirm the property at the top-left dropdown shows `arcadiahomecare.ca`.

✅ **5.4** — In the "Inspect any URL" search bar at the top, paste the new article's URL. Press Enter.

✅ **5.5** — After 5–10 seconds, GSC returns one of two results:
- **"URL is not on Google"** → Click **"Request Indexing"**. Done.
- **"URL is on Google"** → Already indexed. Done.

Indexing takes a few hours to a few days. Re-inspect a week later to confirm.

### One-time GSC setup tasks (skip if already done)

- Submit sitemap: GSC sidebar → Sitemaps → enter `sitemap.xml` → Submit
- Confirm preferred domain (www. vs. non-www) matches canonical URLs

---

## Phase 6 — Update the cluster page (5 min)

The new article needs to appear on its parent cluster page.

✅ **6.1** — Go to the cluster page (e.g., `/resources/navigating-home-care/`).

✅ **6.2** — Add the new article to the article list:
- Title (matching H1 short version)
- One-line description (matching meta description or shorter)
- Link to the article URL

✅ **6.3** — If this is a **pillar article**, add a "Start here" featured block at the top of the cluster page.

✅ **6.4** — If this article replaces a **Coming Soon stub**, remove the stub and put the live entry in its place.

---

## Phase 7 — Update the authority map (2 min)

In `AUTHORITY-MAP.md`, find the article entry and update its status:

- Change `Net New` → `Published`
- Change `Coming Soon` → `Published`
- Add the live URL to the entry

This keeps the inventory accurate, which keeps future AI-assisted writing aligned to reality.

---

## Phase 8 — Brief the social media person (5 min)

Send the social media manager:

✅ **8.1** — The live URL.

✅ **8.2** — The two title variants:
- Long emotional version (for Facebook, LinkedIn, email)
- Short scannable version (for X, ads, link previews)

✅ **8.3** — 2–3 pull quotes ready to use as standalone graphics. These should already be marked in the article (look for `<p class="pull">` blocks).

✅ **8.4** — Recommended start time. Wait 24–48 hours after publishing so Google has indexed the URL before social traffic arrives.

If a `SOCIAL-MEDIA-BRIEF.md` exists for this specific article (created during the article production), send that.

---

## Phase 9 — One week later (5 min)

Come back to GSC.

✅ **9.1** — Inspect the URL again. Confirm "URL is on Google."

✅ **9.2** — Check Performance (sidebar). After a week or two, you'll see impressions and clicks. Watch:
- Which queries are people searching to find this article?
- CTR — under 2% means the title or description needs work
- Position — average rank for those queries

This is your data. Use it to refine the next article.

---

## Phase 10 — Three months later (10 min)

A quarterly review of every published article:

✅ Are internal links still valid? (Some target pages might have moved.)
✅ Has Arcadia's contact info, hours, or rating changed? (Update schema if so.)
✅ Has Ontario Health atHome or any referenced external program changed materially? (Update content if so.)
✅ Has the article's performance plateaued? (Consider refresh, additional internal links, or related-article publishing.)

Document any updates with a changed `dateModified` in the Article schema.

---

## Common problems and fixes

**The page won't save in the CMS**
Try smaller chunks. Paste the article body in 2–3 parts instead of all at once.

**Schema validation errors at search.google.com/test/rich-results**
Most often caused by a CMS plugin auto-injecting duplicate schema. Disable the plugin's auto-schema for this post type, or remove the page-level schema and rely on the plugin. Don't keep both.

**The live page looks broken**
Compare to the local preview. If both look the same — issue is in the HTML. If only the live one looks broken — issue is the site template or CSS conflict.

**GSC says "Couldn't fetch" or "URL not allowed"**
Right-click the live page → View Page Source → search for `noindex`. There shouldn't be one. If there is, it's blocking indexing — remove it.

**Internal link broken a week later**
Open the article in your editor, find the broken link, replace with a working URL, republish. Normal maintenance.

**You forgot which file is PROD vs DEV**
PROD has fewer comments. DEV has long `<!-- -->` blocks at the top. When in doubt, the smaller file is PROD.

---

## Platform-specific notes

*(Document platform-specific quirks here as you discover them. Future articles will go faster.)*

**Platform:** *[Fill in once confirmed: WordPress / Webflow / Vercel + framework / etc.]*
**Login URL:** *[Fill in]*
**CMS quirks discovered:** *[Fill in]*
**Auto-injected schema:** *[Fill in — what does the platform automatically add?]*
**Sitemap location:** *[Fill in — auto-generated or manual?]*
