# T-07 · Resolve housekeeping and source gates
Status: Done
Model: Strategy — GPT-6.1 Sol / high; human checkpoint required for R2
Weight: S1 A2 R2 C1 T0 = 6
Goal: Record and carry out approved housekeeping dispositions for PR #5/#8 and source provenance before implementation resumes.
Inputs: .agents/PLAN.md; .agents/tasks/T-05-cause-split-preview.md; .agents/tasks/T-06-flow-inventory.md; package.json; package-lock.json; GitHub PR #5 and #8 metadata, changed-file lists, diffs, and check results.
Deliverable: Update .agents/PLAN.md, this card, and T-05/T-06 only as needed; record verified check results and the provenance decision. PR actions remain gated on the human's decisions.
Out of scope: Reopening PR #5 wholesale, blind merge of #8, source invention, app changes, commit/push without approval.
Acceptance:
- [x] Preserve T-06 as canonical; PR #5 remains closed without reusing its card numbers.
- [x] Close PR #8 unmerged per the human; defer a fresh `npm audit fix` run on main.
- [x] Record the approved figure rule: source name, URL, and as-of date, or label it “illustrative”.
- [x] Record that the worktree was clean before planning edits; no prior edits needed commit/discard.
Decisions needed: None for T-07; the designated shortlist packet and human skim remain gates for T-17/T-18.
Handoff note: PR #8 closed unmerged; no audit-fix rerun now (fresh `npm audit fix` on main is deferred by the human). T-05 source data is `.agents/research/charity-shortlist-2026-11-07.json` and `.md`; neither file is present in this workspace, so data cards wait for both files and the human's skim. T-08 is next.
Receipt: Codex; weight W6; outcome done per the human's decisions; human checkpoint received; Strategy lane. Checks not rerun because no merge was attempted. Found, not done: designated source packet unavailable pending handoff and skim; fresh audit fix deferred.
