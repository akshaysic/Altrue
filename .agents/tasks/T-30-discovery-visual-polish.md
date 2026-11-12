# T-30 · Polish discovery and onboarding screens
Status: Ready after T-28 and T-29
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A0 R1 C1 T2 = 5
Goal: Refine hierarchy, spacing, typography, and accessibility on the first-visit screens.
Routes: `/onboarding`, `/causes`, `/causes/[id]` (all in MobileShell). `/` only redirects to `/onboarding`.
Inputs: .agents/VOICE.md; .agents/design/design-system-plan.md §4 D1–D3; app/onboarding/page.tsx; app/causes/page.tsx; app/causes/[id]/page.tsx; components/prototype/CausePicker.tsx; components/prototype/CauseList.tsx; components/prototype/CharityCard.tsx; components/prototype/CharityDetail.tsx.
Deliverable: Update components/prototype/CausePicker.tsx, CauseList.tsx, CharityCard.tsx, and CharityDetail.tsx; touch the three thin page files only if a heading or wrapper must move (4–7 files). Use design-plan primitives (B1 OptionRow, B2 StepProgress, B3 LinkCard, B7 SourceCitation, B8 StickyActionBar) where they have landed; don't build them here.
Out of scope: New persuasive copy, source or seed changes, cross-screen redesign, and the Wave D rewrite that replaces `components/prototype/*`.
Acceptance:
- [ ] Use approved copy from T-28 (`lib/copy.ts`) and existing components/tokens.
- [ ] Check headings, focus, labels, contrast, tap targets ≥ 44 px, and 390 px wrapping (long charity names, source links).
- [ ] `app/causes/page.stories.tsx` and `app/causes/[id]/page.stories.tsx` still render.
Decisions needed: None; defer unsupported content to source review.
Handoff note: Record page-specific changes and any remaining accessibility issue.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
