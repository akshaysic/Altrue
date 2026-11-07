# T-27 · Complete impact, history, and settings states
Status: Ready after T-24
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A1 R1 C1 T1 = 5
Goal: Make impact, history, and profile routes useful when local data is absent or incomplete.
Inputs: .agents/research/flows-and-screens.md; app/impact/page.tsx; app/impact/[reportId]/page.tsx; app/donations/page.tsx; app/settings/page.tsx.
Deliverable: Update app/impact/page.tsx, app/impact/[reportId]/page.tsx, app/donations/page.tsx, and app/settings/page.tsx (4 files).
Out of scope: New metrics, reminder sending, accounts, account deletion, or external services.
Acceptance:
- [ ] No report, no donations, unknown report, and missing metric evidence have clear states.
- [ ] Empty settings explain local demo behavior and preserve reset access.
Decisions needed: None beyond the approved source gate.
Handoff note: Record state coverage and remaining gaps.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
