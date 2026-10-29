# Local impact intelligence foundation

Date: 2026-10-29. Source baseline: `cec1887`. User brief: attached “ALTRUE: Multi-Agent Impact Intelligence & Data Infrastructure”.

## Scope and split

Overall S2 A2 R1 C2 T1 = 8: split before execution under AGENTS.md. The first implementation is a local, offline-capable Python/SQLite pipeline alongside the existing Next.js app. The shared contract precedes connectors. Cards are W <= 5; no frontend work is dispatched.

The user authorizes documented public GETs, licensed downloads, isolated local dependencies, local databases/exports and tests. Creating accounts, accepting special terms, purchases, transactions, deployment and external publication require separate authorization. The user explicitly approved openpyxl as the XLSX fallback on 2026-10-29.

Local Conductor workspaces have no agent-accessible create/control API (bundled Conductor skill). No agents have been launched. These cards are standalone workspace briefs. Codex may execute the bounded Strategy implementation cards sequentially in the current workspace after establishing the contract; their cross-vendor review remains a separate human-launched Claude stage. Do not report pending reviews as complete.

## Assumptions and gates

- No Flask, SQLite or authenticated GlobalGiving integration exists. Retain root-level Next.js app and current cause IDs.
- Use a root-level `impact/` Python package; no `src/` relocation, web server, cloud DB or new npm dependencies.
- Persist context, reported activity, estimated effectiveness and verified attributed outcomes as distinct evidence classes. “Modeled” is an additional measurement flag, not automatic Type C effectiveness.
- Select small, permitted samples from three independent public providers. A blocked candidate can be replaced by a provider-authorized download method only after checking that method's permissions. Never bypass an access denial.
- Missing organization/effectiveness data produces explicit empty tables and quality/review flags. No placeholder app data enters the real database.
- Store raw payloads and metadata with checksums; separate source period, retrieval time and offline replay time. Canonical writes are transactional and idempotent; revisions preserve earlier values.
- Deterministic calculations are authoritative. New public outcome claims require human-reviewed evidence, methods, costs and translation rules. No current provider implies an approved donation-to-impact rate.
- Existing T-01–T-05 demo work remains documented in the earlier root plan. This new priority does not silently satisfy or alter its acceptance criteria.

## Dispatch

| Wave | Card | Agent/model | Ownership |
|---|---|---|---|
| 0 | T-06 | Codex / GPT-6.1 Sol | Contract, schema, registry, orchestration core |
| 1 | T-07 | Gemini Flash | Independent source review only |
| 1 | T-08 | Codex / GPT-6.1 Sol | World Bank connector/tests |
| 1 | T-09 | Codex / GPT-6.1 Sol | OWID connector/tests |
| 2 | T-10 | Codex / GPT-6.1 Sol | Climate connector/tests |
| 2 | T-11 | Codex / GPT-6.1 Sol | CSV/XLSX exports/tests |
| 3 | T-12 | Codex / GPT-6.1 Sol | Evidence/arithmetic/translation interfaces |
| 4 | T-13 | Claude / Sonnet 5.5 | Independent code and numerical review |

Parallel connector work is permitted only after T-06's contract is shared; at most two Codex workspaces, two Claude and three Gemini per repo policy. One actor owns canonical schema files. Separate workspaces use separate local database paths. Current execution is sequential because local delegation is unavailable.

## Validation and handoff

Required: fixture-based transport/parser tests, retry/pagination failures, rollback, repeat imports, offline replay, checksum lineage, units/dates, permission gates, contribution arithmetic and workbook/CSV injection protection. Run existing app lint/typecheck/build and record inherited failures separately. Export source registry, master XLSX and individual CSV tables. Write actual results and remaining gates to `docs/impact/07-quality-report.md`.

No commits, pushes or PR updates are automatic in this phase; keep the existing branch name and prepare a reviewable local diff. Independent source and cross-vendor reviews remain pending until the named actors actually perform them.
