# First demo slice: choose causes and preview an equal split

Date: 2026-10-28. Planning baseline: `95ad16c`. Brief: `.agents/BRIEF.md`.
Budget: **claude ok · codex ok · gemini ok**.
Amended for kit v1.3: T-02 moved to Gemini (agy) in wave 0; T-01 and T-02 self-check (Light, R0), so their review slots are gone.

## Goal

Deliver one small local walkthrough at `/demo`: read the demo banner, choose
1–3 causes from a small existing seed-data subset, explicitly request an equal
split of a fixed **$5 monthly sample budget**, inspect the amounts, then go back
or reset. The request for an equal split is the donor's distribution choice.
There is no automatic AI decision and no donation is created.

This is the first demonstrable slice of the brief, not completion of the full
MVP. The next plan can add editable allocations, mocked checkout, and a sourced
impact summary once this slice is accepted.

## Non-goals

- Mock checkout, payment success states, impact calculations or impact reports.
- A fund-distribution algorithm, real AI, payment providers, accounts, persistence,
  gamification, partner data, deployments, publishing, or external requests.
- Broad navigation, dashboard, design-system, dependency, or stack refactors.
- Rewriting product docs to narrow the eventual MVP; this plan narrows this delivery only.

## Evidence and assumptions

- Read `AGENTS.md`, the planning prompt, brief, task template, copy/review/map
  prompts, `README.md`, `package.json`, and the two product entry documents.
- `.agents/CODEMAP.md` is missing. Do not crawl the application during planning.
  T-01 is the required Light Read mapping card in wave 0; application paths below
  are provisional until that map establishes the actual route root and exports.
- `.agents/tasks/T-01-npm-audit.md` does not exist at this baseline, so new cards
  start at T-01. There is no inherited audit card to schedule in wave 1. Exactly
  five cards are created. If an audit card appears before dispatch, stop and
  reconcile numbering/dependencies rather than overwriting it.
- `README.md` contains literal merge-conflict markers. T-02 retains the HEAD side
  mechanically; this preserves the existing product-doc links without choosing
  new marketing wording. This is not an active merge-conflict resolution task.
- `package.json` confirms Next.js 16, React 18, Tailwind 3, TypeScript and scripts
  `dev`, `build`, `start`, `lint`, `typecheck`. No test script exists. T-01 checks
  the remaining commands and records actual code structure.
- `.agents/VOICE.md` is an unfilled template. T-04 fills a provisional voice from
  the existing product principles before T-03 starts. Existing source sentences
  used as examples must be attributed; do not invent human-approved examples.
  The humanise prompt's request for human samples still applies if VOICE remains
  empty. A provisional source-based voice is an assumption for this first slice.
- Use the existing USD product-doc convention and $5 default; do not add currency
  selection or claim anything about live prices, fees, or real fund movement.
- Reuse up to three active, complete local cause records and their existing source
  notes. Prefer Global Health, Education and Opportunity, and Climate and Environment
  when those records exist. Do not invent IDs, charities, costs, or impact numbers.
  Missing suitable data is a replanning gate, not permission to fabricate it.
- Directly opening `/demo` is the walkthrough entry. No homepage change is needed.
  Reuse current styling/tokens and existing cause names and descriptions.

## Risks and gates

- **Unknown implementation:** T-01 must identify route roots, seed exports, existing
  source notes, shared components/tokens, and any external requests during startup
  or build. If the proposed isolated feature cannot fit T-05's W ≤ 5 scope, bring
  evidence back for a smaller plan. Do not silently grow into the entire donor flow.
- **Data provenance:** local source references must be inspectable. Linking a
  source is not permission to fetch it. A record without supported provenance is
  excluded. No impact quantities are needed in this slice.
- **Visual/voice decisions:** design exploration and provisional VOICE precede
  implementation and banner copy respectively. The build consumes the reviewed
  design and only the verified banner `final.md`.
- **Donor agency/rounding:** only explicitly selected causes enter the preview;
  a visible action requests equal division. Divide 500 integer cents with a stable
  remainder rule. For three causes, amounts are $1.67, $1.67, $1.66. No AI is invoked.
- **Runtime/network:** do not install new dependencies, fetch remote assets/fonts,
  call services, deploy, publish, or push. Report any baseline command that would
  require an external request; use available local dependencies/assets instead.
- **Review:** follows AGENTS.md §9. T-01 and T-02 are Light with R0, so they self-check.
  T-03 gets the two-vendor copy check; T-04 and T-05 get Codex reviews with `.agents/prompts/review.md`. Gemini performs visual QA for T-05;
  Codex reviews its code. No planned card is R2; any escalation to R2 requires a
  human checkpoint before merge under AGENTS.md.
- **Receipts:** the cards contain filled planning placeholders, explicitly marked
  unexecuted. Stage actors append actual model/effort, checks, handoffs, and elapsed
  human turns. Reviewers set Outcome and Review caught only after observing results.
  Do not claim success or a PASS in advance. Two failed fix attempts stop the work.

## Delivery and validation

- Every card is independently mergeable in dependency order; reviews do not count
  as additional cards. Merge/rebase each prerequisite into dependent workspaces
  before starting them. Keep the current branch name.
