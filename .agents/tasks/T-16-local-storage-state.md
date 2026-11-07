# T-16 · Add the local donor-state store
Status: Ready after T-15
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A1 R1 C1 T1 = 5
Goal: Persist the MVP donor draft and demo history locally without accounts or a backend.
Inputs: .agents/CODEMAP.md; .agents/research/flows-and-screens.md; app/layout.tsx; app/onboarding/page.tsx; app/plan/new/page.tsx.
Deliverable: Create lib/store/donorState.ts and components/state/DonorStateProvider.tsx; update app/layout.tsx, app/onboarding/page.tsx, and app/plan/new/page.tsx (5 files).
Out of scope: Authentication, server persistence, payment calls, analytics, or storing sensitive payment data.
Acceptance:
- [ ] Store and restore selected causes, priority, amount, and simulated donation history using localStorage.
- [ ] Handle server rendering and unavailable storage without hydration errors or data loss.
Decisions needed: None; browser-local storage is the approved MVP default in PLAN.md.
Handoff note: Record store shape, reset behavior, and migration assumptions.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
