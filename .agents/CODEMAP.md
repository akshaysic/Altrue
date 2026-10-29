# CODEMAP

Date: 2026-10-28 · HEAD: `c0d9010`

## Stack and commands

- Next.js 16 App Router, React 18, TypeScript, Tailwind CSS 3, lucide-react (declared; no icon import found). npm lockfile: `package-lock.json`.
- Install: `npm install` (project instructions; dependencies already exist in `node_modules`).
- Dev: `npm run dev -- --port "$CONDUCTOR_PORT"` · Build: `npm run build` · Start: `npm run start`.
- Test: absent (no test script or test files). Lint: `npm run lint` · Types: `npm run typecheck`.
- The scripts exist in `package.json`; local `node_modules` is present, so lint/typecheck/build are locally runnable. No checks were run for this map.

## Folder map

- `app/` — App Router pages and global CSS; route folders: `auth/`, `causes/`, `checkout/`, `dashboard/`, `donations/`, `how-it-works/`, `impact/`, `onboarding/`, `plan/`, `settings/`, `trust/`.
- `components/` — shared UI; `layout/` contains public, donor, decision, and report shells/navigation/header.
- `docs/` — product context, requirements, route/IA, taxonomy, direction, and roadmap.
- `lib/` — constants and formatters; `seed/` has local demo records; `types/` has shared TypeScript types.
- `.agents/` — plans, task cards, prompts, and agent handoffs; `prompts/` and `tasks/` are the active subfolders.
- `.conductor/` — workspace settings.
- `.context/` — gitignored workspace notes and handoffs.
- `.git/` — repository metadata.
- `node_modules/` — installed local dependencies (generated, ignored).
- No `src/`, `public/`, `tests/`, or `pages/` directory is present. `app/` is the actual route root.

## Flow

1. `app/layout.tsx` wraps each route in the document and imports `app/globals.css`.
2. Route pages are React server components by default; there are no client directives, route handlers, or API calls in the app.
3. Public pages use `PublicLayout`/`PublicNav`; planning pages use `DecisionLayout`; donor pages use `DonorAppLayout`; reports wrap that shell with `ReportLayout`.
4. `app/page.tsx` is `/`; other route paths follow their `app/` folders. Dynamic cause/report routes use `[slug]` and `[reportId]`.
5. Pages import local demo data directly from `lib/seed` (barrel `lib/seed/index.ts`) and render it; there is no database or network data layer.
6. Cause discovery renders `causes`; cause details use `getCauseBySlug`, `getImpactMetricsByCauseId`, and `getNonprofitsByCauseId`.
7. Plan, donation, and impact pages render static seed arrays; `demoAllocations` are fixed rows, not calculated from a user selection.
8. `formatCents` and `formatPercent` in `lib/formatters.ts` format displayed amounts/percentages.

## Where to change X

- Home route and home copy: `app/page.tsx`.
- Cause list/detail routes: `app/causes/page.tsx`, `app/causes/[slug]/page.tsx`.
- Planned demo route: `app/demo/page.tsx` does not exist yet; T-05 proposes adding it.
- Shared document metadata: `app/layout.tsx`.
- Global CSS: `app/globals.css`.
- Tailwind color tokens (`ink`, `paper`, `moss`, `clay`, `skywash`): `tailwind.config.ts`.
- Shared card/header and layout UI: `components/PlaceholderCard.tsx`, `components/layout/`.
- Public and donor navigation labels/links: `components/layout/PublicNav.tsx`, `components/layout/DonorNav.tsx`.
- Cause records and caveat notes: `lib/seed/causes.ts` (`causes`, `getCauseBySlug`).
- Nonprofit placeholders and generic source notes: `lib/seed/nonprofits.ts` (`nonprofits`, `getNonprofitsByCauseId`).
- Demo metric source/caveat fields: `lib/seed/impactMetrics.ts` (`impactMetrics`, `getImpactMetricsByCauseId`).
- Shared shapes: `lib/types/index.ts`; defaults/limits: `lib/constants.ts`.
- Plan, allocations, and mocked donations: `lib/seed/demoPlans.ts`; amount display: `lib/formatters.ts`.
- Dependencies/scripts: `package.json`; Next config: `next.config.mjs`. No env file, API client, test directory, or test script exists.

## Conventions

- TypeScript, named exports for data/helpers/components, camelCase values, and `@/` imports (alias configured in `tsconfig.json`).
- Dynamic route segments use Next's bracket folders; unknown cause/report records call `notFound()`.
- Data is typed in `lib/types/index.ts`; seed records are arrays/constants in `lib/seed/`.
- Styling is mostly Tailwind utility classes with a small set of extended colors in `tailwind.config.ts`; global CSS only sets Tailwind layers, box sizing, body background/margin, and link decoration.
- `formatCents` defaults to USD; payment and AI behavior shown in pages is explicitly mocked/static.

## Gotchas

- All eight records in `lib/seed/causes.ts` currently have `isActive: true`; the preferred T-05 IDs exist: `global-health`, `education-opportunity`, `climate-environment` (exported as `causes`).
- Cause names/descriptions/uncertainty notes are local taxonomy/demo content in `lib/seed/causes.ts`, also described in `docs/CAUSE_TAXONOMY.md`. `Cause` has no source/provenance field. These files provide local content provenance, not independent evidence or charity verification.
- Nonprofits are all placeholders; `impactSourceNotes` says “Demo source notes only. Replace before using real nonprofit data.” `ImpactMetric.source` is “Demo seed estimate”; it is not an external source. T-05's requirement for inspectable per-cause source notes/provenance is not met by a typed cause field or verified source record. Clarify/replan that acceptance criterion before build; do not invent notes or present placeholders as verification.
- Static `demoAllocations` contain fixed 40/30/30 percentages and amounts, but no equal-split helper or interactive selection/split logic exists. `/demo` is new and absent from nav.
- `MVP_CAUSE_LIMIT` is 1–5; T-05's 1–3 subset is a separate demo constraint. `app/onboarding/page.tsx` is display-only.
- Source inspection found no `fetch`, axios, explicit HTTP URL, `next/font`, or remote asset usage in app/components/lib/config; there is no `public/` asset folder. Startup/build were not run; with local dependencies present, no source-level external request appears necessary. `npm install` can contact the registry if needed and was not run.
- `next.config.mjs` has no custom build steps; `next-env.d.ts` is generated by Next. No test framework or test suite is configured.