- T-01 owns CODEMAP; T-02 owns README; T-03 owns the banner copy folder; T-04 owns
  the design handoff and VOICE; T-05 owns only its isolated feature files and QA
  evidence. Actors update their own card's receipt at separate stages.
- Design supplies mobile, tablet, and desktop references. Build captures matching
  390×844, 768×1024, and 1440×900 screenshots under `.context/`. Gemini lists
  deviations against the references, and durable results live in `.agents/research/`.
  Pass the gitignored handoff/screenshots between workspaces explicitly; record
  durable decisions in `.agents/design/first-demo-slice.md`.
- T-05 runs existing lint, typecheck, and build commands when locally feasible,
  records baseline failures separately, and manually verifies selection, cents,
  back/reset, keyboard access, and responsive states. No new test framework.
- After the reviews and any corrections, the human can open `/demo` and walk
  through selection and preview at mobile/desktop sizes. Checkout and impact
  remain explicitly queued for the next plan.
- This planning session changes planning artifacts only and commits them locally
  as `plan: first demo cause-selection slice`. No product code, dispatch, push, or
  PR creation is part of this session. Review and merge the plan before fan-out.

## Planning receipt

- Ran on: Codex / GPT-6 (variant and effort not exposed in this session).
- Work performed: source-limited planning; five task cards and this dispatch plan.
- Human turns after the first prompt: 0.
- Outcome: fixed-after-review (all five review findings applied); execution pending.
- Review caught: 1 must / 3 should (Claude, cross-vendor review of Codex's plan).
- Right lane?: yes, Strategy.
- Found, not done: missing CODEMAP, conflicted README, unfilled VOICE; scheduled below.
- Note: no implementation, runtime validation, or future-stage results claimed.
- Validation: checked all five factor sums (2/0/2/4/5), required card sections,
  explicit pending receipts, dispatch ownership/caps, and Markdown whitespace.

## Dispatch

One Conductor workspace per card; use additional chats in that card's workspace
for its reviews and copy stages. T-03's primary lane is Strategy; the mandatory
humanise stage belongs to Craft under AGENTS.md §7. Each fresh-chat instruction
is literal: the verifier cannot reuse the drafting or humanising chat.

Within each wave, work has disjoint write ownership. In wave 7, Gemini writes
only visual-QA findings; Codex owns the T-05 review receipt. Finish each wave and
resolve its review findings before dependent work starts. Peak concurrency is 1 Claude, 1 Codex, and 2 Gemini, within the 2/2/3 caps; no internal subagents.
Wave 0 runs T-01 and T-02 in parallel on Gemini; each self-checks and opens its own PR.
Merge the map before T-04 starts in wave 1.

| Wave | Card | Agent | Model / effort | Start prompt |
|---|---|---|---|---|
| 0 | T-01 map | Gemini (agy, in the terminal) | newest Gemini Flash / default (Light) | `Do T-01 (.agents/tasks/T-01-codemap.md).` |
| 0 | T-02 README | Gemini (agy, in the terminal) | newest Gemini Flash / default (Light) | `Do T-02 (.agents/tasks/T-02-readme-markers.md).` |
| 1 | T-04 exploration + voice | Claude | Sonnet 5.5 / normal (Standard), with Claude Design | `Do T-04 (.agents/tasks/T-04-first-slice-design.md).` |
| 2 | T-04 review | Codex | GPT-6.1 Sol / normal (Standard) | `Review T-04 using .agents/prompts/review.md; update its receipt.` |
| 3 | T-03 draft | Codex | GPT-6 Luna / default (Light) | `Do T-03 (.agents/tasks/T-03-demo-mode-banner.md), draft stage only.` |
| 4 | T-03 humanise | Claude, second chat | Haiku 5.5 / default (Light) | `Run T-03's Craft humanise stage using .agents/prompts/humanise.md for .agents/copy/demo-mode-banner/.` |
| 5 | T-03 verify | Codex, fresh chat | GPT-6 Luna / default (Light) | `Run T-03's verify stage using .agents/prompts/verify-copy.md for .agents/copy/demo-mode-banner/.` |
| 6 | T-05 build | Claude | Sonnet 5.5 / normal (Standard) | `Do T-05 (.agents/tasks/T-05-cause-split-preview.md), build stage.` |
| 7 | T-05 visual QA | Gemini (agy, in the terminal) | newest Gemini Flash / default (Light) | `Run T-05's visual-QA stage against the T-04 references; write deviations to .agents/research/first-demo-slice-visual-qa.md.` |
| 7 | T-05 code review | Codex | GPT-6.1 Sol / normal (Standard) | `Review T-05 using .agents/prompts/review.md; update its receipt.` |
| 8, if needed | T-05 corrections | Claude | Sonnet 5.5 / normal (Standard) | `Apply only the T-05 review and visual-QA fixes; update evidence and your receipt.` |
| 9, if needed | T-05 recheck | Codex, then Gemini | GPT-6.1 Sol / normal; newest Gemini Flash / default | `Recheck the changed T-05 acceptance criteria and visual deviations in sequence; complete its receipt.` |

If T-03 verification says FIX, run Claude Haiku corrections and fresh Codex Luna
verification sequentially before wave 6. Two loops maximum, then the human decides.
Git chores for every execution card use that vendor's Light model per AGENTS.md.
