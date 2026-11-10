# T-17 · Define cause-source schema and loader
Status: Blocked until the designated shortlist packet is present
Model: Strategy — GPT-6.1 Sol / normal
Weight: S1 A1 R1 C1 T0 = 4
Goal: Add typed provenance for cause and impact claims and a local-only loader.
Inputs: .agents/PLAN.md; .agents/research/flows-and-screens.md; .agents/research/charity-shortlist-2026-11-07.json; .agents/research/charity-shortlist-2026-11-07.md; lib/types/index.ts; lib/seed/causes.ts; lib/seed/index.ts.
Deliverable: Update lib/types/index.ts, lib/seed/causes.ts, and lib/seed/index.ts; create lib/seed/sources.ts (4 files).
Out of scope: External fetching, named charity verification, unsupported impact numbers, or live data refresh.
Acceptance:
- [ ] Every cause/charity/impact record carries `source_name`, `source_url`, and `as_of`; every displayed figure is labelled “estimate”. Withhold unsupported figures or label explicitly illustrative content “illustrative”.
- [ ] Model the MVP categories and an explicit MVP/post-MVP flag so non-featured animal records remain stored but excluded from MVP results.
- [ ] Use only the named packet; do not add tax-deductibility claims or infer missing facts.
Decisions needed: None; `.agents/research/charity-shortlist-2026-11-07.json` and `.md` are now in the repo. Wait until the human has confirmed they skimmed the packet before implementation.
Handoff note: Record schema, MVP/post-MVP filtering, and the exact packet files used.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
