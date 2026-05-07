import type { ImpactMetric } from "@/lib/types";

export const impactMetrics: ImpactMetric[] = [
  { id: "nets-funded", causeId: "global-health", name: "Mosquito nets funded", unit: "nets", description: "Estimated mosquito net equivalents supported.", costPerUnitCents: 250, source: "Demo seed estimate", caveat: "Average costs vary by program and region.", isDemo: true },
  { id: "meals-provided", causeId: "hunger-food-security", name: "Meals provided", unit: "meals", description: "Estimated meal equivalents supported.", costPerUnitCents: 100, source: "Demo seed estimate", caveat: "Meal-equivalent calculations vary by provider.", isDemo: true },
  { id: "trees-planted", causeId: "climate-environment", name: "Trees planted", unit: "trees", description: "Estimated tree planting equivalents supported.", costPerUnitCents: 300, source: "Demo seed estimate", caveat: "Long-term climate impact depends on survival rates and stewardship.", isDemo: true },
  { id: "learning-hours", causeId: "education-opportunity", name: "Learning hours funded", unit: "hours", description: "Estimated learning support hours funded.", costPerUnitCents: 500, source: "Demo seed estimate", caveat: "Education outcomes cannot be guaranteed from service hours alone.", isDemo: true },
  { id: "cash-support", causeId: "poverty-economic-mobility", name: "Cash support equivalents", unit: "support units", description: "Estimated direct support units funded.", costPerUnitCents: 1000, source: "Demo seed estimate", caveat: "Economic stability depends on many external factors.", isDemo: true },
  { id: "relief-kits", causeId: "crisis-relief", name: "Relief kits supported", unit: "kits", description: "Estimated emergency kit equivalents supported.", costPerUnitCents: 750, source: "Demo seed estimate", caveat: "Crisis needs and costs change quickly.", isDemo: true },
  { id: "shelter-days", causeId: "animal-welfare", name: "Shelter days funded", unit: "days", description: "Estimated animal shelter care days supported.", costPerUnitCents: 400, source: "Demo seed estimate", caveat: "Animal care costs vary by species and location.", isDemo: true },
  { id: "counseling-sessions", causeId: "mental-health", name: "Counseling sessions supported", unit: "sessions", description: "Estimated counseling session equivalents supported.", costPerUnitCents: 2500, source: "Demo seed estimate", caveat: "Mental health impact should be reported as access supported, not guaranteed outcomes.", isDemo: true }
];

export function getImpactMetricsByCauseId(causeId: string) {
  return impactMetrics.filter((metric) => metric.causeId === causeId);
}
