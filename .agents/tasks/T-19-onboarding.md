# T-19 · Build onboarding
Status: Done by prototype, review only (2026-11-12). Gaps below are carried to other cards, not built here.
Model: Review — Codex GPT-6 Luna / normal (Claude built the prototype, so Claude can't review it)
Weight: review only S1 A0 R0 C1 T0 = 2 (original build weight S1 A1 R1 C1 T1 = 5)
Goal: Let a donor choose among the approved cause categories, priority, and a monthly amount in a short, usable flow.
Live surface: `/onboarding` → `app/onboarding/page.tsx` (MobileShell) + `components/prototype/CausePicker.tsx`; the amount step is `/give` (see T-21). Areas come from `components/prototype/areas.ts`; placeholder copy from `lib/copy.ts`.
Inputs: .agents/CODEMAP.md; .agents/PLAN.md (prototype rows); .agents/design/design-system-plan.md §4 D1; the files above.
Deliverable: A review note against the acceptance list below (pass, or a list of fixes). No new files. The retired plan (OnboardingFlow component + page stories) is dropped; Wave D (D1 FlowHeader) replaces `components/prototype/*` later.
Out of scope: Account creation, real payment, unsourced recommendations, plan allocation logic, and building the gaps.
Acceptance (status against the prototype):
- [x] Offer only Global health, Poverty relief, and Animal welfare; exclude Catastrophic risks and Community-chosen. *Prototype: `MVP_AREAS`.*
- [x] Do not preselect a top charity; GiveWell Top Charities Fund is the separate "let experts decide" option. *Prototype: nothing preselected; the fund is its own section on `/causes` and a toggle on `/give`, not an onboarding step.*
- [ ] Cause, optional priority, and amount steps with validation and progress. *Partial: cause step (1–3 picks, Continue disabled at 0) and amount step on `/give` (slider; `parseAmount` clamps bad input). Not built: the priority step and any progress indicator (design plan B2 StepProgress / D1 FlowHeader).*
- [ ] Persist draft state through T-16; keyboard, focus, back, resume. *Partial: picks travel in the URL, so browser back works within a session; nothing persists. Persistence moves to T-16.*
Decisions needed: Is the optional priority step still in MVP scope (PLAN §3 says yes)? If yes, it needs its own card after the first friend test.
Handoff note: Reviewer records pass/fix here. The minimum amount is still placeholder (`lib/giveConfig.ts`, EUR 10–50); don't treat it as decided.
Receipt: Prototype built ad hoc 2026-11-12 (PLAN.md "Prototype run"), already reviewed by Codex Luna then. This card's review: pending.
