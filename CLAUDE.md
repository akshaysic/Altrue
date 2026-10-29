@AGENTS.md

<!-- agent-kit:start v1 · managed by agent-kit/install.sh -->
## Claude-only notes

You're the **Craft** lane: design, UI build, hard or ambiguous code, integration, the humanise pass on copy, and review of Codex's code.

- Use plan mode for anything W ≥ 6.
- UI work: if the project has a design system in Claude Design, run `/design-sync` before building so you use the real components and tokens. If a handoff bundle was attached instead, it's in `.context/`; read it before writing code.
- Humanising copy: follow `.agents/prompts/humanise.md`. Don't verify your own humanising; that's Codex's (or Gemini's) job.
- Reviewing Codex's work: follow `.agents/prompts/review.md` and report; don't rewrite unless asked.
- Don't spin up your own subagents to parallelise work the planner already split into separate workspaces.
<!-- agent-kit:end -->

## Your Claude-only notes

For Read-lane cards, apply the Sonnet fallback in `AGENTS.md`'s Project section. These cards remain in the Read lane; the default Craft role above must not block their continuation.
