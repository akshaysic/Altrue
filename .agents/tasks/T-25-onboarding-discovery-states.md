# T-25 · Complete onboarding and discovery states
Status: Ready after T-24
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A1 R1 C1 T1 = 5
Goal: Complete empty, invalid, no-match, unavailable, and missing-evidence states for onboarding and causes.
Inputs: .agents/research/flows-and-screens.md; app/onboarding/page.tsx; app/causes/page.tsx; app/causes/[slug]/page.tsx; components/ui/EmptyState.tsx.
Deliverable: Update app/onboarding/page.tsx, app/causes/page.tsx, and app/causes/[slug]/page.tsx only (3 files).
Out of scope: Adding new causes, inventing a minimum amount, or presenting placeholders as verified.
Acceptance:
- [ ] No selected cause, filter no-match, inactive/unknown cause, and missing evidence each have a recoverable state.
- [ ] Invalid amount errors explain correction without adding unsupported policy.
Decisions needed: Human-defined amount minimum remains unknown; leave no minimum claim.
Handoff note: Record states exercised and any data gaps.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
