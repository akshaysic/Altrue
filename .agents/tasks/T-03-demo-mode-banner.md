# T-03 · Demo-mode banner through the full copy chain

| Lane | Agent | Tier | Model / effort | Reviewer | Wave | Depends on |
|---|---|---|---|---|---|---|
| Strategy | Codex; Claude humanises | Light | GPT-6 Luna / default; Haiku 5.5 / default | Claude for draft; fresh Codex for final meaning | 3–5 | merged T-01, reviewed T-04 |

**Weight:** S1 A0 R0 C0 T1 = **2**. One tiny factual disclosure, a few copy files,
fixed claims and format; conventional utility copy in an established voice, not
brand exploration. Voice decisions belong to T-04.
**Status:** ready
**Start prompt:** `Do T-03 (.agents/tasks/T-03-demo-mode-banner.md), draft stage only.`

## Goal
Produce one short banner that clearly labels this local walkthrough as a demo
and explains that no real money is charged or transferred.

## Context
- Read `.agents/CODEMAP.md`, reviewed `.agents/VOICE.md`, `.agents/PLAN.md`, and
  `.agents/BRIEF.md`. The demo contract in T-05 is the basis for the disclosure.
- Own only `.agents/copy/demo-mode-banner/{draft,final,notes,verify}.md` and this
  receipt. Do not implement the banner or change VOICE.
- Required ideas: demo mode; sample cause data; no actual charge or fund transfer.
  Do not claim security guarantees, partnerships, verified charity effectiveness,
  impact outcomes, payment-provider behaviour, or a live donation/recurring plan.
- Final visible banner text is one plain-text sentence, ≤160 characters including
  spaces, no CTA/link, no numbers. The claims appendix is not visible banner copy.
- This card is Strategy-owned; its prescribed Claude humanise stage is routed to
  Craft under AGENTS.md §7. Each actor performs only its assigned stage.

## Acceptance criteria
- [ ] **Draft / Codex Luna, wave 3:** `draft.md` follows VOICE and ends with a
  numbered list of every factual claim/promise, each traced to the brief, mapped
  seed facts, or T-05's implementation contract. Record draft character count.
- [ ] **Humanise / Claude Haiku, second chat, wave 4:** follow
  `.agents/prompts/humanise.md`, produce `final.md` and `notes.md`, preserve meaning
  within ±15% of draft length and the 160-character cap. Flag changes with ⚠.
  Put only the visible sentence in `final.md`; commentary belongs in `notes.md`.
- [ ] If VOICE is still empty, follow the humanise prompt and obtain the human's
  three sample sentences before writing; do not bypass this prerequisite.
- [ ] **Verify / Codex Luna, fresh chat, wave 5:** follow
  `.agents/prompts/verify-copy.md`; `verify.md` begins PASS or FIX. Verify meaning,
  claims, format and length without rewriting style. PASS is required before T-05.
- [ ] FIX loops: Claude applies only listed fixes, then fresh Codex verifies; at
  most two loops, then ask the human to decide. Keep all stage evidence in files.
- [ ] Each stage appends its actual agent/model/effort and results to the receipt.
  Claude's independent draft review and Codex's final meaning check supply the
  required two-vendor review; no author verifies its own humanising.
  Claude also applies the acceptance/scope checks from `.agents/prompts/review.md`
  to the draft; runtime code checks are not applicable to this copy-only artifact.
- [ ] T-05 imports only `final.md`'s sentence and verifies its runtime truth.

## Out of scope
- Other UI copy, a voice redesign, payment/impact prose, translations, UI code,
  website publishing, or claiming the app behaviour has already been tested.

## Receipt
- Ran on: NOT RUN; draft Codex / GPT-6 Luna; humanise Claude / Haiku 5.5; verify fresh Codex / GPT-6 Luna; all default effort. Append actual stage runs.
- Weight in hindsight: pending execution; planned S1 A0 R0 C0 T1 = 2.
- Human turns after the first prompt: pending execution; include stage handoffs and any voice clarification.
- Outcome: pending draft → humanise → fresh verification; no PASS claimed.
- Review caught: pending Claude draft review and Codex verification; record must/should counts and FIX loops.
- Right lane?: planned yes, Strategy-owned copy chain with the prescribed Craft humanise stage; confirm after execution.
- Found, not done: VOICE is empty at planning time; T-04 must supply it before this card starts.
- Note: executor replaces these placeholders with actual stage evidence; only verified final.md may ship.
