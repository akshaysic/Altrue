# Altrue Information Architecture And Routes

Routes are shown in a Next.js-style format, but the structure is framework-adaptable.

## IA Principle

Altrue is cause-first and donor-side first. The route structure should help a donor move from discovery to plan activation to impact review without exposing charity admin tooling in the MVP.

## Public Routes

### `/`

- Purpose: Public home and first donor action.
- Must show:
  - Short product explanation.
  - Primary CTA to start giving.
  - Example cause cards.
  - AI allocation explanation.
  - Trust strip with editable allocation, cancel anytime, fee clarity, and verified or reviewed data.

### `/causes`

- Purpose: Cause discovery.
- Must show:
  - 6-8 MVP causes.
  - Filters or tags.
  - Short cause descriptions.
  - Example impact metrics.
  - CTA to include cause in a donation plan.

### `/causes/[slug]`

- Purpose: Cause detail.
- Must show:
  - Cause explanation.
  - Example interventions.
  - Impact metrics with caveats.
  - Nonprofit placeholders and verification status.
  - Source or demo notes.
  - CTA to add cause to plan.

### `/how-it-works`

- Purpose: Explain the product mechanics.
- Must show:
  - Monthly recurring donations.
  - AI-assisted allocation.
  - Manual editing.
  - Payment or mocked payment assumptions.
  - Impact reporting method.

### `/trust`

- Purpose: Central trust and transparency page.
- Must show:
  - Fee assumptions.
  - Verification statuses.
  - Impact methodology.
  - AI constraints.
  - User control over edit, pause, and cancel.

### `/auth/sign-in`

- Purpose: Sign in.
- Must show:
  - Email/password or placeholder auth form.
  - Link to create account.

### `/auth/sign-up`

- Purpose: Create account.
- Must show:
  - Minimal registration form.
  - Link to sign in.
  - Continue-to-onboarding path.

## Authenticated Donor Routes

### `/onboarding`

- Purpose: Capture donation preferences.
- Must show:
  - Cause multi-select, 1-5 causes.
  - Priority style options.
  - Monthly amount selector.
  - Continue to plan builder.

### `/plan/new`

- Purpose: Build the donation plan.
- Must show:
  - Selected causes.
  - Monthly amount.
  - Initial allocation.
  - CTA to generate or review AI recommendation.

### `/plan/review`

- Purpose: AI-assisted allocation review.
- Must show:
  - Recommended allocation percentages and dollar amounts.
  - Rationale per cause.
  - Caveats and assumptions.
  - Editable allocation controls.
  - Validation that totals equal `100%`.
  - Continue to checkout.

### `/checkout`

- Purpose: Confirm or mock donation activation.
- Must show:
  - Monthly amount.
  - Allocation breakdown.
  - Fee assumptions.
  - Estimated net donation.
  - Cadence and next charge date.
  - Confirmation control.

### `/dashboard`

- Purpose: Donor home.
- Must show:
  - Active plan status.
  - Monthly amount.
  - Next donation date.
  - Supported causes.
  - Allocation chart or list.
  - Lifetime donated.
  - Latest impact report preview.
  - Edit, pause, and cancel controls.

### `/impact`

- Purpose: Impact report list and latest summary.
- Must show:
  - Latest report.
  - Reporting periods.
  - Cause-level summaries.
  - Demo labels where applicable.

### `/impact/[reportId]`

- Purpose: Detailed impact report.
- Must show:
  - Reporting period.
  - Total donated.
  - Cause-level allocations.
  - Impact estimates.
  - Methodology notes.
  - Caveats.
  - Optional share card.

### `/donations`

- Purpose: Donation history.
- Must show:
  - Date.
  - Amount.
  - Fees.
  - Net donation.
  - Status.
  - Plan association.

### `/settings`

- Purpose: Account and plan controls.
- Must show:
  - Profile basics.
  - Notification preferences.
  - Payment method placeholder.
  - Plan edit, pause, and cancel controls.

## Internal/Admin Routes

These are hidden, optional, or non-MVP. Do not expose them in primary navigation.

### `/internal/seed-data`

- Status: Hidden development helper only.
- Purpose: Inspect seed data while building.

### `/admin/charities`

- Status: Non-MVP.
- Purpose: Future charity profile management.

### `/admin/analytics`

- Status: Non-MVP.
- Purpose: Future NGO analytics or platform operations.

## Navigation Structure

### Public Navigation

- Altrue logo or wordmark.
- Causes.
- How it works.
- Trust.
- Sign in.
- Primary CTA: Start giving.

### Authenticated Navigation

- Dashboard.
- Causes.
- Plan.
- Impact.
- Donations.
- Settings.

### Footer Navigation

- How it works.
- Trust and transparency.
- Cause taxonomy.
- Privacy placeholder.
- Terms placeholder.

## Page Hierarchy

- Public discovery:
  - `/`
  - `/causes`
  - `/causes/[slug]`
  - `/how-it-works`
  - `/trust`
- Activation flow:
  - `/onboarding`
  - `/plan/new`
  - `/plan/review`
  - `/checkout`
  - `/dashboard`
- Retention flow:
  - `/dashboard`
  - `/impact`
  - `/impact/[reportId]`
  - `/donations`
  - `/settings`

## Suggested Reusable Layouts

- `PublicLayout`:
  - Public nav.
  - Main content.
  - Footer.
- `AuthLayout`:
  - Auth card or split panel.
  - Minimal navigation.
- `DonorAppLayout`:
  - Authenticated nav.
  - Main content area.
  - Persistent plan summary on relevant pages.
- `DecisionLayout`:
  - Used by onboarding, plan review, and checkout.
  - Shows step progress, current decision, trust/sidebar notes, and primary action.
- `ReportLayout`:
  - Used by impact pages.
  - Shows report header, metrics, methodology, and caveats.

## Route Priority For MVP Build

1. `/`, `/causes`, `/causes/[slug]`.
2. `/onboarding`, `/plan/new`, `/plan/review`, `/checkout`.
3. `/dashboard`.
4. `/impact`, `/impact/[reportId]`.
5. `/donations`, `/settings`.
6. `/how-it-works`, `/trust`.
7. Hidden internal helpers only if useful during development.
