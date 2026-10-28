# Cross-vendor code review

You're reviewing work another vendor's agent wrote. If you're the same vendor as the author, say so in your first line; the review should go to the other one.

Read the card first (its id is in the branch name, PR title or recent commits), then the diff.

## Check, in this order
1. **Acceptance criteria:** is each one met? Quote any that aren't.
2. **Scope:** changes outside the card? Anything from "Out of scope" touched?
3. **Correctness:** bugs, edge cases, error handling, race conditions.
4. **Risk** (if R ≥ 1): data, auth, migrations, secrets, external calls.
5. **Tests:** do they cover the new behaviour, and do they pass? Run them.
6. **UI work:** matches the design handoff and uses existing components and tokens. Copy comes from `final.md`, never a draft.
7. **Readability:** only what will cost someone time later.

## Output
Three lists: **Must fix** · **Should fix** · **Nits** (five at most). Don't rewrite the code unless asked.

Then update the card's Receipt: `Review caught: <n> must / <n> should`. Set `Outcome` once the fixes land.
