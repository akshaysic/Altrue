# Altrue Product Context

This is the master product document for building the Altrue MVP. It should guide coding agents, designers, and contributors when making architecture, route, data model, UI, copy, and prioritization decisions.

Altrue is donor-side first. Build the smallest trustworthy product that helps people start recurring microdonations, discover causes, use AI to allocate donations, and understand impact over time.

## Product Thesis

- Altrue makes charitable giving feel as easy, personal, transparent, and habit-forming as a modern consumer finance app.
- The product is a meta-charity microdonation layer: users set a recurring donation budget, choose causes, review an AI-assisted allocation, edit the split, and later see credible impact reporting.
- The MVP should reduce decision friction more than it expands charity marketplace breadth.
- Altrue should earn trust before it becomes social, gamified, or expansive.
- The best first-time flow is: choose causes, set a small monthly amount, review an allocation, activate or mock the plan, then receive an impact report.

## Problem Statement

- Many people want to donate but do not follow through because choosing organizations is hard, trust is low, and effort feels high relative to small donation amounts.
- Existing charity discovery tools often feel like databases, not decision products.
- One-time giving does not reliably create a habit or a lasting sense of impact.
- Donors need help answering:
  - What causes should I support?
  - Which organizations are credible?
  - How much should I give?
  - How should I split my giving?
  - What changed because I contributed?

## Target Users

- Primary: Values-driven young professionals and students who want to donate small recurring amounts but feel overwhelmed by choice.
- Primary: Donors who care about multiple causes and prefer a managed allocation over manually choosing one charity.
- Secondary: Existing donors who want better visibility, reporting, and recurring plan control.
- Secondary: People motivated by current events who need a calmer way to convert concern into sustained support.
- Not primary for MVP: charities, corporate CSR teams, influencers, volunteer coordinators, grantmakers, and high-net-worth donors.

## Survey Insights

- Treat survey notes as directional validation, not statistical proof.
- The useful signal is that willingness to give exists, but action is blocked by trust, effort, uncertainty, and weak feedback loops.
- Recurring small donations are more approachable than large one-time donations.
- Donors want flexibility and control, especially around editing, pausing, or cancelling recurring plans.
- People respond better to cause-first discovery than charity-first browsing.
- Impact reporting must be concrete, modest, and credible.
- Social sharing can help donors feel proud, but public ranking and competition can feel misaligned with altruism.

## User Barriers

- Choice overload: too many charities, too many causes, no obvious path to a good decision.
- Trust gap: uncertainty about legitimacy, overhead, effectiveness, and how money is used.
- Low perceived impact: small donations can feel pointless without aggregation or reporting.
- Payment friction: entering payment details before confidence is built causes drop-off.
- Commitment anxiety: recurring giving can feel hard to cancel or adjust.
- Emotional overload: heavy topics can make the experience feel paralyzing.
- Skepticism toward AI: users need to know AI is assisting, not inventing claims or optimizing for platform revenue.

## Core MVP Scope

- Donor onboarding:
  - Email/password or simple auth placeholder.
  - Cause preference selection.
  - Optional short preference quiz.
  - Suggested monthly donation amount.
- Cause discovery:
  - Browse 6-8 MVP cause categories.
  - View cause detail pages with explanation, example interventions, recommended nonprofit placeholders, and impact examples.
- Donation plan:
  - Create one monthly recurring donation plan.
  - Use default microdonation amounts.
  - Allocate donations across one or more causes.
  - Allow manual allocation editing.
- AI donation assistant:
  - Recommend allocation based on selected causes, budget, priority style, and approved app data.
  - Explain recommendations in plain language.
  - Ask for clarification only when needed.
- Checkout:
  - MVP may use mocked payment state.
  - Data models should be ready for Stripe or an equivalent provider later.
- Impact reports:
  - Monthly impact summary.
  - Cause-level allocation and estimated impact.
  - Transparent caveats on estimates.
- Trust layer:
  - Charity verification status.
  - Source notes for impact metrics.
  - Clear fee and allocation disclosure.
