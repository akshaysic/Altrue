# T-19 · Build onboarding
Status: Ready after T-15–T-18
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A1 R1 C1 T1 = 5
Goal: Let a donor choose among the approved cause categories, priority, and a monthly amount in a short, usable flow.
Inputs: .agents/CODEMAP.md; .agents/research/flows-and-screens.md; app/onboarding/page.tsx; lib/seed/index.ts; lib/constants.ts.
Deliverable: Update app/onboarding/page.tsx; create components/onboarding/OnboardingFlow.tsx, components/onboarding/OnboardingFlow.stories.tsx, and app/onboarding/page.stories.tsx (4 files).
Out of scope: Account creation, real payment, unsourced recommendations, or plan allocation logic.
Acceptance:
- [ ] Offer only Global health, Poverty relief, and Animal welfare; exclude Catastrophic risks and Community-chosen from MVP onboarding.
- [ ] Do not preselect a top charity; keep the featured organizations equal, and offer GiveWell Top Charities Fund as the separate “let experts decide” option.
- [ ] Implement the agreed cause, optional priority, and amount steps with validation and progress.
- [ ] Persist draft state through T-16; support keyboard, focus, back, and resume.
Decisions needed: None; the minimum amount is unknown and must not be invented. Wait for T-18's approved static seed data before wiring charity options.
Handoff note: Record transitions and unresolved validation rules.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
