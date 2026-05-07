import type { Nonprofit } from "@/lib/types";

const placeholderTrustNote = "Placeholder record for MVP scaffolding. This does not imply partnership or endorsement.";

export const nonprofits: Nonprofit[] = [
  ["global-health", "Global Health Access Fund"],
  ["global-health", "Malaria Prevention Collective"],
  ["hunger-food-security", "Community Food Access Fund"],
  ["hunger-food-security", "Emergency Meals Network"],
  ["climate-environment", "Climate Resilience Fund"],
  ["climate-environment", "Habitat Protection Trust"],
  ["education-opportunity", "Learning Access Fund"],
  ["education-opportunity", "Student Opportunity Network"],
  ["poverty-economic-mobility", "Economic Mobility Fund"],
  ["poverty-economic-mobility", "Housing Stability Network"],
  ["crisis-relief", "Rapid Relief Fund"],
  ["crisis-relief", "Emergency Shelter Network"],
  ["animal-welfare", "Animal Care Fund"],
  ["animal-welfare", "Humane Shelter Network"],
  ["mental-health", "Mental Health Access Fund"],
  ["mental-health", "Crisis Support Network"]
].map(([causeId, name], index) => ({
  id: name.toLowerCase().replaceAll(" ", "-"),
  name,
  slug: name.toLowerCase().replaceAll(" ", "-"),
  description: `${name} is a demo nonprofit placeholder for early Altrue MVP screens.`,
  causeIds: [causeId],
  verificationStatus: index % 3 === 0 ? "pending_review" : "data_incomplete",
  country: "US",
  trustNotes: placeholderTrustNote,
  impactSourceNotes: "Demo source notes only. Replace before using real nonprofit data.",
  isPlaceholder: true
}));

export function getNonprofitsByCauseId(causeId: string) {
  return nonprofits.filter((nonprofit) => nonprofit.causeIds.includes(causeId));
}
