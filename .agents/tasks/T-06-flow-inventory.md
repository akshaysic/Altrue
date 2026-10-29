# T-06 · Flow and screen inventory

| Lane | Agent | Tier | Model / effort | Reviewer | Wave | Depends on |
|---|---|---|---|---|---|---|
| Read (Gemini off, so Claude) | Claude | Standard | Sonnet 5.5 / normal | self-check (R0); Codex reads it in Stage 2 | 1 | none |

**Weight:** S1 A1 R0 C2 T1 = **5** (C = 2 and A ≤ 1 routes to Read; Gemini is off, so Claude takes the Read lane)
**Status:** in-review <!-- ready · in-progress · in-review · done · dropped -->
**Start prompt:** `Run .context/inputs/flows-and-screens.md, Stage 1.` (prompt copied to `.agents/prompts/flows-and-screens.md`)

## Goal
Write `.agents/research/flows-and-screens.md`: every flow and screen Altrue's donor-side MVP needs, with each screen tied to its route, data, code, legacy Figma node and reference pattern, and every conflict between docs, code, Figma and the survey listed for the human.

## Context
- Files: `docs/*.md`, `app/`, `components/layout/`, `lib/seed/`, `lib/types/`
- Read first: `.agents/CODEMAP.md`
- Inputs (gitignored, in `.context/inputs/`): `design-direction.md`, `altrue-legacy-audit.md`, `figma-sheets/*.jpg`, `figma/views/*.json`, `references/`, the two research notes dated 2026-10-29
- Design: none yet. `design-direction.md` is v0 and not locked.

## Acceptance criteria
- [x] Sections A–E written, in the order and shape the prompt asks for
- [x] Anything not in the sources is marked *proposed* or **[OPEN]**
- [x] Every cited Figma frame or reference is one that was opened (Section C)
- [x] No app code changed

## Out of scope
- Resolving any **[OPEN]** item
- The Stage 2 roadmap and cards
- App code, seed data, docs

## Receipt
<!-- The agent that did the work fills this in before the PR. The reviewer updates Outcome and Review caught. -->
- Ran on: Claude Sonnet 5.5, normal effort
- Weight in hindsight: S1 A1 R0 C2 T1 = 5 (as scored)
- Human turns after the first prompt: 0
- Outcome: <!-- reviewer fills in -->
- Review caught: <!-- reviewer fills in -->
- Right lane?: yes for the routing rule (C = 2, A ≤ 1). The visual reading is the part Gemini would normally do; with Gemini off it fell to Claude as the prompt says.
- Found, not done: see Section D of the inventory. Items that need a human call are marked **[OPEN]**.
- Note: worked from the 17 contact sheets and the 5 reference images. Opened no single `views/*.png`; exact wording came from `views/*.json`. The "Donation / Payment screen" frames (29-587, 72-2551) are a charity-page outline, not a payment flow, so there is no legacy checkout design.
