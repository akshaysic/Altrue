# T-05 · Build the local cause-selection and split-preview slice

| Lane | Agent | Tier | Model / effort | Reviewer | Wave | Depends on |
|---|---|---|---|---|---|---|
| Craft | Claude | Standard | Sonnet 5.5 / normal | Codex / GPT-6.1 Sol; Gemini Flash visual QA | 6–9 | merged T-01, reviewed T-04; T-03 PASS |

**Weight:** S1 A1 R1 C1 T1 = **5**. One isolated feature across a few new files,
bounded component/state decisions using one local data module; shared app runtime
is R1. Visual/voice exploration is complete in T-04, so implementation taste is T1.
If actual scope needs broader context or design decisions, rescore before building.
**Status:** ready
**Start prompt:** `Do T-05 (.agents/tasks/T-05-cause-split-preview.md), build stage.`

## Goal
Let a presenter open `/demo`, choose local sample causes, deliberately request an
equal split of $5, view the allocation, and return/reset without a dead end.

## Context
- Read `.agents/CODEMAP.md`, `.agents/PLAN.md`, reviewed
  `.agents/design/first-demo-slice.md`, and T-03 `final.md` plus PASS `verify.md`.
- Write an isolated `/demo` route at the App Router root found by T-01 (provisional
  `app/demo/page.tsx`), its feature component (provisional
  `components/demo/CauseSplitDemo.tsx`), and at most one small colocated split helper
  if needed. Import mapped seed/types/components; exact existing exports come from
  CODEMAP. Do not change root layout, global styles, seed data, config, or homepage.
- Documentation/evidence ownership: this receipt and
  `.agents/research/first-demo-slice-visual-qa.md`. Screenshots go in `.context/`.
- Feature state is in memory; no auth, storage, mutation API, payment or AI call.
  No new dependencies, external assets/fonts, network integrations, or deployment.

## Acceptance criteria
- [ ] `/demo` renders directly and on refresh with verified banner final text
  continuously visible in both selection and preview states. It truthfully
  describes sample data, no actual charges, and no real fund transfer.
- [ ] Show up to three active local seed causes with existing names/descriptions
  and inspectable local source notes; use only mapped records with provenance.
  Do not display quantitative impact or unsupported verification/partner claims.
- [ ] Start with no selection. Show the fixed $5 monthly sample budget. Use
  accessible labelled controls; an empty selection cannot request a preview.
- [ ] Preview occurs only after the donor explicitly requests equal division
  across the selected causes. No automatic cause choice, silent redistribution,
  AI request, donation creation, or real recurring plan exists.
- [ ] Allocate exactly 500 integer cents using quotient plus remainder in stable
  seed order. One cause = $5.00; two = $2.50/$2.50; three = $1.67/$1.67/$1.66.
  Only selected causes appear; all displayed amounts sum to $5.00. Percentages
  and manual allocation editing are outside this slice.
- [ ] Back/edit preserves the current selection; reset returns to the initial
  state. The preview is clearly a preview, with no implication payment succeeded.
- [ ] Match reviewed design using existing tokens/components and scoped Tailwind
  classes. Keyboard focus, control labels, selected state, mobile wrapping, and
  horizontal overflow are checked at the three reference viewport sizes.
- [ ] Run existing `npm run lint`, `npm run typecheck`, and `npm run build` with
  local dependencies when feasible. Record actual results and baseline failures.
  Do not initiate an external request to unblock a command without approval.
  No test framework is added; manually exercise no/one/two/three selections,
  nonadjacent cause subsets, exact totals, back, reset, and refresh.
- [ ] Start locally with `npm run dev -- --port $CONDUCTOR_PORT`; inspect browser
  console and navigation for errors, and confirm the slice makes no external
  service request. If inherited startup code violates that constraint, report it
  for replanning instead of modifying shared infrastructure within this card.
- [ ] Capture selection/preview screenshots at 390×844, 768×1024, and 1440×900
  under `.context/`; record paths and verification evidence in the receipt.
- [ ] **Wave 7 Gemini Flash visual QA:** read T-04 references and T-05 screenshots;
  write deviations only to `.agents/research/first-demo-slice-visual-qa.md`, with
  actual model and inspected screenshot paths. Do not edit code or this receipt
  concurrently with Codex's review. This narrow comparison is Light: S0 A0 R0 C1 T0 = 1.
- [ ] **Wave 7 Codex review:** follow `.agents/prompts/review.md` against the card
  and actual feature diff; record findings and receipt. Claude fixes only observed
  issues in wave 8; reviewers recheck changed criteria/evidence in wave 9. Two
  failed attempts at the same fix stop for a human decision.
- [ ] Receipt records the build actor/model, actual checks and QA paths; reviewer
  finalises Outcome/Review caught after all required corrections and visual QA.

## Out of scope
- Mock checkout, impact summary/math, new metric/cost assumptions, new seed facts,
  custom budgets, percentages/editors, homepage/nav changes, account/dashboard,
  persistence, payment-provider calls, real AI, broad cleanup, or deployment.

## Receipt
- Ran on: NOT RUN; build Claude / Sonnet 5.5 / normal; visual QA Gemini / newest Gemini Flash / default; code review Codex / GPT-6.1 Sol / normal. Record actual stage runs.
- Weight in hindsight: pending execution; planned S1 A1 R1 C1 T1 = 5.
- Human turns after the first prompt: pending execution; include replanning if prerequisites fail.
- Outcome: pending implementation, visual QA, and Codex review.
- Review caught: pending Codex review and Gemini visual-QA report; no counts claimed.
- Right lane?: planned yes, Craft implementation from a reviewed design; confirm after execution.
- Found, not done: checkout, editable allocations, impact reporting, and broader MVP routes intentionally deferred.
- Note: record lint/typecheck/build, runtime/console checks, arithmetic cases, screenshot paths, and actual reviewed diff before PR.
