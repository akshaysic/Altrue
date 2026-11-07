# T-22 · Build the sourced impact view
Status: Blocked on T-17–T-18
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A1 R1 C1 T1 = 5
Goal: Show sourced impact summaries with clear caveats and demo labels.
Inputs: .agents/PLAN.md; .agents/research/flows-and-screens.md; app/impact/page.tsx; app/impact/[reportId]/page.tsx; app/impact/[reportId]/page.stories.tsx; lib/seed/impactMetrics.ts.
Deliverable: Update app/impact/page.tsx and app/impact/[reportId]/page.tsx; create app/impact/page.stories.tsx and update app/impact/[reportId]/page.stories.tsx (4 files).
Out of scope: Unsourced units, new impact estimates, social sharing integrations, or provider calls.
Acceptance:
- [ ] Every quantitative item links to an approved source and displays period/caveat; otherwise withhold it.
- [ ] Empty report and unknown report states are understandable and do not imply actual outcomes.
Decisions needed: Use only the human-approved source records from T-17–T-18.
Handoff note: Record which metrics are shown or withheld and why.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
