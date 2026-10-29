# Plan every flow and screen in Altrue

A multi-modal planning run in three stages:

1. **Gemini (Read lane)** reads everything, images included, and writes a complete flow and screen inventory.
2. **Codex (Strategy lane)** turns that inventory into the MVP roadmap and the next cards.
3. **Design** happens in Claude Design, with the human. It isn't an agent run.

AGENTS.md applies throughout: lane check, model check, receipts. Never invent facts, metrics, nonprofits, prices or dates. Anything not in the sources is marked *proposed* or **[OPEN]**.

## Inputs

Copied into `.context/inputs/` (gitignored) before Stage 1. Code and docs are already in the repo.

| Kind | Path | What it is |
|---|---|---|
| Text | `docs/*.md` | Product source of truth: context, MVP requirements, IA and routes, AI assistant rules, cause taxonomy, roadmap |
| Code | `app/`, `components/`, `lib/seed/`, `lib/types/`, `.agents/CODEMAP.md` | What exists today. Every route is a scaffold rendering seed data |
| Images | `.context/inputs/figma-sheets/*.jpg` | One contact sheet per page of the 2023 Figma file. **Start here** |
| Images + layout | `.context/inputs/figma/views/<node>.png` and `<node>.json`, `meta.json`, `styles.json` | All 149 legacy screens. The PNG for looking, the JSON for exact text |
| Text | `.context/inputs/altrue-legacy-audit.md` | What to keep and what to leave from Figma, plus the 2023 survey of 30 people |
| Images + text | `.context/inputs/references/*.png`, `references.md` | Mobbin references, with what to take and what to skip from each |
| Text | `.context/inputs/design-direction.md` | The current design direction from the Claude Design canvas (v0, not locked yet) |

## Stage 1 · Flow and screen inventory

**Agent:** the Read lane. With `Gemini: off`, that's Claude Sonnet 5.5, since this work is visual. Otherwise it's Gemini, newest Flash.
**Lane:** Read. **Weight:** S1 A1 R0 C2 T1 = 5 (C = 2 and A ≤ 1 routes to Read).
**Keep it lean:** work from the Figma contact sheets first. Open a single `views/<node>.png` only when you need exact detail for a screen you're describing.

0. Copy this file to `.agents/prompts/flows-and-screens.md`. Create the card `.agents/tasks/T-<next free number>-flow-inventory.md` from the template, with this stage as its goal.
1. **Read** in this order: `design-direction.md`, `altrue-legacy-audit.md`, every file in `docs/`, `CODEMAP.md`, the route files in `app/`, `lib/seed/` and `lib/types/`. Then **look at** every Figma contact sheet. Open the single `views/<node>.png` for any screen you describe, plus its JSON for exact wording. Then the references.
2. **Write** `.agents/research/flows-and-screens.md` with these five sections.

### A. Flow map

Group every flow under one of these headings:
- Public discovery
- Account
- Activation
- Retention and plan control
- Impact
- Cross-cutting (states, errors, notifications)
- Later (roadmap phases 2–6, one line each, no detail)

For each flow, give:
- an ID (`F-01`…)
- the goal in the donor's own words
- entry points
- steps as screen IDs in order
- the success end
- every branch (edge case → the screen state that handles it)
- a Mermaid flowchart

It must cover at least:
- **First visit:** first visit to "start giving"; browse causes → cause detail → add to plan; how it works; the trust page
- **Account:** sign up → onboarding; sign in → dashboard; a signed-out user hitting a donor route
- **Onboarding:** 1 to 5 causes, priority style, monthly amount including custom and below-minimum amounts
- **Plan and AI review:** plan builder → AI review, with accept, edit, even split and the alternative styles; AI output that is malformed or names inactive data
- **Checkout:**
  - amount, split, fees, net donation, cadence, next charge date, and when money moves
  - mocked payment success, failed, pending and cancelled
  - arriving without a valid plan
