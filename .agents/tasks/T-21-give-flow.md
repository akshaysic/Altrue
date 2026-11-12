# T-21 · Build the simulated give flow
Status: Done by prototype, review only (2026-11-12). Gaps below are carried to other cards, not built here.
Model: Review — Codex GPT-6 Luna / normal (Claude built the prototype, so Claude can't review it)
Weight: review only S1 A0 R0 C1 T0 = 2 (original build weight S1 A1 R1 C1 T1 = 5)
Goal: Let a donor review a transparent split and complete a clearly simulated confirmation.
Live surface: `/give?areas=&amount=&experts=` → `app/give/page.tsx` + `components/prototype/GiveForm.tsx`, `SplitList.tsx`; `/confirm` (same params) → `app/confirm/page.tsx`. Split: `lib/mvpSplit.ts` + `lib/distribution.ts` (tested in `lib/distribution.test.ts`). Amount range: `lib/giveConfig.ts`. Fee: `MOCKED_FEE_CENTS = 0` in `lib/constants.ts`.
Inputs: .agents/CODEMAP.md; .agents/PLAN.md ("Prototype give flow" row); .agents/design/design-system-plan.md §4 D4–D6; the files above.
Deliverable: A review note against the acceptance list below (pass, or a list of fixes). No new files. `app/plan/review` and `app/checkout` are retired (redirect to `/causes`); the retired DonationConfirmation component is dropped.
Out of scope: Real payment, provider SDK, real recurring plan, AI distribution, implying a charge succeeded, and building the gaps.
Acceptance (status against the prototype):
- [ ] Amount, split, fee, net, cadence, and mock label visible before confirmation. *Mostly: amount, live split, "Monthly" cadence and the demo banner show on `/give`. No fee or net row: the fee is 0, so net equals amount. Decide whether a "Fee: 0" row is wanted; don't invent a fee.*
- [ ] Success/failure simulated, preserve donor agency, local demo history only. *Partial: `/confirm` is a simulated success ("Demo: no money moves") with "Change amount" and "Start again". Not built: a failure state (T-26) and local demo history (nothing is stored; T-16, then T-23).*
- [x] (Added by the prototype) "Let experts decide" routes 100% to the GiveWell fund; split rounds to the cent and sums to the total (tests).
Decisions needed: Fee row shown as 0, or hidden while the fee is 0? Recommendation: hidden, with a one-line "No fee in this demo" once T-28 copy exists.
Handoff note: The give flow has not been reviewed by Codex yet (PLAN.md); this card is that review.
Receipt: Prototype built ad hoc 2026-11-12 (PLAN.md "Prototype give flow"). This card's review: pending.
