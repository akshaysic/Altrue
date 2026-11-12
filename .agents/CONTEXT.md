# Altrue context

Altrue is a meta-charity microdonation app. Donors make a simulated giving plan across selected high-impact causes and see modest, caveated impact estimates. The donor flow is the friends-test product.

## MVP scope

- Mobile-friendly onboarding for Global health, Poverty relief, and Animal welfare only.
- Equal featured set: GiveDirectly, Malaria Consortium, Against Malaria Foundation, Helen Keller Intl, and New Incentives; GiveWell Top Charities Fund is a separate “let experts decide” choice.
- The Humane League is the only MVP animal charity; other animal records stay in data marked “post-MVP”.
- Static curated GlobalGiving entries; no live API feed in MVP.
- Simulated giving, sourced estimates, local history, and a local feedback path; `/demo` is a labelled sidecar.

## Stack

Next.js 16 App Router, React 18, TypeScript 5.6, Tailwind 3, lucide-react; local seed data and browser `localStorage`. Payments and AI are mocked.

## Current step

T-09 passed independent Codex review on 2026-11-11. T-11 (Button and CauseChip states) is Done after the user's Codex go-ahead on 2026-11-12: lint, typecheck, Storybook build, 55 story tests, app build and 390 px accessibility/contrast checks passed. Next in `.agents/FIRST-TEST-PATH.md` is T-17 (source schema and loader), blocked until the human confirms they have skimmed the source packet; T-18 shares that gate. T-10 (Input and Select) remains deferred until after the first friend test. Palette is still provisional (accent green `#2E5E45`, no brand approval).

## Key file map

- Roadmap/status: `.agents/PLAN.md` §6; current audit: `.agents/STATUS.md`.
- Decisions: `.agents/DECISIONS.md`; one-session briefs: `.agents/tasks/T-<nn>-*.md`.
- Flow inventory: `.agents/research/flows-and-screens.md`; T-05 source packet is `.agents/research/charity-shortlist-2026-11-07.json` and `.md` (now present, 15 entries; the human's skim is still the gate).
- Copy voice: `.agents/VOICE.md`; demo-slice detail: `.agents/design/first-demo-slice-plan-OLD.md` (reference only).
- T-04's visual handoff is for the `/demo` sidecar, not the core donor-flow layout.
- App routes: `app/`; reusable UI: `components/ui/`; source types/data: `lib/types/`, `lib/seed/`; local state: `lib/store/`.

## Rules

1. Flat visual style: no shadows or glow.
2. Sourced data: every record has `source_name`, `source_url`, and `as_of`; figures say “estimate”; omit unsupported figures or label them “illustrative”. No tax-deductibility claims.
3. Demo labelling: no money moves; `/demo` stays a sidecar and friends test the simulated donor flow.
4. One card per session: start here, then read the current card and stay within its listed files.
