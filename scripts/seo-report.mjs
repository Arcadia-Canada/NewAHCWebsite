import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const OUT_FILE = path.join(ROOT, "seo-report.md");

function walk(dir) {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    if (entry.startsWith(".")) continue;
    if (entry === "node_modules" || entry === ".next") continue;

    const full = path.join(dir, entry);
    const stats = statSync(full);

    if (stats.isDirectory()) {
      files.push(...walk(full));
    } else {
      files.push(full);
    }
  }

  return files;
}

function toRoute(filePath) {
  const rel = path.relative(APP_DIR, filePath).replaceAll("\\", "/");
  const route = rel.replace(/(^|\/)page\.tsx$/, "");
  return route.length ? `/${route}/` : "/";
}

function summarizePage(filePath) {
  const source = readFileSync(filePath, "utf8");
  const route = toRoute(filePath);

  const hasMetadataExport = /export const metadata\s*:\s*Metadata\s*=/.test(source);
  const hasTitle = /title\s*:/.test(source);
  const hasDescription = /description\s*:/.test(source);
  const hasCanonical = /alternates\s*:\s*\{[\s\S]*canonical\s*:/.test(source);
  const hasJsonLd = /application\/ld\+json/.test(source);

  const anchorMatches = source.match(/href\s*=\s*["']\/[^"']*["']/g) || [];
  const nextLinkMatches = source.match(/<Link[\s\S]*?href\s*=\s*["']\/[^"']*["']/g) || [];
  const internalLinks = anchorMatches.length + nextLinkMatches.length;

  return {
    filePath: path.relative(ROOT, filePath).replaceAll("\\", "/"),
    route,
    hasMetadataExport,
    hasTitle,
    hasDescription,
    hasCanonical,
    hasJsonLd,
    internalLinks,
  };
}

function run() {
  const allFiles = walk(APP_DIR);
  const pageFiles = allFiles
    .filter((f) => f.endsWith("/page.tsx") || f.endsWith("\\page.tsx"))
    .filter((f) => !f.includes("["))
    .filter((f) => !f.endsWith(".bak"));

  const pages = pageFiles.map(summarizePage).sort((a, b) => a.route.localeCompare(b.route));

  const missingMetadata = pages.filter((p) => !p.hasMetadataExport);
  const missingCanonical = pages.filter((p) => !p.hasCanonical);
  const missingSchema = pages.filter((p) => !p.hasJsonLd);
  const lowInternalLinks = pages.filter((p) => p.internalLinks < 2);

  const lines = [];
  lines.push("# SEO Automation Report");
  lines.push("");
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push("");
  lines.push("## Coverage Summary");
  lines.push("");
  lines.push(`- Total static pages audited: ${pages.length}`);
  lines.push(`- Metadata export coverage: ${pages.length - missingMetadata.length}/${pages.length}`);
  lines.push(`- Canonical coverage: ${pages.length - missingCanonical.length}/${pages.length}`);
  lines.push(`- JSON-LD schema coverage: ${pages.length - missingSchema.length}/${pages.length}`);
  lines.push(`- Pages with <2 internal links: ${lowInternalLinks.length}`);
  lines.push("");

  function section(title, items, formatter) {
    lines.push(`## ${title}`);
    lines.push("");
    if (!items.length) {
      lines.push("- None");
      lines.push("");
      return;
    }
    for (const item of items) {
      lines.push(`- ${formatter(item)}`);
    }
    lines.push("");
  }

  section("Missing Metadata Export", missingMetadata, (p) => `\`${p.route}\` (\`${p.filePath}\`)`);
  section("Missing Canonical", missingCanonical, (p) => `\`${p.route}\` (\`${p.filePath}\`)`);
  section("Missing JSON-LD Schema", missingSchema, (p) => `\`${p.route}\` (\`${p.filePath}\`)`);
  section("Low Internal Linking (<2 links)", lowInternalLinks, (p) => `\`${p.route}\` has ${p.internalLinks} internal links`);

  lines.push("## Per-Page Detail");
  lines.push("");
  lines.push("| Route | Metadata | Canonical | JSON-LD | Internal Links |");
  lines.push("|---|---:|---:|---:|---:|");
  for (const p of pages) {
    lines.push(
      `| \`${p.route}\` | ${p.hasMetadataExport ? "Y" : "N"} | ${p.hasCanonical ? "Y" : "N"} | ${p.hasJsonLd ? "Y" : "N"} | ${p.internalLinks} |`
    );
  }
  lines.push("");

  writeFileSync(OUT_FILE, lines.join("\n"), "utf8");
  console.log(`SEO report generated: ${path.relative(ROOT, OUT_FILE)}`);
}

run();
