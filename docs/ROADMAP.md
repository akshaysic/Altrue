# Altrue Roadmap

The roadmap keeps the MVP donor-side first. Later phases should not leak into the first build unless they directly support recurring microdonations, cause discovery, AI allocation, impact reporting, trust, transparency, or user control.

## Phase 1: Donor MVP

- Goal: Prove the core donor journey from cause selection to recurring plan activation and impact reporting.
- Features:
  - Public home.
  - Cause discovery and cause detail pages.
  - Donor onboarding.
  - Monthly donation amount selection.
  - AI-assisted allocation review.
  - Editable donation splits.
  - Mocked or integration-ready checkout.
  - Donor dashboard.
  - Donation history.
  - Impact reports.
  - Fee, verification, source, and AI caveat surfaces.
- What not to build yet:
  - Charity SaaS dashboard.
  - Leaderboards.
  - Premium tiers.
  - Volunteering.
  - Influencer campaigns.
  - Advanced analytics.
- Dependencies:
  - Seed causes.
  - Seed nonprofit placeholders.
  - Seed impact metrics.
  - Plan and allocation models.
  - AI output validation.
- Risks:
  - Impact estimates may sound more precise than they are.
  - AI may overstep approved data.
  - Donation flow may become too complex for small amounts.

## Phase 2: Better Giving Intelligence

- Goal: Improve recommendation quality while preserving explainability and user control.
- Features:
  - Better allocation strategies.
  - More robust cause preference quiz.
  - Optional one-time donations if they do not weaken recurring flow.
  - More nonprofit records.
  - Improved data quality labels.
  - Basic tax receipt placeholders or exports.
- What not to build yet:
  - Charity-facing dashboards.
  - Corporate giving.
  - Public donor ranking.
  - Complex personalization that cannot be explained.
- Dependencies:
  - Validated MVP donor behavior.
  - Stronger data source process.
  - Recommendation logging and review.
- Risks:
  - Recommendation logic becomes opaque.
  - Product begins to feel like a generic charity database.

## Phase 3: Trust And Reporting Depth

- Goal: Make impact reporting and transparency more credible and useful.
- Features:
  - Deeper methodology notes.
  - Better source management.
  - Report history and comparisons.
  - Improved verification workflows.
  - More detailed fee and fund routing disclosures.
  - Better demo versus verified data labels.
- What not to build yet:
  - NGO analytics suite.
  - Charity self-service claims.
  - Public campaign marketplace.
- Dependencies:
  - Stable impact metric model.
  - Clear data provenance.
  - Donor feedback on reports.
- Risks:
  - Reporting becomes too dense.
  - Methodology pages distract from actionable donor decisions.

## Phase 4: Social And Growth

- Goal: Add values-aligned sharing and growth loops without turning giving into status competition.
- Features:
  - Optional shareable impact cards.
  - Referral links.
  - Group or team giving experiments.
  - Cause education snippets.
  - Privacy controls for donation amounts and identity.
- What not to build yet:
  - Donor leaderboards.
  - Competitive streaks.
  - Direct user messaging.
  - Influencer campaign marketplace.
- Dependencies:
  - Credible impact reports.
  - Privacy settings.
  - Share card rendering.
- Risks:
  - Social mechanics could feel performative.
  - Public sharing could expose sensitive giving preferences.

## Phase 5: Charity Tooling

- Goal: Let nonprofits improve data quality and reporting once the donor product has traction.
- Features:
  - Charity profile claiming.
  - Charity dashboard.
  - Verified impact updates.
  - Basic reporting submissions.
  - Data review workflows.
  - Advanced NGO analytics only after basic tooling works.
- What not to build yet:
  - Complex CRM.
  - Full fundraising campaign suite.
  - Donor-to-charity messaging at scale.
- Dependencies:
  - Donor demand.
  - Verification process.
  - Moderation and review workflows.
  - Data quality standards.
- Risks:
  - Charity tooling could pull focus from donor activation.
  - Self-reported impact data may need strong review before display.

## Phase 6: Platform Expansion

- Goal: Expand Altrue into a broader giving platform after the donor and trust foundations are strong.
- Features:
  - Corporate giving.
  - Employer matching.
  - Internationalization.
  - Multi-currency support.
  - Native mobile apps.
  - Volunteering marketplace.
  - Larger partnership programs.
- What not to build yet:
  - Anything that weakens the core donor trust loop.
- Dependencies:
  - Payment and compliance readiness.
  - Scalable data operations.
  - Strong retention.
  - Clear business model.
- Risks:
  - Expansion creates compliance and operational complexity.
  - Platform breadth could dilute the cause-first experience.
