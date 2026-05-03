# 03 — Internal Linking Rules

How pages on arcadiahomecare.ca link to each other. Internal linking is how authority flows through the site — getting it right is one of the highest-leverage SEO and UX activities.

## The core principle

**Authority flows from educational articles → through cluster hubs and condition pages → toward service pages and consultation.**

Every link on the site should serve this flow. A link is either pulling a reader deeper into Arcadia's expertise, or it's noise.

## Required links by page type

### Resource articles (every blog post)

Every educational article in `/resources/` must include:

- ✅ **One link to the parent cluster page** (e.g., `/resources/navigating-home-care/`)
- ✅ **One link to the primary related service page** (e.g., `/our-services/case-management/`)
- ✅ **One link to a relevant condition page when applicable** (e.g., `/conditions/frailty-fall-prevention/`)
- 🔁 **1–2 links to sibling articles in the same cluster** (only if the sibling article is published and live)
- 🔁 **1 link to a cross-cluster article when the topic genuinely supports it**

### Cluster pages

The five cluster pages must include:

- ✅ Links to **all articles** in the cluster
- ✅ A link to the **primary service page** for the cluster
- ✅ A link to the **primary condition page** for the cluster (if one exists)
- ✅ Links to **other cluster pages** (cross-cluster discovery — typically in a sidebar or footer block)

### Condition pages

Each of the 8 condition pages must include:

- ✅ A link to the **primary service page** for that condition
- ✅ Links to **2–3 educational articles** that support the condition
- ✅ A link to the **most relevant cluster page**

### Service pages

Each of the 12 service pages must include:

- ✅ Links to **2–4 relevant educational articles** that build trust before the conversion ask
- ✅ A link to **`/how-care-starts/`** to reduce uncertainty before booking
- ✅ A link to **`/contact/`** for direct conversion

### The pillar article

The pillar article at `/resources/navigating-home-care/when-parent-needs-more-help/` is the emotional anchor for the entire site. It links differently from other articles:

- Links to all 10 supporting Master Prompt articles across clusters (when those articles are live)
- Links to relevant service pages, condition pages, and `/how-care-starts/`
- Sits at the top of the Navigating Home Care cluster page as a featured "Start here" block

## Linking rules

### What to link

- **Concepts that have a dedicated page on Arcadia's site.** Example: when an article mentions "caregiver burnout," link to `/resources/family-caregiver-support/caregiver-burnout-warning-signs/`.
- **Specific services Arcadia offers.** Example: linking "dementia support" to `/our-services/dementia-alzheimers-home-care/`.
- **Specific conditions.** Example: linking "fall risk" to `/conditions/frailty-fall-prevention/`.
- **The contact page or consultation form when the reader is ready to act.**

### What NOT to link

- ❌ **Pages that aren't live.** A 404 hurts the page, the reader, and Arcadia's SEO. **Always verify the target URL resolves before linking.** If you're not sure, don't link.
- ❌ **Coming Soon stubs.** Even if the URL technically resolves to a placeholder, don't link to a "Coming Soon" page from the body of an article. It breaks reader trust.
- ❌ **The same target multiple times in one article.** One link per target per page.
- ❌ **Generic CTAs disguised as links.** "Click here" is not a link. The anchor text must describe what's on the other end.
- ❌ **External sites.** Almost never. Exception: a single, specific reference to an authoritative external resource like Ontario Health atHome. Don't link to competitors. Don't link to Wikipedia.

### Anchor text rules

- **Natural, varied, descriptive.** "Caregiver burnout warning signs" is good. "Click here" or "this article" is not.
- **No exact-match keyword stuffing.** Don't use the same anchor text for every link to a service page across the site. Vary the language.
- **No naked URLs in body content.** "https://arcadiahomecare.ca/contact/" is not a link — it's an eyesore. Use anchor text.
- **Match the reader's mental model.** Link "case management" not "case-management-service-page-link."

### How many internal links per article

- **Pillar articles:** 8–15 internal links is appropriate
- **Standard cluster articles:** 4–8 internal links
- **Short articles (under 800 words):** 3–5 internal links
- **Beyond ~15 links per article:** the page starts to read like a sitemap, not a piece of writing. Cut.

## Cross-cluster linking

Cross-cluster links — from one cluster's article to another cluster's article — are valuable but should be intentional. Use them when:

- A topic naturally bridges clusters (e.g., a Navigating Home Care article on hospital discharge linking to a Brain Injury cluster article on rehabilitation).
- The reader's next logical question lives in another cluster (e.g., from "signs your parent needs home care" to "the guilt of getting help").
- A service or condition page sits between two clusters and benefits both.

Avoid cross-cluster linking just to increase link count. The link must serve the reader's journey.

## The "no link to itself" rule

A page never links to itself. The breadcrumb is exempt because it represents site hierarchy, not body content.

If you find yourself wanting to link a page to itself, the issue is usually that you're describing the wrong concept — find the correct related target.

## Coming Soon governance for links

When an article references a topic covered by a Coming Soon stub:

1. Do not link to the stub.
2. Either:
   - **Drop the link** and keep the prose plain, OR
   - **Redirect the link** to the closest live page (the cluster, the service, or a published article on a related topic)
3. **Mark the location** with a comment in the HTML so the link can be added when the target article publishes:
   ```html
   <!-- FUTURE-LINK: when /resources/family-caregiver-support/the-guilt-of-getting-help/ publishes,
        link the phrase "guilt about getting help" here -->
   ```

This pattern means future-you (or future-AI) can ctrl-F the comments and re-add links in seconds, with no architectural rework.

## Verifying links before publish

Before any article goes live, run through this check:

- [ ] Every internal link's URL has been pasted into a browser and confirmed to load (not 404)
- [ ] No links go to Coming Soon stubs
- [ ] No links repeat the same target on the same page
- [ ] All anchor text reads naturally
- [ ] No naked URLs in body content
- [ ] Pillar article links present where required (cluster page, primary service, primary condition)

A single dead link can suppress a page's rankings and drop reader trust. This check is not optional.
