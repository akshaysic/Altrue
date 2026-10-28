# T-01 · Map the existing application

| Lane | Agent | Tier | Model / effort | Reviewer | Wave | Depends on |
|---|---|---|---|---|---|---|
| Read | Gemini (agy) | Light | newest Gemini Flash / default | self-check | 0 | none |

**Weight:** S0 A0 R0 C2 T0 = **2**. One documentation artifact, exact map prompt;
whole-repo reading is C2 and routes to Read. No code edits.
**Status:** ready
**Start prompt:** `Do T-01 (.agents/tasks/T-01-codemap.md).`

## Goal
Give subsequent agents an accurate, compact map so they can build the first demo
slice without rediscovering the repository.

## Context
- Read `AGENTS.md`, `.agents/PLAN.md`, then run `.agents/prompts/codemap.md`.
- CODEMAP is missing at baseline `95ad16c`; this card is the explicit exception
  permitting repo exploration before a map exists.
- Write only `.agents/CODEMAP.md` and this receipt. Application code is read-only.

## Acceptance criteria
- [ ] CODEMAP follows all seven sections of the codemap prompt, ≤150 lines, with
  date and actual short HEAD; unsupported commands/features are labelled absent.
- [ ] Identify the real App Router root, home entry, seed exports and types,
  source/caveat fields, reusable UI/tokens, and any existing donation/split logic.
- [ ] Identify up to three usable active local cause records by actual ID/export
  and provenance location; explicitly flag absent data instead of inventing it.
- [ ] Note startup/build external requests, remote fonts/assets, installed
  dependencies, and whether locally running checks is feasible.
  Do not fetch sources, install packages, or call external services.
  README.md belongs to T-02, which runs in parallel: don't describe its conflict state.
- [ ] Map the isolated `/demo` change locations proposed in T-05; flag if its
  assumptions are invalid or the work needs rescoring before build dispatch.
- [ ] Self-check paths and commands against the repo (Light, R0: no cross-vendor
  review per AGENTS.md §9). Commit as the map prompt specifies and open the PR,
  on the same Light model.

## Out of scope
- Any product, seed, config, dependency, README, or VOICE change; fixes discovered
  during reading; external research; additional cards or internal subagents.

## Receipt
- Ran on: NOT RUN; assigned Gemini / newest Gemini Flash / default. Record actual model at execution.
- Weight in hindsight: pending execution; planned S0 A0 R0 C2 T0 = 2.
- Human turns after the first prompt: pending execution.
- Outcome: pending execution (self-check).
- Review caught: n/a, Light self-check.
- Right lane?: planned yes, Read under the C2/A0 override; confirm after execution.
- Found, not done: CODEMAP missing at planning baseline; record additional findings here.
- Note: planner filled scheduling data only; executor records checks, commit, and handoff before PR.
