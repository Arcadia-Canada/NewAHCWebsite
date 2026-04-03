/**
 * Check listed URLs against local dev server (default http://localhost:3000).
 * Usage: node scripts/check-pages-local.mjs
 *        $env:LOCAL_ORIGIN="http://127.0.0.1:3000"; node scripts/check-pages-local.mjs
 */

import { writeFileSync } from "node:fs";
import path from "node:path";

const ORIGIN = process.env.LOCAL_ORIGIN || "http://localhost:3000";

const PATHS = [
  "/about/",
  "/about/leadership/",
  "/careers/",
  "/conditions/",
  "/conditions/acquired-brain-injury-support/",
  "/conditions/alzheimers-care/",
  "/conditions/caregiver-burnout-support/",
  "/conditions/dementia-care-at-home/",
  "/conditions/frailty-fall-prevention/",
  "/conditions/palliative-serious-illness/",
  "/conditions/parkinsons-support/",
  "/conditions/post-hospital-recovery/",
  "/conditions/stroke-recovery/",
  "/contact/",
  "/faqs/",
  "/healthcare-professionals/",
  "/how-care-starts/",
  "/how-care-starts/care-assessment/",
  "/how-care-starts/care-begins/",
  "/how-care-starts/first-conversation/",
  "/how-care-starts/matching-caregivers/",
  "/how-care-starts/ongoing-support/",
  "/how-care-starts/pricing-and-funding/",
  "/how-care-starts/pricing-funding/",
  "/how-care-starts/referral-process/",
  "/how-care-starts/your-care-plan/",
  "/locations/",
  "/locations/durham-region/",
  "/locations/halton-region/",
  "/locations/peel-region/",
  "/locations/peel-region/mississauga-home-care/",
  "/locations/toronto/",
  "/locations/toronto/etobicoke-home-care/",
  "/locations/toronto/north-york-home-care/",
  "/locations/toronto/scarborough-home-care/",
  "/locations/york-region/",
  "/locations/york-region/markham-home-care/",
  "/locations/york-region/richmond-hill-home-care/",
  "/our-services/",
  "/our-services/acquired-brain-injury-home-care/",
  "/our-services/case-management/",
  "/our-services/companion-care/",
  "/our-services/dementia-alzheimers-home-care/",
  "/our-services/downsizing-transition-support/",
  "/our-services/hospital-discharge-support/",
  "/our-services/light-housekeeping/",
  "/our-services/overnight-24-hour-care/",
  "/our-services/palliative-home-care/",
  "/our-services/personal-support-daily-living/",
  "/our-services/rehabilitation-support/",
  "/our-services/respite-care/",
  "/pre-hire/",
  "/privacy-policy/",
  "/referral-form/",
  "/resources/",
  "/resources/brain-injury-rehabilitation/",
  "/resources/dementia-memory-care/",
  "/resources/dementia-memory-care/early-signs-of-dementia-in-a-parent/",
  "/resources/dementia-memory-care/introducing-home-care-dementia/",
  "/resources/dementia-memory-care/normal-aging-vs-dementia/",
  "/resources/family-caregiver-support/",
  "/resources/navigating-home-care/",
  "/contact",
  "/how-care-starts/caregiver-matching/",
  "/how-care-starts/pricing-funding/",
  "/locations/peel-region/mississauga/",
  "/locations/toronto/etobicoke/",
  "/locations/toronto/north-york/",
  "/locations/toronto/scarborough/",
  "/locations/york-region/markham/",
  "/locations/york-region/richmond-hill/",
  "/our-services/acquired-brain-injury-home-care",
  "/our-services/case-management",
  "/our-services/companion-care",
  "/our-services/dementia-alzheimers-home-care",
  "/our-services/downsizing-transition-support",
  "/our-services/hospital-discharge-support",
  "/our-services/light-housekeeping",
  "/our-services/overnight-24-hour-care",
  "/our-services/palliative-home-care",
  "/our-services/personal-support-daily-living",
  "/our-services/rehabilitation-support",
  "/our-services/respite-care",
  "/referral-form",
  "/resources/family-caregiver-support/caregiver-burnout-warning-signs/",
  "/resources/family-caregiving-guides/",
  "/resources/family-caregiving-guides/caring-for-your-loved-one/",
  "/resources/hospital-discharge-guides/transitioning-home-from-hospital/",
  "/resources/navigating-home-care/when-a-parent-resists-home-care/",
];

async function followOnce(url) {
  const res = await fetch(url, { redirect: "manual" });
  const loc = res.headers.get("location");
  return { status: res.status, location: loc };
}

async function checkPath(p) {
  const url = `${ORIGIN}${p.startsWith("/") ? p : `/${p}`}`;
  const chain = [];
  let current = url;
  let hops = 0;
  const maxHops = 5;

  while (hops < maxHops) {
    const { status, location } = await followOnce(current);
    chain.push({ url: current, status });
    if (status >= 300 && status < 400 && location) {
      current = new URL(location, current).href;
      hops++;
      continue;
    }
    break;
  }

  const finalStatus = chain[chain.length - 1]?.status ?? 0;
  const ok = finalStatus >= 200 && finalStatus < 300;
  return { path: p, chain, finalStatus, ok };
}

const results = [];
for (const p of PATHS) {
  try {
    results.push(await checkPath(p));
  } catch (e) {
    results.push({
      path: p,
      chain: [{ url: `${ORIGIN}${p}`, status: 0 }],
      finalStatus: 0,
      ok: false,
      error: String(e.message || e),
    });
  }
}

const failed = results.filter((r) => !r.ok);
const lines = [];
lines.push("# Local page check");
lines.push("");
lines.push(`Origin: ${ORIGIN}`);
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push("");
lines.push(`- Total URLs: ${results.length}`);
lines.push(`- OK (200 after redirects): ${results.filter((r) => r.ok).length}`);
lines.push(`- Failed or error: ${failed.length}`);
lines.push("");

lines.push("## Failed or non-200 final");
lines.push("");
if (!failed.length) lines.push("- None");
else {
  for (const r of failed) {
    const chainStr = r.chain.map((c) => `${c.status}`).join(" → ");
    lines.push(`- \`${r.path}\` → ${chainStr}${r.error ? ` (${r.error})` : ""}`);
  }
}
lines.push("");

lines.push("## All results");
lines.push("");
lines.push("| Path | Chain | Final |");
lines.push("|---|---|---:|");
for (const r of results) {
  const chainStr = r.chain.map((c) => `${c.status}`).join(" → ");
  lines.push(`| \`${r.path}\` | ${chainStr} | ${r.finalStatus} |`);
}
lines.push("");

const outFile = path.join(process.cwd(), "local-page-check-report.md");
writeFileSync(outFile, lines.join("\n"), "utf8");
console.log(`Report: ${outFile}`);
console.log(`OK: ${results.filter((r) => r.ok).length}/${results.length}, Failed: ${failed.length}`);
