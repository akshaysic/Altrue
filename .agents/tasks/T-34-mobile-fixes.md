# T-34 · Fix the top mobile-layout deviations
Status: Ready after T-33
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A0 R1 C1 T2 = 5
Goal: Fix the confirmed responsive issues from T-33 in a bounded set of core screens.
Inputs: .agents/research/mobile-qa.md; app/page.tsx; app/onboarding/page.tsx; app/causes/page.tsx; app/causes/[slug]/page.tsx; app/checkout/page.tsx.
Deliverable: Fix only observed issues in app/page.tsx, app/onboarding/page.tsx, app/causes/page.tsx, app/causes/[slug]/page.tsx, or app/checkout/page.tsx; record the changed paths in this card.
Out of scope: Redesigning screens, fixing unobserved behavior, or adding features.
Acceptance:
- [ ] Each change maps to a reported deviation and is rechecked at the reported widths.
- [ ] If more than five files need changes, create a follow-up card instead of expanding this one.
Decisions needed: Human decision only if evidence requires scope beyond five files.
Handoff note: Record fixes, checks, and any deferred deviations.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
