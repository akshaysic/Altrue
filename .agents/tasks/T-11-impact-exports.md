# T-11 · Produce consistent CSV and openpyxl XLSX exports from canonical data

| Lane | Agent / model | Tier | Reviewer | Wave | Depends on |
|---|---|---|---|---|---|
| Strategy | Codex / GPT-6.1 Sol | Standard | Claude / Sonnet 5.5 | 2 | T-06 and one successful connector |

**Weight:** S1 A1 R1 C1 T0 = 4
**Status:** ready
**Start prompt:** `Do T-11 (.agents/tasks/T-11-impact-exports.md).`

## Goal
Produce consistent CSV and openpyxl XLSX exports from canonical data.

## Context
- Read `AGENTS.md`, `.agents/CODEMAP.md`, `.agents/impact/PLAN.md` and `docs/impact/02-architecture.md`.
- Ownership: impact/exports.py; tests/impact/test_exports.py.
- The attached master prompt is the implementation brief; no UI changes, donations, paid services, accounts or external publication are authorized by this card.
- Local Conductor workspaces must be created by the user. Do not launch another agent CLI or claim a delegate ran.

## Acceptance criteria
- [ ] Registry CSV/XLSX plus master workbook; frozen/filterable tables, source URLs, safe text cells; empty tables explicit; row counts reconcile with DB; deterministic exports; openpyxl fallback authorized by user.
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
