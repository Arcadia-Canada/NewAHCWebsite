# 05 — URL Conventions

URL patterns and slug rules for arcadiahomecare.ca. URLs are permanent — once a URL is in the wild (linked from social, indexed by Google, shared in emails), changing it costs link equity and breaks reader trust.

**Pick the URL once. Live with it.**

## Canonical URL patterns

| Section | Pattern | Example |
|---------|---------|---------|
| Resources | `/resources/[cluster-slug]/[article-slug]/` | `/resources/navigating-home-care/when-parent-needs-more-help/` |
| Services | `/our-services/[service-slug]/` | `/our-services/dementia-alzheimers-home-care/` |
| Conditions | `/conditions/[condition-slug]/` | `/conditions/frailty-fall-prevention/` |
| Locations | `/locations/[region-slug]/` | `/locations/toronto/` |
| How Care Starts | `/how-care-starts/[sub-page]/` | `/how-care-starts/pricing-and-funding/` |
| Contact | `/contact/` | `/contact/` |

These patterns are **non-negotiable**. They are indexed, breadcrumb-aligned, and used everywhere on the site.

## What NOT to use

- ❌ `/blog/` — Resources is the cluster pattern, not Blog
- ❌ `/knowledge-centre/` — was an old plan, never adopted
- ❌ `/articles/` — same
- ❌ `/post/[id]/` — never
- ❌ Date-based URLs like `/2026/04/article-slug/` — date-stamped URLs feel stale fast
- ❌ Any URL without a trailing slash if the rest of the site uses trailing slashes (or vice versa — pick one and stay consistent)

## Slug rules

A slug is the last part of the URL — the article-specific bit. Rules:

- **Lowercase only.** `when-parent-needs-more-help`, not `When-Parent-Needs-More-Help`.
- **Hyphens, not underscores.** `early-signs-of-dementia`, not `early_signs_of_dementia`.
- **No spaces, no special characters, no accents.** ASCII alphanumerics + hyphens only.
- **No trailing words like "the," "a," "an."** Cut filler.
- **Length: aim for 3–6 words.** `when-parent-needs-more-help` (5 words) is good. `the-comprehensive-guide-to-knowing-when-your-parent-might-need-some-extra-help-at-home` is bad.
- **Match search intent, not the H1.** The H1 can be emotional and long. The slug should be scannable and keyword-aware.

## Slug examples — good and bad

### Good

| Article H1 | Slug | Why |
|-----------|------|-----|
| When the Person You Love Needs More Help Than You Can Give | `when-parent-needs-more-help` | Emotional H1, clean keyword slug |
| Early Signs of Dementia in a Parent | `early-signs-of-dementia` | Direct, scannable |
| What No One Tells You About the First Week of Home Care | `first-week-of-home-care` | Drops the editorial framing in the URL |
| The Conversation You Keep Putting Off | `talking-to-parent-about-care` | Slug aligns to search intent, not poetic title |

### Bad

| Article H1 | Slug | Why |
|-----------|------|-----|
| Early Signs of Dementia | `early-signs-of-dementia-in-a-parent-comprehensive-guide-2026` | Way too long, includes year, padded |
| Caregiver Burnout: Warning Signs | `Caregiver_Burnout_Warning_Signs_and_What_To_Do` | Caps, underscores, includes filler |
| What Good Care Actually Looks Like | `what-good-care-actually-looks-like` | Too literal — no SEO value |
| The Guilt of Getting Help | `the-guilt-of-getting-help` | Includes "the" — drop it |

## Slug + H1 + SEO title relationship

This is a three-tier system. They serve different purposes and should differ:

| Surface | Purpose | Style |
|---------|---------|-------|
| **URL slug** | Search engines, sharing | Short, keyword-aware, scannable |
| **`<title>` tag (SEO title)** | Google search result | 50–60 chars, includes keyword + brand |
| **H1** | Reader on the page | Emotional, full sentence allowed |

Example for the pillar:
- **Slug:** `when-parent-needs-more-help`
- **SEO title:** `When a Parent Needs More Help at Home | Arcadia`
- **H1:** `When the Person You Love Needs More Help Than You Can Give`

These three should never all be identical. If they are, you've collapsed three tools into one and weakened all of them.

## URL changes after publish

**Don't.**

If a URL ever has to change (broken slug, accidentally indexed wrong path, restructured cluster):

1. Set up a permanent **301 redirect** from the old URL to the new one. Without this, you lose all the link equity, all the social shares, and all the inbound links to that page.
2. Update internal links across the site to point to the new URL.
3. Update the sitemap.
4. Re-submit the new URL to Google Search Console.
5. Notify the social media person if the old URL was being shared.

This is real work. Avoiding it by picking the right URL the first time is much cheaper.

## Trailing slashes

Arcadia's site uses **trailing slashes**: `/resources/navigating-home-care/`, not `/resources/navigating-home-care`.

Both versions should not return a 200 — one should redirect to the other. Inconsistent trailing slashes cause duplicate content issues and split link equity.

## Capitalization

URLs should be **all lowercase**. Search engines treat `/Article-Slug/` and `/article-slug/` as different URLs. If the CMS lets you create mixed-case URLs, lowercase them on save.

## Special characters

- ❌ No spaces (use hyphens)
- ❌ No `&`, `?`, `=`, `#` (these are reserved for query strings)
- ❌ No accents (`café` becomes `cafe`)
- ❌ No emoji or unicode

If a slug requires escaping, simplify it instead.

## Reserved slugs

Don't use these as article slugs even if they fit thematically — they conflict with site sections:

- `services`, `our-services`
- `conditions`
- `locations`
- `contact`, `book`, `consultation`
- `about`, `careers`, `privacy`, `terms`
- `blog`, `articles`, `news`
- `resources` (this is the section root)

## Validating a new URL before publish

- [ ] URL follows the canonical pattern for its section type
- [ ] Slug is lowercase, hyphenated, 3–6 words
- [ ] No reserved word conflicts
- [ ] Slug is unique (not duplicating an existing article)
- [ ] Trailing slash matches the site convention
- [ ] No special characters or unicode
- [ ] The full URL fits comfortably in a browser tab title
- [ ] If replacing a Coming Soon stub, the slug matches the stub exactly
