# Altrue

<<<<<<< HEAD
Altrue is a meta-charity microdonation app that helps people turn small recurring donations into transparent, cause-based giving portfolios. A donor chooses what they care about, sets a modest monthly amount, reviews an AI-assisted allocation across causes, edits the split if needed, activates or mocks a donation plan, and later sees clear impact reporting.

## Core Features

- Cause-first discovery across focused MVP areas such as global health, hunger, climate, education, poverty, crisis relief, animal welfare, and mental health.
- Recurring microdonation plans with defaults like `$3`, `$5`, `$10`, `$20`, and custom amounts.
- AI-assisted donation allocation that explains trade-offs and keeps recommendations editable.
- Donor dashboard for active plan status, next donation date, lifetime giving, and recent impact.
- Impact reporting with modest estimates, source notes, caveats, and no overclaiming of causality.
- Trust surfaces near key decisions, including fee disclosure, verification status, methodology notes, and pause/cancel controls.

## MVP Direction

The MVP is donor-side first. It should prove that a user can move from interest to a recurring donation plan without being overwhelmed by charity research or pressured into giving more than they intended.

The first version should prioritize:

- Onboarding and cause preference selection.
- Donation amount selection and editable allocation splits.
- AI-assisted recommendation review.
- Mocked or integration-ready checkout.
- Dashboard, donation history, and impact reports.
- Transparent fees, assumptions, and user controls.

Charity SaaS tooling, advanced NGO analytics, donor leaderboards, influencer campaigns, volunteering, premium tiers, and complex gamification are not part of the MVP.

## Tech Direction

- Framework-adaptable docs use Next.js-style route examples.
- Data models should be ready for a real database and payment provider, even if the first build uses local seed data and mocked payment states.
- AI recommendations must only use approved app data from seed content, database records, or verified sources added to the product.
- The UI should feel like a calm consumer finance/productivity app, not a generic charity directory.

## Project Status

Altrue is in MVP planning and product specification. The repository currently focuses on source-of-truth documentation for implementation.

Start with:

- [Product Context](docs/ALTRUE_PRODUCT_CONTEXT.md)
- [MVP Requirements](docs/MVP_REQUIREMENTS.md)
- [Information Architecture and Routes](docs/IA_AND_ROUTES.md)
- [Cause Taxonomy](docs/CAUSE_TAXONOMY.md)
- [AI Donation Assistant](docs/AI_DONATION_ASSISTANT.md)
- [Roadmap](docs/ROADMAP.md)

## Vision

Altrue should make giving feel approachable, transparent, and personally meaningful. Small donations should feel legitimate. Donors should understand where money goes, why an allocation was suggested, what assumptions sit behind impact estimates, and how to stay in control of their recurring giving.
=======
> A meta-charity microdonation app helping people turn small donations into thoughtful, evidence-informed impact.

Altrue helps users distribute recurring or one-time donations across high-impact causes through guided recommendations, transparent impact estimates, and an AI-powered donation assistant.

Instead of forcing users to choose a single charity from an overwhelming landscape, Altrue helps them explore cause areas, compare interventions, and build personalised donation plans.

---

## ✨ Core Features

### AI Donation Assistant
A conversational assistant that helps users:

- Discover causes aligned with their values
- Understand trade-offs between interventions
- Generate suggested donation splits
- Learn about impact in simple language

Example questions:

- “How should I split €20/month?”
- “I care about climate and education.”
- “What’s the most effective use of a small donation?”

---

### Cause Area Discovery

Explore curated cause areas including:

- Global health
- Climate change
- Animal welfare
- Education
- Poverty reduction
- Emergency relief
- Meta-charity funds

Each cause area includes:

- Plain-language explanations
- Recommended charities/funds
- Impact metrics
- Evidence notes
- Example interventions

---

### Microdonations

Users can create:

- Monthly recurring donations
- One-time donations
- AI-generated donation portfolios
- Manual multi-cause allocations

Small donations should still feel meaningful.

---

### Real-World Impact Estimates

Altrue translates donations into understandable outcomes such as:

- Mosquito nets funded
- Malaria cases prevented
- Children supported in education
- Meals or cash transfers delivered
- CO₂ emissions reduced
- Campaigns funded

Impact estimates include uncertainty and contextual notes to avoid false precision.

---

## 🧭 Product Philosophy

Altrue is designed to feel:

- Calm
- Trustworthy
- Human
- Transparent
- Accessible to first-time donors

The product avoids:

- Guilt-driven fundraising
- Dark patterns
- Manipulative urgency
- Overwhelming charity jargon

---

## 🛠 MVP User Flow

1. Select a donation amount
2. Explore causes or chat with the assistant
3. Receive a suggested donation split
4. Adjust allocations manually
5. Review impact estimates
6. Confirm recurring or one-time donation
7. Track cumulative impact over time

---

## ⚙️ Tech Direction

Suggested MVP stack:

| Layer | Suggested Tech |
|---|---|
| Frontend | React / Next.js |
| Backend | Flask / FastAPI |
| Database | SQLite → PostgreSQL |
| Payments | Stripe |
| AI | OpenAI API |
| Data | Curated JSON / DB models |

---

## 🧱 MVP Data Models

- User
- DonationPlan
- DonationAllocation
- CauseArea
- Charity
- ImpactMetric
- ChatSession
- Recommendation

---

## 🌍 Vision

Altrue aims to make thoughtful giving simpler, clearer, and more approachable.

The first version is intentionally lightweight:
not a full charity marketplace, but a calm decision-support tool that helps people make their first meaningful donation with confidence.
>>>>>>> 2b55ad791ee902942219574c1cd94047d29f5f67
