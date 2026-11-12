# T-11 · Complete Button and cause-chip states
Status: Done
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A0 R0 C1 T2 = 4
Goal: Make the existing Button and CauseChip components ready for the MVP flow.
Inputs: .agents/CODEMAP.md; components/ui/Button.tsx; components/ui/Button.stories.tsx; components/ui/CauseChip.tsx; components/ui/CauseChip.stories.tsx.
Deliverable: Update components/ui/Button.tsx, components/ui/Button.stories.tsx, components/ui/CauseChip.tsx, and components/ui/CauseChip.stories.tsx only.
Out of scope: New routes, changing product wording, or introducing a new component framework.
Acceptance:
- [x] Stories cover primary, secondary, disabled, loading, selected, and unselected states as applicable.
- [x] Focus, contrast, hit targets, and state labels work with keyboard and screen readers.
Decisions needed: None.
Execution plan (Codex, user go-ahead after the lane notice):
- Keep changes within the four component/story files plus this receipt and PLAN/CONTEXT status updates.
- Add native disabled/busy protection for loading buttons; reuse named sizing, spacing and focus tokens; preserve all existing product labels.
- Keep cause selection controlled through aria-pressed/onToggle; prevent disabled activation, preserve the selection indicator, and allow narrow labels to wrap.
- Add interaction stories for pointer and keyboard activation, disabled/loading states, selection, focus and hit targets; run lint, typecheck, story tests, and the Storybook build, then capture the 390 px result.
Handoff note:
- What changed: `Button` and `buttonClassName` retain primary, secondary, quiet, and block variants. `ButtonProps.loading` preserves the label, exposes `aria-busy`, disables native activation and shows a decorative spinner that respects reduced motion. Existing product labels are unchanged.
- `CauseChip` remains controlled through `selected`/`onToggle`, exposes `aria-pressed`, and retains its selected check when disabled. It now declares its client boundary. Reserving icon space prevents selection from shifting its width.
- Both components use named spacing, focus and minimum-size tokens. Buttons start at 56 px and chips at 48 px, with wrapping labels and a 44 px minimum width. Disabled labels and borders use ink-2 on ground instead of reduced opacity.
- Imports remain `@/components/ui/Button` and `@/components/ui/CauseChip`. Their stories include keyboard focus, disabled activation, loading, controlled selection, narrow containers and state galleries.
- Checks passed: `npm run lint`, `npm run typecheck`, `npm run build-storybook`, `npx --no-install vitest --project storybook run` (19 files, 55 tests), and `npm run build`.
- Browser check at 390 px: no horizontal overflow, no page errors, zero automated WCAG A/AA violations in both state galleries, all hit targets at their documented sizes, disabled text contrast 5.83:1, and the loading spinner stays still under reduced motion. Screenshot: `.context/t11-controls-390.png`; detailed report, script and logs: `.context/t11-checks/`. These are ignored local artifacts.
- What's next: T-17 is next in FIRST-TEST-PATH.md and remains blocked until the human confirms the source-packet skim. T-10 and its radius/body-foreground follow-up remain deferred. No product decision blocks this card.
Receipt:
- Ran on: Codex GPT-6.1 Sol; the human said "go next" after the Craft/Sonnet lane notice, authorizing this implementation here.
- Weight in hindsight: S1 A0 R0 C1 T2 = 4.
- Human turns after the first prompt: 1 (go-ahead after the lane notice).
- Outcome: PASS (self-check); complete within the four component/story files plus required receipt and PLAN/CONTEXT updates.
- Review caught: self-check found 0 remaining must / 0 should; no independent review claimed or required by the Standard/R0 tier.
- Right lane?: Craft assignment, implemented by Codex under the user's go-ahead.
- Found, not done: reusable Input/Select and radius/body-foreground tokens remain in deferred T-10. Dependencies, app routes, product wording and data are unchanged. Git chores used the current model; AGENTS.md prefers Light for that work.
