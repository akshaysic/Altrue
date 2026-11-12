import { describe, expect, it } from "vitest";
import { distribute, type DistributionInput } from "@/lib/distribution";

const featured: DistributionInput["featured"] = [
  { id: "amf", category: "Global health" },
  { id: "hki", category: "Global health" },
  { id: "mc", category: "Global health" },
  { id: "ni", category: "Global health" },
  { id: "gd", category: "Poverty relief" }
];
const base: DistributionInput = {
  totalCents: 2000,
  areas: ["Global health", "Poverty relief", "Animal welfare"],
  featured,
  animalCharityId: "thl",
  expertFundId: "fund",
  letExpertsDecide: false
};
const sum = (lines: { cents: number }[]) => lines.reduce((total, line) => total + line.cents, 0);

describe("distribute (placeholder rule)", () => {
  it("splits equally across picked causes, then across a cause's featured charities", () => {
    // 2000 / 3 causes = 666 each (floor). Global health: 666 / 4 = 166 each. Poverty: 666. Animal: 666.
    expect(distribute(base)).toEqual([
      { organizationId: "amf", cents: 166 + 4 }, // 2000 - (4*166 + 666 + 666) = 4 leftover cents, first line
      { organizationId: "hki", cents: 166 },
      { organizationId: "mc", cents: 166 },
      { organizationId: "ni", cents: 166 },
      { organizationId: "gd", cents: 666 },
      { organizationId: "thl", cents: 666 }
    ]);
  });

  it("always adds up to the total, to the cent", () => {
    for (const totalCents of [1000, 1001, 1234, 2000, 3333, 5000]) {
      for (const areas of [["Global health"], ["Poverty relief", "Animal welfare"], base.areas] as const) {
        expect(sum(distribute({ ...base, totalCents, areas }))).toBe(totalCents);
      }
    }
  });

  it("sends Animal welfare 100% to The Humane League", () => {
    expect(distribute({ ...base, areas: ["Animal welfare"] })).toEqual([{ organizationId: "thl", cents: 2000 }]);
  });

  it("splits one cause equally across its featured charities", () => {
    expect(distribute({ ...base, areas: ["Global health"] }).map((line) => line.cents)).toEqual([500, 500, 500, 500]);
  });

  it("sends 'Let experts decide' 100% to the GiveWell Top Charities Fund", () => {
    expect(distribute({ ...base, letExpertsDecide: true })).toEqual([{ organizationId: "fund", cents: 2000 }]);
  });

  it("gives the leftover cents to the first line", () => {
    const lines = distribute({ ...base, totalCents: 1000, areas: ["Poverty relief", "Animal welfare", "Global health"] });
    // 1000 / 3 = 333 per cause; Global health 333 / 4 = 83 each. 1000 - (333 + 333 + 4*83) = 2 leftover cents.
    expect(lines[0]).toEqual({ organizationId: "gd", cents: 333 + 2 });
    expect(sum(lines)).toBe(1000);
  });

  it("ignores repeated causes and returns nothing for no causes or no money", () => {
    expect(distribute({ ...base, areas: ["Animal welfare", "Animal welfare"] })).toEqual([{ organizationId: "thl", cents: 2000 }]);
    expect(distribute({ ...base, areas: [] })).toEqual([]);
    expect(distribute({ ...base, totalCents: 0 })).toEqual([]);
    expect(distribute({ ...base, totalCents: -5 })).toEqual([]);
  });
});
