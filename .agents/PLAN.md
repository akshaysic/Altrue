# Altrue: Master Plan and Agent Operating Prompt

Save as `.agents/PLAN.md` in the Altrue repo. Paste the "Session start" block (section 0) at the top of any new agent session. The agent reads this file, reports where things stand, then does ONLY the next step.

Goal: a sleek, shareable MVP that friends can test on a phone. The shortest route there is `.agents/FIRST-TEST-PATH.md`.

---

## 0. Session start (paste this into every new session, any model)

```
Read .agents/CONTEXT.md first, then the card for the current step. Consult .agents/PLAN.md section 6 for roadmap/status and .agents/VOICE.md when the card includes copy.
Do NOT start building yet. First reply with, in under 200 words:
1. Current step ID from PLAN.md section 6 and whether its card is Done/Ready/Blocked.
2. Git state: branch, ahead/behind, uncommitted files, open PRs.
3. Anything in the repo that contradicts PLAN.md.
4. The exact deliverable you will produce for this step and what you will NOT touch.
Then wait for "go".
After "go": do only that step, run lint/typecheck/tests/Storybook build, update PLAN.md section 6 and the step card, commit on a branch, and stop. Do not begin the next step.
```

---

## 1. Status audit prompt (run once now, in a planning model)

```
Do a read-only audit of this repo. Change nothing. Produce .agents/STATUS.md with:

A. Git: current branch, HEAD vs origin/main, uncommitted files (list each with a one-line summary of what changed), open PRs (number, title, base, conflicts, mergeable?), stale branches.
B. Inventory: list every file in .agents/ (tasks, design, VOICE.md, flows-and-screens.md) with status per card: Done / Ready / Blocked / Pending review, and why.
C. Code: framework and versions, folder structure, routing, state management, styling approach, design tokens location, components built (Storybook stories), components referenced in flows-and-screens.md but not yet built, tests, CI, deploy config.
D. Screens: for every screen in flows-and-screens.md, mark Not started / Designed / Built / Wired to data.
E. Data: where cause/impact data comes from today (mock, static JSON, API), and what the T-05 source-provenance question actually is.
F. Conflicts and decisions: T-06 numbering conflict (PR #5 vs merged T-06-flow-inventory), PR #8 audit fix, T-04 Codex review pending, T-03 copy pending. For each, propose a recommended resolution and the cost of leaving it open.
G. Risks to a friends-testable MVP in one week.
Keep it factual, cite file paths. Max 2 pages.
```

---

## 2. MVP definition (default, edit if wrong)

A web app a friend can open on their phone, click through in 5 to 10 minutes, and give feedback on.

**In scope**
- Onboarding: choose among Global health, Poverty relief, and Animal welfare, with optional priority and monthly amount. Catastrophic risks and Community-chosen are outside the MVP.
- Cause discovery: static curated records with source links. Show GiveDirectly, Malaria Consortium, Against Malaria Foundation, Helen Keller Intl, and New Incentives side by side as equals, with no default top pick. Offer GiveWell Top Charities Fund as the separate “let experts decide” option.
- Animal welfare: The Humane League is the only MVP animal charity. Keep other animal records in data flagged “post-MVP”. GlobalGiving uses static curated entries; its live API feed is post-MVP.
- Give flow: choose an amount, see a split across causes, confirm. **Simulated.** No real payment, clearly labelled "Demo: no money moves".
- Impact view: show only sourced figures labelled “estimate”; every record carries `source_name`, `source_url`, and `as_of`. Omit unsupported figures or label any illustrative content “illustrative”. Do not make tax-deductibility claims.
- Simple profile/history stored locally (localStorage).
- Feedback link/form on every screen footer.
- `/demo` remains a labelled sidecar; the simulated donor flow is the friends-test path.

