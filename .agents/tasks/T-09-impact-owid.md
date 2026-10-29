# T-09 · Ingest an authorized OWID data sample with its original-source metadata

| Lane | Agent / model | Tier | Reviewer | Wave | Depends on |
|---|---|---|---|---|---|
| Strategy | Codex / GPT-6.1 Sol | Standard | Claude / Sonnet 5.5 | 1 | T-06 |

**Weight:** S1 A1 R1 C1 T0 = 4
**Status:** ready
**Start prompt:** `Do T-09 (.agents/tasks/T-09-impact-owid.md).`

## Goal
Ingest an authorized OWID data sample with its original-source metadata.

## Context
- Read `AGENTS.md`, `.agents/CODEMAP.md`, `.agents/impact/PLAN.md` and `docs/impact/02-architecture.md`.
- Ownership: impact/connectors/owid.py; tests/impact/test_owid.py.
- The attached master prompt is the implementation brief; no UI changes, donations, paid services, accounts or external publication are authorized by this card.
- Local Conductor workspaces must be created by the user. Do not launch another agent CLI or claim a delegate ran.

## Acceptance criteria
- [ ] Use documented public chart/download methods; verify dataset-specific rights; treat access denials as blocked; no bypasses; preserve upstream attribution and observation period.
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
