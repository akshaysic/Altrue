Decisions 2026-11-12: keep accent; add one neutral informational surface; area marks = circle/square/triangle for now; wordmark = plain text; NonprofitStatus becomes evaluator tags; no Chromatic. Waves C, D (except what polish runs cover) and E wait until after the first friend test.

# Altrue: components and assets plan (Craft proposal, 2026-11-12)

Status: proposal only. Overall W ≈ 9 (S2 A2 R0 C2 T2), so per AGENTS.md §2 this is a split
proposal for Strategy to turn into cards of W ≤ 5. Nothing here is executed.
Inputs: 390 px screenshots of the five flow screens, a Storybook pass (60 entries), Foundations.mdx,
PLAN.md §6, FIRST-TEST-PATH.md, cards T-10–T-14, T-22–T-24, T-29–T-32.

## 0. Ground rules carried into every card

- Flat only: no shadows, glow, gradients, floating cards. Borders are `ink`/`ink-2` on controls, `rule` on dividers.
- No figure that isn't in the source packet. Derived visuals (split bar) only re-draw numbers the app already computes.
- No payments, no provider calls, no external assets or fonts.
- Motion: ≤ 200 ms, transform/opacity/width only, all behind `motion-safe:`; reduced motion shows the end state.
- New copy goes through the §7 two-vendor pass; components ship with `PLACEHOLDER_COPY` strings.

## 1. Wave A · Fix the foundations (before any new component)

| ID | Work | Files | Lane / tier | W |
|---|---|---|---|---|
| A1 | Foundations.mdx tables render as raw pipes; add GFM to the docs addon (or convert the two tables to JSX). | `.storybook/main.ts` (or `Foundations.mdx`) | Read → Sonnet fallback, Light | 1 |
| A2 | Stories use the retired taxonomy ("Global Health", "Hunger And Food Security", "Climate And Environment") and a "Platform fee" row. Re-seed every DS story and the CheckYourPlan example with the three MVP areas and real MVP charity names from `lib/seed/sources.ts`. | `components/ui/*.stories.tsx`, `examples/CheckYourPlan.stories.tsx`, type specimen in `Foundations.mdx` | Read → Sonnet, Light | 2 |
| A3 | Add tokens: radius (`ds-radius-card` 16, `ds-radius-pill` full; the T-10 follow-up), motion (`ds-dur-fast` 120, `ds-dur` 200, one ease-out curve), `ds-safe-bottom`. Document in Foundations. | `globals.css`, `tailwind.config.ts`, `Foundations.mdx` | Craft, Standard | 3 |
| A4 | Semantic colour fix: `notice` = demo/caution only; `demo` = demo/estimate labels only. Add a neutral `ds-surface` (flat tint for quiet info blocks, e.g. evidence) so good news stops borrowing the warning colour. Needs the human's palette nod. | `globals.css`, `tailwind.config.ts`, `Foundations.mdx` | Craft, Standard | 3 |
| A5 | Flip Storybook a11y from `test: 'todo'` to `'error'` once A2 lands green. | `.storybook/preview.tsx` | Craft, Light | 1 |
| A6 | Retire the "Scaffold" sidebar group (PlaceholderCard, PublicNav, DonorNav, PageHeader use legacy `ink/paper/moss` colours, a white header and square buttons). Delete stories for retired routes, or move survivors onto `ds-*`. | `components/*.stories.tsx`, `components/layout/*` | Craft, Standard (R1: shared) | 3 |

## 2. Wave B · Primitives (components/ui, each with stories + play tests)

Existing and keep: Button, Amount, AmountStepper, Ledger, Notice, DemoTag.
Rework: CauseChip, NonprofitStatus. New: everything else.

