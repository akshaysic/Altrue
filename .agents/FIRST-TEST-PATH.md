# First test path

The smallest set of existing cards that gives one friend one working flow on a phone: onboarding with three causes, a cause list with featured charities and sources, a give flow with a simulated "Demo" confirmation, a result screen, a feedback link, and an unlisted Vercel preview.

Every card keeps its own file and acceptance criteria. This file only orders them and says what waits.

Updated 2026-11-12: the clickable prototype already runs the core flow in `MobileShell`: `/onboarding` → `/causes` → `/causes/[id]` → `/give` → `/confirm`, with a demo banner and a footer feedback link. Old scaffold routes (`/plan/review`, `/checkout`, `/dashboard`, `/donations`, `/settings`, `/impact`) redirect to `/causes`. T-19 to T-21 are now review-only cards; their uncovered criteria move to T-16, T-23, T-25 and T-26 (listed in each card).

## Path (13 cards, in order)

| # | Card | Why it is on the path | Model |
|---|---|---|---|
| 1 | T-11 Button and CauseChip states | Onboarding and the cause list need chips and buttons with every state. | Claude Sonnet 5.5 / normal |
| 2 | T-17 Source schema and loader | Every claim on screen needs `source_name`, `source_url` and `as_of`. Needs the human to confirm they skimmed the shortlist packet first. | GPT-6.1 Sol / normal |
| 3 | T-15 App shell and feedback entry | One mobile container, nav, and the visible feedback link. | Claude Sonnet 5.5 / normal |
| 4 | T-18 Curated data and tests | The five featured charities, the separate GiveWell fund and one animal charity, with a provenance test. | GPT-6.1 Sol / normal |
| 5 | T-16 Local donor state | Keeps the chosen causes, amount and demo history in the browser, with no backend. | Claude Sonnet 5.5 / normal |
| 6 | T-28 MVP copy pass | Two-vendor reviewed copy for the path screens, written against the chosen voice. Ready after T-03 PASS and reviewed T-04; runs before T-19 so onboarding is built with final copy. | Codex GPT-6 Luna drafts and verifies; Claude Haiku 5.5 humanises |
| 7 | T-19 Onboarding · **done by prototype, review only** | `/onboarding`: three cause categories. Not covered: priority step (decision open), progress, persistence (T-16). | Codex GPT-6 Luna / normal (review) |
| 8 | T-20 Cause discovery and detail · **done by prototype, review only** | `/causes` and `/causes/[id]`: equal featured set, with the source behind each claim. Not covered: custom unknown-`[id]` state (T-25). | Codex GPT-6 Luna / normal (review) |
| 9 | T-21 Give flow · **done by prototype, review only** | `/give` and `/confirm`: live split and a labelled simulated "Demo" confirmation. Not covered: failure state (T-26), local history (T-16, T-23). | Codex GPT-6 Luna / normal (review) |
| 10 | T-22 Impact view | The result screen: sourced estimates with caveats. | Claude Sonnet 5.5 / normal |
| 11 | T-33 Mobile QA | Checks the flow at phone, tablet and desktop widths. | Claude Sonnet 5.5 / normal (Read-lane fallback while Gemini is off) |
| 12 | T-34 Mobile fixes | Fixes only what T-33 observed. Skip if T-33 finds nothing. | Claude Sonnet 5.5 / normal |
| 13 | T-35 Feedback page and Vercel preview | Local-only feedback form, `noindex` header, unlisted preview. Needs a human checkpoint before deploy. | GPT-6.1 Sol / high |

Running in parallel: T-17 and T-18 (Codex) can run next to T-11, T-15 and T-16 (Claude). Stay inside the caps of 2 Claude and 2 Codex workspaces. T-22 waits on the data cards. The T-19 to T-21 reviews don't wait on anything and can run now, one Codex chat each or all three in one; T-28's final copy later replaces the placeholder strings in `lib/copy.ts`.

## After first test

Every other open card waits.

- **T-10** Input and Select: onboarding can use chips and the existing amount stepper. Revisit if T-19 needs a text input. It also carries the radius-token follow-up from T-09.
- **T-12, T-13, T-14** Card and Progress, Sheet, Toast and navigation states.
- **T-23** History and profile.
- **T-24, T-25, T-26, T-27** Shared empty, loading and error states, and the per-route state passes.
- **T-29, T-30, T-31, T-32** Visual polish, repointed 2026-11-12 to the live flow: T-29 = `MobileShell`, `DemoBanner`, `SiteFooter`, tokens; T-30 = `/onboarding`, `/causes`, `/causes/[id]`; T-31 = `/give`, `/confirm` (impact waits for T-22); T-32 is blocked until T-23 rebuilds a donor screen. T-29 also waits on design-plan Wave A (A3, A4, A6).
- **T-36** Tester brief.

## Decisions for the human

1. **Copy.** Decided 2026-11-10: T-28 now runs just before T-19, after the human chose voice candidates #3, #4 and #6 (see VOICE.md).
2. **Card status lines.** Several cards say "Ready after" cards that are now deferred (T-15 after T-09 to T-14, T-33 after T-29 to T-32). T-32 is now blocked on T-23, so T-33 must drop its T-32 dependency (or all of T-29 to T-32) to stay on the path. The planner needs to relax those lines before an agent starts them. They are not edited here.
4. **T-19 to T-21 open scope.** Keep the optional priority step in MVP? Per-charity add-to-plan (recommend drop: the split is by area)? A fee row while the fee is 0 (recommend hidden)?
3. **Data gate.** T-17 and T-18 stay blocked until the human confirms they skimmed the source packet in `.agents/research/`.

## Cards to split before they run

- **T-35 (weight 6, risk 2):** split into one card for the feedback page and `vercel.json` (code, Codex) and one for the deploy and its human checkpoint (no code). It is the only Heavy card on the path.
T-21 no longer needs splitting: it is a review of the prototype's `/give` and `/confirm`.

T-16 now wires persistence into the prototype (`components/prototype/CausePicker.tsx`, `GiveForm.tsx`); with T-19 to T-21 review-only, nothing else edits those files in the same wave except T-30/T-31, which run later.
