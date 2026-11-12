import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getMvpOrganizationById, getMvpOrganizations, splitOrganizationName } from "@/lib/mvp";

const root = path.join(__dirname, "..");

function pageFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return pageFiles(full);
    return /\.(tsx|ts)$/.test(entry.name) && !entry.name.includes(".stories.") ? [full] : [];
  });
}

describe("MVP organizations", () => {
  it("are the 7 loader records, each with provenance and labelled figures", () => {
    const orgs = getMvpOrganizations();
    expect(orgs).toHaveLength(7);
    expect(new Set(orgs.map((o) => o.id)).size).toBe(7);
    for (const org of orgs) {
      expect(org.source_url).toMatch(/^https:\/\//);
      expect(org.as_of).not.toBe("");
      for (const figure of org.figures) expect(figure.figureLabel).toMatch(/^(estimate|illustrative)$/);
    }
  });

  it("only The Humane League has no figure (the packet has none); the UI shows its evidence note instead", () => {
    expect(getMvpOrganizations().filter((o) => o.figures.length === 0).map((o) => o.id)).toEqual(["the-humane-league"]);
  });

  it("looks up by id and rejects post-MVP ids", () => {
    expect(getMvpOrganizationById("givedirectly")?.name).toBe("GiveDirectly");
    expect(getMvpOrganizationById("the-humane-league")).toBeDefined();
    expect(getMvpOrganizationById("not-an-mvp-id")).toBeUndefined();
  });

  it("splits only on the packet's own colon", () => {
    expect(splitOrganizationName("Malaria Consortium: seasonal malaria chemoprevention")).toEqual({
      title: "Malaria Consortium",
      subtitle: "seasonal malaria chemoprevention"
    });
    expect(splitOrganizationName("GiveDirectly")).toEqual({ title: "GiveDirectly" });
  });
});

describe("rendered code does not use the old demo data", () => {
  // The old data files stay in lib/seed; routes and components just must not read them.
  const forbidden = /\b(demoPlans|demoAllocations|demoReports|demoReportItems|demoDonations|demoUser|demoDonorProfile|impactMetrics|nonprofits|getNonprofitsByCauseId|getImpactMetricsByCauseId)\b|from "@\/lib\/seed"|\bcauses\b[^\n]*from "@\/lib\/seed\/causes"/;
  const files = [...pageFiles(path.join(root, "app")), ...pageFiles(path.join(root, "components")).filter((f) => !f.includes(`${path.sep}ui${path.sep}`))];

  it.each(files.map((f) => [path.relative(root, f), f]))("%s", (_name, file) => {
    const source = fs.readFileSync(file, "utf8");
    expect(source).not.toMatch(forbidden);
  });
});
