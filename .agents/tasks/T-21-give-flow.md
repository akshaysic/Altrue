# T-21 · Build the simulated give flow
Status: Ready after T-16–T-20
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A1 R1 C1 T1 = 5
Goal: Let a donor review a transparent split and complete a clearly simulated confirmation.
Inputs: .agents/CODEMAP.md; .agents/research/flows-and-screens.md; app/plan/review/page.tsx; app/checkout/page.tsx; app/checkout/page.stories.tsx; lib/seed/demoPlans.ts.
Deliverable: Update app/plan/review/page.tsx, app/checkout/page.tsx, and app/checkout/page.stories.tsx; create components/giving/DonationConfirmation.tsx and components/giving/DonationConfirmation.stories.tsx (5 files).
Out of scope: Real payment, provider SDK, real recurring plan, AI distribution, or implying a charge succeeded.
Acceptance:
- [ ] Amount, split, fee, net, cadence, and mock label are visible before confirmation.
- [ ] Success/failure are simulated, preserve donor agency, and create only local demo history.
Decisions needed: Confirm fee display against existing constants; do not invent fees.
Handoff note: Record amount/split logic and simulated state transitions.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