**Out of scope for this MVP** (the hard parts that stalled the project)
- Real payment gateway or any fintech integration.
- Live data pipelines and partnerships.
- AI-decided fund distribution. Use transparent, human-written rules or a visible curated list.
- Rewards/points gamification (maybe a single lightweight "streak" at most).
- Accounts/auth.

**Trust rule:** use `.agents/research/charity-shortlist-2026-11-07.json` and `.md` as T-05's source packet after the human skims it. Each record needs `source_name`, `source_url`, and `as_of`; figures are labelled “estimate”. An unsupported figure is omitted or labelled “illustrative”. Do not invent data or sources.

---

## 3. Working rules for all agents

1. One step per session. Small PRs. Never leave main broken.
2. Plan first, build second: if a step touches more than ~5 files or a decision is unclear, write the plan into the step card and stop for approval.
3. Read before writing: only open files the card lists. Do not scan the whole repo.
4. Design system first: use tokens and components from Storybook. New component = story + variants. No one-off styles.
5. Visual style: flat, single background colours, no drop shadows, no glow, no floating cards on coloured backgrounds. Modern, minimal, generous spacing, strong typography.
6. Copy follows `.agents/VOICE.md`. Draft copy in Codex, humanise/check in Claude.
7. Every step ends with: checks pass, PLAN.md section 6 updated, short handoff note in the card ("what changed, what's next, open questions"), commit, stop.
8. Git hygiene (commit, push, open PR) goes to the cheapest model.
9. Don't invent data. Missing source = ask or mark illustrative.
10. If context feels heavy, stop and write the handoff note; a fresh session resumes from the file.

---

## 4. Model routing

| Work | Model |
|---|---|
| Strategy, roadmap, scope decisions, copy drafts, review of plans | Codex / ChatGPT (strong planner) |
| UI design, component and screen implementation, state logic, debugging | Claude Sonnet (Opus only for gnarly architecture or stuck bugs) |
| Humanising copy, design critique, accessibility pass | Claude Sonnet |
| Commit, push, PR, changelog, dependency bumps, renaming/boilerplate | Cheapest available model (Haiku-class) |
| Independent review of a finished step ("Codex review") | A different model than the one that built it |

---

## 5. Roadmap (front-loaded; each line is one session or less)

**Phase 0: Housekeeping and alignment**
- S0.1 Run the audit prompt (section 1). Output: STATUS.md. Done.
- S0.2 Close PR #8 unmerged; keep PR #5 closed and T-06 canonical. Do not rerun `npm audit fix` now; rerun fresh on main later. Use the designated shortlist packet `.agents/research/charity-shortlist-2026-11-07.json` and `.md` as T-05 source data after the human skims it. The files are now in `.agents/research/`; the human's skim is still the gate.
- S0.3 Reconcile this roadmap against the flow inventory and decisions (T-08); update sections 5–6. Leave uncommitted per the user's instruction.

**Phase 1: Foundation**
- S1.1 Finish design system essentials in Storybook: colour/type/spacing tokens, Button, Input, Select/Chips, Card (flat), Progress, Sheet/Modal, Nav, Toast. States and dark/light only if cheap.
- S1.2 App shell: routing, layout, mobile-first container, nav, feedback link, localStorage store.
- S1.3 Data layer: typed cause/source records, approved MVP organizations and static curated GlobalGiving entries, loader and one unit test. Every record needs source name, URL, and as-of date; label figures “estimate”. Wait for the human's skim of the designated 2026-11-07 shortlist packet; do not invent records or sources. Live GlobalGiving API and non-MVP animal records remain post-MVP.

**Phase 2: Core donor flow, one screen or feature per session. This simulated donor flow is what friends test; `/demo` remains a labelled sidecar.**
- S2.1 Onboarding questions: Global health, Poverty relief, Animal welfare only; T-19.
- S2.2 Cause recommendations list + cause detail with sources; equal featured set, no default top pick, plus the separate GiveWell “let experts decide” option.
- S2.3 Give flow: amount, split, confirm (simulated), success state.
- S2.4 Impact view: every figure has the approved source fields or is labelled illustrative.
- S2.5 History/profile (local).
- S2.6 Empty, loading, error states across the flow.

