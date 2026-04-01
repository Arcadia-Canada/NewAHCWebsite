import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const PUBLIC_ROBOTS = path.join(ROOT, "public", "robots.txt");
const APP_ROBOTS = path.join(APP_DIR, "robots.ts");
const OUT_FILE = path.join(ROOT, "indexability-report.md");

function walk(dir) {
  const entries = readdirSync(dir);
  const files = [];
  for (const entry of entries) {
    if (entry.startsWith(".") || entry === "node_modules" || entry === ".next") continue;
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function toRoute(filePath) {
  const rel = path.relative(APP_DIR, filePath).replaceAll("\\", "/");
  const route = rel.replace(/(^|\/)page\.tsx$/, "");
  return route.length ? `/${route}/` : "/";
}

function pickRobotsSource() {
  if (statSafe(APP_ROBOTS)) return APP_ROBOTS;
  if (statSafe(PUBLIC_ROBOTS)) return PUBLIC_ROBOTS;
  return null;
}

function statSafe(p) {
  try {
    return statSync(p);
  } catch {
    return null;
  }
}

const files = walk(APP_DIR);
const pageFiles = files.filter((f) => f.endsWith("page.tsx"));

const blockedByPageRobots = [];
const blockedByMetaTag = [];
const blockedByMetadataFlag = [];
const pagesMissingMetadata = [];

for (const file of pageFiles) {
  const src = readFileSync(file, "utf8");
  const route = toRoute(file);
  const rel = path.relative(ROOT, file).replaceAll("\\", "/");

  if (!/export const metadata\s*:\s*Metadata/.test(src)) {
    pagesMissingMetadata.push({ route, file: rel });
  }

  if (/robots\s*:\s*\{[\s\S]*index\s*:\s*false/.test(src) || /follow\s*:\s*false/.test(src)) {
    blockedByMetadataFlag.push({ route, file: rel });
  }

  if (/<meta[^>]+name=['"]robots['"][^>]+content=['"][^'"]*noindex/i.test(src)) {
    blockedByMetaTag.push({ route, file: rel });
  }

  if (/noindex|nofollow/.test(src) && /generateMetadata/.test(src) && /robots/.test(src)) {
    blockedByPageRobots.push({ route, file: rel });
  }
}

const robotsSource = pickRobotsSource();
let robotsAllowsAll = false;
let robotsDisallowLines = [];

if (robotsSource) {
  const robotsSrc = readFileSync(robotsSource, "utf8");
  robotsAllowsAll = /allow\s*:\s*["']\/["']|Allow:\s*\/\s*$/m.test(robotsSrc);
  const disallowMatches =
    robotsSrc.match(/disallow\s*:\s*["'][^"']+["']|Disallow:\s*.+$/gim) || [];
  robotsDisallowLines = disallowMatches.map((m) => m.trim());
}

const lines = [];
lines.push("# Indexability Report");
lines.push("");
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push("");
lines.push("## Summary");
lines.push("");
lines.push(`- Pages scanned: ${pageFiles.length}`);
lines.push(`- Page-level metadata robots blocks: ${blockedByMetadataFlag.length}`);
lines.push(`- Meta tag noindex blocks: ${blockedByMetaTag.length}`);
lines.push(`- Potential generateMetadata robot blocks: ${blockedByPageRobots.length}`);
lines.push(`- Pages missing explicit metadata export: ${pagesMissingMetadata.length}`);
lines.push(`- Robots source found: ${robotsSource ? `\`${path.relative(ROOT, robotsSource).replaceAll("\\", "/")}\`` : "none"}`);
lines.push(`- Robots appears to allow all crawl: ${robotsAllowsAll ? "yes" : "no/unknown"}`);
lines.push("");

lines.push("## Robots Disallow Rules");
lines.push("");
if (!robotsDisallowLines.length) lines.push("- None detected");
else robotsDisallowLines.forEach((r) => lines.push(`- ${r}`));
lines.push("");

function printSection(title, items) {
  lines.push(`## ${title}`);
  lines.push("");
  if (!items.length) {
    lines.push("- None");
    lines.push("");
    return;
  }
  items.forEach((item) => lines.push(`- \`${item.route}\` (\`${item.file}\`)`));
  lines.push("");
}

printSection("Blocked By Metadata Robots Flags", blockedByMetadataFlag);
printSection("Blocked By Meta Robots Tags", blockedByMetaTag);
printSection("Potential generateMetadata Robot Blocks", blockedByPageRobots);
printSection("Pages Missing Explicit Metadata Export", pagesMissingMetadata);

writeFileSync(OUT_FILE, lines.join("\n"), "utf8");
console.log(`Indexability report generated: ${path.relative(ROOT, OUT_FILE)}`);