- **After activation:** activation → dashboard, first-time state
- **Plan control:** edit amount, edit causes, edit split; pause, resume, cancel; pausing or cancelling a plan that's already inactive
- **Impact:** impact list (no report yet, latest report); report detail with methodology, caveats and the optional share card that hides amounts
- **History and settings:** donation history; settings (profile, notifications, payment placeholder, plan controls)
- **Reminder:** a reminder before each monthly charge *(proposed, from the pillowtalk reference)*

### B. Screen inventory

One table row per screen, plus one row per distinct state. Columns:

| Column | What goes in it |
|---|---|
| ID | `S-01`… |
| Route | |
| Layout | Public, Auth, Decision, DonorApp or Report |
| Purpose | |
| Data shown | Exact type and seed field names |
| Primary action | |
| Secondary actions | |
| Trust surfaces | |
| States | |
| In code today | File path, and whether it's a scaffold or real |
| Legacy Figma | Node id, keep or leave per the audit |
| Reference pattern | Image file, and the pattern taken from it |
| Open questions | |

Mobile first at 390 px wide; note where the desktop layout differs.

### C. Evidence

For every Figma frame or reference you cite, give the file path you actually opened. If an image won't open, say so and work from its JSON. Never describe an image you didn't open.

### D. Conflicts and gaps

List every place where docs, code, Figma and the survey disagree. Give each a suggested resolution, marked **[OPEN]** for the human. Known starters:
- dollars in the code vs euros in the survey
- €10 and €25 tiers in Figma vs "premium tiers" listed as non-MVP
- badges and sharing in Figma vs complex gamification listed as non-MVP
- per-cause sources missing (T-01 receipt)
- no password-reset or account-deletion screens in the docs

### E. Coverage check

A checklist proving that:
- every route in `IA_AND_ROUTES.md` has a screen
- every edge case in `MVP_REQUIREMENTS.md` is a state somewhere
- every Trust Surface Area in `ALTRUE_PRODUCT_CONTEXT.md` is placed on a screen
- every acceptance criterion maps to at least one screen

3. **Keep it scannable:** tables over prose, at most three lines per screen description. Don't change any app code.
4. **Fill the card's receipt**, commit as `docs: flow and screen inventory`, and open the PR. Git chores run on the Light model.

## Stage 2 · MVP roadmap and next cards

**Agent:** Codex, GPT-6.1 Sol. **Lane:** Strategy. Runs once the Stage 1 PR is merged.

1. **Read** `.agents/research/flows-and-screens.md`, `AGENTS.md`, `.agents/BRIEF.md`, `.agents/PLAN.md`, and `design-direction.md` (in `.context/inputs/` if present; otherwise ask for it).
2. **Write** `.agents/ROADMAP-MVP.md` as milestones by flow, in the IA build order: discovery → activation → dashboard → impact → history and settings → how it works and trust. Each milestone lists:
   - its screens (S-IDs)
   - design, copy and build deliverables
   - visual QA
   - exit criteria

   **The design system comes first:** nothing is built before the design system and its `DESIGN.md` exist.
3. **Plan the full set for every screen:**
   - **Design:** artboards in Claude Design, at mobile 390 and desktop 1440
   - **Copy:** in `.agents/copy/<slug>/` through the AGENTS.md §7 double-check
   - **Build:** Claude
   - **Visual QA:** Gemini compares screenshots at 390, 768 and 1440 against the design
   - **Code review:** Codex
4. **Write cards only for the next two milestones,** from the template:
   - each card W ≤ 5, numbered from the next free number
   - each on the cheapest model its weight allows
   - waves inside the parallel caps

   Everything later stays in the roadmap, not as cards.
5. **Leave PLAN.md's open cards (T-03 to T-05) alone,** and slot them into the milestone they belong to. Resolve nothing marked **[OPEN]**: list those at the top of the roadmap for the human.
6. **Commit** as `plan: Altrue MVP roadmap` and open the PR.

## Stage 3 · Design (human and Claude)

The human brings `ROADMAP-MVP.md` into the Claude Design chat. Flows are sketched there milestone by milestone, from the screen inventory. They then come into the repo through `/design-sync` and `DESIGN.md`.
