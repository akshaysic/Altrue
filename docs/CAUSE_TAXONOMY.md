# Altrue Cause Taxonomy

The MVP taxonomy should stay tight. Cause discovery is the main entry point for donors, so each cause must be understandable, emotionally respectful, and ready for seed data.

## Seed Data Shape

Each cause should include:

- `id`
- `slug`
- `name`
- `shortDescription`
- `userFacingExplanation`
- `exampleInterventions`
- `exampleImpactMetrics`
- `tags`
- `uncertaintyNotes`
- `nonprofitPlaceholders`
- `sortOrder`
- `isActive`

Each nonprofit placeholder should include:

- `name`
- `slug`
- `description`
- `verificationStatus`
- `trustNotes`
- `impactSourceNotes`
- `isPlaceholder`

Use placeholders until real verification exists. Do not imply partnership.

## MVP Cause Areas

### Global Health

- Short description: Preventable disease, essential medicine, maternal health, and basic healthcare access.
- User-facing explanation: Support programs that help people access proven health interventions where small amounts can add up.
- Example interventions:
  - Malaria prevention.
  - Vaccination support.
  - Maternal health services.
  - Essential medicine access.
- Example impact metrics:
  - Mosquito nets funded.
  - Treatments delivered.
  - Clinic visits supported.
  - Vaccination outreach supported.
- Suggested tags:
  - `health`
  - `prevention`
  - `evidence-backed`
  - `global`
- Notes on uncertainty:
  - Health impact estimates often rely on average program costs and may not map directly to one donor's dollars.
  - Regional costs can vary.
- Example nonprofit placeholders:
  - Global Health Access Fund.
  - Malaria Prevention Collective.
  - Essential Medicines Network.

### Hunger And Food Security

- Short description: Food access, nutrition support, food banks, and emergency meals.
- User-facing explanation: Help people meet immediate food needs while supporting more stable access to nutrition.
- Example interventions:
  - Emergency meal distribution.
  - Food bank support.
  - Nutrition programs.
  - Community pantry supply.
- Example impact metrics:
  - Meals provided.
  - Families supported.
  - Pounds of food delivered.
  - Nutrition kits funded.
- Suggested tags:
  - `food`
  - `nutrition`
  - `local`
  - `emergency`
- Notes on uncertainty:
  - Meal-equivalent estimates vary by region and provider.
  - Food delivery impact can be immediate but may not reflect long-term food security.
- Example nonprofit placeholders:
  - Community Food Access Fund.
  - Emergency Meals Network.
  - Nutrition Support Collective.

### Climate And Environment

- Short description: Climate mitigation, conservation, clean energy access, and ecosystem protection.
- User-facing explanation: Support environmental programs that protect ecosystems and reduce future harm.
- Example interventions:
  - Reforestation.
  - Conservation work.
  - Clean energy access.
  - Climate resilience projects.
- Example impact metrics:
  - Trees planted.
  - Acres protected.
  - Estimated emissions avoided.
  - Clean energy kits supported.
- Suggested tags:
  - `climate`
  - `environment`
  - `conservation`
  - `long-term`
- Notes on uncertainty:
  - Climate estimates can have long time horizons.
  - Carbon and tree metrics should include methodology caveats.
- Example nonprofit placeholders:
  - Climate Resilience Fund.
  - Habitat Protection Trust.
  - Clean Energy Access Collective.

### Education And Opportunity

- Short description: School access, tutoring, scholarships, supplies, and digital learning.
- User-facing explanation: Support learning opportunities that can improve long-term life outcomes.
- Example interventions:
  - Tutoring hours.
  - School supplies.
  - Scholarship support.
  - Digital learning access.
- Example impact metrics:
  - Students supported.
  - Learning hours funded.
  - School supply kits provided.
  - Scholarships supported.
- Suggested tags:
  - `education`
  - `youth`
  - `opportunity`
  - `long-term`