- User account:
  - View active plan.
  - Edit, pause, or cancel plan.
  - View donation history and impact reports.

## Explicit Non-MVP Scope

- Charity SaaS dashboard.
- Charity self-service onboarding.
- Advanced NGO analytics.
- Donor leaderboards.
- Direct messaging between users.
- Direct donor-to-charity messaging.
- Complex gamification systems.
- Premium tier logic.
- Volunteering marketplace.
- Influencer campaigns and creator fundraising.
- Corporate giving or employer matching.
- Tax receipt automation beyond basic placeholder records.
- Cryptocurrency donations.
- Multi-currency localization.
- Complex fraud operations tooling.
- Native mobile apps.

## Core User Stories

- As a first-time donor, I want to select causes I care about so Altrue can suggest a donation plan quickly.
- As a cautious donor, I want to understand why specific causes or nonprofits are recommended before I give.
- As a microdonor, I want to start with a small monthly amount so giving feels financially safe.
- As a recurring donor, I want to change, pause, or cancel my plan easily so I trust the product.
- As a donor with multiple interests, I want AI to suggest a balanced allocation so I do not have to research every organization.
- As a donor who values control, I want to manually adjust allocations before confirming.
- As a donor, I want monthly impact reports so I can see what my giving contributed to.
- As a skeptical user, I want fees, assumptions, and verification status to be visible before I confirm a plan.
- As a returning user, I want a dashboard that shows my active plan, supported causes, total donated, and recent impact.

## Information Architecture

- Public:
  - Home.
  - Causes.
  - Cause detail.
  - How it works.
  - Trust and transparency.
  - Sign in and create account.
- Authenticated donor:
  - Dashboard.
  - Onboarding.
  - Donation plan builder.
  - AI allocation review.
  - Checkout or confirmation.
  - Impact reports.
  - Donation history.
  - Account settings.
- Internal or hidden:
  - Seed data management can stay code-level or behind hidden tools.
  - No public charity admin product in MVP.

## Suggested Routes / Pages

- `/` - Public home with immediate donor action.
- `/causes` - Cause discovery grid and filters.
- `/causes/[slug]` - Cause detail with interventions, metrics, nonprofit placeholders, and trust notes.
- `/how-it-works` - Explanation of recurring donations, allocation, fees, and reporting.
- `/trust` - Verification, transparency, impact methodology, and ethics.
- `/auth/sign-in` - Sign in.
- `/auth/sign-up` - Create account.
- `/onboarding` - Cause selection and donation preferences.
- `/plan/new` - Donation plan builder.
- `/plan/review` - AI-assisted allocation review and manual editing.
- `/checkout` - Payment or mocked checkout.
- `/dashboard` - Donor home after sign-in.
- `/impact` - Impact report list and latest summary.
- `/impact/[reportId]` - Detailed impact report.
- `/donations` - Donation history.
- `/settings` - Profile, plan controls, payment placeholder, notifications.

## Main Screen Requirements

### Public Home

- Lead with the action: start a monthly microdonation plan.
- Show 3-5 cause examples.
- Explain AI-assisted allocation briefly and transparently.
- Include trust signals: verified or reviewed nonprofits, editable allocations, cancel anytime, clear fees.
- Primary CTA: start giving.

### Onboarding

- Ask users to select 1-5 causes.
- Ask optional priority style:
  - Highest urgency.
  - Long-term systemic impact.
  - Local or community support.
  - Balanced portfolio.
- Ask monthly budget with default amounts.
- Keep onboarding short. Do not require personal essays.

### Donation Plan Builder

- Show selected monthly amount.
- Show cause allocation as percentages and dollar amounts.
- Allow adding and removing causes.
- Allow AI suggestion refresh after preference changes.
- Show platform fee assumptions before confirmation.

### AI Allocation Review

- Explain each allocation in one or two concise sentences.
- Show rationale without pretending precision.
- Make manual editing obvious.
- Show caveats and data limits.
- Never hide that recommendations are assisted by AI and based on approved app data.

