# Pre-commit hook

The prevention layer from Part 2 of `ARCADIA-GOVERNANCE-MASTER-PLAN.md`. Stops
the backlogs (em dashes, banned phrases, unreserved keywords) from
re-accumulating, instead of cleaning them up after the fact.

Identical implementation in all four repos: AHA, HC, Rehab, ECC.

## Install

Once per clone, per repo:

```bash
npm run hooks:install
```

That sets `core.hooksPath` to `.githooks/`, which is versioned. Updating the
hook is then a normal commit, not a manual copy into everyone's `.git/hooks`.

Run it by hand any time:

```bash
npm run precommit
```

## What it checks

| # | Check | Severity | Scope |
|---|---|---|---|
| 1 | Em dash (U+2014) | **blocking** | site copy only |
| 2 | Banned phrase "loved one" | **blocking** | site copy only |
| 3 | "seniors" / "elderly" as nouns | advisory | site copy, URLs and slugs excluded |
| 4 | Cross-site keyword collision | **blocking** | staged content routes |
| 5 | Content route not reserved in the ledger | advisory | staged content routes |
| 6 | Keyword cache older than 7 days | advisory | repo |

"Site copy" means `.tsx` / `.mdx` under `app/`, `src/app/`, or `components/`.
Governance docs under `docs/` are exempt from the em dash rule: the rule is
about published copy, not internal prose. This file and the canonical both use
em dashes freely.

It reads the **staged blob**, not the working tree, so partially staged files
are checked as they will actually be committed.

## Why "seniors" and "elderly" are advisory, not blocking

The master plan lists them as hard bans. In practice they are load-bearing:

- Rehab's live slugs are built on them (`balance-exercises-seniors`,
  `why-seniors-fall-risk-factors`, `chair-exercises-seniors`)
- They appear in reserved keywords in the Sheet
  (`light housekeeping for seniors toronto`)

Blocking them would fail almost every Rehab commit, and the hook would be
bypassed within a day. An advisory that people read beats a block that people
route around. Matches in URLs, slugs, and import paths are skipped entirely,
since those are keyword decisions rather than reader-facing prose.

If Rehab's slugs are ever migrated off those terms, promote this to blocking.

## Check 4: cross-site collision

The genuine cannibalization guard. For each staged content route, it looks up
the route in `docs/.cache/keywords.csv` and blocks if a row owned by a
**different** site claims it.

Example, running in the AHA repo:

```
✗ app/resources/dementia-memory-care/normal-aging-vs-dementia/page.tsx
  collides with HC: "Normal aging vs. dementia"
  route /resources/dementia-memory-care/normal-aging-vs-dementia/ is reserved to HC
```

This is the failure the redirect in the canonical resolved by hand. The hook
catches the next one before it ships.

## Known limitations, stated plainly

**1. `--no-verify` bypasses it.** Nothing in a local hook can prevent that.
Treat this as fast feedback, not the enforcement boundary. The real gate is CI
running `npm run precommit` on the pushed branch.

**2. The ledger is incomplete, so check 4 has blind spots.** As of 2026-07-20
the Sheet holds ~45 HC rows, 3 Rehab rows, and 0 ECC rows, while Rehab's local
`10-KEYWORD-OWNERSHIP.md` lists roughly 30 more that were never added. A clean
pass on a Rehab or ECC commit does **not** prove a term is unclaimed. The hook
prints a warning in those repos to say so. Closing this is worth more than any
further hook work.

**3. Collisions are matched by route, not by meaning.** Two pages on different
routes targeting the same query still pass. Semantic overlap is what the
canonical and human review are for.

## Repo layout gotcha (Rehab)

Git reports staged paths relative to the **repository** root, which is not
always the package root:

| Repo | Git root | Package prefix |
|---|---|---|
| AHA | `AHA-Website/` | none |
| HC | `AHC-Website/` | none |
| ECC | `ECC-Website/homecare/` | none |
| **Rehab** | `AHC-Rehab Website/` | **`arcadia-rehab/`** |

Rehab's app lives one level below its git root, so staged paths arrive as
`arcadia-rehab/src/app/...`. The script strips this prefix via
`git rev-parse --show-prefix` before matching.

This is worth knowing because the failure is **silent**: without the strip,
nothing matches the copy patterns, every check passes, and the hook looks
healthy while validating nothing. If you add a path-based check, test it in
Rehab specifically, not just HC.

## Adding a check

Checks live in `scripts/precommit-check.mjs`, in order, each writing to the
`blocking` or `advisory` counters. Keep the same shape and add to the table
above. When changing the script, change it in one repo and copy to the other
three, the same way the canonical is synced.
