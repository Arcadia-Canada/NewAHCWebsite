# Drafts (review only, not live)

Articles in `drafts/articles/` are for internal review. They are **not** part of the Next.js App Router, so they are not built into the static site and are not indexed.

## Rules

1. Do not move a draft into `app/` until it is approved for publish.
2. Do not add draft URLs to cluster hubs, sitemaps, or internal body links.
3. Until publish, protect the eventual URL with a **301 redirect** in `redirects.json` (then run `node scripts/sync-vercel-redirects.mjs`). Prefer redirect over 404.
4. Social briefs/kits for drafts must be labelled **FOR REVIEW** and must not be scheduled.

## Current drafts

| Article | Draft path | Eventual URL | Until publish |
|---|---|---|---|
| Early Signs of Dementia (rewrite) | `drafts/articles/early-signs-of-dementia-in-a-parent/` | `/resources/dementia-memory-care/early-signs-of-dementia-in-a-parent/` | Live page remains the current production version |
| The Guilt of Getting Help | `drafts/articles/guilt-of-getting-help/` | `/resources/family-caregiver-support/guilt-of-getting-help/` | 301 → `weight-of-caregiving` |

## Publish steps (when approved)

1. Move `drafts/articles/[slug]/page.tsx` → `app/resources/.../[slug]/page.tsx`
2. Remove temporary redirects for that slug from `redirects.json` and re-sync `vercel.json`
3. Remove `robots: { index: false }` if present
4. Add the card to the cluster hub
5. Update AUTHORITY-MAP + Master Sheet
6. Allow social posting from the review kit
