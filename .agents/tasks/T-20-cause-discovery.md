# T-20 · Build cause discovery and detail
Status: Ready after T-17–T-19
Model: Craft — Claude Sonnet 5.5 / normal
Weight: S1 A1 R1 C1 T1 = 5
Goal: Let donors browse the approved featured charities and inspect the source behind each displayed claim.
Inputs: .agents/CODEMAP.md; .agents/research/flows-and-screens.md; app/causes/page.tsx; app/causes/page.stories.tsx; app/causes/[slug]/page.tsx; app/causes/[slug]/page.stories.tsx; lib/seed/index.ts.
Deliverable: Update app/causes/page.tsx, app/causes/page.stories.tsx, app/causes/[slug]/page.tsx, and app/causes/[slug]/page.stories.tsx (4 files).
Out of scope: Campaigns, tax-deductibility or unsupported verification claims, unsupported quantitative impact, AI-selected causes, and a live GlobalGiving API feed.
Acceptance:
- [ ] Show GiveDirectly, Malaria Consortium, Against Malaria Foundation, Helen Keller Intl, and New Incentives side by side as equals with no default top pick.
- [ ] Offer GiveWell Top Charities Fund as the separate “let experts decide” option; show only The Humane League as an MVP animal-welfare charity.
- [ ] Use only Global health, Poverty relief, and Animal welfare categories; keep other animal entries excluded from MVP results and flagged “post-MVP” in data. GlobalGiving entries are static and curated; no live API feed.
- [ ] List/detail use approved seed fields and source links; each record retains `source_name`, `source_url`, and `as_of`; figures remain labelled “estimate” and no tax claim is added.
- [ ] Filtering and add-to-plan preserve user selection and have empty/unknown states.
Decisions needed: Apply T-07 provenance rule; no unsupported claims.
Handoff note: Record fields displayed and route behavior.
Receipt: Pending execution; record actor/model, weight, outcome, review, lane, and found-not-done.
