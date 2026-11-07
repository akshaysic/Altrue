# T-12 · Add flat Card and Progress
Status: Ready after T-09
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A0 R0 C1 T2 = 4
Goal: Provide flat content containers and accessible progress indicators.
Inputs: .agents/CODEMAP.md; components/ui/Foundations.mdx; app/globals.css; tailwind.config.ts.
Deliverable: Create components/ui/Card.tsx, components/ui/Card.stories.tsx, components/ui/Progress.tsx, and components/ui/Progress.stories.tsx (4 files).
Out of scope: Floating cards, shadows, glow, gamification, and route-specific content.
Acceptance:
- [ ] Stories cover useful semantic variants and progress values including empty and complete.
- [ ] Progress exposes its value and label accessibly; surfaces use tokens without shadows.
Decisions needed: None.
Handoff note: Record component API and story coverage.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
