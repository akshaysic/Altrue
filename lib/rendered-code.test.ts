import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

// The old scaffold data files stay in lib/seed, but rendered code (routes and components) must not read them.
// Names exported by the old 8-cause demo data and the unsourced demo metrics.
const OLD_DEMO_EXPORTS = [
  "causes",
  "getCauseBySlug",
  "impactMetrics",
  "getImpactMetricsByCauseId",
  "nonprofits",
  "getNonprofitsByCauseId",
  "demoUser",
  "demoDonorProfile",
  "demoPlans",
  "demoAllocations",
  "demoDonations",
  "demoReports",
  "demoReportItems"
];

const root = path.join(__dirname, "..");

function sourceFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(full);
    return /\.tsx?$/.test(entry.name) && !entry.name.includes(".stories.") ? [full] : [];
  });
}

/** Names imported from "@/lib/seed" or "@/lib/seed/<file>" (value imports only). */
export function importedSeedNames(source: string): string[] {
  const names: string[] = [];
  for (const match of source.matchAll(/import\s+(?!type\b)\{([^}]*)\}\s+from\s+["']@\/lib\/seed(?:\/[\w-]+)?["']/g)) {
    for (const part of match[1].split(",")) {
      const name = part.trim().split(/\s+as\s+/)[0];
      if (name) names.push(name);
    }
  }
  return names;
}

describe("rendered code does not use the old demo data", () => {
  it("detects an old-data import (the check can fail)", () => {
    expect(importedSeedNames('import { causes, getExpertFund } from "@/lib/seed";')).toEqual(["causes", "getExpertFund"]);
    expect(importedSeedNames('import { demoPlans as plans } from "@/lib/seed/demoPlans";')).toEqual(["demoPlans"]);
    expect(importedSeedNames('import type { Cause } from "@/lib/types";')).toEqual([]);
  });

  const files = [...sourceFiles(path.join(root, "app")), ...sourceFiles(path.join(root, "components"))];

  it.each(files.map((file) => [path.relative(root, file), file]))("%s", (_name, file) => {
    const used = importedSeedNames(fs.readFileSync(file, "utf8")).filter((name) => OLD_DEMO_EXPORTS.includes(name));
    expect(used).toEqual([]);
  });
});
