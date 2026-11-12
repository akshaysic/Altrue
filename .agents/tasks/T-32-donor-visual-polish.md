# T-32 · Polish dashboard, history, and settings
Status: Blocked: no live route. `/dashboard`, `/donations` and `/settings` redirect to `/causes`. Runs only after T-16 and T-23 rebuild a donor screen inside MobileShell.
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A0 R1 C1 T2 = 5
Goal: Make local donor controls and history calm, legible, and accessible.
Inputs: .agents/VOICE.md; .agents/design/design-system-plan.md §4 D8; whatever routes and components T-23 creates (repoint this list when T-23 lands).
Deliverable: Update only the donor-state screens T-23 builds (expected: app/donations/page.tsx and its component; ≤ 3 files). DonorAppLayout and DonorNav are retired; use MobileShell.
Out of scope: Real account data, payment details, guilt copy, and gamification.
Acceptance:
- [ ] Use approved copy and clearly label simulated history and demo plan state.
- [ ] Check focus, contrast, reading order, and 390px wrapping.
Decisions needed: None.
Handoff note: Record visual changes and unresolved donor-state gaps.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
