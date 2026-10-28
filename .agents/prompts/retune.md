# Retune the routing
*Any agent; Codex by default. Run every ~15 new receipts. This is how the workflow trains itself.*

1. Read every `.agents/tasks/T-*.md` that has a filled Receipt, plus AGENTS.md §1–3 and §11.
2. Write `.agents/retune-<date>.md` with:
   - A scorecard by lane × tier: cards, clean rate, average human turns, wrong-lane count, average gap between planned and hindsight W.
   - The task types (UI build, copy, tests, refactor, research…) that landed in the wrong lane, and where they should go.
3. Propose changes using these rules, each with its evidence:
   - A task type marked wrong-lane in 2 or more of its last 5 cards → move it in the Lanes table.
   - Light tier fixed-after-review more than 30% of the time → lower the Light ceiling by 1, or raise the weight of the factor that kept under-scoring.
   - Heavy tier clean on more than 80% of at least 5 cards of one type → try the Standard model for that type.
   - Planned and hindsight scores for one factor differ by 2 or more on average → change that factor's weight.
   - A lane averaging more than 4 human turns → its cards need more context; add a rule to `plan.md`.
   - A newer model shows up in Conductor's picker → propose a model-map update. Use the name exactly as the picker shows it; don't guess.
4. Show the exact edits as a diff against the managed block of AGENTS.md (and `plan.md` if needed), plus a one-line Routing changelog entry. Change nothing until the human approves.
5. After approval, apply the edits here and remind the human to copy them into the kit master and re-run `install.sh` in their other projects.
