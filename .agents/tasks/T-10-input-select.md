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
Added from T-09 review: also add --ds-radius-pill and --ds-radius-notice tokens and a color: var(--ds-ink) on body, from backup/t09-local (commit 78f2803; it holds only these three small items that main's T-09 lacks).
Handoff note: Record variants and import paths for onboarding.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
