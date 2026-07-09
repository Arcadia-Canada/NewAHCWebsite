# 08 — Implementation Blueprint

Technical specs for building new pages on arcadiahomecare.ca. This doc answers: **"How exactly do I create a new article, service page, condition page, or cluster page?"**

Last updated: May 3, 2026

---

## Tech stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 16, App Router |
| Output | `output: 'export'` — static files |
| Styling | Inline styles + `globals.css` (no Tailwind) |
| Fonts | `next/font/google` — Cormorant Garamond + DM Sans |
| Images | `next/image` with `unoptimized: true` |
| Hosting | Vercel (auto-deploys on push to `main`) |
| Trailing slashes | `trailingSlash: true` in `next.config` |
| Forms | Formspree or SiteGround PHP handler |

---

## File structure

```
app/
├── resources/
│   ├── page.tsx                        ← Resources hub
│   ├── [cluster-slug]/
│   │   ├── page.tsx                    ← Cluster hub page
│   │   └── [article-slug]/
│   │       └── page.tsx                ← Individual article
│   └── spring-home-safety-checklist-for-seniors/
│       └── page.tsx                    ← Orphan standalone article
├── our-services/
│   ├── page.tsx                        ← Services hub
│   └── [service-slug]/
│       └── page.tsx                    ← Individual service page
├── conditions/
│   ├── page.tsx                        ← Conditions hub
│   └── [condition-slug]/
│       └── page.tsx                    ← Individual condition page
├── locations/
│   ├── page.tsx                        ← Locations hub
│   └── [region]/
│       ├── page.tsx                    ← Region page
│       └── [city]/
│           └── page.tsx                ← City page
└── how-care-starts/
    ├── page.tsx                        ← Process hub
    └── [step-slug]/
        └── page.tsx                    ← Step page
```

---

## Creating a new resource article

### 1. Create the file

```
app/resources/[cluster-slug]/[article-slug]/page.tsx
```

The slug must match `05-URL-CONVENTIONS.md` rules and the slug reserved in `AUTHORITY-MAP.md`.

### 2. Required exports

Every article page must export:

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'

const CANONICAL = 'https://www.arcadiahomecare.ca/resources/[cluster]/[slug]/'
const PUBLISHED = '2026-MM-DDTHH:MM:SS-04:00'  // ISO 8601, Eastern

export const metadata: Metadata = {
  title: '[SEO Title] | Arcadia Home Care',       // 50-60 chars
  description: '[Meta description]',               // 150-160 chars
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: '[Emotional headline]',
    description: '[OG description]',
    url: CANONICAL,
    type: 'article',
    locale: 'en_CA',
    siteName: 'Arcadia Home Care',
  },
}
```

### 3. Required JSON-LD schema blocks

Include all applicable blocks via `dangerouslySetInnerHTML` in a `<script type="application/ld+json">` tag. See `04-SCHEMA-STANDARDS.md` for the full spec. Minimum:

1. **Article** — with `headline`, `datePublished`, `dateModified`, `author`, `publisher`, `speakable`, `audience`, `keywords`
2. **BreadcrumbList** — Home → Resources → Cluster → Article
3. **FAQPage** — if the article has a visible FAQ section (questions must match exactly)
4. **HomeHealthCare** — Arcadia's organization schema

### 4. Page structure pattern

Follow this component order (matches all published articles):

```
<script type="application/ld+json"> (all schema blocks)
<main class="article-page">
  <section class="article-hero">
    <div class="article-hero-inner">
      <p class="article-eyebrow">
      <h1>
      <p class="article-summary"> (lead paragraph — referenced by speakable)
      <p> (secondary intro paragraph)
    </div>
  </section>
  <div class="article-body">
    <article class="article-content">
      <div class="key-takeaways"> (referenced by speakable)
      <h2> sections (article body)
      <div class="section-divider"> (visual break before CTA)
      <p> (soft CTA close — link to /contact/ and phone)
      <div class="faq-section"> (if applicable)
      <div class="related-links"> (3-4 related articles)
    </article>
    <aside class="article-sidebar">
      <div class="sidebar-cta"> (call CTA)
      <div class="sidebar-card"> (Related Pages)
      <div class="sidebar-card"> (More in This Series)
    </aside>
  </div>
  <section class="article-bottom-cta"> (full-width dark CTA)
