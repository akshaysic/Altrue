# T-10 · Add accessible Input and Select
Status: Ready
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A0 R0 C1 T2 = 4
Goal: Provide reusable form controls for onboarding and settings.
Inputs: .agents/CODEMAP.md; components/ui/Foundations.mdx; app/globals.css; tailwind.config.ts.
Deliverable: Create components/ui/Input.tsx, components/ui/Input.stories.tsx, components/ui/Select.tsx, and components/ui/Select.stories.tsx (4 files).
Out of scope: Form validation rules, route wiring, new dependencies, bespoke styling outside tokens.
Acceptance:
- [ ] Stories cover default, disabled, error, and keyboard-focus states with accessible labels.
- [ ] Controls use native semantics, support keyboard operation, and match the flat foundations.
Decisions needed: None.
Handoff note: Record variants and import paths for onboarding.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
