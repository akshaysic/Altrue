import type { Cause } from "@/lib/types";

export const causes: Cause[] = [
  {
    id: "global-health",
    slug: "global-health",
    name: "Global Health",
    shortDescription: "Preventable disease, essential medicine, maternal health, and basic healthcare access.",
    longDescription: "Global Health supports proven health interventions where small recurring donations can add up across many donors.",
    userFacingExplanation: "Help people access prevention, treatment, and basic care in places where health systems need more support.",
    exampleInterventions: ["Malaria prevention", "Vaccination support", "Maternal health services", "Essential medicine access"],
    exampleImpactMetrics: ["Mosquito nets funded", "Treatments delivered", "Clinic visits supported"],
    tags: ["health", "prevention", "evidence-backed", "global"],
    uncertaintyNotes: ["Health estimates rely on average program costs and may not map directly to one donor's dollars."],
    isActive: true,
    sortOrder: 1
  },
  {
    id: "hunger-food-security",
    slug: "hunger-food-security",
    name: "Hunger And Food Security",
    shortDescription: "Food access, nutrition support, food banks, and emergency meals.",
    longDescription: "Hunger And Food Security supports immediate food needs and programs that improve stable nutrition access.",
    userFacingExplanation: "Help people meet urgent food needs while supporting more reliable access to nutrition.",
    exampleInterventions: ["Emergency meal distribution", "Food bank support", "Nutrition programs", "Community pantry supply"],
    exampleImpactMetrics: ["Meals provided", "Families supported", "Nutrition kits funded"],
    tags: ["food", "nutrition", "local", "emergency"],
    uncertaintyNotes: ["Meal-equivalent estimates vary by region and provider."],
    isActive: true,
    sortOrder: 2
  },
  {
    id: "climate-environment",
    slug: "climate-environment",
    name: "Climate And Environment",
    shortDescription: "Climate mitigation, conservation, clean energy access, and ecosystem protection.",
    longDescription: "Climate And Environment supports work that protects ecosystems, reduces harm, and builds resilience over time.",
    userFacingExplanation: "Support environmental programs where results may be long-term and estimate-heavy but still important.",
    exampleInterventions: ["Reforestation", "Conservation work", "Clean energy access", "Climate resilience projects"],
    exampleImpactMetrics: ["Trees planted", "Acres protected", "Estimated emissions avoided"],
    tags: ["climate", "environment", "conservation", "long-term"],
    uncertaintyNotes: ["Climate estimates can have long time horizons and need methodology caveats."],
    isActive: true,
    sortOrder: 3
  },
  {
    id: "education-opportunity",
    slug: "education-opportunity",
    name: "Education And Opportunity",
    shortDescription: "School access, tutoring, scholarships, supplies, and digital learning.",
    longDescription: "Education And Opportunity supports access to learning resources and programs with long-term potential.",
    userFacingExplanation: "Support learning opportunities that can improve long-term life outcomes without overclaiming guarantees.",
    exampleInterventions: ["Tutoring hours", "School supplies", "Scholarship support", "Digital learning access"],
    exampleImpactMetrics: ["Students supported", "Learning hours funded", "School supply kits provided"],
    tags: ["education", "youth", "opportunity", "long-term"],
    uncertaintyNotes: ["Education outcomes are long-term and hard to attribute to a single donation."],
    isActive: true,
    sortOrder: 4
  },
  {
    id: "poverty-economic-mobility",
    slug: "poverty-economic-mobility",
    name: "Poverty And Economic Mobility",
    shortDescription: "Cash assistance, job training, housing stability, and financial resilience.",
    longDescription: "Poverty And Economic Mobility supports urgent needs and pathways toward more stable financial futures.",
    userFacingExplanation: "Help people cover immediate needs and access support that can improve financial resilience.",
    exampleInterventions: ["Direct cash support", "Job training", "Housing stability assistance", "Financial coaching"],
    exampleImpactMetrics: ["Cash transfers supported", "Training hours funded", "Households supported"],
    tags: ["poverty", "mobility", "housing", "cash"],
    uncertaintyNotes: ["Economic mobility depends on many factors beyond one program."],
    isActive: true,
    sortOrder: 5
  },
  {
    id: "crisis-relief",
    slug: "crisis-relief",
    name: "Crisis Relief",
    shortDescription: "Disaster response, refugee support, emergency shelter, and urgent medical aid.",
    longDescription: "Crisis Relief supports fast-response programs for people facing sudden emergencies.",
    userFacingExplanation: "Support urgent relief while recognizing that crisis needs change quickly.",
    exampleInterventions: ["Emergency kits", "Shelter support", "Refugee assistance", "Crisis medical supplies"],
    exampleImpactMetrics: ["Emergency kits delivered", "Shelter nights supported", "Relief packages funded"],
    tags: ["crisis", "disaster", "refugees", "urgent"],
    uncertaintyNotes: ["Crisis estimates may become outdated and should include reporting dates."],
    isActive: true,
    sortOrder: 6
  },
  {
    id: "animal-welfare",
    slug: "animal-welfare",
    name: "Animal Welfare",
    shortDescription: "Shelter support, veterinary care, humane treatment, and habitat protection.",
    longDescription: "Animal Welfare supports care for animals and protection for environments they depend on.",
    userFacingExplanation: "Support animal care and habitat programs while keeping impact claims grounded.",
    exampleInterventions: ["Shelter care", "Veterinary treatment", "Spay and neuter programs", "Habitat protection"],
    exampleImpactMetrics: ["Animals treated", "Shelter days funded", "Veterinary visits supported"],
    tags: ["animals", "shelter", "veterinary", "habitat"],
    uncertaintyNotes: ["Animal welfare metrics vary widely by species, geography, and care type."],
    isActive: true,
    sortOrder: 7
  },
  {
    id: "mental-health",
    slug: "mental-health",
    name: "Mental Health",
    shortDescription: "Counseling access, crisis lines, peer support, and community mental health programs.",
    longDescription: "Mental Health supports access to care and community support systems.",
    userFacingExplanation: "Support care access and service capacity without making guarantees about personal outcomes.",
    exampleInterventions: ["Counseling sessions", "Crisis hotline capacity", "Peer support groups", "Community outreach"],
    exampleImpactMetrics: ["Counseling sessions supported", "Hotline capacity hours funded", "Peer support hours provided"],
    tags: ["mental-health", "care", "community", "support"],
    uncertaintyNotes: ["Mental health reporting should focus on access and capacity, not guaranteed wellness outcomes."],
    isActive: true,
    sortOrder: 8
  }
];

export function getCauseBySlug(slug: string) {
  return causes.find((cause) => cause.slug === slug);
}
