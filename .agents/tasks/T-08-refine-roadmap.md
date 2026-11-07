# T-08 · Reconcile the post-inventory roadmap
Status: Done
Model: Strategy — GPT-6.1 Sol / normal
Weight: S1 A1 R0 C1 T0 = 3
Goal: Refine the active roadmap against the screen inventory and approved T-07 decisions.
Inputs: .agents/PLAN.md; .agents/STATUS.md; .agents/research/flows-and-screens.md; .agents/tasks/T-07-housekeeping-and-provenance.md; .agents/tasks/T-06-flow-inventory.md.
Deliverable: Update .agents/PLAN.md sections 5–6 and .agents/STATUS.md decisions/status; update dependent cards only where the human's decisions change their gates.
Out of scope: App code, new product claims, expanding beyond the five-minute donor MVP.
Acceptance:
- [x] Keep every retained roadmap step at one session or split it into linked cards of at most five touched files.
- [x] Use Global health, Poverty relief, and Animal welfare only; exclude Catastrophic risks and Community-chosen.
- [x] Keep the five named featured organizations equal with no default pick; GiveWell Top Charities Fund is the separate “let experts decide” option.
- [x] Keep The Humane League as the only MVP animal charity; flag other animal entries “post-MVP”. GlobalGiving entries are static curated records; live API is post-MVP.
- [x] Require source name, URL, and as-of on each record; label sourced figures “estimate”; do not add tax-deductibility claims.
- [x] Keep /demo as a labelled sidecar; friends test the simulated donor flow.
- [x] Apply the designated shortlist and provenance rules; retain the simulated-payment boundary.
- [x] Schedule the authorized Vercel preview after mobile QA, unlisted and noindex.
Decisions needed: None; the human's decisions are recorded in STATUS.md.
Handoff note: Sections 5–6, STATUS, T-04/T-05, T-17–T-20, and T-33 reflect the approved cause set, static data policy, donor test flow, sidecar boundary, T-04/T-03 order, core-flow QA, and post-QA Vercel preview. First build card is T-09 (Ready; Claude Sonnet 5.5 / normal). The designated packet is absent, so T-17/T-18 remain blocked. Left uncommitted per instruction.
Receipt: Codex; weight W3; Strategy lane; outcome done; no app changes or checks. No commit per the user's instruction. Found, not done: the designated source files are absent from this workspace; T-04 visual/voice handoff and review remain pending; human selection of three voice candidates remains for the copy pass.
