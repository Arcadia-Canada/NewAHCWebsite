# 04 — Schema Standards

JSON-LD structured data standards for arcadiahomecare.ca. Schema is how Google, Bing, and AI search engines understand the meaning of pages — getting it right is the difference between ranking and being invisible.

## Required schema by page type

### Resource articles (every blog post)

Every article in `/resources/` must include **four** JSON-LD blocks in the page `<head>`:

1. `Article` (with `Speakable`, `audience`, `about`, `mentions`)
2. `BreadcrumbList`
3. `FAQPage` *(if the article has an FAQ section — most do)*
4. `HomeHealthCare` (Arcadia's organization schema)

### Cluster pages

Cluster pages should include:

1. `CollectionPage` or `WebPage`
2. `BreadcrumbList`
3. `HomeHealthCare`

### Service pages

Service pages should include:

1. `Service` or `MedicalProcedure` (depending on the service)
2. `BreadcrumbList`
3. `HomeHealthCare`

### Condition pages

Condition pages should include:

1. `MedicalCondition`
2. `BreadcrumbList`
3. `HomeHealthCare`

### Location pages

Location pages should include:

1. `LocalBusiness` or `MedicalBusiness` (with `areaServed` for the specific region)
2. `BreadcrumbList`
3. `HomeHealthCare` (or merge if appropriate)

## The HomeHealthCare organization schema

Arcadia's organization schema is `HomeHealthCare`, **not** `Organization`, `LocalBusiness`, or `HomeAndConstructionBusiness`. Always use `HomeHealthCare` for organization-level markup.

The canonical organization schema (use this as a reference for any new page):

```json
{
  "@context": "https://schema.org",
  "@type": "HomeHealthCare",
  "@id": "https://www.arcadiahomecare.ca/#organization",
  "name": "Arcadia Home Care",
  "alternateName": "Arcadia",
  "url": "https://www.arcadiahomecare.ca/",
  "logo": "https://www.arcadiahomecare.ca/images/arcadia-logo.svg",
  "description": "Specialized home care for seniors and families across Toronto and the Greater Toronto Area, including dementia and Alzheimer's care, acquired brain injury support, rehabilitation, hospital discharge support, palliative care, and case management. Serving GTA families since 2005.",
  "foundingDate": "2005",
  "telephone": "+1-844-977-0050",
  "email": "info@arcadiahomecare.ca",
  "medicalSpecialty": "Geriatric",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "302 Bay Street",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "postalCode": "M5H 0B6",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.6494,
    "longitude": -79.3795
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "areaServed": [
    {"@type": "City", "name": "Toronto"},
    {"@type": "AdministrativeArea", "name": "York Region"},
    {"@type": "AdministrativeArea", "name": "Peel Region"},
    {"@type": "AdministrativeArea", "name": "Durham Region"},
    {"@type": "AdministrativeArea", "name": "Halton Region"},
    {"@type": "AdministrativeArea", "name": "Greater Toronto Area"}
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "44",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

### Updating the organization schema

The values above were captured at the time of pack creation. The following fields drift over time and need periodic updates:

| Field | Update cadence | Where to find current value |
|-------|---------------|-----------------------------|
| `aggregateRating.ratingValue` | Every 6 months | Google Business Profile |
| `aggregateRating.reviewCount` | Every 6 months | Google Business Profile |
| `telephone` | Only if Arcadia changes phone numbers | Site footer |
| `address` | Only if Arcadia moves | Site footer |
| `openingHoursSpecification` | Only if hours change | Site footer / contact page |

Update the schema in **all pages** when these change, not just one.

## The Article schema (for blog posts)

Required fields for every blog article:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article H1 — exact match]",
  "alternativeHeadline": "[Optional — secondary descriptive headline]",
  "description": "[The article's meta description]",
  "image": [
    "[Hero image 1:1 URL]",
    "[Hero image 4:3 URL]",
    "[Hero image 16:9 URL]"
  ],
  "datePublished": "[ISO 8601 with timezone — e.g., 2026-04-30T09:00:00-04:00]",
  "dateModified": "[ISO 8601 with timezone]",
  "author": {
    "@type": "Organization",
    "name": "Arcadia Home Care",
    "url": "https://www.arcadiahomecare.ca/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Arcadia Home Care",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.arcadiahomecare.ca/images/arcadia-logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "[Full canonical URL]"
  },
  "articleSection": "[Cluster name — e.g., 'Navigating Home Care']",
  "keywords": "[Comma-separated topical keywords]",
  "inLanguage": "en-CA",
  "audience": {
    "@type": "Audience",
    "audienceType": "[Audience description — e.g., 'Adult children and family caregivers in the GTA']"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".article-summary", ".key-takeaways", "h1"]
  },
  "wordCount": 1500,
  "isAccessibleForFree": true
}
```

### Speakable specification

The `speakable` field tells voice assistants and AI search which parts of the page to read aloud. Always point at:
- `.article-summary` (the lead paragraph)
- `.key-takeaways` (the takeaways block near the top)
- `h1`

Do not remove these CSS classes from the page — they are referenced by the speakable schema.

## The BreadcrumbList schema

Every page (article, cluster, service, condition, location) must include a BreadcrumbList that exactly matches the visible breadcrumb on the page.

Example for a blog article:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.arcadiahomecare.ca/"},
    {"@type": "ListItem", "position": 2, "name": "Resources", "item": "https://www.arcadiahomecare.ca/resources/"},
    {"@type": "ListItem", "position": 3, "name": "Navigating Home Care", "item": "https://www.arcadiahomecare.ca/resources/navigating-home-care/"},
    {"@type": "ListItem", "position": 4, "name": "[Article title — short version]"}
  ]
}
```

The last item (the current page) does **not** include an `item` URL — it represents the page the reader is on.

## The FAQPage schema

When an article includes a visible FAQ section, the FAQ must also be encoded in JSON-LD as `FAQPage`. **The visible FAQ and the schema FAQ must match exactly** — same questions, same answers, same wording. Mismatches are a Google policy violation.

### Minimum requirements (resource articles)

| Field | Requirement |
|-------|-------------|
| Question count | **6 minimum** (target 6–8). See `docs/07-VOICE-AND-TONE.md`. |
| Voice-search phrasing | At least **2** natural spoken-query patterns in FAQ answer strings. See `docs/08-IMPLEMENTATION-BLUEPRINT.md` §3a. |
| Verification | `npm run voice:report` — page must not appear in Priority Gaps. |
| `llms.txt` | FAQs are ingested automatically by `scripts/sync-llms-txt.mjs` on commit/build; do not hand-edit `public/llms.txt`. |

Prefer a single `const faqs` array rendered to both visible HTML and `mainEntity` so copy cannot drift.

Each Q&A pair:

```json
{
  "@type": "Question",
  "name": "[Exact question text from the visible FAQ]",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "[Exact answer text from the visible FAQ]"
  }
}
```

### When NOT to use FAQPage schema

- ❌ When the FAQ is generic or low-value (don't pad articles with FAQs just to add schema)
- ❌ When the questions duplicate competitor FAQs verbatim
- ❌ When the answers contain marketing language rather than direct factual answers

## Avoiding duplicate schema

The most common schema bug is **two of the same `@type` on one page**. This usually happens when:

- The CMS auto-injects an `Organization` schema, and the page also includes a `HomeHealthCare` schema → conflict
- An SEO plugin (Yoast, Rank Math) auto-generates `BreadcrumbList`, and the page template also includes one → conflict
- The site's homepage includes `LocalBusiness`, and a location page includes another `LocalBusiness` → conflict

**Before publishing any new page, inspect what schema the CMS or theme is auto-generating.** If there's a conflict, remove either the page-level OR the auto-injected — never keep both.

To check what's actually rendered, use:
- `view-source:` in the URL bar to see the raw HTML
- https://search.google.com/test/rich-results to see what Google parses

## Validation requirement

Every published page must pass Google's Rich Results test before being considered live:

- URL: https://search.google.com/test/rich-results
- All schema blocks should parse without errors or warnings
- Eligible rich result types should be detected (Article, FAQ, Breadcrumbs, etc.)

If validation fails, the page is technically live but invisible to Google's rich-result features. Fix the schema or remove the broken block.

## What schema types NOT to use

- ❌ `HomeAndConstructionBusiness` (was used in an early draft of the pillar — incorrect, replaced)
- ❌ Generic `Organization` for the company (use `HomeHealthCare` instead — it's more specific)
- ❌ `Blog` or `BlogPosting` (use `Article` — broader compatibility)
- ❌ `Product` (Arcadia provides services, not products)
- ❌ Custom `@type` values not in the schema.org vocabulary
