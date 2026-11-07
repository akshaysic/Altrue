# T-15 · Build the app shell and feedback entry
Status: Ready after T-09–T-14
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A1 R1 C1 T1 = 5
Goal: Provide consistent public/donor shells, mobile navigation, and a visible feedback link.
Inputs: .agents/CODEMAP.md; .agents/research/flows-and-screens.md; app/layout.tsx; components/layout/PublicLayout.tsx; components/layout/DonorAppLayout.tsx; components/layout/PublicNav.tsx; components/layout/DonorNav.tsx.
Deliverable: Update app/layout.tsx, components/layout/PublicLayout.tsx, components/layout/DonorAppLayout.tsx, components/layout/PublicNav.tsx, and components/layout/DonorNav.tsx (5 files).
Out of scope: Auth guards, onboarding state, persistent feedback submission, dashboard redesign, and external service calls.
Acceptance:
- [ ] Public and donor routes render in responsive shells with navigation to existing routes.
- [ ] A feedback link is visible in both shells; it points to the local feedback route planned in S3.4.
- [ ] Keep focus visible, mobile layout usable, and all surfaces flat.
Decisions needed: None; feedback is local-only until the S3.4 form is built.
Handoff note: Record shell boundaries and feedback-link target.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
