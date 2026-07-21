#!/usr/bin/env node
/**
 * scripts/sync-llms-txt.mjs
 *
 * Regenerates public/llms.txt for AI agent discoverability.
 *
 * Sources:
 *   - Live articles from cluster hub `articles` arrays (status: 'live')
 *   - Any additional resource article routes under app/resources on disk
 *   - Trust signals from docs/04-SCHEMA-STANDARDS.md (aggregateRating)
 *
 * Run after publishing:  npm run sync:llms
 */

import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP_RESOURCES = path.join(ROOT, "app", "resources");
const SCHEMA_FILE = path.join(ROOT, "docs", "04-SCHEMA-STANDARDS.md");
const OUT_FILE = path.join(ROOT, "public", "llms.txt");
const SITE = "https://www.arcadiahomecare.ca";

const CLUSTER_LABELS = {
  "navigating-home-care": "Navigating Home Care",
  "family-caregiver-support": "Family Caregiver Support",
  "dementia-memory-care": "Dementia & Memory Care",
  "brain-injury-rehabilitation": "Brain Injury & Rehabilitation",
  "cost-of-care-planning": "Cost of Care & Financial Planning",
};

function isHubPage(relPath) {
  const normalized = relPath.replaceAll("\\", "/");
  if (normalized === "page.tsx") return true;
  const segments = normalized.split("/");
  if (segments.length !== 2) return false;
  const [cluster, file] = segments;
  if (file !== "page.tsx") return false;
  return (
    cluster === "brain-injury-rehabilitation" ||
    cluster === "cost-of-care-planning" ||
    readFileSync(path.join(APP_RESOURCES, normalized), "utf8").includes("const articles")
  );
}

function walkPageFiles(dir, prefix = "") {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const rel = prefix ? `${prefix}/${entry}` : entry;
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...walkPageFiles(full, rel));
    } else if (entry === "page.tsx") {
      files.push(rel);
    }
  }
  return files;
}

function parseLiveArticlesFromHub(content) {
  const articles = [];
  const blockPattern =
    /\{\s*title:\s*(['"`])(?<title>(?:\\.|(?!\1).)*)\1\s*,\s*href:\s*(['"`])(?<href>(?:\\.|(?!\3).)*)\3[\s\S]*?status:\s*['"`]live['"`](?:\s+as\s+const)?/g;

  for (const match of content.matchAll(blockPattern)) {
    articles.push({
      title: unescapeJsString(match.groups.title),
      href: match.groups.href,
    });
  }

  return articles;
}

function unescapeJsString(value) {
  return value.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, "\n");
}

function collectArticlesFromHubs() {
  const byHref = new Map();

  for (const relPath of walkPageFiles(APP_RESOURCES)) {
    if (!isHubPage(relPath)) continue;

    const clusterKey =
      relPath === "page.tsx" ? "_general" : relPath.replace(/\/page\.tsx$/, "");
    const content = readFileSync(path.join(APP_RESOURCES, relPath), "utf8");
    for (const article of parseLiveArticlesFromHub(content)) {
      byHref.set(article.href, { ...article, clusterKey });
    }
  }

  return byHref;
}

function extractMetadataTitle(content) {
  const match = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (!match) return null;
  return match[1].replace(/\s*\|\s*Arcadia.*$/i, "").trim();
}

function collectArticlesFromFilesystem(byHref) {
  for (const relPath of walkPageFiles(APP_RESOURCES)) {
    if (isHubPage(relPath)) continue;

    const route = `/resources/${relPath.replace(/\/page\.tsx$/, "")}/`;
    if (byHref.has(route)) continue;

    const content = readFileSync(path.join(APP_RESOURCES, relPath), "utf8");
    const title = extractMetadataTitle(content);
    if (!title) continue;

    byHref.set(route, { title, href: route, clusterKey: clusterKeyFromHref(route) });
  }
}

function clusterKeyFromHref(href) {
  const segments = href.split("/").filter(Boolean);
  if (segments[0] !== "resources") return "_general";
  if (segments.length === 2) return "_general";
  return segments[1];
}

function groupArticles(byHref) {
  const groups = new Map();

  for (const article of byHref.values()) {
    const key = article.clusterKey ?? clusterKeyFromHref(article.href);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(article);
  }

  for (const articles of groups.values()) {
    articles.sort((a, b) => a.title.localeCompare(b.title, "en"));
  }

  return [...groups.entries()].sort(([a], [b]) => {
    if (a === "_general") return 1;
    if (b === "_general") return -1;
    const labelA = CLUSTER_LABELS[a] ?? a;
    const labelB = CLUSTER_LABELS[b] ?? b;
    return labelA.localeCompare(labelB, "en");
  });
}

function readTrustSignals() {
  const schema = readFileSync(SCHEMA_FILE, "utf8");
  const ratingValue = schema.match(/"ratingValue":\s*"([^"]+)"/)?.[1] ?? "4.9";
  const reviewCount = schema.match(/"reviewCount":\s*"([^"]+)"/)?.[1] ?? "44";
  return { ratingValue, reviewCount };
}

