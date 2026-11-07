# T-13 · Add an accessible Sheet
Status: Ready after T-09
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A0 R0 C1 T2 = 4
Goal: Provide one reusable modal sheet for plan controls and confirmations.
Inputs: .agents/CODEMAP.md; components/ui/Foundations.mdx; app/globals.css; tailwind.config.ts.
Deliverable: Create components/ui/Sheet.tsx and components/ui/Sheet.stories.tsx (2 files).
Out of scope: A second modal primitive, route-specific content, animation libraries, or payment flows.
Acceptance:
- [ ] Story covers open/closed, keyboard focus, Escape, labelled title, and narrow viewport behavior.
- [ ] Uses dialog semantics and existing tokens; remains flat with no shadow or glow.
Decisions needed: None; use one responsive Sheet with modal semantics.
Handoff note: Record API and focus behavior for settings/plan flows.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
