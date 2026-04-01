import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const OUT_FILE = path.join(ROOT, "duplicate-meta-report.md");

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
const byDescription = new Map();

for (const file of pages) {
  const src = readFileSync(file, "utf8");
  const match = src.match(/description\s*:\s*['"`]([\s\S]*?)['"`]\s*,/);
  if (!match) continue;
  const description = match[1].replace(/\s+/g, " ").trim();
  if (!byDescription.has(description)) byDescription.set(description, []);
  byDescription.get(description).push(path.relative(ROOT, file).replaceAll("\\", "/"));
}

const duplicates = [...byDescription.entries()].filter(([, files]) => files.length > 1);

const lines = [];
lines.push("# Duplicate Meta Description Report");
lines.push("");
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push("");
lines.push(`- Pages scanned: ${pages.length}`);
lines.push(`- Duplicate description groups: ${duplicates.length}`);
lines.push("");

if (!duplicates.length) {
  lines.push("No duplicate `metadata.description` values found across `app/**/page.tsx`.");
} else {
  duplicates.forEach(([desc, files], idx) => {
    lines.push(`## Group ${idx + 1}`);
    lines.push("");
    lines.push(`- Description: "${desc}"`);
    lines.push("- Used in:");
    files.forEach((f) => lines.push(`  - \`${f}\``));
    lines.push("");
  });
}

writeFileSync(OUT_FILE, lines.join("\n"), "utf8");
console.log(`Duplicate meta report generated: ${path.relative(ROOT, OUT_FILE)}`);