function toAbsoluteUrl(href) {
  return href.startsWith("http") ? href : `${SITE}${href}`;
}

function renderResourceGuides(byHref) {
  const lines = ["## Resource Guides (GTA Home Care)", ""];

  for (const [clusterKey, articles] of groupArticles(byHref)) {
    const label =
      clusterKey === "_general"
        ? "General Resources"
        : CLUSTER_LABELS[clusterKey] ?? clusterKey;

    lines.push(`### ${label}`);
    for (const article of articles) {
      lines.push(`- ${article.title}: ${toAbsoluteUrl(article.href)}`);
    }
    lines.push("");
  }

  return lines.join("\n").trimEnd();
}

function renderLlmsTxt(byHref, trust) {
  return `# Arcadia Home Care

> Arcadia Home Care provides specialized home care in Toronto and the Greater Toronto Area, combining clinical expertise with compassionate support for families since 2005.

## Organization
- Name: Arcadia Home Care
- Website: ${SITE}/
- Phone: (844) 977-0050
- Email: info@arcadiahomecare.ca
- Address: 302 Bay Street, Toronto, Ontario M5H 0B6, Canada
- Service Area: Toronto and GTA (York, Peel, Durham, Halton)

## Core Services
- Dementia & Alzheimer's Home Care: ${SITE}/our-services/dementia-alzheimers-home-care/
- Acquired Brain Injury Home Care: ${SITE}/our-services/acquired-brain-injury-home-care/
- Rehabilitation Support: ${SITE}/our-services/rehabilitation-support/
- Hospital Discharge Support: ${SITE}/our-services/hospital-discharge-support/
- Palliative Home Care: ${SITE}/our-services/palliative-home-care/
- Personal Support & Daily Living: ${SITE}/our-services/personal-support-daily-living/
- Companion Care: ${SITE}/our-services/companion-care/
- Respite Care: ${SITE}/our-services/respite-care/
- Overnight & 24-Hour Care: ${SITE}/our-services/overnight-24-hour-care/
- Case Management: ${SITE}/our-services/case-management/
- Light Housekeeping: ${SITE}/our-services/light-housekeeping/
- Downsizing & Transition Support: ${SITE}/our-services/downsizing-transition-support/

## Condition Support
- Dementia Care at Home: ${SITE}/conditions/dementia-care-at-home/
- Acquired Brain Injury Support: ${SITE}/conditions/acquired-brain-injury-support/
- Stroke Recovery: ${SITE}/conditions/stroke-recovery/
- Parkinson's Support: ${SITE}/conditions/parkinsons-support/
- Palliative & Serious Illness: ${SITE}/conditions/palliative-serious-illness/
- Frailty & Fall Prevention: ${SITE}/conditions/frailty-fall-prevention/
- Post-Hospital Recovery: ${SITE}/conditions/post-hospital-recovery/
- Caregiver Burnout Support: ${SITE}/conditions/caregiver-burnout-support/

${renderResourceGuides(byHref)}

## Helpful Pages
- How Care Starts: ${SITE}/how-care-starts/
- Contact: ${SITE}/contact/
- Referral Form: ${SITE}/referral-form/
- Locations: ${SITE}/locations/
- Resources: ${SITE}/resources/
- FAQ: ${SITE}/faqs/

## Trust Signals
- Founded: 2005
- Google Rating: ${trust.ratingValue}
- Google Reviews: ${trust.reviewCount}

## Policies
- Privacy Policy: ${SITE}/privacy-policy/

## Sitemap
- XML Sitemap: ${SITE}/sitemap.xml
- LLM map (this file): ${SITE}/llms.txt
`;
}

function main() {
  const byHref = collectArticlesFromHubs();
  collectArticlesFromFilesystem(byHref);
  const trust = readTrustSignals();
  const output = renderLlmsTxt(byHref, trust);

  writeFileSync(OUT_FILE, output);
  console.log(
    `llms.txt written with ${byHref.size} live resource guide(s); trust ${trust.ratingValue}/${trust.reviewCount} reviews`,
  );
}

main();
