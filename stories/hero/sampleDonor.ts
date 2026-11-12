import type { MvpCategory } from "@/lib/types";

/** One recipient line of a simulated gift. organizationId must be an id in lib/seed/sources.ts. */
export type SampleGiftLine = { organizationId: string; cents: number };
export type SampleGift = { date: string; cents: number; lines: readonly SampleGiftLine[] };

/** The plan's equal split of $12: $4 per area, then $1 to each Global health charity. Ids are seed ids. */
const SPLIT_LINES: readonly SampleGiftLine[] = [
  { organizationId: "against-malaria-foundation", cents: 100 },
  { organizationId: "helen-keller-intl", cents: 100 },
  { organizationId: "malaria-consortium", cents: 100 },
  { organizationId: "new-incentives", cents: 100 },
  { organizationId: "givedirectly", cents: 400 },
  { organizationId: "the-humane-league", cents: 400 }
];

/**
 * The fictional donor behind the hero mockups. Not a real person: every value here is made up for the pitch frames.
 * Charity names and figures never live here; lines only point at seed ids in lib/seed/sources.ts.
 * Amounts are USD cents and are never converted. Nothing is charged: the card is a placeholder.
 */
export const sampleDonor = {
  displayName: "Sample donor",
  currency: "USD",
  monthlyCents: 1200,
  areas: ["Global health", "Poverty relief", "Animal welfare"] as readonly MvpCategory[],
  planStartedOn: "2026-09-01",
  paymentMethod: "Card ending 4242",
  nextGiftDate: "2026-12-01",
  /** Shown on Profile as plain on/off settings. Nothing is sent. */
  notifications: { monthlySummary: true, productUpdates: false },
  /** Simulated monthly gifts, newest first. October shows the "let experts decide" option. No money moved. */
  history: [
    { date: "2026-11-01", cents: 1200, lines: SPLIT_LINES },
    { date: "2026-10-01", cents: 1200, lines: [{ organizationId: "givewell-top-charities-fund", cents: 1200 }] },
    { date: "2026-09-01", cents: 1200, lines: SPLIT_LINES }
  ] satisfies readonly SampleGift[]
} as const;
