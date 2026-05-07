import { DEFAULT_CURRENCY } from "@/lib/constants";
import type { DonorProfile, User } from "@/lib/types";

export const demoUser: User = {
  id: "demo-user",
  email: "demo@altrue.local",
  name: "Demo Donor",
  createdAt: "2026-05-01T00:00:00.000Z",
  onboardingCompletedAt: "2026-05-02T00:00:00.000Z",
  preferredCurrency: DEFAULT_CURRENCY,
  notificationPreferences: {
    monthlyReports: true,
    productUpdates: false
  }
};

export const demoDonorProfile: DonorProfile = {
  id: "demo-profile",
  userId: demoUser.id,
  selectedCauseIds: ["global-health", "hunger-food-security", "climate-environment"],
  priorityStyle: "balanced",
  defaultMonthlyAmountCents: 1000,
  location: "United States"
};
