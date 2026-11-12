import { distribute } from "@/lib/distribution";
import { getExpertFund, getFeaturedOrganizations, getMvpAnimalCharity } from "@/lib/seed";
import type { CuratedOrganization, MvpCategory } from "@/lib/types";

export type SplitLine = { organization: CuratedOrganization; cents: number };

/** Applies the placeholder rule in lib/distribution.ts to the MVP records, using only the MVP loaders. */
export function buildSplit(opts: { areas: readonly MvpCategory[]; amountCents: number; letExpertsDecide: boolean }): SplitLine[] {
  const featured = getFeaturedOrganizations();
  const expert = getExpertFund();
  const animal = getMvpAnimalCharity();
  if (!expert || !animal) return [];

  const byId = new Map([...featured, expert, animal].map((org) => [org.id, org]));
  return distribute({
    totalCents: opts.amountCents,
    areas: opts.areas,
    featured,
    animalCharityId: animal.id,
    expertFundId: expert.id,
    letExpertsDecide: opts.letExpertsDecide
  }).flatMap((line) => {
    const organization = byId.get(line.organizationId);
    return organization ? [{ organization, cents: line.cents }] : [];
  });
}