**Phase 3: Polish and share the preview**
- S3.1 Copy pass against VOICE.md: T-04 and its review precede T-03. The six candidate sentences are in STATUS.md for the human to choose three; then run Codex draft → Claude humanise → fresh Codex verify.
- S3.2 Visual polish: spacing, type, motion (subtle), accessibility (contrast, focus, labels).
- S3.3 Mobile QA on the core simulated donor flow at real phone/tablet sizes and fix breakpoints. T-04's visual handoff covers the `/demo` sidecar, not core route layouts; assess core routes against approved flow requirements and flat tokens.
- S3.4 Deploy an unlisted Vercel preview after S3.3 passes. Ensure all preview responses are `noindex`; publishing is authorized after mobile QA. Keep the feedback form local.
- S3.5 Tester brief: 3 tasks to try, 5 questions to answer, one page.

**Cut line if time slips:** drop S2.5 and S2.6 extras first, then impact view detail. Never cut sources or the "Demo" labelling.

---

## 6. Live status (agents update this table)

| Step | Card(s) | Status | Notes |
|---|---|---|---|
| S0.1 Audit | — | Done | .agents/STATUS.md records the read-only audit; this planning pass remains uncommitted. |
| S0.2 Housekeeping | T-07 | Done | PR #5 stays closed; PR #8 closed unmerged. Fresh `npm audit fix` is deferred. Designated packet is the 2026-11-07 shortlist; source skim gates data work. |
| S0.3 Roadmap reconciled | T-08 | Done | Sections 5–6 record approved causes, data/provenance rules, the core donor test flow, `/demo` sidecar, T-04/T-03 order, and post-QA Vercel preview; left uncommitted. |
| S1.1 Design system | T-09–T-14 | T-09 Done (Codex review 2026-11-11); T-11 Done (self-check 2026-11-12); T-10/T-12–T-14 deferred | Button/CauseChip states, keyboard interaction, focus, hit targets and contrast passed checks, including 55 story tests and 390 px browser checks. Palette stays provisional. Next in FIRST-TEST-PATH.md: T-17, gated on the human's source-packet skim. T-10/T-12–T-14 wait until after the first friend test. |
| S1.2 App shell | T-15–T-16 | Todo | Shell/feedback entry, then browser-local donor state. |
| S1.3 Data layer | T-17–T-18 | Done (self-check 2026-11-12) | Human skim approved. `lib/seed/sources.ts` holds the 7 MVP records (5 featured charities, GiveWell Top Charities Fund as "let experts decide", The Humane League) copied verbatim from the packet, each figure labelled "estimate". `Cause` carries `mvpStatus`/`mvpCategory`; the 8 demo causes stay, 5 flagged post-MVP. Other packet entries stay in the JSON only. `npm test` runs `lib/seed/causes.test.ts` (12 tests). No cross-vendor review run. |
| Prototype run | — (ad hoc, human-requested 2026-11-12) | Reviewed by Codex Luna; deployed to Vercel | Clickable 390 px slice outside the card flow: `/onboarding` (pick up to 3 of the MVP areas) → `/causes` (equal featured five in alphabetical order, GiveWell fund as "Let experts decide", The Humane League) → `/causes/[id]` (summary, labelled figures, evidence, source, as-of), with a demo banner on every screen. Reads the T-18 records in `lib/seed/sources.ts`. All non-packet copy is placeholder in `lib/copy.ts` until T-28. T-19/T-20 can build on it or replace it. |
| Prototype extras | — (follow-up to the prototype run, 2026-11-12) | Done, pending review | Home redirects to `/onboarding`; the old scaffold routes (dashboard, donations, settings, checkout, plan, impact, trust, how-it-works, auth) redirect to `/causes`, so no old demo cause or unsourced metric is rendered (data files kept; page stories for retired screens removed). `/feedback` is a stub with placeholder copy in `lib/copy.ts`; nothing links to it yet (T-35 builds the form). `lib/rendered-code.test.ts` fails if `app/` or `components/` import the old demo data. |
| Prototype give flow | — (ad hoc, human-requested 2026-11-12) | Done, pending review | `/give` (EUR 10 to 50 slider, default 20, plus a "Let experts decide" toggle I added so the 100%-to-GiveWell-fund rule can be reached; live split preview) and `/confirm` (simulated, "Demo: no money moves", split with source links, "Start again"), entered from a new button on `/causes`; choices travel in the URL, nothing stored. `lib/distribution.ts` is the pure, tested "PLACEHOLDER RULE, edit me" split. No impact maths; packet figures stay USD estimates on the charity pages and are not converted. Footer link to `/feedback` on every screen (`FEEDBACK_HREF` in `lib/copy.ts`). `vercel.json` adds a `noindex` header only; nothing deployed, the human presses the deploy button. Amount range lives in `lib/giveConfig.ts`. Not yet reviewed by Codex. |
| S2.1 Onboarding | T-19 | Done by prototype, review only | Depends on shell, UI, and data foundation; offers only Global health, Poverty relief, and Animal welfare. |
| S2.2 Cause discovery | T-20 | Done by prototype, review only | Equal five-organization featured set, separate GiveWell fund, The Humane League as the only MVP animal charity; static curated GlobalGiving entries. |
| S2.3 Give flow | T-21 | Done by prototype, review only | Core friend-test path; simulated only, no real payment calls. `/demo` stays a sidecar. |
| S2.4 Impact view | T-22 | Blocked | Requires the human-skimmed packet and approved source records; sourced figures are labelled “estimate”; unsupported figures are omitted or “illustrative”. |
| S2.5 History/profile | T-23 | Todo | Browser-local simulated activity. |
| S2.6 Empty/loading/error states | T-24–T-27 | Todo | Shared states, then bounded route groups. |
| S3.1 Copy pass | T-28 | Blocked | Finish/review T-04, choose three of the six STATUS.md voice candidates, then complete T-03 and the two-vendor copy pass. |
| S3.2 Visual polish | T-29–T-32 | Todo | Repointed 2026-11-12 to the live flow: MobileShell; /onboarding, /causes, /causes/[id]; /give, /confirm. T-32 blocked until T-23 rebuilds a donor screen. |
| S3.3 Mobile QA | T-33–T-34 | Blocked | T-33 waits for T-29–T-32; it checks the core donor flow against route requirements and tokens. T-04 is a `/demo` sidecar handoff, not a core layout spec. |
| S3.4 Preview deploy | T-35 | Blocked | Vercel and post-QA publishing are approved; wait for mobile QA, then deploy unlisted with `noindex`. |
| S3.5 Tester brief | T-36 | Todo | One page, three tasks, five questions. |

Card paths are .agents/tasks/T-07 through T-36; T-06-flow-inventory.md remains the current inventory card.


---

## 7. Step card template (`.agents/tasks/T-xx-name.md`)

```
# T-xx Name
Status: Ready | In progress | Blocked | Review | Done
Model: (from section 4)
Goal: one sentence
Inputs: files the agent may read
Deliverable: exact files/screens produced
Out of scope: what not to touch
Acceptance: checklist (visual, functional, checks passing)
Decisions needed: (blocks start if non-empty)
Handoff note: (filled at end: what changed, what's next, open questions)
```

---

## 8. Step execution prompt (paste after "go", fill the blanks)

```
Step: <ID and name>. Use the card at <path>.
Build only the deliverable listed. Reuse design-system components; add a story for anything new.
Follow section 3 rules. Flat style, no shadows or glow.
When done: run checks, screenshot the result at 390px width, update PLAN.md section 6 and the card's handoff note, commit on branch <name>, and stop with a 5-line summary.
```
