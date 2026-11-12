# T-15 · Build the app shell and feedback entry
Status: Done
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A1 R1 C1 T1 = 5
Goal: Provide consistent public/donor shells, mobile navigation, and a visible feedback link.
Inputs: .agents/CODEMAP.md; .agents/research/flows-and-screens.md; app/layout.tsx; components/layout/PublicLayout.tsx; components/layout/DonorAppLayout.tsx; components/layout/PublicNav.tsx; components/layout/DonorNav.tsx.
Deliverable: Update app/layout.tsx, components/layout/PublicLayout.tsx, components/layout/DonorAppLayout.tsx, components/layout/PublicNav.tsx, and components/layout/DonorNav.tsx (5 files), plus the DonorNav story assertion (feedback link added).
Out of scope: Auth guards, onboarding state, persistent feedback submission, dashboard redesign, and external service calls.
Acceptance:
- [x] Public and donor routes render in responsive shells with navigation to existing routes.
- [x] A feedback link is visible in both shells; it points to the local feedback route planned in S3.4.
- [x] Keep focus visible, mobile layout usable, and all surfaces flat.
Decisions needed: None; feedback is local-only until the S3.4 form is built.
Handoff note:
- Shell boundaries: `app/layout.tsx` sets the viewport and the base ground/ink/font tokens. `PublicNav` (server) serves `PublicLayout` and `DecisionLayout`; `DonorNav` (client, uses `usePathname`) serves `DonorAppLayout` and `ReportLayout`. Both shells now use T-09 `ds-*` tokens, flat surfaces, 44px minimum targets and visible focus rings.
- Feedback-link target: `/feedback` (local route, built in T-35). It is in `PublicNav` (header, desktop and phone rows) and `DonorNav` (last item). Until T-35 lands it 404s by design.
- Phones: the public links, hidden before, now scroll in a second row; the donor nav scrolls horizontally with the current section marked `aria-current="page"` (Plan covers /plan/new and /plan/review). Desktop donor nav is the 256px sidebar with Feedback pinned at the bottom.
- `PublicNav` reuses `buttonClassName` from `components/ui/Button.tsx` on main (T-11's Button changes are on branch `akshaysic/t-11-card-build`, not yet merged). Page bodies still use the old `ink/paper/moss` colours; they are not in this card.
- Checks passed: `npm run lint`, `npm run typecheck`, `npm run build`, and the 3 `components/layout` story files (5 tests). Renders at 390px and 1280px on `/`, `/dashboard` and `/plan/new` had no horizontal overflow and no nav target under 44px; screenshots in `.context/t15/`.

Receipt:
- Ran on: Claude Sonnet 5.5 / normal, Craft lane.
- Weight in hindsight: S1 A1 R1 C1 T1 = 5 (Standard).
- Human turns after routing: 2 (card not on this branch; "continue next step without review").
- Outcome: clean; implementation and self-check complete. No review run, by the human's choice (R1 Standard would normally get a Codex review).
- Review caught: not run.
- Right lane?: Yes.
- Found, not done: DonorNav story edited (not in the card's file list) because it asserts the exact link list. Mobile donor nav hides Settings/Feedback until scrolled; a bottom tab bar is a T-29 polish option. T-11 not merged to main; T-09 review still owed. `DecisionLayout`'s sidebar note still uses old colours.
