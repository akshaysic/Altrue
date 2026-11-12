import type { MvpCategory } from "@/lib/types";

/**
 * The fictional donor behind the hero mockups. Not a real person: every value here is made up for the pitch frames.
 * Charity data never lives here; it comes from lib/seed/sources.ts. Amounts are USD cents and are never converted.
 */
export const sampleDonor = {
  displayName: "Sample donor",
  currency: "USD",
  /** $12 splits cleanly: $4 per area, then $1 to each of the four Global health charities. */
  monthlyCents: 1200,
  areas: ["Global health", "Poverty relief", "Animal welfare"] as readonly MvpCategory[],
  planStartedOn: "2026-08-01",
  /** Simulated monthly gifts, newest first. No money moved. */
  history: [
    { date: "2026-11-01", cents: 1200 },
    { date: "2026-10-01", cents: 1200 },
    { date: "2026-09-01", cents: 1200 },
    { date: "2026-08-01", cents: 1200 }
  ]
} as const;
