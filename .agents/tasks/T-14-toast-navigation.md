# T-14 · Add Toast and document navigation states
Status: Ready after T-09
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A0 R0 C1 T2 = 4
Goal: Complete the reusable notification primitive and validate the existing navigation components.
Inputs: .agents/CODEMAP.md; components/layout/PublicNav.tsx; components/layout/PublicNav.stories.tsx; components/layout/DonorNav.tsx; components/layout/DonorNav.stories.tsx.
Deliverable: Create components/ui/Toast.tsx and components/ui/Toast.stories.tsx; update components/layout/PublicNav.stories.tsx and components/layout/DonorNav.stories.tsx only if states are missing (≤4 files).
Out of scope: Replacing the app navigation architecture or adding a toast dependency.
Acceptance:
- [ ] Toast story covers success, neutral, dismissal, and accessible announcement.
- [ ] Public and donor nav stories show responsive states and visible focus.
Decisions needed: None.
Handoff note: Record navigation reuse and Toast API.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
