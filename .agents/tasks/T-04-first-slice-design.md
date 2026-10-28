# T-04 · Explore the first slice and establish provisional voice

| Lane | Agent | Tier | Model / effort | Reviewer | Wave | Depends on |
|---|---|---|---|---|---|---|
| Craft | Claude + Claude Design | Standard | Sonnet 5.5 / normal | Codex / GPT-6.1 Sol | 1 | T-01 map available |

**Weight:** S1 A1 R0 C0 T2 = **4**. One bounded feature handoff plus provisional
VOICE, a few visual/voice choices; T2 explicitly routes to Craft.
**Status:** ready
**Start prompt:** `Do T-04 (.agents/tasks/T-04-first-slice-design.md).`

## Goal
Give the builder a concrete responsive design and the copy agents a usable voice
for the single cause-selection/equal-split preview feature.

## Context
- Read `.agents/CODEMAP.md`, `.agents/PLAN.md`, `.agents/VOICE.md`, and the UX/trust
  principles in `docs/ALTRUE_PRODUCT_CONTEXT.md` and `docs/MVP_REQUIREMENTS.md`.
- Use Claude Design exploration before any build; pull the existing design system
  through `/design-sync` if present. Record unavailable integration capabilities
  and an explicit handoff gap instead of claiming a sync occurred.
- Durable output: `.agents/design/first-demo-slice.md`, `.agents/VOICE.md`, and
  this receipt. Local design bundle/exports: `.context/first-demo-slice-design/`.
- No application code. Do not edit T-03 copy outputs. Reserve the banner slot for
  T-03's final sentence, up to 160 characters.

## Acceptance criteria
- [ ] Explore and select one direction using existing components, typography,
  colours, spacing and tokens identified by T-01. Record actual reuse paths.
- [ ] Hand off empty selection, 1–3 selected causes, a fixed $5 monthly sample
  budget, explicit equal-split request, preview, back/edit, and reset states.
  No checkout, real-donation CTA, impact metrics, or AI conversation is designed.
- [ ] Supply comparable references at 390×844, 768×1024, and 1440×900 plus layout,
  focus/selection, keyboard, contrast, and narrow-screen wrapping rules. Reuse
  existing local icons/assets; do not fetch external assets or introduce fonts.
- [ ] Visible functional labels and existing cause descriptions suffice; create
  no new persuasive or numerical claims outside the banner chain.
- [ ] Populate VOICE fields provisionally from the existing docs: speaker, donor
  audience, calm/plain/respectful tone, short concrete rhythm, approved/avoided
  wording, and prohibitions on guilt, inflated impact, invented facts or promises.
  Attribute 2–4 existing source sentences as provisional examples, explicitly
  labelled source examples, not human-approved copy. Do not invent endorsements.
- [ ] Durable handoff gives precise builder locations, state transitions, asset
  locations, and screenshot/reference filenames. If seed/layout assumptions fail,
  return a scoped decision request before expanding implementation.
- [ ] Codex reviews criteria and scope in wave 2 using the review prompt; actual
  design and voice evidence and review outcome are recorded before T-03/T-05.

## Out of scope
- A global redesign, full design system, final banner wording, application build,
  new charity/impact facts, accounts, checkout, or live integrations.

## Receipt
- Ran on: NOT RUN; assigned Claude / Sonnet 5.5 / normal, with Claude Design. Record actual tools and model.
- Weight in hindsight: pending execution; planned S1 A1 R0 C0 T2 = 4.
- Human turns after the first prompt: pending execution.
- Outcome: pending exploration, handoff, provisional VOICE, and Codex review.
- Review caught: pending Codex review; no counts claimed.
- Right lane?: planned yes, Craft under T2; confirm after execution.
- Found, not done: empty VOICE at baseline; broader checkout/impact design deferred to the next plan.
- Note: record actual export paths and sync availability; transfer gitignored design references to T-05's workspace.
