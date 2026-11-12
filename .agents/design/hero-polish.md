# Hero polish run (2026-11-12)

Scope: Storybook `Hero/*` stories only (`stories/hero/`). No app routes. Craft lane, Standard (S1 A1 R0 C1 T2 = 5).
The user's rules beat the skills: flat (no shadows, glow, gradients, blur), no photos of people, no charity logos,
no invented facts or figures, no personal impact claims, no badges, levels or streaks, reduced-motion safe.

## Step 1 · Skill critique and audit (before fixes, 390 px)

⚠️ DEGRADED: single-context. The run brief already fixed the scope and the deliverable, so the impeccable critique ran
in one context, without its two isolated sub-agents and without its closing questions (questions skipped: the user
pre-scoped the fixes). Detector: `impeccable detect --json stories/hero` → `[]`, so no deterministic findings.
The taste skill (`design-taste-frontend`) is built for marketing websites. Its gate scripts, photographs, effects
and hover-lift rules conflict with the user's rules, so only its one-system, copy, tap-size and contrast checks were applied.

### Heuristics (impeccable critique)

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 2 | "Step 1 of 3" on onboarding only; no sense of where Donate and Plan sit |
| 2 | Match system / real world | 3 | Plain language, USD throughout, sourced figures |
| 3 | User control and freedom | 1 | No back on charity detail; no change or pause for an active plan |
| 4 | Consistency and standards | 1 | Three "Let experts decide" treatments; grouped vs flat split; two section-heading styles; clay meant both "estimate" and "not real" |
| 5 | Error prevention | 3 | Stepper bounds, disabled Continue |
| 6 | Recognition over recall | 2 | Split legend was colour only; Poverty relief near-black, Animal welfare grey read as disabled |
| 7 | Flexibility and efficiency | 2 | Primary actions sat in different places per screen |
| 8 | Aesthetic and minimalist | 2 | $12 three times on Donate; four kinds of disclaimer in clay and pink boxes |
| 9 | Error recovery | n/a | Frames show no error states |
| 10 | Help and documentation | 3 | Sources and as-of kept; source line repeated per figure |
| | **Total** | **19/36** | Acceptable: consistency is the weak axis |

Design specificity: moderate. The ledger layout and sourced-estimate pattern are product-specific. Identity rests on a
text wordmark and a provisional palette, so the frames could pass for any calm fintech app.

### Audit (impeccable audit)

| Dimension | Score | Key finding |
|---|---|---|
| Accessibility | 3 | axe clean; colour-only split legend; history rows said the same thing for every gift |
| Performance | 4 | Static frames; width and opacity transitions only |
| Theming | 3 | `ds-*` tokens throughout; new area colours are story-local hex (provisional) |
| Responsive | 3 | Fixed 390 frame by design; controls ≥ 44 px except inline source links (inline-text exception) |
| Implementation integrity | 3 | Seed-only data; story-local parts duplicate planned DS items (B1, B2, B5, B10) |
| **Total** | **16/20** | Good |

Craft-floor bans hit: eyebrow labels above headings ("Sample donor", "Step 1 of 3", the area label on charity detail).

## Step 2 · Fixes made

1. "Let experts decide" is one `OptionRow` everywhere (Explore, Donate, Plan). On Donate and Plan it sits before the split and collapses it to the fund.
2. Donate: − and + sit beside the hero amount; the stepper row and the action-bar amount are gone ($12 shows once).
3. Disclaimers: the header concept label and "Illustrative split" stay; every other caveat is one plain ink-2 line above the bottom rule. No tinted boxes or SIMULATED tags.
4. `EstimateTag` is ink-2 mono; clay now only means "not real".
5. Area marks (circle, square, triangle) in the bar segments, the legend, the area group labels, the Explore rows and the history strips. Provisional colours: green #2E5E45, blue #1F4E79, ochre #866515 (≥ 5:1 on ground, white marks ≥ 5:1).
6. Plan and Donate share `GroupedSplit`: area groups with subtotals.
7. Section titles are sans (`text-ds-row`); mono caps only for area group labels.
8. Dates use "Sep" (hand-built formatter).
9. One `StepIndicator` (Explore → Donate → Plan) on all three flow screens.
10. Charity detail: lead figure 56 px, second 32 px; one shared source line; Area, Evaluator and Evidence as ledger rows under the summary; "Back to Explore" link.
11. Profile: history rows show an inline split strip with area marks. Added an active plan with Change and Pause, a plain "$36 of $48 planned" progress bar, notification switches, and "What evaluators estimate" (first GiveWell-basis figure per plan charity, one source line, and a line naming the charities without an evaluator figure).
12. Flat bottom tab bar (Explore, Plan, Profile), 1 px top rule, no badges, no shadow. Primary actions sit in a sticky bar above it on every flow screen.
13. USD throughout, no conversion.
14. Small skill fixes: eyebrows removed; "Continue" → "Choose an amount"; primary action in one place per screen; per-area groups are `role="group"`, not landmarks; new `Hero/Overview` story.

### Found, not fixed (bigger than ~10 lines)

- Plan and Donate now show the same split twice in a three-step flow. Plan could become a short confirmation summary.
- No end state after "Confirm plan": the flow's peak-end moment is missing.
- Brand identity is thin (text wordmark, provisional palette). Area colours need the palette nod (plan A4/C1).
- The experts description is four lines on every screen; shorten it in the §7 copy pass.
- On Explore, choosing experts doesn't clear or disable the area picks, so the state is ambiguous.
- Fixed bottom chrome (action bar + tab bar) is about 130 px of an 844 px screen.
- Story-local parts (`AreaMark`, `OptionRow`, `StepIndicator`, `SplitBar`, `Switch`) should be promoted through cards B1, B2, B5 and B10.
- All copy is placeholder until the two-vendor copy check.
