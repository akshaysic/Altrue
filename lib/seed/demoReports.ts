import type { ImpactReport, ImpactReportItem } from "@/lib/types";
import { demoUser } from "@/lib/seed/demoUser";

export const demoReports: ImpactReport[] = [
  {
    id: "demo-impact-may-2026",
    userId: demoUser.id,
    periodStart: "2026-05-01",
    periodEnd: "2026-05-31",
    totalDonatedCents: 1000,
    summary: "Demo report showing how a mocked monthly plan can translate into cause-level impact estimates.",
    createdAt: "2026-05-31T00:00:00.000Z",
    isDemo: true
  }
];

export const demoReportItems: ImpactReportItem[] = [
  {
    id: "report-item-global-health",
    impactReportId: "demo-impact-may-2026",
    causeId: "global-health",
    nonprofitId: "global-health-access-fund",
    metricId: "nets-funded",
    amountAllocatedCents: 400,
    estimatedUnits: 1,
    narrative: "Your demo allocation helped support mosquito net equivalents.",
    methodologyNote: "Demo estimate uses allocated cents divided by seeded cost per unit, rounded conservatively."
  },
  {
    id: "report-item-hunger",
    impactReportId: "demo-impact-may-2026",
    causeId: "hunger-food-security",
    nonprofitId: "community-food-access-fund",
    metricId: "meals-provided",
    amountAllocatedCents: 300,
    estimatedUnits: 3,
    narrative: "Your demo allocation helped support meal equivalents.",
    methodologyNote: "Demo estimate uses allocated cents divided by seeded cost per unit, rounded conservatively."
  },
  {
    id: "report-item-climate",
    impactReportId: "demo-impact-may-2026",
    causeId: "climate-environment",
    nonprofitId: "climate-resilience-fund",
    metricId: "trees-planted",
    amountAllocatedCents: 300,
    estimatedUnits: 1,
    narrative: "Your demo allocation helped support tree planting equivalents.",
    methodologyNote: "Demo estimate uses allocated cents divided by seeded cost per unit, rounded conservatively."
  }
];
