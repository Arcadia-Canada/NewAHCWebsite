# Arcadia Governance Master Plan
## The HC Template, and How to Apply It to Rehab and ECC

**Created:** 2026-06-27
**Status:** This is the single execution reference. It replaces the scattered planning files from prior sessions. Work from this document.
**Owner:** Rohit (solo operator, Cursor as execution layer)
---
You are an expert programmer with experience working with tools like hubspot. You also have extensive experience in social media campaign design and implementation. You have experience working with those who are ageing, behavior therapy, and psychology.

New chat: Phase C — Apply governance template to ECC (eldercareconcierge.ca)

Context: We have completed Phase A (HC) and Phase B (Rehab). The master plan is ARCADIA-GOVERNANCE-MASTER-PLAN.md — I will upload it. ECC is advisor-only (B2B), materially different voice from HC and Rehab. ECC's tech stack and repo structure need to be confirmed before any files are built.

Phase C steps per master plan:
C1. Copy 6 shared rules docs from HC
C2. Rewrite 3 site-identity docs for ECC (advisor clusters, advisor architecture, advisor voice)
C3. Copy AI-CONTEXT.md, swap in ECC references + advisor-only positioning note
C4. ECC gets one-paragraph cross-site note (not the full canonical) — out of keyword competition
C5. Reduce ECC inventory docs to Sheet pointers, tag ECC keywords in Sheet
C6. Copy script set into ECC, wire validate
C7. ECC pre-launch positioning cleanup (can run parallel)
C8. Run repo-inventory on ECC, confirm template match

First task: upload the master plan, then zip and upload ECC's docs/ folder so we can assess current state before building anything.
---

## 0. How to read this document

Four parts, in order:
1. **The target template** — the clean doc structure every site should have
2. **The script set** — the enforcement layer, with build status
3. **The wiring** — how Cursor is pointed at the right files
4. **The apply sequence** — numbered steps to bring HC to template, then Rehab, then ECC

This is a buildable spec, not strategy. Every decision is already made. If something here feels unsettled, that is a flag to resolve before executing that step, not to re-open the whole plan.

---

## PART 1 — THE TARGET TEMPLATE

### The core principle

Every file is one of three things:
- **A rule Cursor reads** to produce compliant content → stays as a local file in the repo
- **A rule a script enforces** → becomes code, removed from prose
- **Inventory/calendar data** → lives in the Google Sheet, not the repo

Nothing is duplicated. A fact lives in exactly one place.

### The target file set (per site)

After restructuring, each site's `docs/` holds this set. Function-named, not numbered, so removing one never forces a renumber.

**Entry point (repo root, not in docs/):**
- `AI-CONTEXT.md` — the first thing Cursor reads. Names the order of authority, the mandatory commands, and points to every rules doc by purpose. Under 150 lines.

**Shared rules docs (identical across all three sites):**
- `rules/linking.md` — internal linking rules (from 03)
- `rules/schema.md` — JSON-LD requirements per page type (from 04)
- `rules/urls.md` — slug rules, URL permanence (from 05)
- `rules/publishing.md` — the publishing workflow + validator gate (from 06)
- `rules/integrity.md` — anti-drift, anti-orphan, anti-cannibalization (from 09)
- `rules/audit.md` — the repeatable audit process (from 11)

**Site-identity docs (same structure, site-specific content):**
- `site/architecture.md` — sections and URL patterns (from 01)
- `site/clusters.md` — clusters and their scope (from 02)
- `site/voice.md` — editorial voice (from 07). HC and Rehab differ; ECC is advisor-facing, materially different.

**Operational docs (site-specific):**
- `cursor-prompts.md` — ready-to-paste Cursor prompts for this site
- `README.md` — index of this site's docs + pointer to the Sheet

**Cross-site (HC and Rehab only):**
- `CROSS-SITE-BOUNDARIES-CANONICAL.md` — the keyword boundary rules. ECC is advisor-only and out of cross-site keyword competition, so ECC gets a one-paragraph note instead.

That is ~11 files versus the current 21-24.

### What moves to the Google Sheet (removed from every repo)

| Current docs | Sheet destination |
|---|---|
| AUTHORITY-MAP.md | Content Calendar tab |
| 10-KEYWORD-OWNERSHIP.md (body) | Reserved Keywords tab |
| CLUSTERLINKMAP.md (link targets) | Link Targets tab |
| 12-EXECUTION-ROADMAP.md | Sequence column in Content Calendar |
| PUBLISHING-CALENDAR.md (Rehab/ECC) | Content Calendar tab |

