#!/usr/bin/env node
/**
 * scripts/sync-llms-txt.mjs
 *
 * Regenerates public/llms.txt for AI agent discoverability.
 *
 * Sources:
 *   - Live resource articles from cluster hub pages
 *   - GTA location pages (hub, regions, cities, boroughs)
 *   - Service pages with summaries, inclusions, and FAQs
 *   - Article FAQPage schema (and const faqs fallback)
 *   - Site-wide FAQs from app/faqs/page.tsx
 *   - Trust signals from docs/04-SCHEMA-STANDARDS.md
 *
 * Run after publishing:  npm run sync:llms
 */

import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP_RESOURCES = path.join(ROOT, "app", "resources");
const APP_SERVICES = path.join(ROOT, "app", "our-services");
const APP_LOCATIONS = path.join(ROOT, "app", "locations");
const APP_HOW_CARE = path.join(ROOT, "app", "how-care-starts");
const SCHEMA_FILE = path.join(ROOT, "docs", "04-SCHEMA-STANDARDS.md");
const FAQS_PAGE = path.join(ROOT, "app", "faqs", "page.tsx");
const OUT_FILE = path.join(ROOT, "public", "llms.txt");
const SITE = "https://www.arcadiahomecare.ca";

const CLUSTER_LABELS = {
  "navigating-home-care": "Navigating Home Care",
  "family-caregiver-support": "Family Caregiver Support",
  "dementia-memory-care": "Dementia & Memory Care",
  "brain-injury-rehabilitation": "Brain Injury & Rehabilitation",
  "cost-of-care-planning": "Cost of Care & Financial Planning",
};

const CONDITIONS = [
  ["Dementia Care at Home", "/conditions/dementia-care-at-home/"],
  ["Acquired Brain Injury Support", "/conditions/acquired-brain-injury-support/"],
  ["Stroke Recovery", "/conditions/stroke-recovery/"],
  ["Parkinson's Support", "/conditions/parkinsons-support/"],
  ["Palliative & Serious Illness", "/conditions/palliative-serious-illness/"],
  ["Frailty & Fall Prevention", "/conditions/frailty-fall-prevention/"],
  ["Post-Hospital Recovery", "/conditions/post-hospital-recovery/"],
  ["Caregiver Burnout Support", "/conditions/caregiver-burnout-support/"],
];

function readText(filePath) {
  return readFileSync(filePath, "utf8");
}

function walkPageFiles(dir, prefix = "") {
  const files = [];
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith("[") || entry.startsWith("@")) continue;
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

function unescapeJsString(value) {
  return value
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\n/g, "\n")
    .replace(/\\`/g, "`");
}

function slugToLabel(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function citySlugToLabel(slug) {
  return slugToLabel(slug.replace(/-home-care$/, ""));
}

function toAbsoluteUrl(href) {
  return href.startsWith("http") ? href : `${SITE}${href}`;
}

function truncate(text, max = 220) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
}

