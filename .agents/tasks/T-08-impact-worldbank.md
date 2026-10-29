# T-08 · Ingest a bounded real World Bank sample through the canonical connector contract

| Lane | Agent / model | Tier | Reviewer | Wave | Depends on |
|---|---|---|---|---|---|
| Strategy | Codex / GPT-6.1 Sol | Standard | Claude / Sonnet 5.5 | 1 | T-06 |

**Weight:** S1 A0 R1 C1 T0 = 3
**Status:** ready
**Start prompt:** `Do T-08 (.agents/tasks/T-08-impact-worldbank.md).`

## Goal
Ingest a bounded real World Bank sample through the canonical connector contract.

## Context
- Read `AGENTS.md`, `.agents/CODEMAP.md`, `.agents/impact/PLAN.md` and `docs/impact/02-architecture.md`.
- Ownership: impact/connectors/worldbank.py; tests/impact/test_worldbank.py.
- The attached master prompt is the implementation brief; no UI changes, donations, paid services, accounts or external publication are authorized by this card.
- Local Conductor workspaces must be created by the user. Do not launch another agent CLI or claim a delegate ran.

## Acceptance criteria
- [ ] Metadata plus observations; pagination, explicit units and source periods; preserve missing values and provider identifiers; offline replay and repeat import are stable.
- [ ] Record actual tests, source access and handoff evidence; distinguish completed work from independent review still pending.

## Out of scope
- Frontend, payment processing, live donor information, public impact claims, paid access, schema changes outside the shared contract.

## Receipt
- Ran on: pending.
- Weight in hindsight: pending; planned S1 A0 R1 C1 T0 = 3.
- Human turns after the first prompt: pending.
- Outcome: pending execution.
- Review caught: pending where required; no independent PASS claimed.
- Right lane?: pending.
- Found, not done: record source/permission blockers individually; continue permitted work.
- Note: executor records actual files, tests and review status before any PR.
