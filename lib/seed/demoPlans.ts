import { DEFAULT_CADENCE, DEFAULT_CURRENCY, MOCKED_FEE_CENTS } from "@/lib/constants";
import type { Donation, DonationAllocation, DonationPlan } from "@/lib/types";
import { demoUser } from "@/lib/seed/demoUser";

export const demoPlans: DonationPlan[] = [
  {
    id: "demo-plan-active",
    userId: demoUser.id,
    status: "active",
    monthlyAmountCents: 1000,
    currency: DEFAULT_CURRENCY,
    cadence: DEFAULT_CADENCE,
    nextChargeDate: "2026-06-01",
    createdAt: "2026-05-02T00:00:00.000Z",
    updatedAt: "2026-05-02T00:00:00.000Z"
  },
  {
    id: "demo-plan-paused",
    userId: demoUser.id,
    status: "paused",
    monthlyAmountCents: 500,
    currency: DEFAULT_CURRENCY,
    cadence: DEFAULT_CADENCE,
    nextChargeDate: "2026-06-15",
    createdAt: "2026-04-15T00:00:00.000Z",
    updatedAt: "2026-05-03T00:00:00.000Z",
    pausedAt: "2026-05-03T00:00:00.000Z"
  }
];

export const demoAllocations: DonationAllocation[] = [
  { id: "alloc-global-health", donationPlanId: "demo-plan-active", causeId: "global-health", nonprofitId: "global-health-access-fund", percentage: 40, amountCents: 400, rationale: "Clear prevention-oriented metrics in demo data." },
  { id: "alloc-hunger", donationPlanId: "demo-plan-active", causeId: "hunger-food-security", nonprofitId: "community-food-access-fund", percentage: 30, amountCents: 300, rationale: "Immediate needs with simple service metrics." },
  { id: "alloc-climate", donationPlanId: "demo-plan-active", causeId: "climate-environment", nonprofitId: "climate-resilience-fund", percentage: 30, amountCents: 300, rationale: "Long-term environmental support with caveated estimates." }
];

export const demoDonations: Donation[] = [
  {
    id: "demo-donation-may",
    userId: demoUser.id,
    donationPlanId: "demo-plan-active",
    amountCents: 1000,
    feeCents: MOCKED_FEE_CENTS,
    netAmountCents: 1000,
    currency: DEFAULT_CURRENCY,
    status: "mocked",
    paymentProvider: "mock",
    paymentProviderId: "mock-payment-may",
    chargedAt: "2026-05-02T00:00:00.000Z",
    createdAt: "2026-05-02T00:00:00.000Z"
  }
];