function extractMetadataTitle(content) {
  const match = content.match(/title:\s*(['"`])((?:\\.|(?!\1).)*)\1/);
  if (!match) return null;
  return unescapeJsString(match[2]).replace(/\s*\|\s*Arcadia.*$/i, "").trim();
}

function extractMetadataDescription(content) {
  const match = content.match(/description:\s*(['"`])((?:\\.|(?!\1).)*)\1/);
  if (!match) return null;
  return unescapeJsString(match[2]);
}

function parseConstFaqs(content) {
  const match = content.match(/const faqs\s*=\s*\[([\s\S]*?)\]\s*(?:;)?/);
  if (!match) return [];

  const faqs = [];
  const blockPattern =
    /\{\s*q:\s*(['"`])(?<q>(?:\\.|(?!\1).)*)\1\s*,\s*a:\s*(['"`])(?<a>(?:\\.|(?!\3).)*)\3/g;

  for (const item of match[1].matchAll(blockPattern)) {
    faqs.push({
      q: unescapeJsString(item.groups.q),
      a: unescapeJsString(item.groups.a),
    });
  }

  return faqs;
}

function parseFaqPageSchema(content) {
  if (!content.includes("FAQPage")) return [];

  const faqs = [];
  const blockPattern =
    /'@type': 'Question'[\s\S]*?name:\s*(['"`])(?<q>(?:\\.|(?!\1).)*)\1[\s\S]*?text:\s*(['"`])(?<a>(?:\\.|(?!\3).)*)\3/g;

  for (const item of content.matchAll(blockPattern)) {
    faqs.push({
      q: unescapeJsString(item.groups.q),
      a: unescapeJsString(item.groups.a),
    });
  }

  return faqs;
}

function parseWhatWeProvide(content) {
  const match = content.match(/const whatWeProvide\s*=\s*\[([\s\S]*?)\]\s*(?:;)?/);
  if (!match) return [];

  const items = [];
  const blockPattern =
    /\{\s*title:\s*(['"`])(?<title>(?:\\.|(?!\1).)*)\1\s*,\s*body:\s*(['"`])(?<body>(?:\\.|(?!\3).)*)\3/g;

  for (const item of match[1].matchAll(blockPattern)) {
    items.push({
      title: unescapeJsString(item.groups.title),
      body: unescapeJsString(item.groups.body),
    });
  }

  return items;
}

function parseFaqsFromPage(filePath) {
  if (!existsSync(filePath)) return [];
  const content = readText(filePath);
  const schemaFaqs = parseFaqPageSchema(content);
  if (schemaFaqs.length > 0) return schemaFaqs;
  return parseConstFaqs(content);
}

function renderFaqBlock(faqs, indent = "") {
  if (faqs.length === 0) return `${indent}- (No FAQs on this page yet)\n`;
  return faqs
    .map(
      (faq) =>
        `${indent}- Q: ${faq.q}\n${indent}  A: ${truncate(faq.a, 320)}`,
    )
    .join("\n");
}

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
    readText(path.join(APP_RESOURCES, normalized)).includes("const articles")
  );
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

function collectArticlesFromHubs() {
  const byHref = new Map();

  for (const relPath of walkPageFiles(APP_RESOURCES)) {
    if (!isHubPage(relPath)) continue;

    const clusterKey =
      relPath === "page.tsx" ? "_general" : relPath.replace(/\/page\.tsx$/, "");
    const content = readText(path.join(APP_RESOURCES, relPath));
    for (const article of parseLiveArticlesFromHub(content)) {
      byHref.set(article.href, { ...article, clusterKey });
    }
  }

  return byHref;
}

function clusterKeyFromHref(href) {
  const segments = href.split("/").filter(Boolean);
  if (segments[0] !== "resources") return "_general";
  if (segments.length === 2) return "_general";
  return segments[1];
}

function collectArticlesFromFilesystem(byHref) {
  for (const relPath of walkPageFiles(APP_RESOURCES)) {
    if (isHubPage(relPath)) continue;

    const route = `/resources/${relPath.replace(/\/page\.tsx$/, "")}/`;
    if (byHref.has(route)) continue;

    const content = readText(path.join(APP_RESOURCES, relPath));
    const title = extractMetadataTitle(content);
    if (!title) continue;

    byHref.set(route, { title, href: route, clusterKey: clusterKeyFromHref(route) });
  }
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

function hrefToPagePath(href) {
  return path.join(ROOT, "app", href.replace(/^\//, "").replace(/\/$/, ""), "page.tsx");
}

function collectLocations() {
  const byHref = new Map();

  const hubContent = readText(path.join(APP_LOCATIONS, "page.tsx"));
  for (const match of hubContent.matchAll(
    /\{\s*label:\s*["']([^"']+)["'],\s*href:\s*["']([^"']+)["']/g,
  )) {
    byHref.set(match[2], {
      label: match[1],
      href: match[2],
      group: "Toronto & Boroughs",
    });
  }

  const regionContent = readText(path.join(APP_LOCATIONS, "[region]", "page.tsx"));
  const regionMatch = regionContent.match(/const REGION_SLUGS\s*=\s*\[([\s\S]*?)\];/);
  if (regionMatch) {
    for (const match of regionMatch[1].matchAll(/"([a-z-]+)"/g)) {
      const slug = match[1];
      const href = `/locations/${slug}/`;
      if (!byHref.has(href)) {
        byHref.set(href, {
          label: slugToLabel(slug),
          href,
          group: "GTA Regions",
        });
      }
    }
  }

  const cityContent = readText(path.join(APP_LOCATIONS, "[region]", "[city]", "page.tsx"));
  const cityMatch = cityContent.match(/const REGION_CITY_PAIRS[\s\S]*?=\s*\[([\s\S]*?)\];/);
  if (cityMatch) {
    for (const match of cityMatch[1].matchAll(
      /region:\s*"([^"]+)"\s*,\s*city:\s*"([^"]+)"/g,
    )) {
      const href = `/locations/${match[1]}/${match[2]}/`;
      const label = citySlugToLabel(match[2]);
      const group = match[1] === "toronto" ? "Toronto & Boroughs" : "GTA Cities";
      byHref.set(href, { label, href, group });
    }
  }

  for (const entry of byHref.values()) {
    const pagePath = hrefToPagePath(entry.href);
    if (existsSync(pagePath)) {
      const content = readText(pagePath);
      entry.description = extractMetadataDescription(content);
      entry.faqs = parseConstFaqs(content);
      if (!entry.description) {
        entry.description = extractMetadataTitle(content);
      }
    } else {
      entry.description =
        entry.group === "GTA Regions"
          ? `Specialized home care across ${entry.label}. Arcadia supports families with dementia, rehabilitation, hospital discharge, and complex aging care in the GTA.`
          : `Home care in ${entry.label}. Arcadia supports families with dementia care, rehabilitation support, and post-hospital transition planning.`;
      entry.faqs = [];
    }
  }

  return [...byHref.values()].sort((a, b) => {
    if (a.group !== b.group) return a.group.localeCompare(b.group, "en");
    return a.label.localeCompare(b.label, "en");
  });
}

function collectServices() {
  const services = [];

  for (const relPath of walkPageFiles(APP_SERVICES)) {
    if (relPath === "page.tsx" || relPath.startsWith("[service]/")) continue;

    const href = `/our-services/${relPath.replace(/\/page\.tsx$/, "")}/`;
    const filePath = path.join(APP_SERVICES, relPath);
    const content = readText(filePath);

    services.push({
      title: extractMetadataTitle(content) ?? slugToLabel(relPath.replace(/\/page\.tsx$/, "")),
      href,
      description: extractMetadataDescription(content) ?? "",
      includes: parseWhatWeProvide(content),
      faqs: parseConstFaqs(content),
    });
  }

  return services.sort((a, b) => a.title.localeCompare(b.title, "en"));
}

function collectSiteFaqs() {
  return parseConstFaqs(readText(FAQS_PAGE));
}

function readTrustSignals() {
  const schema = readText(SCHEMA_FILE);
  const ratingValue = schema.match(/"ratingValue":\s*"([^"]+)"/)?.[1] ?? "4.9";
  const reviewCount = schema.match(/"reviewCount":\s*"([^"]+)"/)?.[1] ?? "44";
  return { ratingValue, reviewCount };
}

function renderLocations(locations) {
  const lines = ["## GTA Locations", ""];
  let currentGroup = "";

  for (const location of locations) {
    if (location.group !== currentGroup) {
      currentGroup = location.group;
      lines.push(`### ${currentGroup}`, "");
    }

    lines.push(`#### ${location.label}`);
    lines.push(`- URL: ${toAbsoluteUrl(location.href)}`);
    if (location.description) {
      lines.push(`- Summary: ${truncate(location.description, 280)}`);
    }
    lines.push("- FAQs:");
    lines.push(renderFaqBlock(location.faqs, "  "));
    lines.push("");
  }

  return lines.join("\n").trimEnd();
}

function renderServices(services) {
  const lines = ["## Core Services (Detailed)", ""];

  for (const service of services) {
    lines.push(`### ${service.title}`);
    lines.push(`- URL: ${toAbsoluteUrl(service.href)}`);
    if (service.description) {
      lines.push(`- Summary: ${truncate(service.description, 280)}`);
    }
    if (service.includes.length > 0) {
      lines.push("- What we provide:");
      for (const item of service.includes) {
        lines.push(`  - ${item.title}: ${truncate(item.body, 200)}`);
      }
    }
    lines.push("- FAQs:");
    lines.push(renderFaqBlock(service.faqs, "  "));
    lines.push("");
  }

  return lines.join("\n").trimEnd();
}

function renderResourceGuides(byHref) {
  const lines = ["## Resource Guides (GTA Home Care)", ""];

  for (const [clusterKey, articles] of groupArticles(byHref)) {
    const label =
      clusterKey === "_general"
        ? "General Resources"
        : CLUSTER_LABELS[clusterKey] ?? clusterKey;

    lines.push(`### ${label}`, "");

    for (const article of articles) {
      const pagePath = hrefToPagePath(article.href);
      const faqs = parseFaqsFromPage(pagePath);

      lines.push(`#### ${article.title}`);
      lines.push(`- URL: ${toAbsoluteUrl(article.href)}`);
      lines.push("- FAQs:");
      lines.push(renderFaqBlock(faqs, "  "));
      lines.push("");
    }
  }

  return lines.join("\n").trimEnd();
}

function collectSupplementalPages() {
  const pages = [];

  for (const relPath of walkPageFiles(APP_RESOURCES)) {
    if (!isHubPage(relPath) || relPath === "page.tsx") continue;

    const href = `/resources/${relPath.replace(/\/page\.tsx$/, "")}/`;
    const pagePath = path.join(APP_RESOURCES, relPath);
    const faqs = parseFaqsFromPage(pagePath);
    if (faqs.length === 0) continue;

    const content = readText(pagePath);
    const title = extractMetadataTitle(content) ?? slugToLabel(relPath.replace(/\/page\.tsx$/, ""));
    pages.push({ title, href, faqs });
  }

  if (existsSync(APP_HOW_CARE)) {
    for (const relPath of walkPageFiles(APP_HOW_CARE)) {
      const href = `/how-care-starts/${relPath.replace(/\/page\.tsx$/, "")}/`;
      const pagePath = path.join(APP_HOW_CARE, relPath);
      const faqs = parseFaqsFromPage(pagePath);
      if (faqs.length === 0) continue;

      const content = readText(pagePath);
      const title = extractMetadataTitle(content) ?? slugToLabel(relPath.replace(/\/page\.tsx$/, ""));
      pages.push({ title, href, faqs });
    }
  }

  return pages.sort((a, b) => a.title.localeCompare(b.title, "en"));
}

function renderSupplementalPages(pages) {
  if (pages.length === 0) return "";

  const lines = ["## Decision & Hub Pages", ""];

  for (const page of pages) {
    lines.push(`### ${page.title}`);
    lines.push(`- URL: ${toAbsoluteUrl(page.href)}`);
    lines.push("- FAQs:");
    lines.push(renderFaqBlock(page.faqs, "  "));
    lines.push("");
  }

  return lines.join("\n").trimEnd();
}

function renderSiteFaqs(faqs) {
  const lines = ["## Site-Wide FAQs", ""];
  lines.push(renderFaqBlock(faqs));
  return lines.join("\n").trimEnd();
}

function renderConditions() {
  return [
    "## Condition Support",
    ...CONDITIONS.map(([label, href]) => `- ${label}: ${toAbsoluteUrl(href)}`),
  ].join("\n");
}

function renderLlmsTxt({ articles, locations, services, siteFaqs, supplementalPages, trust }) {
  return `# Arcadia Home Care

> Arcadia Home Care provides specialized home care in Toronto and the Greater Toronto Area, combining clinical expertise with compassionate support for families since 2005.

## Organization
- Name: Arcadia Home Care
- Website: ${SITE}/
- Phone: (844) 977-0050
- Email: info@arcadiahomecare.ca
- Address: 302 Bay Street, Toronto, Ontario M5H 0B6, Canada
- Service Area: Toronto and GTA (York, Peel, Durham, Halton)

${renderLocations(locations)}

${renderServices(services)}

${renderConditions()}

${renderResourceGuides(articles)}

${renderSupplementalPages(supplementalPages)}

${renderSiteFaqs(siteFaqs)}

## Helpful Pages
- How Care Starts: ${SITE}/how-care-starts/
- Contact: ${SITE}/contact/
- Referral Form: ${SITE}/referral-form/
- Locations hub: ${SITE}/locations/
- Resources hub: ${SITE}/resources/
- FAQ page: ${SITE}/faqs/

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
  const articles = collectArticlesFromHubs();
  collectArticlesFromFilesystem(articles);
  const locations = collectLocations();
  const services = collectServices();
  const siteFaqs = collectSiteFaqs();
  const supplementalPages = collectSupplementalPages();
  const trust = readTrustSignals();
  const output = renderLlmsTxt({ articles, locations, services, siteFaqs, supplementalPages, trust });

  writeFileSync(OUT_FILE, output);

  const articleFaqCount = [...articles.values()].reduce((sum, article) => {
    return sum + parseFaqsFromPage(hrefToPagePath(article.href)).length;
  }, 0);

  console.log(
    [
      `llms.txt written`,
      `${articles.size} resource guide(s)`,
      `${locations.length} location(s)`,
      `${services.length} service page(s)`,
      `${articleFaqCount} article FAQ(s)`,
      `${siteFaqs.length} site FAQ(s)`,
      `trust ${trust.ratingValue}/${trust.reviewCount} reviews`,
    ].join(" · "),
  );
}

main();
