# AHA Keyword Rows — paste into the Sheet

**Created:** 2026-07-20
**Target:** Reserved Keywords tab of [Arcadia Content Governance — Master](https://docs.google.com/spreadsheets/d/1EcU9frKxc9TxdCIKbc5u9peX9vS5udsb29Kf_1uyosk/edit?usp=sharing)
**Schema:** `Keyword / Topic, Owner Site, Status, Live URL, Date Reserved, Notes`

Status `BUILT — PRE-LAUNCH` means the page exists in the AHA repo and is
committed, but arcadiahealth.ca is not yet pointed at Vercel. Change to
`PUBLISHED` once the domain resolves.

Rationale for every row is in `ARCADIA-CROSS-SITE-BOUNDARIES-CANONICAL.md`
under "AHA lane definition".

---

## Rows to add

```csv
Arcadia Health / Arcadia Health Alliance (brand),AHA,BUILT — PRE-LAUNCH,https://www.arcadiahealth.ca/,2026-07-20,Parent brand entity. No division may target this.
About Arcadia Health / Arcadia leadership / is Arcadia legitimate,AHA,BUILT — PRE-LAUNCH,https://www.arcadiahealth.ca/about/,2026-07-20,Corporate trust queries. Founder story and bios pending founder review.
Arcadia divisions / which Arcadia service do I need,AHA,BUILT — PRE-LAUNCH,https://www.arcadiahealth.ca/,2026-07-20,Which-team triage. Only the parent can compare divisions neutrally.
Arcadia Health careers / Arcadia Health hiring,AHA,BUILT — PRE-LAUNCH,https://www.arcadiahealth.ca/careers/,2026-07-20,Conflict 4. Do not redirect HC /careers until AHA is live and indexed.
PSW jobs Toronto / caregiver jobs GTA,AHA,BUILT — PRE-LAUNCH,https://www.arcadiahealth.ca/careers/,2026-07-20,"Conflict 4, HOLD. HC /careers and /pre-hire currently live and hold what careers traffic exists."
Rehabilitation support therapist jobs Toronto,AHA,BUILT — PRE-LAUNCH,https://www.arcadiahealth.ca/careers/,2026-07-20,"Conflict 4, HOLD. Rehab has no careers page, so no incumbent to displace."
Refer a client to Arcadia / partner with Arcadia Health,AHA,BUILT — PRE-LAUNCH,https://www.arcadiahealth.ca/contact/,2026-07-20,"Org-level referral only. Clinical referral pathways stay on HC /healthcare-professionals and ECC."
Arcadia Home Care (division bridge),AHA,BUILT — PRE-LAUNCH,https://www.arcadiahealth.ca/home-care/,2026-07-20,BRIDGE PAGE. Must not target HC head terms. Reserved to prevent drift only.
Arcadia Rehab (division bridge),AHA,BUILT — PRE-LAUNCH,https://www.arcadiahealth.ca/rehabilitation/,2026-07-20,BRIDGE PAGE. Must not target Rehab head terms. Reserved to prevent drift only.
Eldercare Concierge (division bridge),AHA,BUILT — PRE-LAUNCH,https://www.arcadiahealth.ca/eldercare-concierge/,2026-07-20,BRIDGE PAGE. Must not target ECC head terms. Reserved to prevent drift only.
```

---

## Terms deliberately NOT reserved for AHA

Recording these so the decision is not silently revisited.

| Term | Why AHA does not take it | Owner |
|---|---|---|
| "When a parent needs more help than you can give" | HC published pillar. The closest existing thing to an umbrella term, already claimed and ranking. | HC |
| "Home care cost Ontario" and all cost queries | Conflict 2 already splits this between HC and ECC. Adding a third claimant makes it worse. | HC / ECC |
| "Types of senior care Ontario", "home care vs long term care" | Tempting umbrella terms, but the cost dimension is ECC's and the home-care dimension is HC's. A 6-page site will not win them, and trying creates a fourth claimant. | Unclaimed, leave it |
| "Senior care Toronto", "elder care Toronto" | Broad geo head terms. HC's location page set already targets this space with far more depth than AHA can support. | HC |
| "Fall prevention" (any variant) | Already contested between HC (condition page) and Rehab (movement). Do not add a third. | Rehab / HC |
| "Continuum of care" | Genuinely unclaimed, but near-zero Canadian consumer search volume. Not worth a page. | Nobody |

---

## Follow-ups this surfaced

1. **Sheet completeness.** The Reserved Keywords tab holds ~45 HC rows, 3 Rehab
   rows, 0 ECC rows. Rehab's local `10-KEYWORD-OWNERSHIP.md` lists roughly 30
   reserved keywords absent from the Sheet. Until those are added, a Rehab
   keyword check against the Sheet returns a false "unclaimed". This is the
   single biggest hole in the ledger and it is larger than anything AHA adds.

2. **ECC has no rows at all.** Its keyword set was never entered. Phase C5 of
   the master plan covers this and has not been done.

3. **Conflict 4 sequencing.** AHA's careers rows are reserved but must not be
   acted on until AHA is live and indexed. Redirecting HC `/careers` early would
   lose the only careers traffic Arcadia has.
