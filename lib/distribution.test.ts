import { describe, expect, it } from "vitest";
import { splitDonation } from "@/lib/distribution";
import { curatedOrganizations, selectMvp } from "@/lib/seed/sources";

const organizations = selectMvp(curatedOrganizations);
const total = (lines: { amountCents: number }[]) => lines.reduce((sum, line) => sum + line.amountCents, 0);
const ids = (lines: { organization: { id: string } }[]) => lines.map((line) => line.organization.id);

describe("splitDonation (placeholder rule)", () => {
  it("sends 100% to the GiveWell Top Charities Fund when experts decide", () => {
    const lines = splitDonation({ amountCents: 2000, causes: ["Global health", "Animal welfare"], expertsDecide: true, organizations });
    expect(ids(lines)).toEqual(["givewell-top-charities-fund"]);
    expect(lines[0].amountCents).toBe(2000);
  });

  it("sends 100% of Animal welfare to The Humane League", () => {
    const lines = splitDonation({ amountCents: 2000, causes: ["Animal welfare"], expertsDecide: false, organizations });
    expect(ids(lines)).toEqual(["the-humane-league"]);
    expect(lines[0].amountCents).toBe(2000);
  });

  it("splits a cause equally across its featured charities, A to Z, and never includes the expert fund", () => {
    const lines = splitDonation({ amountCents: 2000, causes: ["Global health"], expertsDecide: false, organizations });
    expect(ids(lines)).toEqual(["against-malaria-foundation", "helen-keller-intl", "malaria-consortium", "new-incentives"]);
    expect(lines.map((line) => line.amountCents)).toEqual([500, 500, 500, 500]);
  });

  it("splits equally across causes first, then within each cause", () => {
    const lines = splitDonation({ amountCents: 2000, causes: ["Poverty relief", "Animal welfare"], expertsDecide: false, organizations });
    expect(ids(lines)).toEqual(["givedirectly", "the-humane-league"]);
    expect(lines.map((line) => line.amountCents)).toEqual([1000, 1000]);
  });

  it("rounds down to cents and gives the remainder to the first line", () => {
    // 2000 / 3 causes; Global health's third / 4 charities = 166.67 → 166 each. Others 666.67 → 666.
    // 4 × 166 + 666 + 666 = 1996, so the first line gets 4 more cents.
    const lines = splitDonation({ amountCents: 2000, causes: ["Global health", "Poverty relief", "Animal welfare"], expertsDecide: false, organizations });
    expect(lines.map((line) => line.amountCents)).toEqual([170, 166, 166, 166, 666, 666]);
    expect(total(lines)).toBe(2000);
  });

  it("always adds up to the amount, for every slider value and cause combination", () => {
    const combos: Parameters<typeof splitDonation>[0]["causes"][] = [
      ["Global health"], ["Poverty relief"], ["Animal welfare"],
      ["Global health", "Poverty relief"], ["Global health", "Animal welfare"], ["Poverty relief", "Animal welfare"],
      ["Global health", "Poverty relief", "Animal welfare"]
    ];
    for (let euros = 10; euros <= 50; euros++) {
      for (const causes of combos) {
        for (const expertsDecide of [false, true]) {
          const lines = splitDonation({ amountCents: euros * 100, causes, expertsDecide, organizations });
          expect(total(lines)).toBe(euros * 100);
          expect(lines.every((line) => line.amountCents > 0)).toBe(true);
        }
      }
    }
  });

  it("ignores duplicate causes and returns nothing for no causes or a non-positive amount", () => {
    const once = splitDonation({ amountCents: 1000, causes: ["Poverty relief"], expertsDecide: false, organizations });
    const twice = splitDonation({ amountCents: 1000, causes: ["Poverty relief", "Poverty relief"], expertsDecide: false, organizations });
    expect(twice).toEqual(once);
    expect(splitDonation({ amountCents: 1000, causes: [], expertsDecide: false, organizations })).toEqual([]);
    expect(splitDonation({ amountCents: 0, causes: ["Poverty relief"], expertsDecide: false, organizations })).toEqual([]);
  });

  it("does not mutate the organizations it is given", () => {
    const before = JSON.stringify(organizations);
    splitDonation({ amountCents: 2000, causes: ["Global health"], expertsDecide: false, organizations });
    expect(JSON.stringify(organizations)).toBe(before);
  });
});
