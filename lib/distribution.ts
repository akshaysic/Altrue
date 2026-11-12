import type { MvpCategory } from "@/lib/types";

/**
 * PLACEHOLDER RULE, edit me.
 *
 * An illustrative way to split a monthly amount. Not advice, not a recommendation, no impact maths.
 *  - "Let experts decide": 100% to the GiveWell Top Charities Fund.
 *  - Otherwise the amount is split equally across the picked causes.
 *  - Within a cause, equally across that cause's featured charities.
 *  - Animal welfare goes 100% to its one charity (The Humane League).
 *  - Integer cents throughout. Each split gives everyone floor(total / n), then hands the leftover
 *    cents out one at a time to the first ones in order, so shares differ by at most 1 cent
 *    (EUR 50 across 3 causes is 16.67, 16.67, 16.66) and always add up to the total.
 */

/** Splits `total` cents into `parts` shares that differ by at most 1 cent; the first shares get the extras. */
function splitEvenly(total: number, parts: number): number[] {
  const base = Math.floor(total / parts);
  const leftover = total - base * parts;
  return Array.from({ length: parts }, (_, index) => base + (index < leftover ? 1 : 0));
}

export type DistributionInput = {
  totalCents: number;
  /** Picked causes. Order sets line order; repeats are ignored. */
  areas: readonly MvpCategory[];
  /** Featured charities in display order. Only the ones in a picked area are used. */
  featured: readonly { id: string; category: MvpCategory }[];
  animalCharityId: string;
  expertFundId: string;
  letExpertsDecide: boolean;
};

export type DistributionLine = { organizationId: string; cents: number };

export function distribute(input: DistributionInput): DistributionLine[] {
  const total = Math.floor(input.totalCents);
  if (!(total > 0)) return [];

  if (input.letExpertsDecide) return [{ organizationId: input.expertFundId, cents: total }];

  // Recipients per picked area, in order. Areas with nobody to give to are dropped, not counted.
  const groups = [...new Set(input.areas)]
    .map((area) =>
      area === "Animal welfare"
        ? [input.animalCharityId]
        : input.featured.filter((org) => org.category === area).map((org) => org.id)
    )
    .filter((ids) => ids.length > 0);
  if (groups.length === 0) return [];

  // Cause level first, then charity level inside each cause.
  const causeShares = splitEvenly(total, groups.length);
  return groups.flatMap((ids, index) =>
    splitEvenly(causeShares[index], ids.length).map((cents, position) => ({ organizationId: ids[position], cents }))
  );
}
