# Slug Patch — talking-to-parent-about-care

Documentation of the slug-only fix applied to the article *"The Conversation You Keep Putting Off"* to bring it into compliance with `docs/05-URL-CONVENTIONS.md`.

## What changed

| Element | Before | After |
|---|---|---|
| **URL slug** | `the-conversation-you-keep-putting-off` | `talking-to-parent-about-care` |
| **Canonical URL** | `/resources/family-caregiver-support/the-conversation-you-keep-putting-off/` | `/resources/family-caregiver-support/talking-to-parent-about-care/` |
| **OG URL** | Same long slug | Short slug |
| **Twitter URL** | Same long slug | Short slug |
| **Schema mainEntityOfPage `@id`** | Same long slug | Short slug |
| **Breadcrumb URL** | Same long slug | Short slug |
| **File name** | `the-conversation-you-keep-putting-off-PROD.html` | `talking-to-parent-about-care-PROD.html` |

## What did NOT change

| Element | Status |
|---|---|
| H1 / page title | Unchanged: *"The Conversation You Keep Putting Off"* |
| SEO `<title>` tag | Unchanged: *"How to Talk to Aging Parents About Care \| Arcadia"* |
| OG title and Twitter title | Unchanged (emotional version) |
| Body content | Unchanged |
| FAQ section | Unchanged |
| Internal links | Unchanged |
| Schema graphs | Unchanged (except the canonical URL inside Article schema) |
| Voice and tone | Unchanged |
| Word count | Unchanged |
| Pull quotes | Unchanged |

## Why this change was made

`docs/05-URL-CONVENTIONS.md` explicitly cites this article as the example of a good slug — emotional H1, search-aligned slug, with "the" stripped as filler. The doc shows:

> **Article H1:** The Conversation You Keep Putting Off
> **Slug:** `talking-to-parent-about-care`
> **Why:** Slug aligns to search intent, not poetic title

The previous slug (`the-conversation-you-keep-putting-off`) violated three rules from the same governance doc:
1. Started with "the" (filler word, should be cut)
2. Was 7 words long (rules say 3–6 words)
3. Mirrored the H1 verbatim instead of aligning to search intent

## How to apply this patch

### If the article is NOT yet published

1. Replace your current `the-conversation-you-keep-putting-off-PROD.html` with `talking-to-parent-about-care-PROD.html`.
2. Replace the DEV file the same way.
3. Publish using the new slug.
4. Update `docs/AUTHORITY-MAP.md`: when this article publishes, log the URL as `/resources/family-caregiver-support/talking-to-parent-about-care/`.

### If the article IS already published at the old URL

1. Set up a permanent **301 redirect** from the old URL to the new URL. Without this, you lose link equity and break any social shares already in the wild.
2. Update internal links across the site (only the pillar links here so far).
3. Update the social media person's URL reference.
4. Re-submit the new URL to Google Search Console.

If the old URL has been live for less than 24 hours and not yet shared on social, just delete the old page and republish at the new URL — no redirect needed.

### If the article is in some other intermediate state

Tell me where it is and I'll advise.

## Why this patch matters beyond just one article

This is the governance system catching its first real conflict. Without the conflict-flagging clause in `CURSOR-CONTENT-PROMPTS.md`, an AI would have produced this article using whichever slug the prior conversation suggested — silently overriding the URL convention doc. The system needed this exact correction to prove it works.

Going forward, every article should be audited the same way before publishing. The standard prompt with the conflict-flagging clause now does this automatically.

## Last updated

May 2026
