import type { MvpCategory } from "@/lib/types";

/**
 * PLACEHOLDER RULE, edit me.
 *
 * An illustrative way to split a monthly amount. Not advice, not a recommendation, no impact maths.
 *  - "Let experts decide": 100% to the GiveWell Top Charities Fund.
 *  - Otherwise the amount is split equally across the picked causes.
 *  - Within a cause, equally across that cause's featured charities.
 *  - Animal welfare goes 100% to its one charity (The Humane League).
 *  - Each line is rounded down to whole cents; the leftover cents go to the first line.
 */

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

  const lines: DistributionLine[] = groups.flatMap((ids) =>
    ids.map((organizationId) => ({ organizationId, cents: Math.floor(total / groups.length / ids.length) }))
  );

  const leftover = total - lines.reduce((sum, line) => sum + line.cents, 0);
  lines[0] = { ...lines[0], cents: lines[0].cents + leftover };
  return lines;
}
