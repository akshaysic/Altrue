import { distribute } from "@/lib/distribution";
import { curatedOrganizations, getExpertFund, getFeaturedOrganizations, getMvpAnimalCharity } from "@/lib/seed/sources";
import type { CuratedOrganization, MvpCategory } from "@/lib/types";
import { sampleDonor, type SampleGiftLine } from "./sampleDonor";

/** Data helpers for the hero frames. Every charity and figure comes from lib/seed/sources.ts; nothing is invented here. */

export const AREAS: readonly MvpCategory[] = ["Global health", "Poverty relief", "Animal welfare"];
/** USD only: the heroes never convert, so gifts sit in the same currency as the sourced estimates. */
export const CURRENCY = sampleDonor.currency;

export type HeroSplitLine = { organization: CuratedOrganization; cents: number };
export type AreaTotal = { area: MvpCategory; cents: number };
export type AreaGroup = AreaTotal & { lines: HeroSplitLine[] };

const byId = new Map(curatedOrganizations.map((org) => [org.id, org]));

export function findOrganization(id: string): CuratedOrganization | undefined {
  return byId.get(id);
}

/** Recipients per area, straight from the seed loaders. */
export function recipientsFor(area: MvpCategory): CuratedOrganization[] {
  if (area === "Animal welfare") {
    const animal = getMvpAnimalCharity();
    return animal ? [animal] : [];
  }
  return getFeaturedOrganizations().filter((org) => org.category === area);
}

/** The app's own split rule (lib/distribution.ts) fed only with records from lib/seed/sources.ts. */
export function heroSplit(areas: readonly MvpCategory[], amountCents: number, letExpertsDecide: boolean): HeroSplitLine[] {
  const expert = getExpertFund();
  const animal = getMvpAnimalCharity();
  if (!expert || !animal) return [];

  return distribute({
    totalCents: amountCents,
    areas,
    featured: getFeaturedOrganizations(),
    animalCharityId: animal.id,
    expertFundId: expert.id,
    letExpertsDecide
  }).flatMap(({ organizationId, cents }) => {
    const organization = byId.get(organizationId);
    return organization ? [{ organization, cents }] : [];
  });
}

/** Resolves a sample gift's seed ids to records. Unknown ids are dropped, and the story test fails on them. */
export function resolveGift(lines: readonly SampleGiftLine[]): HeroSplitLine[] {
  return lines.flatMap(({ organizationId, cents }) => {
    const organization = byId.get(organizationId);
    return organization ? [{ organization, cents }] : [];
  });
}

export function groupByArea(lines: readonly HeroSplitLine[]): AreaGroup[] {
  return AREAS.map((area) => {
    const inArea = lines.filter(({ organization }) => organization.category === area);
    return { area, lines: inArea, cents: inArea.reduce((sum, { cents }) => sum + cents, 0) };
  }).filter(({ lines: inArea }) => inArea.length > 0);
}

/** Short display name: drops the programme suffix after the colon ("Helen Keller Intl: vitamin A…" → "Helen Keller Intl"). */
export function shortName(org: CuratedOrganization) {
  return org.name.split(":")[0];
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "1 Sep 2026" from an ISO date. Built by hand so every month is three letters (Intl's en-GB writes "Sept"). */
export function formatDay(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

/** Gifts planned for the plan's first calendar year: one per month from the start month to December. */
export function plannedForStartYear(): { year: number; cents: number } {
  const [year, month] = sampleDonor.planStartedOn.split("-").map(Number);
  return { year, cents: (12 - month + 1) * sampleDonor.monthlyCents };
}
