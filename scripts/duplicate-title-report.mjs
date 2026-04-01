import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const OUT_FILE = path.join(ROOT, "duplicate-title-report.md");

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

const pages = walk(APP_DIR).filter((f) => f.endsWith("page.tsx"));
const byTitle = new Map();

for (const file of pages) {
  const src = readFileSync(file, "utf8");
  const match = src.match(/title\s*:\s*['"`]([\s\S]*?)['"`]\s*,/);
  if (!match) continue;
  const title = match[1].replace(/\s+/g, " ").trim();
  if (!byTitle.has(title)) byTitle.set(title, []);
  byTitle.get(title).push(path.relative(ROOT, file).replaceAll("\\", "/"));
}

const duplicates = [...byTitle.entries()].filter(([, files]) => files.length > 1);

const lines = [];
lines.push("# Duplicate Title Tag Report");
lines.push("");
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push("");
lines.push(`- Pages scanned: ${pages.length}`);
lines.push(`- Duplicate title groups: ${duplicates.length}`);
lines.push("");

if (!duplicates.length) {
  lines.push("No duplicate `metadata.title` values found across `app/**/page.tsx`.");
} else {
  duplicates.forEach(([title, files], idx) => {
    lines.push(`## Group ${idx + 1}`);
    lines.push("");
    lines.push(`- Title: "${title}"`);
    lines.push("- Used in:");
    files.forEach((f) => lines.push(`  - \`${f}\``));
    lines.push("");
  });
}

writeFileSync(OUT_FILE, lines.join("\n"), "utf8");
console.log(`Duplicate title report generated: ${path.relative(ROOT, OUT_FILE)}`);
