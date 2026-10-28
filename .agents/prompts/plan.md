# Plan → task cards
*Strategy lane · Codex · Standard or Heavy*

The human gives you:
- **Brief:** pasted text or a file path (usually `.agents/BRIEF.md`)
- **Budget:** e.g. `claude ok · codex ok · gemini ok` (a vendor marked `low` gets rerouted where AGENTS.md §11 allows)

Do this:

1. Read `AGENTS.md`, `.agents/CODEMAP.md` and `.agents/VOICE.md`. If the repo has code but no CODEMAP, the first card is a Light Read card that runs `.agents/prompts/codemap.md` in wave 0.
2. If something in the brief blocks planning, ask up to five questions and stop. Otherwise write your assumptions down and keep going.
3. Write `.agents/PLAN.md`: goal, non-goals, assumptions, risks, then the dispatch table from step 5.
4. Split the work into cards, one file each, from `.agents/tasks/_TEMPLATE.md`, named `.agents/tasks/T-<nn>-<slug>.md`:
   - Each card can be merged on its own and is ideally W ≤ 5. Never W 8+.
   - Cards in the same wave never edit the same files.
   - Score every factor honestly, apply the steering overrides, and take the model from the model map. Add a reviewer from the other vendor only where AGENTS.md §9 calls for one; Light cards self-check.
   - Copy: one card per piece of copy. Lane is Strategy, and the acceptance criteria list the stages: draft (Codex) → humanise (Claude, second chat) → verify (Codex, fresh chat).
   - Design: an exploration card (Craft, Claude Design) comes before any build card that depends on it.
   - Keep each wave inside the parallel caps (2 Claude, 2 Codex, 3 Gemini) and the budget line.
   - Give every card enough context that its start prompt can be one line.
5. Dispatch table at the end of PLAN.md:

   | Wave | Card | Agent | Model / effort | Start prompt |
   |---|---|---|---|---|

6. Commit PLAN.md and the cards as `plan: <goal>`. Then tell the human: review the plan, merge it, then fan out wave by wave (one Conductor workspace per card, using each card's start prompt).

Don't write product code in this session.