| ID | Component | Why the flow needs it | Maps to card | W |
|---|---|---|---|---|
| B1 | **OptionRow** (full-width selectable row, visible empty→checked circle, optional leading mark, disabled with reason text) | Onboarding picker and "Let experts decide" look unbalanced as hugging chips with a hidden check. Keep CauseChip for inline/compact use. | new | 4 |
| B2 | **StepProgress** (n-segment flat bar + "Step x of n" text, `aria-valuenow`) | No sense of flow length today. | T-12 (Progress half) | 4 |
| B3 | **Card / LinkCard** (flat bordered container, whole-surface link with separate inner links allowed) | Charity cards: only the title is tappable now. | T-12 (Card half) | 4 |
| B4 | **AmountSlider** (styled range: flat track, accent fill to value, 44 px thumb, min/max labels, `aria-valuetext`) | Native range is thin and inconsistent across browsers. | new | 4 |
| B5 | **SplitBar** (flat stacked bar, segments from cents, labelled legend, width transition behind `motion-safe`) | Makes "equal by area, then by charity" visible. | new | 4 |
| B6 | **StatFigure** (value, label, Estimate/Illustrative tag, optional basis) | Same figure pattern is hand-rolled in CharityCard and CharityDetail; Impact view (T-22) needs it too. | new | 3 |
| B7 | **SourceCitation** (promote `prototype/SourceLink`, single-line mono variant, as-of date, de-dupe helper for lists) | Source links wrap to 3–4 lines and repeat 4× on /confirm. | new | 3 |
| B8 | **StickyActionBar** (bottom bar, `ground` bg, 1 px `rule` top border, safe-area inset, optional summary line) | Primary action is 3–4 screens down on /causes and /give. | new | 3 |
| B9 | **Disclosure** (native `<details>` styled, for "Sources", "How the split works", methodology) | Calms /confirm and the detail page. | new | 2 |
| B10 | **AreaMark** (renders one of three flat SVG marks, `aria-hidden`, size sm/md) | Identity for the three areas without colour reliance. | new (needs assets C1) | 2 |
| B11 | **Input / Select** | Feedback form (T-35), settings later. | T-10 | 4 |
| B12 | **Sheet** | "Change causes" / "How the split works" without leaving the screen. Post-first-test. | T-13 | 4 |
| B13 | **Toast** | Local-save confirmations (T-16 state). Post-first-test. | T-14 | 4 |
| B14 | **EmptyState** + `loading` / `error` / `not-found` | Humane League "No figure sourced yet", bad `[id]`, empty history. | T-24 | 4 |
| B15 | **NonprofitStatus rework** | "Verified" implies Altrue verifies charities; the MVP relies on third-party evaluators. Replace with an evaluator/source-status tag ("Evaluated by GiveWell", "Post-MVP"), or retire. | new (decision) | 2 |

## 3. Wave C · Assets (all local, no external fetch)

| ID | Asset | Form | Needs human? |
|---|---|---|---|
| C1 | Three area marks (Global health, Poverty relief, Animal welfare): simple geometric glyphs, one colour, 24-unit grid, legible at 16 px. Also a neutral "experts" mark for the GiveWell fund. | Inline SVG in `components/ui/AreaMark.tsx` | Yes: pick 1 of 2–3 options shown in Storybook |
| C2 | Wordmark: "Altrue" typeset in Instrument Sans 700, tight tracking; no symbol until brand exists. | SVG + component | Yes: brand sign-off; stays provisional like the palette |
| C3 | Favicon + apple-touch icon + manifest icons from C2's initial or C1-style mark. | `app/icon.svg`, `app/apple-icon.png` via Next file conventions | Light approval |
| C4 | Share preview for the unlisted friend link: flat card (wordmark, one line, "Demo"). | `app/opengraph-image.tsx` (generated at build, no stored PNG) | Copy via §7 |
| C5 | Confirmation mark: flat check in a circle, accent stroke; draws once behind `motion-safe`. | Inline SVG | No |
| C6 | Empty / error marks: reuse C1 shapes in `ink-2` outline. No illustrations. | Inline SVG | No |

Explicitly not producing: charity logos (trademark permission), beneficiary photography (tone, consent, ranking risk), illustration sets, Lottie/animation libraries.

