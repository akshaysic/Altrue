# T-28 · Run the two-vendor MVP copy pass
Status: Blocked on T-03 and reviewed T-04
Model: Strategy — GPT-6 Luna draft/verify; Claude Haiku 5.5 humanises
Weight: S1 A1 R0 C1 T2 = 5
Goal: Produce one reviewed copy packet for the MVP screens against the approved voice.
Inputs: .agents/VOICE.md; .agents/BRIEF.md; .agents/research/flows-and-screens.md; .agents/copy/demo-mode-banner/final.md; .agents/copy/demo-mode-banner/verify.md.
Deliverable: Create .agents/copy/mvp-core/{draft.md,final.md,notes.md,verify.md} (4 files); final.md is the only ship-ready text.
Out of scope: Source claims, UI code integration, marketing claims, translations, or changing product scope.
Acceptance:
- [ ] Draft maps every factual claim and promise to approved product/source data.
- [ ] Claude humanises; a fresh Codex verifies meaning/claims; every change is recorded and PASS is required.
- [ ] If VOICE remains empty, obtain human sample sentences before drafting.
Decisions needed: Complete and review T-04, then have the human select three of the six candidate sentences in STATUS.md and complete T-03 PASS.
Handoff note: Record surfaces covered, claim sources, and verification result.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