### Dashboard

- Show active monthly donation amount.
- Show next donation date.
- Show supported causes and allocation.
- Show lifetime donated.
- Show latest impact report.
- Include clear edit, pause, and cancel controls.

### Impact Report

- Show reporting period.
- Show total donated and cause-level breakdown.
- Show estimated impact metrics with methodology notes.
- Include stories or examples only when grounded in seed data or verified content.
- Avoid claiming direct causality unless the data supports it.

## Cause Taxonomy Summary

Use a tight taxonomy. Each cause needs a slug, short description, user-facing explanation, example interventions, impact metrics, tags, uncertainty notes, and nonprofit placeholders.

- Global Health.
- Hunger And Food Security.
- Climate And Environment.
- Education And Opportunity.
- Poverty And Economic Mobility.
- Crisis Relief.
- Animal Welfare.
- Mental Health.

Prefer 6-8 causes in MVP. Do not add dozens of subcauses until discovery and reporting work well.

## Donation Model

- MVP default cadence: monthly recurring donations.
- Optional one-time donation may exist only if it does not slow the recurring plan flow.
- Default monthly amounts:
  - `$3`
  - `$5`
  - `$10`
  - `$20`
  - Custom
- Recommended default: `$5/month` for first-time users.
- Allocation model:
  - A donation plan has one monthly amount.
  - A plan has multiple allocation entries.
  - Each allocation maps to a cause and optionally a nonprofit.
  - Allocations can be expressed as percentages and calculated dollar amounts.
- Minimum requirements:
  - Percentages total `100`.
  - Users can edit allocations.
  - Users see fee disclosure and estimated net donation.
  - Users can edit, pause, and cancel recurring plans.

## AI Donation Assistant Behavior

- The assistant is a decision support tool, not an authority.
- It recommends a portfolio based on:
  - Selected causes.
  - Monthly amount.
  - Priority style.
  - Verification status.
  - Approved impact metrics.
  - Need for balanced diversification.
- It produces:
  - Allocation percentages.
  - Short rationale per cause.
  - Optional nonprofit suggestions from approved app data.
  - Caveats and assumptions.
- It must not:
  - Invent impact data.
  - Invent charity facts.
  - Claim certainty about charity effectiveness.
  - Optimize for Altrue fees.
  - Pressure the user emotionally.
  - Shame users for small donations.

## AI Constraints

- The assistant can only recommend from approved app data.
- The assistant must not browse, infer, or fabricate nonprofit details at runtime unless a verified data source has been integrated.
- The assistant must return structured recommendations that the UI can validate before display.
- If data is missing, it should say so and fall back to a simple diversified split across selected causes.
- AI copy must include uncertainty when estimates are modelled, demo, or source-limited.
- AI output must be editable before checkout.

## Impact Reporting Principles

- Impact reporting should be recurring, modest, and credible.
- Show contribution, not guaranteed direct causality.
- Use language like "your donations helped support" instead of "you caused."
- Every metric should have:
  - Cause.
  - Reporting period.
  - Calculation basis.
  - Source or internal seed-data reference.
  - Confidence or caveat note.
- Avoid overprecision. Round estimates into readable units.
- If data is simulated in MVP, clearly label it as demo or estimated data.

## Social Sharing Principles

- MVP sharing is optional and secondary.
- Prioritize shareable impact cards over leaderboards.
- Let users hide amounts and personal details.
- Avoid ranking donors, competitive streaks, public donation pressure, and status mechanics.

## Trust, Transparency, And Ethics Rules

- Always disclose fee assumptions before confirmation.
- Make cancellation and pause controls easy to find.
- Do not dark-pattern users into recurring donations.
- Do not hide allocation logic.
- Do not present AI recommendations as objective truth.
- Do not sell or expose sensitive donor preference data.
- Do not imply nonprofit endorsement unless it exists.
- Keep verification status visible:
  - Verified.
  - Pending review.
  - Data incomplete.
