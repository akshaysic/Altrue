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

/** The three cause categories the MVP shows. Other categories stay stored but are post-MVP. */
export type MvpCategory = "Global health" | "Poverty relief" | "Animal welfare";

/** Explicit MVP flag: post-MVP records stay in the data but never reach MVP results. */
export type MvpStatus = "mvp" | "post-mvp";

/** Provenance every sourced record carries. Strings are kept exactly as the source packet gives them. */
export type Provenance = {
  source_name: string;
  source_url: string;
  /** Free text from the packet, e.g. "October 2026" or "retrieved 2026-11-07". Not normalised on purpose. */
  as_of: string;
};

/** Every displayed figure is an "estimate"; "illustrative" is for content with no sourced method. */
export type FigureLabel = "estimate" | "illustrative";

export type SourcedFigure = Provenance & {
  value: string;
  label: string;
  /** Who produced the figure and how, as written in the packet. */
  basis: string;
  figureLabel: FigureLabel;
};

export type OrganizationRole = "featured" | "expert_fund" | "animal_charity";

/** A curated charity or fund from .agents/research/charity-shortlist-2026-11-07.json. */
export type CuratedOrganization = Provenance & {
  id: string;
  name: string;
  type: "charity" | "fund";
  category: MvpCategory;
  /** featured: shown equally, no default pick. expert_fund: the "let experts decide" option. */
  role: OrganizationRole;
  mvpStatus: MvpStatus;
  region: string;
  summary: string;
  evidence: string;
  evaluator: string;
  donateUrl: string;
  /** Date the packet was retrieved, ISO format. */
  retrieved: string;
  notes: string;
  figures: SourcedFigure[];
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
  mvpStatus: MvpStatus;
  /** Set only on the three MVP causes. */
  mvpCategory?: MvpCategory;
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

/** A sourced impact figure for one MVP organization. Unlike ImpactMetric, it is not a demo record. */
export type SourcedImpactMetric = SourcedFigure & {
  id: string;
  organizationId: string;
  causeId: string;
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
