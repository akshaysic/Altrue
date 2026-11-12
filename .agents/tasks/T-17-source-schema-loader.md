# T-17 · Define cause-source schema and loader
Status: Done
Model: Strategy — GPT-6.1 Sol / normal
Weight: S1 A1 R1 C1 T0 = 4
Goal: Add typed provenance for cause and impact claims and a local-only loader.
Inputs: .agents/PLAN.md; .agents/research/flows-and-screens.md; .agents/research/charity-shortlist-2026-11-07.json; .agents/research/charity-shortlist-2026-11-07.md; lib/types/index.ts; lib/seed/causes.ts; lib/seed/index.ts.
Deliverable: Update lib/types/index.ts, lib/seed/causes.ts, and lib/seed/index.ts; create lib/seed/sources.ts (4 files).
Out of scope: External fetching, named charity verification, unsupported impact numbers, or live data refresh.
Acceptance:
- [x] Every cause/charity/impact record carries `source_name`, `source_url`, and `as_of`; every displayed figure is labelled “estimate”. Withhold unsupported figures or label explicitly illustrative content “illustrative”.
- [x] Model the MVP categories and an explicit MVP/post-MVP flag so non-featured animal records remain stored but excluded from MVP results.
- [x] Use only the named packet; do not add tax-deductibility claims or infer missing facts.
Decisions needed: None; `.agents/research/charity-shortlist-2026-11-07.json` and `.md` are now in the repo. Wait until the human has confirmed they skimmed the packet before implementation.
Handoff note:
- Schema (`lib/types/index.ts`): `Provenance` (`source_name`, `source_url`, `as_of`), `SourcedFigure` (+ `figureLabel: "estimate" | "illustrative"`), `CuratedOrganization` (+ `role`, `mvpStatus`), `SourcedImpactMetric`; `Cause` gains `mvpStatus` and `mvpCategory`.
- Loader (`lib/seed/sources.ts`): `curatedOrganizations`, `selectMvp`, `getFeaturedOrganizations` (alphabetical, no default pick), `getExpertFund`, `getMvpAnimalCharity`. `lib/seed/causes.ts` adds `getMvpCauses`, `getMvpOrganizationsByCauseId`, `getCauseSources`. All local, no fetching.
- MVP/post-MVP filtering: the flag is modelled and `selectMvp` enforces it. The seed holds only the 7 MVP records (human instruction); the other packet animal entries, GiveWell All Grants Fund, Risks and Resilience Fund and GlobalGiving stay in the packet JSON only.
- Packet files used: `.agents/research/charity-shortlist-2026-11-07.json` (copied by script, then compared in tests) and its `.md` companion (not read by code).
- Checks: lint, typecheck, `npm test`, full vitest (20 files, 67 tests) and `npm run build` pass.

Receipt:
- Ran on: Claude Sonnet 5.5 / normal, with the human's explicit routing override (Strategy-lane card), 2026-11-12.
- Weight in hindsight: S1 A1 R1 C1 T0 = 4 (Standard).
- Human turns after routing: 1.
- Outcome: clean; implementation and self-check complete. No cross-vendor review (R1), by the human's choice.
- Review caught: not run.
- Right lane?: Strategy card run by Craft under override.
- Found, not done: the 8 demo causes, demo nonprofits and demo impact metrics are untouched; pages still render them. The demo metrics have no source URL, so they stay `isDemo` and the MVP flow must read `sourcedImpactMetrics` instead. T-19/T-20 must switch pages to `getMvpCauses`. "as_of" strings are the packet's free text, not ISO dates. Git chores ran on Sonnet, not a Light model.