## 4. Wave D · Flow patterns (compose B into the screens; replaces `components/prototype/*`)

| ID | Pattern | Screens | Maps to card |
|---|---|---|---|
| D1 | **FlowHeader** (StepProgress + eyebrow + h1 + lede + "Change" link) | onboarding, causes, give, confirm | T-19/T-20/T-21 |
| D2 | **CharityList** (single-column LinkCards, StatFigure, one-line SourceCitation, AreaMark) | /causes | T-20 |
| D3 | **CharityDetail v2** (StatFigure figure-first, neutral evidence block, metadata in mono ink-2, forward CTA) | /causes/[id] | T-20 |
| D4 | **SplitPreview** (SplitBar + area-grouped Ledger with subtotals + Disclosure "How this split works") | /give, /confirm | T-21 |
| D5 | **GiveForm v2** (Amount + AmountSlider + OptionRow experts + StickyActionBar with live total) | /give | T-21 |
| D6 | **ConfirmationSummary** (C5 mark, Amount hero, one demo line, SplitPreview, de-duped Sources disclosure) | /confirm | T-21 |
| D7 | **ImpactEstimate** (StatFigure list, caveat, "not applied to your amount" rule) | /impact | T-22 (blocked on data rule) |
| D8 | **HistoryRow** (date, amount, "Demo" tag, split summary) | /donations | T-23 |
| D9 | **FeedbackForm** (Input/Select, local only) | /feedback | T-35a |
| D10 | **AssistantPanel** (mock AI: message, suggestion with "why" + SourceCitation chips, "not advice" label, only seed data) | later | new, post-first-test, W 5+ |

## 5. Wave E · Storybook as the review surface

- Page stories for /onboarding, /give, /confirm (only /causes and /causes/[id] have them), driven by URL args.
- A "Flow / 390" storyboard story: the four steps side by side, for visual QA in one view.
- Play tests: slider keyboard steps; split sums to total (cents); experts toggle routes 100%; OptionRow max-3; reduced-motion snapshot (emulate `prefers-reduced-motion`).
- Worst-case stories for D2/D4: long charity names, missing figure, six-way split at minimum amount.
- Chromatic is installed, but publishing to it is an external send: needs the human's say-so.

## 6. Stale cards Strategy should repoint before they run

Resolved 2026-11-12: T-29 to T-32 repointed to the live routes; T-19 to T-21 marked "done by prototype, review only" with gaps carried; FIRST-TEST-PATH updated.

- T-29–T-32 target `PublicLayout`, `DonorAppLayout`, `app/causes/[slug]`, `app/plan/review`, `app/checkout`. These routes are retired or redirected; the live flow uses `MobileShell` and `app/causes/[id]`, `/give`, `/confirm`.
- T-12 bundles Card + Progress; fine to keep as one card.
- FIRST-TEST-PATH lists T-19–T-21 as rebuilds; the prototype already covers much of them. Decide "build on" vs "replace" before D-wave.

## 7. Suggested order and caps

1. Wave A (A1, A2, A5 in parallel on Sonnet fallback; A3, A4, A6 on Claude Standard). A4 needs the palette nod.
2. B1, B2, B5, B7, B8 (unblock the polish run from the earlier critique).
3. C1 options in Storybook → human picks → B10.
4. D1, D4, D5, D6 (give/confirm), then D2, D3 (discovery).
5. B3, B4, B6, B9, B14 alongside D-wave as needed.
6. After first friend test: B11–B13, B15, C2–C4, D7–D10, Wave E storyboard.

Review: every B/D card is T = 2 → Craft builds, Codex reviews (R ≥ 1 for shared UI). Two Claude workspaces max.

## Open decisions for the human

1. Accent colour (blocks A4 surface tint and any area tints).
2. Area marks: approve shape set (C1).
3. Wordmark now, or stay text-only until brand work.
4. NonprofitStatus: rework to evaluator tags, or retire.
5. Chromatic: publish snapshots externally, yes or no.
