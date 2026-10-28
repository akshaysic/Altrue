# T-02 · Remove the README conflict markers

| Lane | Agent | Tier | Model / effort | Reviewer | Wave | Depends on |
|---|---|---|---|---|---|---|
| Craft | Claude | Light | Haiku 5.5 / default | Codex / GPT-6 Luna | 1 | T-01 map available |

**Weight:** S0 A0 R0 C0 T0 = **0**. Mechanical retention of a specified existing
side, one file; no new copy, integration decision, or active Git merge.
**Status:** ready
**Start prompt:** `Do T-02 (.agents/tasks/T-02-readme-markers.md).`

## Goal
Make the existing README readable by removing the accidentally committed conflict
markers and duplicate alternative text.

## Context
- Read `.agents/CODEMAP.md` and `.agents/PLAN.md`.
- At baseline, README has a single `<<<<<<< HEAD` / `=======` / `>>>>>>>` block.
  Retain the HEAD side verbatim and the existing `# Altrue` heading.
- Write only `README.md` and this receipt; this card authors no new product copy.

## Acceptance criteria
- [ ] Retained README equals the pre-conflict heading plus HEAD-side text, with
  markers, separator, and the other side removed; retain its product-doc links.
- [ ] No conflict-marker lines or duplicate alternative section remains in README.
- [ ] Diff is limited to that mechanical cleanup and this receipt; inspect the
  result and check retained local links resolve. No runtime tests are needed.
- [ ] If current README differs from the described block, reassess from the actual
  diff; do not guess at unrelated conflicts or invoke a Git merge.
- [ ] Record actual work/checks, then Codex reviews in wave 2 with the review prompt.

## Out of scope
- New marketing text, fixing stale status prose, rewriting the stack section,
  changing product docs, or resolving repository-wide/active merge conflicts.

## Receipt
- Ran on: NOT RUN; assigned Claude / Haiku 5.5 / default. Record actual model at execution.
- Weight in hindsight: pending execution; planned S0 A0 R0 C0 T0 = 0.
- Human turns after the first prompt: pending execution.
- Outcome: pending execution and Codex review.
- Review caught: pending Codex review; no counts claimed.
- Right lane?: planned yes, tiny reversible cleanup; confirm after execution.
- Found, not done: README contains conflict markers at planning baseline; no broader cleanup scheduled.
- Note: executor records diff inspection and link checks before PR; no new wording is authorised here.