- Keep platform incentives legible:
  - How Altrue is funded.
  - Whether a platform fee exists.
  - Whether tips or optional support are collected.
- Use emotionally respectful copy. Avoid guilt, doom, or manipulation.

## Trust Surface Areas

- Home page trust strip.
- Cause detail verification and source notes.
- Donation amount selector fee assumptions.
- Allocation review rationale and caveats.
- Checkout confirmation with total, fee, net donation, and cadence.
- Dashboard plan controls.
- Impact report methodology notes.
- Settings page cancellation, pause, notifications, and payment assumptions.

## MVP Success Metrics

- Activation:
  - User completes onboarding.
  - User creates a donation plan.
  - User accepts or edits an AI allocation.
- Trust:
  - User views fee disclosure before confirming.
  - User can find pause/cancel controls from dashboard and settings.
  - AI recommendations render with caveats and approved source references.
- Retention:
  - User returns to view dashboard or impact report.
  - User keeps plan active after first report.
- Product quality:
  - Donation allocations always total `100%`.
  - No impact metric displays without a source or caveat.
  - No MVP route encourages charity admin setup.

## UX Direction

- The UI should feel calm, modern, and trustworthy, closer to consumer finance than campaign fundraising.
- Prefer concise product copy and visible controls over educational walls of text.
- Cause discovery should be visual and scannable, but not decorative at the expense of clarity.
- Use gentle empty states and demo labels when data is seeded.
- Put trust content next to decisions.
- Small donations should feel legitimate, not like a lesser choice.
- Avoid guilt-driven language, social pressure, leaderboard framing, or inflated impact claims.

## Suggested Data Models

Use these as implementation guidance. Adjust field names to match the chosen framework and database.

### User

- `id`
- `email`
- `name`
- `createdAt`
- `onboardingCompletedAt`
- `preferredCurrency`
- `notificationPreferences`

### DonorProfile

- `id`
- `userId`
- `selectedCauseIds`
- `priorityStyle`
- `defaultMonthlyAmountCents`
- `location`

### Cause

- `id`
- `slug`
- `name`
- `shortDescription`
- `longDescription`
- `userFacingExplanation`
- `tags`
- `heroImageUrl`
- `isActive`
- `sortOrder`

### Nonprofit

- `id`
- `name`
- `slug`
- `websiteUrl`
- `description`
- `causeIds`
- `verificationStatus`
- `country`
- `registrationId`
- `trustNotes`
- `impactSourceNotes`
- `isPlaceholder`

### DonationPlan

- `id`
- `userId`
- `status`
- `monthlyAmountCents`
- `currency`
- `cadence`
- `nextChargeDate`
- `createdAt`
- `updatedAt`
- `pausedAt`
- `canceledAt`

### DonationAllocation

- `id`
- `donationPlanId`
- `causeId`
- `nonprofitId`
- `percentage`
- `amountCents`
- `rationale`

### Donation

- `id`
- `userId`
- `donationPlanId`
- `amountCents`
- `feeCents`
- `netAmountCents`
- `currency`
- `status`
- `paymentProvider`
- `paymentProviderId`
- `chargedAt`
- `createdAt`

### ImpactMetric

- `id`
- `causeId`
- `name`
- `unit`
- `description`
- `costPerUnitCents`
- `source`
- `caveat`
- `isDemo`

### ImpactReport

- `id`
- `userId`
- `periodStart`
- `periodEnd`
- `totalDonatedCents`
- `summary`
- `createdAt`
- `isDemo`

### ImpactReportItem

- `id`
- `impactReportId`
- `causeId`
- `nonprofitId`
- `metricId`
- `amountAllocatedCents`
- `estimatedUnits`
- `narrative`
- `methodologyNote`

### AiRecommendation

- `id`
- `userId`
- `inputSnapshot`
- `recommendedAllocations`
- `rationale`
- `caveats`
- `modelName`
- `createdAt`
- `acceptedAt`

## Seed Data Strategy

