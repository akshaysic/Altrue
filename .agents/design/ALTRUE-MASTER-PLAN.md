# Altrue: Master Plan and Agent Operating Prompt

Save as `.agents/PLAN.md` in the Altrue repo. Paste the "Session start" block (section 0) at the top of any new agent session. The agent reads this file, reports where things stand, then does ONLY the next step.

Goal: a sleek, shareable MVP that friends can test by ~Fri 13 Nov 2026.

---

## 0. Session start (paste this into every new session, any model)

```
Read .agents/PLAN.md fully, then .agents/VOICE.md, then the card for the current step.
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
- Onboarding: a few questions about what the person cares about.
- Cause discovery: recommended causes/charities from a curated, hand-written dataset (static JSON), each with a short plain-language "why this" and source links.
- Give flow: choose an amount, see a split across causes, confirm. **Simulated.** No real payment, clearly labelled "Demo: no money moves".
- Impact view: what a gift "would" do, using clearly sourced figures.
- Simple profile/history stored locally (localStorage).
- Feedback link/form on every screen footer.

**Out of scope for this MVP** (the hard parts that stalled the project)
- Real payment gateway or any fintech integration.
- Live data pipelines and partnerships.
- AI-decided fund distribution. Use transparent, human-written rules or a visible curated list.
- Rewards/points gamification (maybe a single lightweight "streak" at most).
- Accounts/auth.

**Trust rule:** because this is charity-adjacent, every number shown needs a source in the data file (T-05 provenance). If it has no source, it doesn't ship or it's labelled "illustrative".

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

**Phase 0: Clean up (today)**
- S0.1 Run the audit prompt (section 1). Output: STATUS.md.
- S0.2 Resolve housekeeping: merge or close PR #8 (audit fix); decide PR #5 (renumber its card to T-07 or rebase); commit or discard local `.agents` edits; decide T-05 source provenance (recommended: every datum carries `source_url`, `source_name`, `as_of`).
- S0.3 Write the post-inventory MVP roadmap (this section, refined) and commit PLAN.md.

**Phase 1: Foundation (Sat to Sun)**
- S1.1 Finish design system essentials in Storybook: colour/type/spacing tokens, Button, Input, Select/Chips, Card (flat), Progress, Sheet/Modal, Nav, Toast. States and dark/light only if cheap.
- S1.2 App shell: routing, layout, mobile-first container, nav, feedback link, localStorage store.
- S1.3 Data layer: JSON schema for causes + sources (T-05), 8 to 12 curated causes, loader and types, one unit test.

**Phase 2: Core flow (Mon to Wed), one screen or feature per session**
- S2.1 Onboarding questions (T-04 first demo slice).
- S2.2 Cause recommendations list + cause detail with sources.
- S2.3 Give flow: amount, split, confirm (simulated), success state.
- S2.4 Impact view (sourced, labelled illustrative where needed).
- S2.5 History/profile (local).
- S2.6 Empty, loading, error states across the flow.

**Phase 3: Polish and ship (Thu to Fri)**
- S3.1 Copy pass (Codex draft, Claude humanise) against VOICE.md.
- S3.2 Visual polish: spacing, type, motion (subtle), accessibility (contrast, focus, labels).
- S3.3 Mobile QA on real phone sizes; fix breakpoints.
- S3.4 Deploy preview (Vercel/Netlify), shareable URL, analytics-light or none, feedback form.
- S3.5 Tester brief: 3 tasks to try, 5 questions to answer, one page.

**Cut line if time slips:** drop S2.5 and S2.6 extras first, then impact view detail. Never cut sources or the "Demo" labelling.

---

## 6. Live status (agents update this table)

| Step | Status | Branch/PR | Notes |
|---|---|---|---|
| S0.1 Audit | Todo | | |
| S0.2 Housekeeping | Todo | | PR #5/#6 numbering, PR #8, T-04 review, T-05 provenance, T-03 copy |
| S0.3 Roadmap committed | Todo | | |
| S1.1 Design system | Partial | PR #7 merged | Storybook + first components exist |
| S1.2 App shell | Todo | | |
| S1.3 Data layer | Todo | | |
| S2.x | Todo | | |
| S3.x | Todo | | |

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
