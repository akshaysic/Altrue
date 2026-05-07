export type Currency = "USD";

export type DonationCadence = "monthly";

export type VerificationStatus = "verified" | "pending_review" | "data_incomplete";

export type DonationPlanStatus = "active" | "paused" | "cancelled";

export type DonationStatus = "mocked" | "pending" | "failed" | "cancelled";

export type PriorityStyle = "balanced" | "urgent" | "long_term" | "local_or_community";

export type User = {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  onboardingCompletedAt?: string;
  preferredCurrency: Currency;
  notificationPreferences: {
    monthlyReports: boolean;
    productUpdates: boolean;
  };
};

export type DonorProfile = {
  id: string;
  userId: string;
  selectedCauseIds: string[];
  priorityStyle: PriorityStyle;
  defaultMonthlyAmountCents: number;
  location?: string;
};

export type Cause = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  userFacingExplanation: string;
  exampleInterventions: string[];
  exampleImpactMetrics: string[];
  tags: string[];
  uncertaintyNotes: string[];
  heroImageUrl?: string;
  isActive: boolean;
  sortOrder: number;
};

export type Nonprofit = {
  id: string;
  name: string;
  slug: string;
  websiteUrl?: string;
  description: string;
  causeIds: string[];
  verificationStatus: VerificationStatus;
  country: string;
  registrationId?: string;
  trustNotes: string;
  impactSourceNotes: string;
  isPlaceholder: boolean;
};

export type ImpactMetric = {
  id: string;
  causeId: string;
  name: string;
  unit: string;
  description: string;
  costPerUnitCents: number;
  source: string;
  caveat: string;
  isDemo: boolean;
};

export type DonationPlan = {
  id: string;
  userId: string;
  status: DonationPlanStatus;
  monthlyAmountCents: number;
  currency: Currency;
  cadence: DonationCadence;
  nextChargeDate: string;
  createdAt: string;
  updatedAt: string;
  pausedAt?: string;
  canceledAt?: string;
};

export type DonationAllocation = {
  id: string;
  donationPlanId: string;
  causeId: string;
  nonprofitId?: string;
  percentage: number;
  amountCents: number;
  rationale: string;
};

export type Donation = {
  id: string;
  userId: string;
  donationPlanId: string;
  amountCents: number;
  feeCents: number;
  netAmountCents: number;
  currency: Currency;
  status: DonationStatus;
  paymentProvider: "mock";
  paymentProviderId: string;
  chargedAt: string;
  createdAt: string;
};

export type ImpactReport = {
  id: string;
  userId: string;
  periodStart: string;
  periodEnd: string;
  totalDonatedCents: number;
  summary: string;
  createdAt: string;
  isDemo: boolean;
};

export type ImpactReportItem = {
  id: string;
  impactReportId: string;
  causeId: string;
  nonprofitId?: string;
  metricId: string;
  amountAllocatedCents: number;
  estimatedUnits: number;
  narrative: string;
  methodologyNote: string;
};

export type AiRecommendation = {
  id: string;
  userId: string;
  inputSnapshot: {
    selectedCauseIds: string[];
    monthlyAmountCents: number;
    priorityStyle: PriorityStyle;
  };
  recommendedAllocations: Array<{
    causeId: string;
    percentage: number;
    amountCents: number;
    rationale: string;
    nonprofitIds: string[];
    caveats: string[];
  }>;
  rationale: string;
  caveats: string[];
  modelName: "mock-deterministic";
  createdAt: string;
  acceptedAt?: string;
};
