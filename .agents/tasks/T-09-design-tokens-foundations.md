# T-09 · Lock design tokens and foundations
Status: Ready
Model: Craft — Claude Sonnet 5.5 / normal (recommended first build model)
Weight: S1 A0 R1 C1 T2 = 5
Goal: Establish the shared flat visual foundations for the donor MVP using the current token system.
Inputs: .agents/CODEMAP.md; .agents/research/flows-and-screens.md; app/globals.css; tailwind.config.ts; components/ui/Foundations.mdx.
Deliverable: Update app/globals.css, tailwind.config.ts, and components/ui/Foundations.mdx (3 files).
Out of scope: New screens, shadows, glow, gradients, new fonts, or a global redesign.
Acceptance:
- [ ] Define named color, type, and spacing tokens and document their intended use in Foundations.
- [ ] Keep CSS variables and Tailwind names aligned; preserve accessible foreground/background pairs.
- [ ] Mark any provisional palette decision as provisional instead of inventing a brand approval.
Decisions needed: None; retain the current accent unless an approved design decision changes it.
Handoff note: Record token changes and any palette question for component cards.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
