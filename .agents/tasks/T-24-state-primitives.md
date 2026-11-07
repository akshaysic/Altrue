# T-24 · Add shared empty, loading, error, and not-found states
Status: Ready after T-19–T-23
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A0 R1 C1 T1 = 4
Goal: Give the core flow consistent recoverable states.
Inputs: .agents/CODEMAP.md; .agents/research/flows-and-screens.md; app/layout.tsx; components/ui/Notice.tsx; components/ui/Foundations.mdx.
Deliverable: Create components/ui/EmptyState.tsx, components/ui/EmptyState.stories.tsx, app/loading.tsx, app/error.tsx, and app/not-found.tsx (5 files).
Out of scope: Rewriting route data logic or adding a third-party error service.
Acceptance:
- [ ] Shared states give a clear retry/back path and announce errors accessibly.
- [ ] Loading and not-found layouts follow shell rules; error reset remains usable.
Decisions needed: None.
Handoff note: Record fallback coverage and any route-specific gaps for T-25–T-27.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
