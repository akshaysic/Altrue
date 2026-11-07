# T-33 · Run mobile and tablet visual QA
Status: Ready after T-29–T-32
Model: Read (Gemini off) — Claude Sonnet 5.5 / normal
Weight: S1 A0 R1 C1 T2 = 5
Goal: Compare the core journey at phone, tablet, and desktop widths and report only observed deviations.
Inputs: .agents/research/flows-and-screens.md; .agents/design/first-demo-slice-plan-OLD.md (demo-slice details only); app/page.tsx; app/onboarding/page.tsx; app/causes/[slug]/page.tsx; app/checkout/page.tsx; app/impact/[reportId]/page.tsx; `.agents/PLAN.md` §§2–3.
Deliverable: Create .agents/research/mobile-qa.md; save three contact sheets in .context/mobile-qa/ at 390, 768, and 1440px.
Out of scope: Code edits, new visual direction, and testing unlisted screens.
Acceptance:
- [ ] Compare home, onboarding, cause detail, checkout, and impact screens against the approved flow requirements, flat tokens, and responsive behavior at all three widths.
- [ ] T-04's approved visual handoff is for `/demo` only; do not treat its frames as a core-route layout spec. If no core-screen design handoff exists, state that and report only observed deviations from requirements and tokens.
- [ ] Report deviations only, with screenshots and exact routes; do not infer unobserved problems.
Decisions needed: None; the archived plan is for `/demo` details only, and T-04 is not the core-route design baseline.
Handoff note: Record actual inspected routes, widths, and deviations.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
