import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const OUT_FILE = path.join(ROOT, "nlg-report.md");

function walk(dir) {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    if (entry.startsWith(".")) continue;
    if (entry === "node_modules" || entry === ".next") continue;

    const fullPath = path.join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) files.push(...walk(fullPath));
    else files.push(fullPath);
  }

  return files;
}

function cleanText(input) {
  return input
    .replace(/\{[^}]*\}/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractLikelyCopy(source) {
  const matches = source.match(/(["'`])(?:(?=(\\?))\2[\s\S])*?\1/g) || [];
  const strings = matches
    .map((chunk) => chunk.slice(1, -1))
    .map((chunk) => chunk.replaceAll("\\n", " ").replaceAll("\\'", "'").replaceAll('\\"', '"'))
    .map(cleanText)
    .filter((chunk) => chunk.length >= 40)
    .filter((chunk) => /[A-Za-z]{3,}/.test(chunk))
    .filter((chunk) => (chunk.match(/\b[A-Za-z]{3,}\b/g) || []).length >= 6)
    .filter((chunk) => !chunk.includes("http://") && !chunk.includes("https://"))
    .filter((chunk) => !/^\/[a-z0-9/_-]+\/?$/i.test(chunk))
    .filter((chunk) => (chunk.match(/\//g) || []).length < 3)
    .filter((chunk) => !chunk.includes("#") && !chunk.includes("{") && !chunk.includes("}"));

  return [...new Set(strings)];
}

function toSentences(text) {
  return text
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function words(text) {
  return text.toLowerCase().match(/[a-z0-9']+/g) || [];
}

function syllableCount(word) {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return 0;
  if (w.length <= 3) return 1;
  const vowels = w.match(/[aeiouy]{1,2}/g);
  let count = vowels ? vowels.length : 1;
  if (w.endsWith("e")) count -= 1;
  return Math.max(1, count);
}

function fleschReadingEase(text) {
  const sentenceList = toSentences(text);
  const wordList = words(text);
  if (!sentenceList.length || !wordList.length) return null;

  const syllables = wordList.reduce((sum, w) => sum + syllableCount(w), 0);
  const wps = wordList.length / sentenceList.length;
  const spw = syllables / wordList.length;
  return 206.835 - 1.015 * wps - 84.6 * spw;
}

function fileToRoute(filePath) {
  const rel = path.relative(APP_DIR, filePath).replaceAll("\\", "/");
  const route = rel.replace(/(^|\/)page\.tsx$/, "");
  return route.length ? `/${route}/` : "/";
}

const pages = walk(APP_DIR)
  .filter((file) => file.endsWith("page.tsx"))
  .filter((file) => !file.includes("["))
  .map((file) => {
    const source = readFileSync(file, "utf8");
    const copyBlocks = extractLikelyCopy(source);
    const combined = copyBlocks.join(". ");
    const sentenceList = toSentences(combined);
    const sentenceWords = sentenceList.map((s) => words(s).length).filter(Boolean);
    const avgSentenceWords = sentenceWords.length
      ? sentenceWords.reduce((a, b) => a + b, 0) / sentenceWords.length
      : 0;
    const longSentences = sentenceWords.filter((count) => count > 24).length;
    const readability = fleschReadingEase(combined);
    const ctaPhrases = (combined.match(/book a free consultation|call \(\d{3}\)|start the conversation/gi) || [])
      .length;

    return {
      file: path.relative(ROOT, file).replaceAll("\\", "/"),
      route: fileToRoute(file),
      copyBlocks,
      avgSentenceWords,
      longSentences,
      readability,
      ctaPhrases,
    };
  });

const blockFrequency = new Map();
for (const page of pages) {
  for (const block of page.copyBlocks) {
    const key = block.toLowerCase();
    const existing = blockFrequency.get(key) || { count: 0, sample: block };
    existing.count += 1;
    blockFrequency.set(key, existing);
  }
}

const repeatedBlocks = [...blockFrequency.entries()]
  .filter(([, value]) => value.count >= 4)
  .sort((a, b) => b[1].count - a[1].count)
  .slice(0, 20);

const lowReadability = pages
  .filter((p) => p.readability !== null && p.readability < 45)
  .sort((a, b) => (a.readability ?? 0) - (b.readability ?? 0));

const longSentenceRisk = pages
  .filter((p) => p.longSentences >= 4)
  .sort((a, b) => b.longSentences - a.longSentences);

const weakCTAConsistency = pages
  .filter((p) => p.ctaPhrases === 0)
  .map((p) => p.route);

const lines = [];
lines.push("# NLG Content Quality Report");
lines.push("");
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push("");
lines.push("## Snapshot");
lines.push("");
lines.push(`- Pages analyzed: ${pages.length}`);
lines.push(`- Pages with low readability (Flesch < 45): ${lowReadability.length}`);
lines.push(`- Pages with long-sentence risk (4+ long sentences): ${longSentenceRisk.length}`);
lines.push(`- Heavily repeated copy blocks (appearing on 4+ pages): ${repeatedBlocks.length}`);
lines.push(`- Pages missing core CTA phrases: ${weakCTAConsistency.length}`);
lines.push("");

lines.push("## Readability Risks");
lines.push("");
if (!lowReadability.length) lines.push("- None");
else {
  for (const p of lowReadability.slice(0, 20)) {
    lines.push(`- \`${p.route}\` score ${p.readability?.toFixed(1)} (avg sentence ${p.avgSentenceWords.toFixed(1)} words)`);
  }
}
lines.push("");

lines.push("## Long-Sentence Risk");
lines.push("");
if (!longSentenceRisk.length) lines.push("- None");
else {
  for (const p of longSentenceRisk.slice(0, 20)) {
    lines.push(`- \`${p.route}\` has ${p.longSentences} long sentences`);
  }
}
lines.push("");

lines.push("## Repeated Copy Hotspots");
lines.push("");
if (!repeatedBlocks.length) lines.push("- None");
else {
  for (const [, value] of repeatedBlocks) {
    const preview = value.sample.length > 110 ? `${value.sample.slice(0, 110)}...` : value.sample;
    lines.push(`- Repeated ${value.count}x: "${preview}"`);
  }
}
lines.push("");

lines.push("## CTA Consistency Gaps");
lines.push("");
if (!weakCTAConsistency.length) lines.push("- None");
else weakCTAConsistency.forEach((route) => lines.push(`- \`${route}\``));
lines.push("");

lines.push("## Per-Page Metrics");
lines.push("");
lines.push("| Route | Readability | Avg Sentence Words | Long Sentences | CTA Phrase Hits |");
lines.push("|---|---:|---:|---:|---:|");
for (const p of pages.sort((a, b) => a.route.localeCompare(b.route))) {
  lines.push(
    `| \`${p.route}\` | ${p.readability === null ? "-" : p.readability.toFixed(1)} | ${p.avgSentenceWords.toFixed(1)} | ${p.longSentences} | ${p.ctaPhrases} |`
  );
}
lines.push("");

writeFileSync(OUT_FILE, lines.join("\n"), "utf8");
console.log(`NLG report generated: ${path.relative(ROOT, OUT_FILE)}`);
