import { describe, expect, it } from "vitest";
import { distribute, type DistributionInput } from "@/lib/distribution";
import { buildSplit } from "@/lib/mvpSplit";
import type { MvpCategory } from "@/lib/types";

const categoryOf: Record<string, MvpCategory> = {
  amf: "Global health",
  hki: "Global health",
  mc: "Global health",
  ni: "Global health",
  gd: "Poverty relief",
  thl: "Animal welfare"
};
const featured: DistributionInput["featured"] = ["amf", "hki", "mc", "ni", "gd"].map((id) => ({ id, category: categoryOf[id] }));
const ALL: MvpCategory[] = ["Global health", "Poverty relief", "Animal welfare"];
const base: DistributionInput = {
  totalCents: 5000,
  areas: ALL,
  featured,
  animalCharityId: "thl",
  expertFundId: "fund",
  letExpertsDecide: false
};

const sum = (lines: { cents: number }[]) => lines.reduce((total, line) => total + line.cents, 0);
const spread = (values: number[]) => Math.max(...values) - Math.min(...values);

/** Every non-empty choice of causes: 3 with one cause, 3 with two, 1 with three. */
const subsets: MvpCategory[][] = [
  ["Global health"],
  ["Poverty relief"],
  ["Animal welfare"],
  ["Global health", "Poverty relief"],
  ["Global health", "Animal welfare"],
  ["Poverty relief", "Animal welfare"],
  ALL
];

function causeTotals(lines: { organizationId: string; cents: number }[]) {
  const totals = new Map<MvpCategory, number>();
  for (const line of lines) totals.set(categoryOf[line.organizationId], (totals.get(categoryOf[line.organizationId]) ?? 0) + line.cents);
  return totals;
}

describe("distribute (placeholder rule)", () => {
  it("EUR 50 across Global health, Poverty relief and Animal welfare is 16.67, 16.67, 16.66", () => {
    const totals = causeTotals(distribute(base));
    expect([...totals.values()]).toEqual([1667, 1667, 1666]);
    expect(totals.get("Global health")).toBe(1667);
    expect(totals.get("Poverty relief")).toBe(1667);
    expect(totals.get("Animal welfare")).toBe(1666);
  });

  it("then splits inside a cause the same way: leftover cents to the first charities", () => {
    expect(distribute(base)).toEqual([
      { organizationId: "amf", cents: 417 },
      { organizationId: "hki", cents: 417 },
      { organizationId: "mc", cents: 417 },
      { organizationId: "ni", cents: 416 },
      { organizationId: "gd", cents: 1667 },
      { organizationId: "thl", cents: 1666 }
    ]);
  });

  describe.each([10, 13, 37, 50])("EUR %i", (euros) => {
    describe.each(subsets.map((areas) => [areas.length, areas.join(" + "), areas] as const))("%i cause(s): %s", (_count, _label, areas) => {
      const lines = distribute({ ...base, totalCents: euros * 100, areas });

      it("adds up to the amount, to the cent", () => {
        expect(sum(lines)).toBe(euros * 100);
      });

      it("keeps cause totals within 1 cent of each other", () => {
        const totals = [...causeTotals(lines).values()];
        expect(totals).toHaveLength(areas.length);
        expect(spread(totals)).toBeLessThanOrEqual(1);
      });

      it("keeps charities within a cause within 1 cent of each other", () => {
        for (const area of areas) {
          const cents = lines.filter((line) => categoryOf[line.organizationId] === area).map((line) => line.cents);
          expect(spread(cents)).toBeLessThanOrEqual(1);
        }
      });

      it("pays no negative or fractional cents", () => {
        for (const line of lines) {
          expect(Number.isInteger(line.cents)).toBe(true);
          expect(line.cents).toBeGreaterThan(0);
        }
      });
    });
  });

  it("sends Animal welfare 100% to The Humane League", () => {
    expect(distribute({ ...base, areas: ["Animal welfare"] })).toEqual([{ organizationId: "thl", cents: 5000 }]);
  });

  it("sends 'Let experts decide' 100% to the GiveWell Top Charities Fund", () => {
    expect(distribute({ ...base, letExpertsDecide: true })).toEqual([{ organizationId: "fund", cents: 5000 }]);
  });

  it("ignores repeated causes and returns nothing for no causes or no money", () => {
    expect(distribute({ ...base, areas: ["Animal welfare", "Animal welfare"] })).toEqual([{ organizationId: "thl", cents: 5000 }]);
    expect(distribute({ ...base, areas: [] })).toEqual([]);
    expect(distribute({ ...base, totalCents: 0 })).toEqual([]);
    expect(distribute({ ...base, totalCents: -5 })).toEqual([]);
  });
});

describe("buildSplit with the real MVP records", () => {
  const split = buildSplit({ areas: ALL, amountCents: 5000, letExpertsDecide: false });

  it("EUR 50 across the three causes: 16.67, 16.67, 16.66, adding up to 50.00", () => {
    const totals = new Map<string, number>();
    for (const { organization, cents } of split) totals.set(organization.category, (totals.get(organization.category) ?? 0) + cents);
    expect(totals.get("Global health")).toBe(1667);
    expect(totals.get("Poverty relief")).toBe(1667);
    expect(totals.get("Animal welfare")).toBe(1666);
    expect(sum(split)).toBe(5000);
  });

  it("uses the four featured Global health charities, GiveDirectly and The Humane League only", () => {
    expect(split.map((line) => [line.organization.id, line.cents])).toEqual([
      ["against-malaria-foundation", 417],
      ["helen-keller-intl", 417],
      ["malaria-consortium", 417],
      ["new-incentives", 416],
      ["givedirectly", 1667],
      ["the-humane-league", 1666]
    ]);
  });

  it("'Let experts decide' is 100% the GiveWell Top Charities Fund", () => {
    const experts = buildSplit({ areas: ALL, amountCents: 5000, letExpertsDecide: true });
    expect(experts.map((line) => [line.organization.id, line.cents])).toEqual([["givewell-top-charities-fund", 5000]]);
  });
});
