import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const OUT_FILE = path.join(ROOT, "voice-search-report.md");

const conversationalStarters = [
  "how do i",
  "how much",
  "can you",
  "who should",
  "what is the fastest way",
  "is there",
  "near me",
  "can someone",
  "do you",
];

function walk(dir) {
  const entries = readdirSync(dir);
  const files = [];
  for (const entry of entries) {
    if (entry.startsWith(".") || entry === "node_modules" || entry === ".next") continue;
    const fullPath = path.join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) files.push(...walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}

function routeFromPage(filePath) {
  const rel = path.relative(APP_DIR, filePath).replaceAll("\\", "/");
  const route = rel.replace(/(^|\/)page\.tsx$/, "");
  return route.length ? `/${route}/` : "/";
}

function extractText(source) {
  const strings = source.match(/(["'`])(?:(?=(\\?))\2[\s\S])*?\1/g) || [];
  return strings
    .map((s) => s.slice(1, -1).toLowerCase())
    .join(" ")
    .replace(/\s+/g, " ");
}

const pages = walk(APP_DIR)
  .filter((file) => file.endsWith("page.tsx"))
  .filter((file) => !file.includes("["))
  .map((file) => {
    const source = readFileSync(file, "utf8");
    const text = extractText(source);
    const questionCount = (text.match(/\?/g) || []).length;
    const conversationalHits = conversationalStarters.reduce((sum, phrase) => {
      return sum + (text.includes(phrase) ? 1 : 0);
    }, 0);

    return {
      route: routeFromPage(file),
      file: path.relative(ROOT, file).replaceAll("\\", "/"),
      questionCount,
      conversationalHits,
      hasFaqSchema: source.includes('"@type": "FAQPage"') || source.includes("'@type': 'FAQPage'"),
    };
  })
  .sort((a, b) => a.route.localeCompare(b.route));

const lowCoverage = pages.filter((p) => p.questionCount < 2 || p.conversationalHits < 2);
const noFaqSchema = pages.filter((p) => !p.hasFaqSchema);

const lines = [];
lines.push("# Voice Search Optimization Report");
lines.push("");
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push("");
lines.push("## Coverage Summary");
lines.push("");
lines.push(`- Pages analyzed: ${pages.length}`);
lines.push(`- Low conversational coverage pages: ${lowCoverage.length}`);
lines.push(`- Pages without FAQ schema: ${noFaqSchema.length}`);
lines.push("");

lines.push("## Priority Gaps (Question + Conversational Phrasing)");
lines.push("");
if (!lowCoverage.length) lines.push("- None");
else {
  lowCoverage.slice(0, 25).forEach((p) => {
    lines.push(
      `- \`${p.route}\` (questions: ${p.questionCount}, conversational hits: ${p.conversationalHits})`
    );
  });
}
lines.push("");

lines.push("## Pages Without FAQ Schema");
lines.push("");
if (!noFaqSchema.length) lines.push("- None");
else noFaqSchema.slice(0, 30).forEach((p) => lines.push(`- \`${p.route}\``));
lines.push("");

lines.push("## Per-Page Detail");
lines.push("");
lines.push("| Route | Questions | Conversational Hits | FAQ Schema |");
lines.push("|---|---:|---:|---:|");
for (const p of pages) {
  lines.push(`| \`${p.route}\` | ${p.questionCount} | ${p.conversationalHits} | ${p.hasFaqSchema ? "Y" : "N"} |`);
}
lines.push("");

writeFileSync(OUT_FILE, lines.join("\n"), "utf8");
console.log(`Voice search report generated: ${path.relative(ROOT, OUT_FILE)}`);
