# T-13 · Review the merged local data pipeline and numerical/permission boundaries as a different vendor

| Lane | Agent / model | Tier | Reviewer | Wave | Depends on |
|---|---|---|---|---|---|
| Craft | Claude / Sonnet 5.5 | Standard | Codex (original author may not substitute for this independent review) | 4 | T-06, T-08–T-12 |

**Weight:** S1 A1 R1 C1 T0 = 4
**Status:** ready
**Start prompt:** `Do T-13 (.agents/tasks/T-13-impact-independent-review.md).`

## Goal
Review the merged local data pipeline and numerical/permission boundaries as a different vendor.

## Context
- Read `AGENTS.md`, `.agents/CODEMAP.md`, `.agents/impact/PLAN.md` and `docs/impact/02-architecture.md`.
- Ownership: docs/impact/07-quality-report.md; review findings and card receipts.
- The attached master prompt is the implementation brief; no UI changes, donations, paid services, accounts or external publication are authorized by this card.
- Local Conductor workspaces must be created by the user. Do not launch another agent CLI or claim a delegate ran.

## Acceptance criteria
- [ ] Use .agents/prompts/review.md; check source permissions, fixture tests, duplicate imports, offline behavior, numerical cases, XLSX safety and baseline app checks; report actual results. No self-review PASS by the author.
- [ ] Record actual tests, source access and handoff evidence; distinguish completed work from independent review still pending.

## Out of scope
- Frontend, payment processing, live donor information, public impact claims, paid access, schema changes outside the shared contract.

## Receipt
- Ran on: pending.
- Weight in hindsight: pending; planned S1 A1 R1 C1 T0 = 4.
- Human turns after the first prompt: pending.
- Outcome: pending execution.
- Review caught: pending where required; no independent PASS claimed.
- Right lane?: pending.
- Found, not done: record source/permission blockers individually; continue permitted work.
- Note: executor records actual files, tests and review status before any PR.