Each of these files is reduced to a 3-line pointer to the Sheet, or deleted.

### What gets archived (per site, to docs/archive/)

Site-specific one-offs and completed/historical files:
- HC: 05A-PUBLISHING-CHECKLIST-Dementia-Pillar, SLUG-PATCH-NOTES, SITE-AUDIT-TRACKER, EXTERNAL-STRATEGY-REFERENCES, SOCIAL-MEDIA-BRIEF-the-conversation (this one moves to /social/briefs/, not archive)
- Rehab: the three overlapping boundary files (10-KEYWORD-OWNERSHIP-ADDITION, 11-SISTER-SITE-KEYWORD-BOUNDARIES, arcadia-sister-site-keyword-boundaries) collapse into one canonical pointer; v2-interlinking-strategy and v2-seo-architecture archived if superseded; PERSONA-AND-VOICE merged into site/voice.md
- ECC: GOVERNANCE-INTEGRATION-SUMMARY, TERMINOLOGY-GLOSSARY, UNIFIED-SOCIAL-KIT-SYSTEM, concepts/ evaluated and archived or merged

---

## PART 2 — THE SCRIPT SET (THE ENFORCEMENT LAYER)

The rules that can be code should be code. Prose gets ignored; scripts fail loudly.

| Script | Job | Status |
|---|---|---|
| `validate-article.mjs` | Pre-publish gate: em dash (block), broken links (block), spelling + grammar (advisory) | **BUILT, on HC main** |
| `repo-inventory.mjs` | Read-only full-repo map: content, links, docs, control-plane, duplication, cleanliness | **BUILT, on HC main** |
| `fix-emdashes.mjs` | Two-pass site-wide em dash cleanup with mandatory human review | **BUILT but UNVERIFIED, untracked on HC. Apply-path never proven. Deferred.** |
| `sync-from-sheet.mjs` | Pull Sheet tabs (published as CSV) into local docs/.cache so Cursor can read live keyword/calendar data | **NOT BUILT. Highest-value next script.** |
| pre-commit hook | Auto-run em dash + banned-phrase + link checks on staged files every commit. Unskippable. | **NOT BUILT. The prevention layer.** |

### Script build priorities (when you return to scripts)
1. `sync-from-sheet.mjs` — unblocks the central-Sheet strategy for Cursor
2. pre-commit hook — prevents the backlogs (em dash, "loved one") from ever re-accumulating
3. `fix-emdashes.mjs` verification + run — clears the existing 1,156-instance backlog deliberately

Do not build preflight/audit/parity scripts until the three above are proven and you have felt a real need. Enforcement you do not run is just complexity.

---

## PART 3 — THE WIRING

The inventory scan found that AI-CONTEXT.md does not reference several load-bearing docs (08-IMPLEMENTATION-BLUEPRINT, 09-CLUSTER-INTEGRITY-RULES, the new canonical). Cursor cannot follow rules it is never pointed at.

**The fix:** AI-CONTEXT.md must, at minimum:
1. State the order of authority: live site > scripts (exit codes) > rules docs > Sheet
2. List mandatory commands before any content task (once sync-from-sheet exists: `npm run sync`; always: `npm run validate <file>` before commit)
3. Point to every rules doc by purpose, so Cursor reads the right one for the task
4. State the hard bans inline (no em dash —, no "loved one", no "seniors"/"elderly", Canadian English) so the rule is in front of Cursor every session, not buried in a doc it may not open
5. Note that `.cursor/` is empty and all wiring is AI-CONTEXT.md + .cursorrules

This wiring file is itself part of the template. Each site gets its own, pointing to its own clusters and voice, but the structure is identical.

---

## PART 4 — THE APPLY SEQUENCE

### Phase A — Finish HC to template (do first, HC is the model)

A1. Build/clean `AI-CONTEXT.md` with full wiring (Part 3). Reference every rules doc.
A2. Consolidate the 6 shared rules docs into clean, final versions (reconcile best content across the three sites; HC is usually the base). These become the canonical copies.
A3. Restructure the 3 site-identity docs (architecture, clusters, voice) to the standard structure.
A4. Reduce the inventory docs (AUTHORITY-MAP, 10-KEYWORD-OWNERSHIP, CLUSTERLINKMAP, 12-EXECUTION-ROADMAP) to Sheet pointers.
A5. Expand the Google Sheet: add Link Targets tab; confirm Content Calendar has status/cluster/sequence columns.
A6. Archive HC's one-offs; move the social brief to /social/briefs/.
A7. Run `repo-inventory.mjs` again. Confirm: 0 orphan rules docs, inventory data no longer duplicated, structure matches template.
A8. (Deferred) Build sync-from-sheet, pre-commit hook, run em-dash cleanup.

