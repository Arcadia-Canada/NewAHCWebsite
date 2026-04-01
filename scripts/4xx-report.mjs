import { writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT_FILE = path.join(ROOT, "4xx-report.md");
const ORIGIN = process.env.CRAWL_ORIGIN || "http://localhost:3000";
const START_PATH = "/";
const MAX_PAGES = 250;

function normalizeHref(href) {
  if (!href) return null;
  if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return null;
  try {
    const u = new URL(href, ORIGIN);
    if (u.origin !== ORIGIN) return null;
    u.hash = "";
    return `${u.pathname}${u.search}`;
  } catch {
    return null;
  }
}

function extractLinks(html) {
  const links = [];
  const hrefRegex = /href\s*=\s*["']([^"']+)["']/gi;
  let m;
  while ((m = hrefRegex.exec(html)) !== null) {
    const norm = normalizeHref(m[1]);
    if (norm) links.push(norm);
  }
  return [...new Set(links)];
}

async function fetchPage(pathname) {
  const url = `${ORIGIN}${pathname}`;
  try {
    const res = await fetch(url, { redirect: "manual" });
    const contentType = res.headers.get("content-type") || "";
    const html = contentType.includes("text/html") ? await res.text() : "";
    return { status: res.status, url, html };
  } catch (error) {
    return { status: 0, url, html: "", error: String(error) };
  }
}

async function crawl() {
  const queue = [START_PATH];
  const visited = new Set();
  const results = new Map();

  while (queue.length && visited.size < MAX_PAGES) {
    const nextPath = queue.shift();
    if (!nextPath || visited.has(nextPath)) continue;
    visited.add(nextPath);

    const page = await fetchPage(nextPath);
    results.set(nextPath, page);

    if (page.status >= 200 && page.status < 400 && page.html) {
      const links = extractLinks(page.html);
      for (const link of links) {
        if (!visited.has(link) && !queue.includes(link)) queue.push(link);
      }
    }
  }

  return results;
}

function buildReport(results) {
  const pages = [...results.entries()].map(([path, data]) => ({ path, ...data }));
  const broken = pages.filter((p) => p.status >= 400 || p.status === 0);
  const redirects = pages.filter((p) => p.status >= 300 && p.status < 400);

  const lines = [];
  lines.push("# 4xx Crawl Report");
  lines.push("");
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Origin: ${ORIGIN}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Pages crawled: ${pages.length}`);
  lines.push(`- 4xx/failed URLs: ${broken.length}`);
  lines.push(`- 3xx URLs: ${redirects.length}`);
  lines.push("");

  lines.push("## Broken URLs (4xx or fetch failures)");
  lines.push("");
  if (!broken.length) {
    lines.push("- None");
  } else {
    for (const b of broken) {
      lines.push(`- \`${b.path}\` -> status ${b.status}`);
    }
  }
  lines.push("");

  lines.push("## Redirecting URLs (3xx)");
  lines.push("");
  if (!redirects.length) {
    lines.push("- None");
  } else {
    for (const r of redirects) {
      lines.push(`- \`${r.path}\` -> status ${r.status}`);
    }
  }
  lines.push("");

  lines.push("## Recommendation");
  lines.push("");
  lines.push("- For each 4xx URL, either restore the page, update internal links, or add a permanent redirect in `next.config.ts`.");
  lines.push("- Re-run with `npm run crawl:4xx` before deployment.");
  lines.push("");

  return lines.join("\n");
}

const results = await crawl();
const report = buildReport(results);
writeFileSync(OUT_FILE, report, "utf8");
console.log(`4xx report generated: ${path.relative(ROOT, OUT_FILE)}`);
