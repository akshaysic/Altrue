import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { causes, getCauseSources, getMvpCauses, getMvpOrganizationsByCauseId } from "@/lib/seed/causes";
import { sourcedImpactMetrics } from "@/lib/seed/impactMetrics";
import { curatedOrganizations, getExpertFund, getFeaturedOrganizations, getMvpAnimalCharity, selectMvp } from "@/lib/seed/sources";

type PacketEntry = {
  id: string;
  name: string;
  impact_area: string;
  source_name: string;
  source_url: string;
  source_as_of: string;
  key_figures: { value: string; label: string; basis: string }[];
};

const packet: { entries: PacketEntry[] } = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../.agents/research/charity-shortlist-2026-11-07.json"), "utf8")
);
const byId = (id: string) => packet.entries.find((entry) => entry.id === id);

const MVP_IDS = [
  "givedirectly",
  "malaria-consortium",
  "against-malaria-foundation",
  "helen-keller-intl",
  "new-incentives",
  "givewell-top-charities-fund",
  "the-humane-league"
];

describe("MVP records", () => {
  it("contains exactly the 7 MVP records", () => {
    expect(selectMvp(curatedOrganizations).map((org) => org.id).sort()).toEqual([...MVP_IDS].sort());
  });

  it("features the five charities equally, with no default pick and the fund separate", () => {
    const featured = getFeaturedOrganizations();
    expect(featured.map((org) => org.id).sort()).toEqual(
      ["givedirectly", "malaria-consortium", "against-malaria-foundation", "helen-keller-intl", "new-incentives"].sort()
    );
    expect(getExpertFund()?.id).toBe("givewell-top-charities-fund");
    expect(featured.some((org) => org.id === "givewell-top-charities-fund")).toBe(false);
    // No field may single out a default or top pick.
    for (const org of featured) expect(Object.keys(org)).not.toEqual(expect.arrayContaining(["isDefault"]));
  });

  it("has The Humane League as the only MVP animal-welfare charity", () => {
    expect(getMvpAnimalCharity()?.id).toBe("the-humane-league");
    const animal = selectMvp(curatedOrganizations).filter((org) => org.category === "Animal welfare");
    expect(animal.map((org) => org.id)).toEqual(["the-humane-league"]);
  });

  it("leaves the other packet animal entries out of MVP results", () => {
    const otherAnimal = packet.entries.filter((e) => e.impact_area === "Animal welfare" && e.id !== "the-humane-league");
    expect(otherAnimal.length).toBeGreaterThan(0);
    const mvpIds = new Set(selectMvp(curatedOrganizations).map((org) => org.id));
    for (const entry of otherAnimal) expect(mvpIds.has(entry.id)).toBe(false);
  });

  it("filters post-MVP records out, whatever their category", () => {
    const base = curatedOrganizations[0];
    const result = selectMvp([base, { ...base, id: "x", mvpStatus: "post-mvp" as const }]);
    expect(result.map((org) => org.id)).toEqual([base.id]);
  });
});

describe("MVP causes", () => {
  it("are exactly Global health, Poverty relief and Animal welfare", () => {
    expect(getMvpCauses().map((cause) => cause.mvpCategory).sort()).toEqual(["Animal welfare", "Global health", "Poverty relief"]);
  });

  it("flag every other cause post-MVP", () => {
    const rest = causes.filter((cause) => !getMvpCauses().includes(cause));
    expect(rest.length).toBeGreaterThan(0);
    for (const cause of rest) expect(cause.mvpStatus).toBe("post-mvp");
  });

  it("each have organizations and traceable sources", () => {
    for (const cause of getMvpCauses()) {
      expect(getMvpOrganizationsByCauseId(cause.id).length).toBeGreaterThan(0);
      expect(getCauseSources(cause.id).length).toBeGreaterThan(0);
    }
  });
});

describe("provenance", () => {
  it("copies source_name, source_url and as_of from the packet exactly", () => {
    for (const org of curatedOrganizations) {
      const entry = byId(org.id);
      expect(entry, org.id).toBeDefined();
      expect(org.name).toBe(entry!.name);
      expect(org.source_name).toBe(entry!.source_name);
      expect(org.source_url).toBe(entry!.source_url);
      expect(org.as_of).toBe(entry!.source_as_of);
    }
  });

  it("gives every organization, figure and impact metric all three source fields", () => {
    const records = [...curatedOrganizations, ...curatedOrganizations.flatMap((org) => org.figures), ...sourcedImpactMetrics];
    for (const record of records) {
      expect(record.source_name.trim()).not.toBe("");
      expect(record.source_url).toMatch(/^https:\/\//);
      expect(record.as_of.trim()).not.toBe("");
    }
  });

  it("labels every figure 'estimate' and keeps packet figures verbatim, adding none", () => {
    for (const org of curatedOrganizations) {
      const expected = byId(org.id)!.key_figures;
      expect(org.figures.map(({ value, label, basis }) => ({ value, label, basis }))).toEqual(expected);
      for (const figure of org.figures) expect(figure.figureLabel).toBe("estimate");
    }
    expect(sourcedImpactMetrics.length).toBe(curatedOrganizations.flatMap((org) => org.figures).length);
    for (const metric of sourcedImpactMetrics) expect(metric.figureLabel).toBe("estimate");
  });

  it("makes no tax-deductibility claims", () => {
    expect(JSON.stringify(curatedOrganizations)).not.toMatch(/tax[- ]deduct|tax[- ]exempt/i);
  });
});
