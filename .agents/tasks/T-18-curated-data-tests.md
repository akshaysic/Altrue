# T-18 · Add curated records and source checks
Status: Blocked on T-17 and the designated packet files being present
Model: Strategy — GPT-6.1 Sol / normal
Weight: S1 A1 R1 C1 T0 = 4
Goal: Populate the agreed local cause set and test its provenance invariants.
Inputs: .agents/PLAN.md; .agents/research/charity-shortlist-2026-11-07.json; .agents/research/charity-shortlist-2026-11-07.md; lib/seed/sources.ts; lib/seed/causes.ts; lib/seed/impactMetrics.ts; vitest.config.ts; package.json.
Deliverable: Update lib/seed/causes.ts and lib/seed/impactMetrics.ts; create lib/seed/causes.test.ts; update vitest.config.ts and package.json only if needed (≤5 files).
Out of scope: Inventing source facts, tax-deductibility claims, impact quantities, a live GlobalGiving API feed, external requests, or a new test framework.
Acceptance:
- [ ] MVP cause categories are exactly Global health, Poverty relief, and Animal welfare; Catastrophic risks and Community-chosen are excluded.
- [ ] Feature GiveDirectly, Malaria Consortium, Against Malaria Foundation, Helen Keller Intl, and New Incentives equally, with no default top pick; expose GiveWell Top Charities Fund as “let experts decide”.
- [ ] The Humane League is the only MVP animal-welfare charity; retain other animal entries in the data file with an explicit “post-MVP” flag.
- [ ] Keep GlobalGiving entries static and curated; every cause/charity/impact record has `source_name`, `source_url`, and `as_of`; figures are labelled “estimate”. Unsupported figures are omitted or labelled “illustrative”.
- [ ] Tests enforce the provenance and MVP/post-MVP filters; record the test command.
Decisions needed: None; wait for T-17 and both designated packet files, currently absent from this workspace. Data work also waits for the human's packet skim.
Handoff note: Record source coverage, excluded records, and test result.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