- Notes on uncertainty:
  - Education outcomes are long-term and hard to attribute to a single donation.
  - Metrics should focus on supported activities, not guaranteed outcomes.
- Example nonprofit placeholders:
  - Learning Access Fund.
  - Student Opportunity Network.
  - Digital Classrooms Collective.

### Poverty And Economic Mobility

- Short description: Cash assistance, job training, housing stability, and financial resilience.
- User-facing explanation: Support programs that help people cover urgent needs and build more stable financial futures.
- Example interventions:
  - Direct cash support.
  - Job training.
  - Housing stability assistance.
  - Financial coaching.
- Example impact metrics:
  - Cash transfers supported.
  - Training hours funded.
  - Households supported.
  - Rent or utility assistance cases supported.
- Suggested tags:
  - `poverty`
  - `mobility`
  - `housing`
  - `cash`
- Notes on uncertainty:
  - Economic mobility is influenced by many factors beyond one program.
  - Cash and housing estimates should avoid claiming permanent stability.
- Example nonprofit placeholders:
  - Economic Mobility Fund.
  - Housing Stability Network.
  - Direct Support Collective.

### Crisis Relief

- Short description: Disaster response, refugee support, emergency shelter, and urgent medical aid.
- User-facing explanation: Support fast-response programs for people facing sudden emergencies.
- Example interventions:
  - Emergency kits.
  - Shelter support.
  - Refugee assistance.
  - Crisis medical supplies.
- Example impact metrics:
  - Emergency kits delivered.
  - Shelter nights supported.
  - Relief packages funded.
  - Medical supply units supported.
- Suggested tags:
  - `crisis`
  - `disaster`
  - `refugees`
  - `urgent`
- Notes on uncertainty:
  - Crisis needs change quickly.
  - Estimates may become outdated and should include reporting dates.
- Example nonprofit placeholders:
  - Rapid Relief Fund.
  - Emergency Shelter Network.
  - Refugee Support Collective.

### Animal Welfare

- Short description: Shelter support, veterinary care, humane treatment, and habitat protection.
- User-facing explanation: Support programs that care for animals and protect the environments they depend on.
- Example interventions:
  - Shelter care.
  - Veterinary treatment.
  - Spay and neuter programs.
  - Habitat protection.
- Example impact metrics:
  - Animals treated.
  - Shelter days funded.
  - Veterinary visits supported.
  - Habitats protected.
- Suggested tags:
  - `animals`
  - `shelter`
  - `veterinary`
  - `habitat`
- Notes on uncertainty:
  - Animal welfare metrics vary widely by species, geography, and care type.
  - Habitat metrics can overlap with environmental programs.
- Example nonprofit placeholders:
  - Animal Care Fund.
  - Humane Shelter Network.
  - Wildlife Habitat Collective.

### Mental Health

- Short description: Counseling access, crisis lines, peer support, and community mental health programs.
- User-facing explanation: Support access to care and support systems for people navigating mental health challenges.
- Example interventions:
  - Counseling sessions.
  - Crisis hotline capacity.
  - Peer support groups.
  - Community outreach.
- Example impact metrics:
  - Counseling sessions supported.
  - Hotline capacity hours funded.
  - Peer support hours provided.
  - Outreach contacts supported.
- Suggested tags:
  - `mental-health`
  - `care`
  - `community`
  - `support`
- Notes on uncertainty:
  - Mental health outcomes are sensitive and personal.
  - Report service capacity or access supported rather than guaranteed wellness outcomes.
- Example nonprofit placeholders:
  - Mental Health Access Fund.
  - Crisis Support Network.
  - Community Care Collective.

## Future Cause Areas

These are later expansion candidates, not MVP requirements:

- Arts and culture.
- Civic participation.
- Criminal justice reform.
- Disability rights.
- Elder care.
- Gender equity.
- LGBTQ+ support.
- Public interest journalism.
- Water and sanitation.
- Local community funds by geography.

Add future causes only after the MVP discovery, allocation, and reporting flows work well.
