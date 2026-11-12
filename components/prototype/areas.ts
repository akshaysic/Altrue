import { curatedOrganizations, selectMvp } from "@/lib/seed";
import type { MvpCategory } from "@/lib/types";

/** The three MVP onboarding areas, in the order the brief lists them. */
export const MVP_AREAS: readonly MvpCategory[] = ["Global health", "Poverty relief", "Animal welfare"];

/** "Global health" → "global-health", for the ?areas= query string. */
export function toAreaSlug(area: MvpCategory) {
  return area.toLowerCase().replaceAll(" ", "-");
}

/** Reads ?areas=a,b back into MVP areas. Unknown values are dropped; an empty result means "all". */
export function parseAreas(param: string | string[] | undefined): MvpCategory[] {
  const raw = Array.isArray(param) ? param.join(",") : param ?? "";
  const slugs = new Set(raw.split(",").filter(Boolean));
  return MVP_AREAS.filter((area) => slugs.has(toAreaSlug(area)));
}

export function getMvpOrganizationById(id: string) {
  return selectMvp(curatedOrganizations).find((org) => org.id === id);
}