- Use seed data to make the MVP feel real without implying unsupported partnerships.
- Prefer placeholder/demo nonprofits until verification exists.
- Public charity names may be used only if copy avoids implying partnership or endorsement.
- Every metric needs a source note or demo caveat.
- Include enough data to test all major states:
  - New donor.
  - Active recurring donor.
  - Paused donor.
  - Donation plan with editable allocations.
  - At least one monthly impact report.

## Seed Content Strategy

- Write cause descriptions in plain donor language.
- Include 2-4 example interventions per cause.
- Include 2-4 example metrics per cause.
- Use conservative, rounded impact estimates.
- Include uncertainty notes for every cause.
- Seed nonprofit placeholders with verification states:
  - `verified`
  - `pending_review`
  - `data_incomplete`

## Component Inventory

- Layout:
  - App shell.
  - Public nav.
  - Authenticated nav.
  - Page header.
- Donation:
  - Amount selector.
  - Monthly cadence display.
  - Allocation editor.
  - Allocation chart.
  - Fee disclosure panel.
  - Plan summary.
  - Pause, cancel, and edit controls.
- Cause discovery:
  - Cause card.
  - Cause filters.
  - Cause detail header.
  - Nonprofit recommendation card.
  - Impact metric card.
- AI assistant:
  - Recommendation panel.
  - Rationale list.
  - Caveat callout.
  - Regenerate button.
  - Accept recommendation button.
- Impact:
  - Impact report summary.
  - Cause impact row.
  - Metric estimate card.
  - Methodology note.
  - Optional share impact card.
- Trust:
  - Verification badge.
  - Fee disclosure.
  - Source note.
  - Ethics or caveat callout.
- Account:
  - Profile form.
  - Donation history table.
  - Notification preferences.
  - Payment method placeholder.

## Future Roadmap Summary

- Phase 1: Donor MVP.
- Phase 2: Better giving intelligence.
- Phase 3: Trust and reporting depth.
- Phase 4: Social and growth.
- Phase 5: Charity tooling.
- Phase 6: Platform expansion.

Charity SaaS tooling begins no earlier than Phase 5.

## Product Principles For Coding Agents

- Build the donor journey before admin tooling.
- Prefer cause-first flows over charity-first directories.
- Make recurring giving feel adjustable and low-risk.
- Put trust content near decisions, not only on a separate page.
- Keep AI explainable and editable.
- Use calm product copy. Avoid guilt-based persuasion.
- Keep the MVP data model real enough for payments and reporting even if payment processing is mocked.
- Design for transparency before virality.
- Avoid premature marketplace complexity.
- Make the smallest donation amount feel legitimate.
- Use clear empty states and demo labels when data is seeded.
- Preserve user agency at every donation decision point.

## Implementation Priorities

- First: complete a coherent donor flow from onboarding to active recurring plan.
- Second: seed cause, nonprofit, and impact data so the UI feels real and testable.
- Third: implement dashboard and impact reporting so recurring giving has a feedback loop.
- Fourth: add trust, fee, verification, and AI caveat surfaces throughout the flow.
- Fifth: add optional social sharing only after the private donor experience works.

## Build Order for MVP

1. Build the core data and navigation foundation:
   - Define cause, nonprofit, impact metric, donation plan, allocation, donation, and impact report models.
   - Add seed data for 6-8 causes, recommended nonprofit placeholders, metrics, and sample reports.
   - Implement public routes, authenticated donor routes, and app shell navigation.

2. Build the donation activation flow:
   - Create onboarding cause selection.
   - Create donation amount selection with `$3`, `$5`, `$10`, `$20`, and custom amount.
   - Create AI-assisted allocation review with editable percentages.
   - Create checkout or mocked checkout confirmation.
   - Create active donation plan state with pause, edit, and cancel controls.

3. Build retention, trust, and reporting:
   - Create donor dashboard.
   - Create donation history.
   - Create impact report pages.
   - Add verification badges, fee disclosure, source notes, and AI caveats across the product.
   - Add optional shareable impact cards only after the report experience is credible.
