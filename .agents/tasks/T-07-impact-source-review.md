# T-07 · Independently confirm the source-specific licenses, upstream attribution and access classifications

| Lane | Agent / model | Tier | Reviewer | Wave | Depends on |
|---|---|---|---|---|---|
| Read | Gemini / newest Gemini Flash | Standard | self-check (R0) | 1 | T-06 contract |

**Weight:** S0 A1 R0 C2 T0 = 3
**Status:** ready
**Start prompt:** `Do T-07 (.agents/tasks/T-07-impact-source-review.md).`

## Goal
Independently confirm the source-specific licenses, upstream attribution and access classifications.

## Context
- Read `AGENTS.md`, `.agents/CODEMAP.md`, `.agents/impact/PLAN.md` and `docs/impact/02-architecture.md`.
- Ownership: docs/impact/01-source-inventory.md; source registry review findings in .agents/research/impact-source-review.md.
- The attached master prompt is the implementation brief; no UI changes, donations, paid services, accounts or external publication are authorized by this card.
- Local Conductor workspaces must be created by the user. Do not launch another agent CLI or claim a delegate ran.

## Acceptance criteria
- [ ] Check permissions per selected dataset; identify exceptions and unsupported API claims; no production code or financial transactions.
- [ ] Record actual tests, source access and handoff evidence; distinguish completed work from independent review still pending.

## Out of scope
- Frontend, payment processing, live donor information, public impact claims, paid access, schema changes outside the shared contract.

## Receipt
- Ran on: pending.
- Weight in hindsight: pending; planned S0 A1 R0 C2 T0 = 3.
- Human turns after the first prompt: pending.
- Outcome: pending execution.
- Review caught: pending where required; no independent PASS claimed.
- Right lane?: pending.
- Found, not done: record source/permission blockers individually; continue permitted work.
- Note: executor records actual files, tests and review status before any PR.
