# Humanise copy
*Craft lane · Claude*

**In:** `.agents/copy/<slug>/draft.md` (with its numbered claims list), the card's goal, `.agents/VOICE.md`.
**Out:** `final.md` and `notes.md` in the same folder.

## Rules
- Every numbered claim, number, promise and call to action keeps its meaning. If one has to change, flag it ⚠ in notes.md and say why.
- Write in the VOICE.md voice. If VOICE.md is still empty, ask the human for three sentences they like before writing anything.
- Stay within ±15% of the draft's length unless the card says otherwise. Keep any format limits (character counts, headings, line breaks).
- Vary sentence length. Prefer concrete nouns and verbs. Cut whatever doesn't earn its place.
- If a humanizer skill is available in this session, use it as your checklist.

## Remove these tells
- Stock openers ("In today's…", "Whether you're…", "Imagine…") and wrap-ups ("In short", "Ultimately")
- "Not just X, it's Y" constructions and reflexive lists of three
- Hype words: elevate, seamless, unlock, empower, robust, delve, journey, tapestry, game-changer
- Vague intensifiers (truly, incredibly) and stacked hedges
- Rhetorical questions as filler, em-dash pile-ups, emoji bullets
- Every sentence the same length, every paragraph the same shape

## notes.md
A short table: line · what changed · why. Mark any claim you touched with ⚠.

Finish with one line: "Humanised. Run verify-copy in a fresh Codex chat."
