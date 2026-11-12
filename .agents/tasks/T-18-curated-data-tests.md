# T-18 · Add curated records and source checks
Status: Done
Model: Strategy — GPT-6.1 Sol / normal
Weight: S1 A1 R1 C1 T0 = 4
Goal: Populate the agreed local cause set and test its provenance invariants.
Inputs: .agents/PLAN.md; .agents/research/charity-shortlist-2026-11-07.json; .agents/research/charity-shortlist-2026-11-07.md; lib/seed/sources.ts; lib/seed/causes.ts; lib/seed/impactMetrics.ts; vitest.config.ts; package.json.
Deliverable: Update lib/seed/causes.ts and lib/seed/impactMetrics.ts; create lib/seed/causes.test.ts; update vitest.config.ts and package.json only if needed (≤5 files).
Out of scope: Inventing source facts, tax-deductibility claims, impact quantities, a live GlobalGiving API feed, external requests, or a new test framework.
Acceptance:
- [x] MVP cause categories are exactly Global health, Poverty relief, and Animal welfare; Catastrophic risks and Community-chosen are excluded.
- [x] Feature GiveDirectly, Malaria Consortium, Against Malaria Foundation, Helen Keller Intl, and New Incentives equally, with no default top pick; expose GiveWell Top Charities Fund as “let experts decide”.
- [x] The Humane League is the only MVP animal-welfare charity; retain other animal entries in the data file with an explicit “post-MVP” flag.
- [x] Keep GlobalGiving entries static and curated; every cause/charity/impact record has `source_name`, `source_url`, and `as_of`; figures are labelled “estimate”. Unsupported figures are omitted or labelled “illustrative”.
- [x] Tests enforce the provenance and MVP/post-MVP filters; record the test command.
Decisions needed: None; wait for T-17 and both designated packet files, currently absent from this workspace. Data work also waits for the human's packet skim.
Handoff note:
- Source coverage: the 7 MVP records and their 14 packet figures, all labelled "estimate" (the packet gives figures as evaluator estimates; none was flagged illustrative among the 7). `sourcedImpactMetrics` in `lib/seed/impactMetrics.ts` flattens them with provenance.
- Excluded from the seed (stay in the packet JSON): GiveWell All Grants Fund, EA Funds Animal Welfare Fund, Effective Animal Advocacy Fund, Risks and Resilience Fund, Shrimp Welfare Project, Sinergia Animal, Wild Animal Initiative, GlobalGiving (static MVP entry not added; the packet lists no individual projects). Note: the card asks for the other animal entries to be kept "with a post-MVP flag"; the human narrowed the seed to 7, so the flag lives in the schema and `selectMvp`, and the test checks the packet's other animal entries never reach MVP results.
- Test command: `npm test` (new `unit` project in `vitest.config.ts`, 12 tests in `lib/seed/causes.test.ts`). Result: pass. Full `vitest run` 67/67, lint, typecheck and build pass.
- `package.json` and `vitest.config.ts` changed (card allowed it): `test` script and the Node `unit` project.

Receipt:
- Ran on: Claude Sonnet 5.5 / normal, with the human's explicit routing override (Strategy-lane card), same session as T-17.
- Weight in hindsight: S1 A1 R1 C1 T0 = 4 (Standard).
- Human turns after routing: 1.
- Outcome: clean; implementation and self-check complete. No cross-vendor review (R1), by the human's choice.
- Review caught: not run.
- Right lane?: Strategy card run by Craft under override.
- Found, not done: the five post-MVP demo causes still appear on existing pages. The packet's open questions (tax deductibility, GlobalGiving API terms, ACE list year) are unresolved and nothing shows them. Humane League has no figures, so it shows none.
