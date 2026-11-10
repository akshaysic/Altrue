# Altrue status

Audit snapshot: 2026-11-07. Planning only; no app code or checks run. Scope and evidence are from `.agents/PLAN.md`, `.agents/CODEMAP.md`, `.agents/BRIEF.md`, `.agents/VOICE.md`, `.agents/research/flows-and-screens.md`, and the named task cards.

## Decisions I need from the human

- No product decision blocks T-09. Before T-28 copy work, choose three of the six candidates below; recommendation: #3, #4, and #6.
- Input gate, not a product decision: `.agents/research/charity-shortlist-2026-11-07.json` and `.md` are now in the repo (updated 2026-11-10). T-17/T-18 data work still waits for the human's skim.

### Voice candidates (draft only)

1. Error: “That didn’t save. Please try again.”
2. Empty state: “No causes selected yet. Choose one to start your plan.”
3. Primary button: “Review my plan”
4. Confirmation: “Demo gift confirmed. No money moved.”
5. Demo banner: “Demo only: no money moves.”
6. Source note: “Illustrative until this figure has a source name, URL, and as-of date.”

## A. Git

Initial audit: branch `akshaysic/agents/plan.md-setup`, HEAD `21f71f0`, equal to `origin/main`; worktree was clean before planning edits. Current changes are confined to `.agents/` (PLAN, STATUS, CONTEXT, DECISIONS, and planning cards); no app files changed. Prior audit found no open PRs: #5 remains closed; #8 is closed unmerged. Stale refs noted then: `origin/plan/impact-data` and local `akshaysic/altrue-repository`, `akshaysic/figma-flows-and-screens-read`, `akshaysic/plan.md-ai-budget`, `akshaysic/setup-storybook`, `akshaysic/t-01-codemap` (deleted upstreams). No branch cleanup or commit.

## B. Agent-file and card status

`.agents/` contains PLAN, STATUS, VOICE, BRIEF, CODEMAP, design archive, prompts, flow inventory, and task cards T-01–T-36 plus `_TEMPLATE.md`. T-01/02 Done; T-03 waits for reviewed T-04 and the copy chain; T-04 Ready with `/demo` sidecar handoff/review outstanding; T-05 blocked on T-04, T-03 PASS, and packet skim; T-06 pending review; T-07/08 Done. T-09 Ready (first build card); T-10–16 Pending. T-17/18 Blocked on packet and skim; T-19–21 Pending; T-22 Blocked on approved sources; T-23–27 Pending. T-28 Blocked on voice/copy prerequisites; T-29–32 Pending; T-33 Ready after T-29–32 (core-flow QA, no T-04 layout dependency); T-34 waits for T-33; T-35 waits for T-33–34; T-36 Pending. See each `.agents/tasks/T-*.md` for exact gates.

## C. Code inventory

`.agents/CODEMAP.md` reports Next.js 16, React 18, TypeScript 5.6, Tailwind 3, and lucide-react. App Router pages are in `app/`; shared UI/layouts in `components/`; seeds/types in `lib/seed/` and `lib/types/`. Pages use static local seeds; no database/API or local persistence is mapped. Styling is Tailwind plus `app/globals.css` and `tailwind.config.ts`; Storybook has 19 stories. `vitest.config.ts` configures browser tests, but `package.json` has no test script. CI and deploy config are unknown from the requested evidence. No checks run.

## D. Screens

From `.agents/research/flows-and-screens.md` (not visual QA): wired to seed/config scaffolds: S-01, S-02, S-03, S-09, S-11, S-13, S-14, S-15, S-20, S-21, S-22. Built partial/static/fallback: S-03a, S-04–S-07, S-12, S-21a, S-23, S-25, S-27. Not started: S-01a; S-02a/b; S-03b/c; S-06a/b; S-07a; S-08; S-09a/b; S-10; S-11a/b; S-12a; S-13a–g; S-14a–f; S-15a–e; S-16/a–d; S-17/a; S-18; S-19/a; S-20a; S-21b/c; S-22a; S-23a; S-24; S-26; S-28; S-29; S-31. “Built” means inventory/code notes, not QA evidence.

## E. Data and provenance

Cause, nonprofit, impact, plan, report, and donation records are static TypeScript in `lib/seed/`; source/impact placeholders exist and `Cause` lacks provenance (`.agents/CODEMAP.md`, T-17). Approved source packet is `.agents/research/charity-shortlist-2026-11-07.json` and `.md`; neither is present. Every record must carry `source_name`, `source_url`, and `as_of`; sourced figures say “estimate”; unsupported figures are omitted or explicitly “illustrative”. T-17/T-18 wait for the packet and human skim. No tax-deductibility claims.

## F. Resolved decisions and remaining gates

- T-06 canonical; PR #5 stays closed. PR #8 closed unmerged; rerun `npm audit fix` fresh on main later.
- MVP causes: Global health, Poverty relief, Animal welfare only. Equal featured set: GiveDirectly, Malaria Consortium, Against Malaria Foundation, Helen Keller Intl, New Incentives; no default top pick. GiveWell Top Charities Fund is a separate “let experts decide” option.
- The Humane League is the only MVP animal charity; retain other animal records as “post-MVP”. GlobalGiving is static/curated in MVP; live API is post-MVP.
- T-04 precedes T-03. T-04/T-05 cover the labelled `/demo` sidecar; friends test the separate simulated donor flow. T-04 is not the core route layout spec. Vercel preview/publishing is authorized after mobile QA, unlisted and noindex.
- T-09 is done (2026-11-10); T-10 is next, Ready with Claude Sonnet 5.5 / normal. T-17/T-18 remain blocked on the human's skim of the packet; three voice candidates remain to be selected before T-28.

## G. Friends-test risks

The mapped app is mainly static scaffolding; simulated giving, local state, and core route behavior remain to build. Source packet handoff/skim gates data work; T-04 review and voice selection gate sidecar/copy work; mobile QA gates preview publishing. Do not cut provenance or demo disclosure; if schedule slips, cut history/state extras before trust requirements (`.agents/PLAN.md` §5–6).
