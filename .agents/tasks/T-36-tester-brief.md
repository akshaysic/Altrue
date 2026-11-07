# T-36 · Create the one-page tester brief
Status: Ready after T-33–T-35
Model: Strategy — GPT-6 Luna draft/verify; Claude Haiku 5.5 humanises
Weight: S1 A1 R0 C1 T2 = 5
Goal: Give a friend three tasks and five questions for a five-minute demo session.
Inputs: .agents/VOICE.md; .agents/BRIEF.md; .agents/research/flows-and-screens.md; .agents/copy/mvp-core/final.md; .agents/tasks/T-35-preview-deploy-feedback.md.
Deliverable: Create .agents/copy/tester-brief/{draft.md,final.md,notes.md,verify.md}; final.md is the one-page brief (4 files).
Out of scope: App copy changes, collecting responses, claims not in the approved MVP, or contacting testers.
Acceptance:
- [ ] Include exactly three tasks, five feedback questions, the approved preview access note, and a short timing cue.
- [ ] Complete Codex draft → Claude humanise → fresh Codex verify; only verified final.md is handed to the human.
Decisions needed: Complete T-35; obtain any required tester access instructions from the human.
Handoff note: Record the final brief path and verification result.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
