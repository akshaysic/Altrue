# T-20 · Build cause discovery and detail
Status: Done by prototype, review only (2026-11-12). Gaps below are carried to other cards, not built here.
Model: Review — Codex GPT-6 Luna / normal (Claude built the prototype, so Claude can't review it)
Weight: review only S1 A0 R0 C1 T0 = 2 (original build weight S1 A1 R1 C1 T1 = 5)
Goal: Let donors browse the approved featured charities and inspect the source behind each displayed claim.
Live surface: `/causes?areas=` → `app/causes/page.tsx` + `components/prototype/CauseList.tsx`, `CharityCard.tsx`; `/causes/[id]` → `app/causes/[id]/page.tsx` + `components/prototype/CharityDetail.tsx`, `SourceLink.tsx`. Stories: `app/causes/page.stories.tsx`, `app/causes/[id]/page.stories.tsx`. Data: `lib/seed/sources.ts` via `lib/seed`.
Inputs: .agents/CODEMAP.md; .agents/PLAN.md (prototype rows); .agents/design/design-system-plan.md §4 D2–D3; the files above.
Deliverable: A review note against the acceptance list below (pass, or a list of fixes). No new files. `app/causes/[slug]` is retired; the live route is `[id]`.
Out of scope: Campaigns, tax-deductibility or unsupported verification claims, unsupported quantitative impact, AI-selected causes, a live GlobalGiving API feed, and building the gaps.
Acceptance (status against the prototype):
- [x] GiveDirectly, Malaria Consortium, Against Malaria Foundation, Helen Keller Intl, and New Incentives shown as equals with no default top pick. *Prototype: A–Z order, "not ranked" note, equal cards.*
- [x] GiveWell Top Charities Fund as the separate "let experts decide" option; only The Humane League for animal welfare.
- [x] Only the three MVP categories; other animal entries stay out of results (`selectMvp`); GlobalGiving entries static. List/detail use seed fields; detail shows `source_name`, `source_url`, `as_of` (and retrieved date); figures carry their estimate/illustrative tag; no tax claim. *Reviewer: confirm against `lib/seed/sources.ts`.*
- [ ] Filtering and add-to-plan preserve selection; empty/unknown states. *Partial: `?areas=` filtering, "Show all" and "Change causes" work; empty figure state says "No figures sourced yet". Not built: per-charity add-to-plan (the split is by area, so this may not be needed: decide), and a custom unknown-`[id]` state (default `notFound()` only; moves to T-25 / design plan B14).*
Decisions needed: Drop per-charity add-to-plan from MVP, or keep it as a later card? Recommendation: drop; the area-level split already covers choice.
Handoff note: Reviewer records pass/fix here.
Receipt: Prototype built ad hoc 2026-11-12 (PLAN.md "Prototype run"), already reviewed by Codex Luna then. This card's review: pending.
