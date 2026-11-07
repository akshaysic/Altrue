# T-26 · Complete plan and checkout states
Status: Ready after T-24
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A1 R1 C1 T1 = 5
Goal: Make plan review and simulated checkout recoverable in every defined state.
Inputs: .agents/research/flows-and-screens.md; app/plan/review/page.tsx; app/checkout/page.tsx; app/checkout/page.stories.tsx; components/giving/DonationConfirmation.tsx; components/ui/Notice.tsx.
Deliverable: Update app/plan/review/page.tsx, app/checkout/page.tsx, app/checkout/page.stories.tsx, and components/giving/DonationConfirmation.tsx (4 files).
Out of scope: Real card entry, real payment outcomes, and plan-level pending state unless approved.
Acceptance:
- [ ] No valid plan, processing, simulated failure, back/cancel, and success states are distinct.
- [ ] Every state retains the demo label and an obvious next action; no payment is sent.
Decisions needed: Human approval required before adding plan status values not in current types.
Handoff note: Record state transitions and unresolved status-model decisions.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