</main>
```

### 4a. Styling: use globals.css, not inline styles

All article template CSS lives in `globals.css` under the "Article Template" section. New articles should **NOT** include a `<style>` block. They inherit all visual formatting from globals automatically.

Fonts are referenced via CSS variables set in `layout.tsx`:
- `var(--font-dm-sans)` — body text
- `var(--font-cormorant)` — headings, pull quotes, hero h1

If an article needs a truly unique style (rare), use a page-specific class name scoped under `.article-page` to avoid polluting the global namespace.

### 5. CSS classes to preserve

These classes are referenced by schema or used site-wide:

| Class | Used By | Do Not Remove |
|-------|---------|---------------|
| `.article-summary` | `speakable` schema | Lead paragraph |
| `.key-takeaways` | `speakable` schema | Takeaways box |
| `.faq-section` | `FAQPage` schema | FAQ accordion |
| `.breadcrumb` | `BreadcrumbList` schema | Navigation trail |
| `.pull` | Social media briefs | Pull quotes |

### 6. Internal linking requirements

Per `03-INTERNAL-LINKING-RULES.md`:

- 4–8 internal links for standard articles, 8–15 for pillar articles
- Must include: cluster hub, primary service page, primary condition page
- Must NOT include: Coming Soon stubs, the article's own URL, any URL more than once
- Verify every link target returns 200 before publishing

### 7. Image requirements

- Use `next/image` with explicit `width` and `height`
- Set `loading="lazy"` for below-fold images
- Set `priority` for hero/above-fold images
- Always include descriptive `alt` text
- `unoptimized` is set globally — no optimization needed

### 8. After creating the file

- [ ] Add article to the cluster hub page's `articles` array with `status: 'live'`
- [ ] If replacing a Coming Soon stub, change `status: 'coming'` to `status: 'live'` and update `href`/`title`/`description` if they changed
- [ ] Add the URL to `app/sitemap.ts`
- [ ] Update `AUTHORITY-MAP.md`: status → `Published`, add URL
- [ ] Update `10-KEYWORD-OWNERSHIP.md`: move keyword entry to "Published"
- [ ] Remove the Coming Soon deadline tracker entry if applicable
- [ ] Run `npm run build` to verify static export succeeds
- [ ] Commit and push to `main`
- [ ] Verify live URL loads after Vercel deploy
- [ ] Submit URL to Google Search Console

---

## Creating a new cluster hub page

### When to create one

Only when launching a new cluster (e.g., Cost of Care & Planning). See `12-EXECUTION-ROADMAP.md` Phase 4.

### File location

```
app/resources/[cluster-slug]/page.tsx
```

### Required structure

```tsx
export const metadata: Metadata = {
  title: '[Cluster Name] Resources for Families | Arcadia',
  description: '[150-160 char description]',
  alternates: {
    canonical: 'https://www.arcadiahomecare.ca/resources/[cluster-slug]/',
  },
}

const articles = [
  {
    title: '[Article title]',
    href: '/resources/[cluster-slug]/[article-slug]/',
    description: '[One-line description]',
    status: 'live',     // or 'coming'
  },
  // ... more articles
]
```

### Schema required

1. `CollectionPage` — cluster-level metadata
2. `BreadcrumbList` — Home → Resources → Cluster
3. `HomeHealthCare` — organization

### After creating

- [ ] Add cluster card to `/resources/` hub page (`app/resources/page.tsx`)
- [ ] Add cluster URL to footer navigation
- [ ] Add to `app/sitemap.ts`
- [ ] Update `02-CONTENT-CLUSTERS.md` status from PLANNED to LIVE
- [ ] Update `CLUSTERLINKMAP.md` with the new cluster section

---

## Creating a new service or condition page

These are less frequent. Follow the patterns of existing pages:

- **Service pages:** Copy structure from `app/our-services/companion-care/page.tsx` (simplest example)
- **Condition pages:** Copy structure from `app/conditions/stroke-recovery/page.tsx`

Both require:
- Metadata with canonical URL
- Appropriate JSON-LD schema (see `04-SCHEMA-STANDARDS.md`)
- Breadcrumb navigation
- Internal links to related services, conditions, and resources
- CTA section at bottom
- Entry added to the hub page (`app/our-services/page.tsx` or `app/conditions/page.tsx`)
- URL added to `app/sitemap.ts`

---

## Redirects

When a URL must change, add a redirect to **both** files:

1. `vercel.json` — `redirects` array with `"statusCode": 301`
2. `redirects.json` — mirror entry (used as reference/backup)

Format:
```json
{
  "source": "/old-path/",
  "destination": "/new-path/",
  "statusCode": 301
}
```

Never delete a redirect unless you're certain the old URL has zero external links. Check Google Search Console's "Links" report first.

---

## Build and deploy

```bash
npm run build          # Verify static export succeeds
npm run dev            # Local preview at http://localhost:3000
git add . && git commit -m "Publish: [article title]"
git push origin main   # Vercel auto-deploys
```

Build must complete with zero errors. Warnings about redirects not working with `output: 'export'` are expected and safe to ignore (redirects are handled by Vercel, not Next.js).

---

## Common pitfalls

| Pitfall | Fix |
|---------|-----|
| Schema validation errors | Run URL through Google Rich Results Test before and after publish |
| Coming Soon stub not replaced | Change `status: 'coming'` to `status: 'live'` in the cluster hub, don't just add a new entry |
| Broken internal links | Always `curl` or visit every internal link target in the article before committing |
| Missing from sitemap | Manually add the URL to `app/sitemap.ts` — it's not auto-generated from the file system |
| Unicode rendering issues | Use HTML entities (`&mdash;`, `&ndash;`) or `String.fromCodePoint()` for special characters in JSX. Do not paste emoji directly into server component text. |
| Duplicate schema from CMS | Not applicable — Arcadia is a static Next.js site, not a CMS. Schema is hand-coded per page. |
| Redirect needed but forgotten | Add to both `vercel.json` AND `redirects.json` |