### Phase B — Apply template to Rehab

B1. Copy the 6 shared rules docs from HC verbatim into Rehab. They are identical by design.
B2. Rewrite the 3 site-identity docs for Rehab (its architecture, its clusters, its DO/STAY-STRONG voice).
B3. Copy AI-CONTEXT.md, swap in Rehab's clusters/voice references.
B4. Collapse Rehab's three overlapping keyword-boundary files into one pointer to the canonical + Sheet.
B5. Reduce Rehab's inventory docs to Sheet pointers. Add Rehab's rows to the Sheet's Reserved Keywords and Content Calendar tabs.
B6. Copy the script set (validate, repo-inventory) into Rehab. Wire `npm run validate`.
B7. Archive Rehab's cruft (v2 strategy docs, PERSONA-AND-VOICE after merge, LEADS-WEBHOOK and UI-UX-GOVERNANCE kept as operational, not archived).
B8. Run repo-inventory on Rehab. Confirm template match.

### Phase C — Apply template to ECC (advisor-only, some divergence)

C1. Copy the 6 shared rules docs from HC. Note: ECC's schema and linking rules are the same; its content rules differ.
C2. Rewrite the 3 site-identity docs for ECC — its advisor clusters, advisor architecture, and materially different advisor-facing voice.
C3. Copy AI-CONTEXT.md, swap in ECC's references. Add the advisor-only positioning note.
C4. ECC gets the one-paragraph cross-site note (not the full canonical) since it is out of keyword competition.
C5. Reduce ECC inventory docs to Sheet pointers. ECC's keywords are advisor-context; they go in the Sheet tagged ECC.
C6. Copy the script set into ECC. Wire validate.
C7. Resolve ECC's pre-launch positioning cleanup (separate doc: ECC-OBSERVATIONS-AND-QUESTIONS.md) — this is launch-readiness work, can run parallel.
C8. Run repo-inventory on ECC. Confirm template match.

### Phase D — Lock the standard

D1. With all three on the template, build `check-docs-parity.mjs` if desired: diffs the 6 shared rules docs across the three repos, fails if they diverge. This is what keeps the three identical over time.
D2. The Sheet is the shared calendar/keyword layer across all three. The rules docs are identical across all three. The site docs differ by design. The standard is now enforced, not hoped for.

---

## DECISIONS ALREADY LOCKED (do not re-litigate)

- URLs are permanent assets. Fix the body, not the slug. (05-URL-CONVENTIONS)
- ECC is advisor-only at this stage. Two of three original keyword conflicts dissolved.
- The Google Sheet is the central source of truth for keywords and calendar. Not Drive docs, the Sheet specifically (structured, filterable, and Cursor can read it via published CSV + sync script).
- Cursor cannot read Drive/Sheet directly. The sync script bridges this. Rules docs must stay as local files.
- Three governance docs, three jobs: canonical = rules, this master plan = the build spec, the Sheet = inventory. No fourth strategy doc.
- Scripts enforce what prose cannot. Validator exit code is the gate, not Cursor's verbal confirmation.
- Every Cursor change gets a diff review before commit. No blind merges.
- Function-named docs, not numbered. No renumber pain.
- Build enforcement for failures actually hit (em dash, keyword conflict, drift), not imagined ones.

---

## OPEN ITEMS TO RESOLVE BEFORE THE PHASE THEY BLOCK

- **Before A2:** For each of the 6 shared rules docs, confirm HC's version is the base, or identify where Rehab/ECC has materially better content to merge in. (One-time reconciliation pass.)
- **Before A5:** Confirm the Sheet's published-CSV setting is on (File > Share > Publish to web) so sync-from-sheet can reach it later.
- **Before B/C:** Re-verify each site's live state before templating — do not trust this document's snapshot of their docs. Live state has drifted from local files before.
- **Before D1:** Decide whether cross-repo parity enforcement is worth the maintenance, or whether periodic manual diff is enough for a solo operator.

---

## SESSION RE-ENTRY

When you return to this work, read this document first. Then pick the lowest-numbered incomplete step in Part 4 and execute it. Do not re-derive the strategy. If a step's open item (above) is unresolved, resolve that, then proceed.

The finish line: all three sites on identical rules docs, divergent site docs, one shared Sheet, enforced by scripts. That is "HC as the model" fully realized.
