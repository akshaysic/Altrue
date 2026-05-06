# Altrue

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
