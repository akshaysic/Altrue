# T-09 · Lock design tokens and foundations
Status: Review
Model: Craft — Claude Sonnet 5.5 / normal (recommended first build model)
Weight: S1 A0 R1 C1 T2 = 5
Goal: Establish the shared flat visual foundations for the donor MVP using the current token system.
Inputs: .agents/CODEMAP.md; .agents/research/flows-and-screens.md; app/globals.css; tailwind.config.ts; components/ui/Foundations.mdx.
Deliverable: Update app/globals.css, tailwind.config.ts, and components/ui/Foundations.mdx (3 files).
Out of scope: New screens, shadows, glow, gradients, new fonts, or a global redesign.
Acceptance:
- [ ] Define named color, type, and spacing tokens and document their intended use in Foundations.
- [ ] Keep CSS variables and Tailwind names aligned; preserve accessible foreground/background pairs.
- [ ] Mark any provisional palette decision as provisional instead of inventing a brand approval.
Decisions needed: None; retain the current accent unless an approved design decision changes it.
Handoff note:
- What changed: `app/globals.css` now lists every token with a comment on its use. Added `--ds-focus`, a spacing scale (`--ds-space-xs` to `2xl`) and control sizes (`--ds-size-touch` 44, `chip` 48, `button` 56). `tailwind.config.ts` mirrors them as `ds-focus`, `p-ds-md`-style spacing and `h-ds-button`/`min-h-ds-touch`. Body background now uses `--ds-ground`. `Foundations.mdx` documents the contrast pairs (all text pairs 5.4:1 or better), the spacing scale, the focus rule and the provisional decisions. Existing components untouched; all changes are additive.
- Palette question for component cards: accent stays green `#2E5E45` and is provisional; no brand approval exists. Blue, rust and ink all pass contrast, so T-10 to T-14 can build on `ds-accent` without waiting. `ds-rule` (1.27:1) is decorative only, so Input and Select (T-10) need an `ink` or `ink-2` edge, not `rule`.
- What's next: T-10 (Input and Select). Ready.
- Checks: `npm run lint`, `npm run typecheck`, `npm run build-storybook` and `npm run build` all pass. No screenshot: no screen changed.
Receipt:
- Ran on: Claude Sonnet 5.5 / normal (card said Sonnet; the session started on Opus and the human switched before "go")
- Weight in hindsight: S1 A0 R0 C1 T2 = 4
- Human turns after the first prompt: 1
- Outcome: clean (pending Codex review; R=0, review optional)
- Review caught: pending
- Right lane?: yes
- Found, not done: git chores ran on Sonnet, not a Light model. Legacy `ink/paper/moss/clay/skywash` colours still exist for old pages. Existing components still hard-code a few Tailwind spacing values (`px-5`, `h-14`) instead of the new tokens; T-10 to T-14 or T-29 can migrate them.
