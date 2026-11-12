# T-29 · Polish shared visual foundations
Status: Ready after T-28 and design plan Wave A (A3 tokens, A4 surface, A6 scaffold retirement)
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A0 R1 C1 T2 = 5
Goal: Apply final spacing, type, focus, and motion rules consistently across the live shell that every flow screen uses.
Inputs: .agents/VOICE.md; .agents/design/design-system-plan.md §0, §1; app/globals.css; tailwind.config.ts; app/layout.tsx; components/layout/MobileShell.tsx; components/layout/DemoBanner.tsx; components/layout/SiteFooter.tsx.
Deliverable: Update app/globals.css, tailwind.config.ts, components/layout/MobileShell.tsx, components/layout/DemoBanner.tsx, and components/layout/SiteFooter.tsx (5 files).
Retired, do not touch: PublicLayout, DonorAppLayout, PageHeader, PublicNav, DonorNav (no live route uses them; design plan A6 retires them).
Out of scope: New brand direction, decorative animation, shadows, glow, new dependencies, new tokens (A3/A4 own those), and per-screen layout (T-30, T-31).
Acceptance:
- [ ] Use approved `ds-*` tokens and restrained motion (≤ 200 ms, `motion-safe:`); honor reduced motion.
- [ ] Focus, contrast, safe-area bottom inset, and 390 px → desktop shell behavior are consistent on `/onboarding`, `/causes`, `/causes/[id]`, `/give`, `/confirm`, `/feedback`.
Decisions needed: None; preserve the agreed flat visual direction.
Handoff note: Record shared visual changes and any remaining global issue.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
