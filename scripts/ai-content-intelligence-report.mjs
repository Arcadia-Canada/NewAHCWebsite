import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const OUT_FILE = path.join(ROOT, "ai-content-intelligence-report.md");

const emotionalWords = [
  "overwhelmed",
  "guilty",
  "exhausted",
  "hopeful",
  "anxious",
  "worried",
  "relief",
  "comfort",
  "dignity",
  "compassion",
  "reassured",
  "supported",
];

const authenticityWords = [
  "since 2005",
  "toronto",
  "gta",
  "family",
  "call",
  "(844) 977-0050",
  "arcadia",
  "caregiver",
  "consultation",
];

const genericAiPhrases = [
  "we provide",
  "we offer",
  "high quality care",
  "tailored solutions",
  "comprehensive support",
  "your loved one",
  "trusted partner",
];

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith(".") || entry === ".next" || entry === "node_modules") continue;
    const full = path.join(dir, entry);
    const stats = statSync(full);
    if (stats.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function routeFromPath(filePath) {
  const rel = path.relative(APP_DIR, filePath).replaceAll("\\", "/");
  const route = rel.replace(/(^|\/)page\.tsx$/, "");
  return route.length ? `/${route}/` : "/";
}

function readPageText(source) {
  const strings = source.match(/(["'`])(?:(?=(\\?))\2[\s\S])*?\1/g) || [];
  return strings
    .map((s) => s.slice(1, -1))
    .map((s) => s.replaceAll("\\n", " ").replaceAll("\\'", "'").replaceAll('\\"', '"'))
    .join(" ")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function countPhraseHits(text, phrases) {
  return phrases.reduce((sum, phrase) => sum + (text.includes(phrase) ? 1 : 0), 0);
}

function getWordCount(text) {
  return (text.match(/\b[a-z0-9']+\b/g) || []).length;
}

const pages = walk(APP_DIR)
  .filter((file) => file.endsWith("page.tsx"))
  .filter((file) => !file.includes("["))
  .map((file) => {
    const source = readFileSync(file, "utf8");
    const text = readPageText(source);
    const words = getWordCount(text);
    const emotionHits = countPhraseHits(text, emotionalWords);
    const authenticityHits = countPhraseHits(text, authenticityWords);
    const genericHits = countPhraseHits(text, genericAiPhrases);
    const hasFaqSchema = source.includes('"@type": "FAQPage"') || source.includes("'@type': 'FAQPage'");

    // Higher score = better human/AI balance.
    const score = Math.max(
      0,
      Math.min(100, 45 + emotionHits * 6 + authenticityHits * 4 + (hasFaqSchema ? 5 : 0) - genericHits * 5)
    );

    return {
      route: routeFromPath(file),
      file: path.relative(ROOT, file).replaceAll("\\", "/"),
      words,
      emotionHits,
      authenticityHits,
      genericHits,
      hasFaqSchema,
      score,
    };
  })
  .sort((a, b) => a.score - b.score);

const lowScore = pages.filter((p) => p.score < 55);
const highGeneric = pages.filter((p) => p.genericHits >= 3);
const lowEmotion = pages.filter((p) => p.emotionHits === 0);

const lines = [];
lines.push("# AI Content Intelligence Report");
lines.push("");
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push("");
lines.push("## Snapshot");
lines.push("");
lines.push(`- Pages analyzed: ${pages.length}`);
lines.push(`- Low balance score pages (<55): ${lowScore.length}`);
lines.push(`- High generic-phrase pages (3+ hits): ${highGeneric.length}`);
lines.push(`- Pages with zero emotional markers: ${lowEmotion.length}`);
lines.push("");

lines.push("## Priority Pages To Improve");
lines.push("");
if (!lowScore.length) lines.push("- None");
else {
  for (const p of lowScore.slice(0, 20)) {
    lines.push(
      `- \`${p.route}\` score ${p.score} (emotion: ${p.emotionHits}, authenticity: ${p.authenticityHits}, generic: ${p.genericHits})`
    );
  }
}
lines.push("");

lines.push("## High Generic Phrase Usage");
lines.push("");
if (!highGeneric.length) lines.push("- None");
else highGeneric.slice(0, 20).forEach((p) => lines.push(`- \`${p.route}\` has ${p.genericHits} generic phrase hits`));
lines.push("");

lines.push("## Low Emotional Tone Coverage");
lines.push("");
if (!lowEmotion.length) lines.push("- None");
else lowEmotion.slice(0, 25).forEach((p) => lines.push(`- \`${p.route}\``));
lines.push("");

lines.push("## Per-Page Metrics");
lines.push("");
lines.push("| Route | Score | Emotional Hits | Authenticity Hits | Generic Hits | FAQ Schema |");
lines.push("|---|---:|---:|---:|---:|---:|");
for (const p of pages.sort((a, b) => a.route.localeCompare(b.route))) {
  lines.push(
    `| \`${p.route}\` | ${p.score} | ${p.emotionHits} | ${p.authenticityHits} | ${p.genericHits} | ${p.hasFaqSchema ? "Y" : "N"} |`
  );
}
lines.push("");

lines.push("## Editorial Guidance");
lines.push("");
lines.push("- Lead with lived family context before listing service features.");
lines.push("- Add 1-2 emotional-state phrases per major page section (e.g., overwhelmed, exhausted, reassured).");
lines.push("- Increase specificity with concrete details (region, timing, care scenario, next step).");
lines.push("- Replace generic claims with outcomes and process language tied to Arcadia's approach.");
lines.push("- Keep CTA language direct and human: call, talk, book, start.");
lines.push("");

writeFileSync(OUT_FILE, lines.join("\n"), "utf8");
console.log(`AI content intelligence report generated: ${path.relative(ROOT, OUT_FILE)}`);
