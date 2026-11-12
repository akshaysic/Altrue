# T-31 · Polish give and confirm screens
Status: Ready after T-28 and T-29
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A0 R1 C1 T2 = 5
Goal: Refine the simulated give and confirmation screens for clarity and accessibility.
Routes: `/give`, `/confirm` (MobileShell). `app/plan/review` and `app/checkout` are retired redirects. `/impact` and `/impact/[reportId]` are retired redirects too; impact polish waits for T-22 to rebuild them.
Inputs: .agents/VOICE.md; .agents/design/design-system-plan.md §4 D4–D6; app/give/page.tsx; app/confirm/page.tsx; components/prototype/GiveForm.tsx; components/prototype/SplitList.tsx; components/prototype/SourceLink.tsx.
Deliverable: Update app/give/page.tsx, app/confirm/page.tsx, components/prototype/GiveForm.tsx, components/prototype/SplitList.tsx, and components/prototype/SourceLink.tsx (5 files). Use design-plan primitives (B4 AmountSlider, B5 SplitBar, B7 SourceCitation, B8 StickyActionBar, B9 Disclosure) where they have landed; don't build them here.
Out of scope: New estimates, split-rule changes (`lib/distribution.ts`), payment integrations, visual novelty, unapproved copy, and impact screens.
Acceptance:
- [ ] Use approved copy and source labels; keep amount, split, demo label, and next action legible; the primary action is reachable without long scrolling at 390 px.
- [ ] Sources on `/confirm` don't repeat per line or wrap to 3+ lines.
- [ ] Check keyboard focus (slider steps), contrast, reduced motion, and narrow-width wrapping.
Decisions needed: None beyond T-07's provenance approval.
Handoff note: Record screen polish and any withheld data.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
