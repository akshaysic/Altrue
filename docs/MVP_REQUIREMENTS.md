# Altrue MVP Requirements

This file defines what must be true for the first donor-side MVP. Use it to prevent feature creep.

## MVP Goal

Enable a donor to choose causes, set a small monthly donation amount, receive an explainable AI-assisted allocation, edit the split, activate or mock a donation plan, and later view transparent impact reporting.

## Must-Have Features

- Donor onboarding:
  - Create account or use auth placeholder.
  - Select 1-5 causes.
  - Select a monthly budget.
  - Choose a priority style.
- Cause discovery:
  - Show 6-8 MVP cause areas.
  - Provide cause detail pages.
  - Show example interventions, impact metrics, uncertainty notes, and nonprofit placeholders.
- Donation plan:
  - Support monthly recurring plans.
  - Support `$3`, `$5`, `$10`, `$20`, and custom monthly amounts.
  - Support allocations across multiple causes.
  - Validate allocation total equals `100%`.
  - Allow editing before confirmation.
- AI allocation assistant:
  - Suggest allocation percentages using approved app data only.
  - Explain the recommendation.
  - Show caveats and uncertainty.
  - Provide structured output that the UI can validate.
- Checkout and plan activation:
  - Use mocked payment state or integration-ready checkout.
  - Show amount, cadence, fee assumptions, net donation, and allocation before confirmation.
  - Create active donation plan after confirmation.
- Donor dashboard:
  - Show active plan, next donation date, causes, allocation, and lifetime donated.
  - Provide edit, pause, and cancel controls.
- Impact reporting:
  - Show at least one monthly report.
  - Show cause-level breakdown.
  - Show estimated impact metrics with source notes and caveats.
- Trust and transparency:
  - Show verification status.
  - Show fee assumptions near donation decisions.
  - Show AI caveats near recommendations.
  - Avoid guilt-driven copy and overclaimed impact.

## Should-Have Features

- Donation history table.
- Settings page with profile, notification preferences, and payment placeholder.
- Optional shareable impact card that hides donation amounts by default.
- Empty states for new donors and missing reports.
- Demo labels for seeded or simulated data.
- Basic responsive layout for mobile and desktop.

## Not-MVP Features

- Charity SaaS dashboard.
- Charity self-service onboarding.
- Advanced NGO analytics.
- Donor leaderboards.
- User-to-user messaging.
- Donor-to-charity messaging.
- Premium tiers.
- Volunteering marketplace.
- Influencer partnerships.
- Corporate giving.
- Employer matching.
- Complex gamification.
- Native mobile apps.
- Multi-currency localization.
- Full tax receipt automation.

## Primary User Flows

### New Donor Activation

1. User lands on `/`.
2. User starts onboarding.
3. User selects causes and a monthly amount.
4. AI assistant suggests an allocation.
5. User edits or accepts allocation.
6. User reviews fees, net donation, cadence, and caveats.
7. User confirms checkout or mocked checkout.
8. User lands on dashboard with active plan.

### Returning Donor

1. User signs in.
2. User views dashboard.
3. User sees active plan and latest impact report.
4. User can edit, pause, or cancel plan.

### Impact Review

1. User opens `/impact`.
2. User sees latest reporting period and total donated.
3. User reviews cause-level estimates.
4. User can inspect methodology notes and caveats.

## Acceptance Criteria

- A user can complete onboarding without entering long-form text.
- A user can create a monthly donation plan from seeded data.
- Allocation percentages cannot be saved unless they total `100%`.
- AI recommendations never include causes, nonprofits, or metrics outside approved app data.
- Checkout review shows amount, cadence, fee assumptions, and net donation.
- Dashboard shows plan status and includes edit, pause, and cancel controls.
- Impact reports include source notes or demo caveats for every metric.
- The product never uses donor leaderboards, guilt copy, or public status mechanics in MVP.
- No visible MVP route asks charities to manage dashboards or analytics.

## Build Order

1. Data models and seed content.
2. Routes, layouts, and navigation.
3. Cause discovery and cause detail pages.
4. Onboarding and donation amount selection.
5. AI recommendation generation and validation.
6. Allocation editor and checkout review.
7. Active plan dashboard.
8. Impact reports and donation history.
9. Trust surfaces, empty states, and responsive polish.

## Edge Cases

- User selects no causes.
- User selects more than 5 causes.
- Custom amount is below minimum or invalid.
- Allocation totals less than or greater than `100%`.
- AI output is malformed.
- AI recommends missing or inactive cause data.
- User reaches checkout without a valid plan.
- Payment is mocked, failed, pending, or cancelled.
- User has no impact report yet.
- User pauses or cancels an already inactive plan.
- Seed data is marked demo and should not be presented as verified.

## Data Requirements

- `causes`: active MVP causes with descriptions, tags, uncertainty notes, and sort order.
- `nonprofits`: 2-3 placeholders per cause with verification status.
- `impactMetrics`: 2-4 metrics per cause with units, cost-per-unit estimates, source notes, and caveats.
- `donorProfiles`: selected causes, priority style, and default monthly amount.
- `donationPlans`: status, amount, cadence, next charge date, and timestamps.
- `donationAllocations`: cause, optional nonprofit, percentage, amount, and rationale.
- `donations`: amount, fees, status, provider placeholders, and charge dates.
- `impactReports`: reporting period, summary, demo status, and report items.
- `aiRecommendations`: input snapshot, output allocations, rationale, caveats, model name, and accepted timestamp.

## Definition of Done

- The full new donor flow works end to end with seed data.
- The app can show a coherent dashboard after mocked plan activation.
- Impact reports are visible and transparent about uncertainty.
- All donation plan controls are discoverable.
- Trust surfaces appear near donation decisions.
- MVP docs agree that charity tooling, leaderboards, premium tiers, volunteering, and complex gamification are future work.
- The codebase has enough typed or schema-backed data structure for future payment and database integration.
