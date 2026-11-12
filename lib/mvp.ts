import type { CuratedOrganization } from "@/lib/types";
import { getExpertFund, getFeaturedOrganizations, getMvpAnimalCharity } from "@/lib/seed/sources";

/** All seven MVP records, built only from the three MVP loaders (never from the raw arrays). */
export function getMvpOrganizations(): CuratedOrganization[] {
  const expert = getExpertFund();
  const animal = getMvpAnimalCharity();
  return [...getFeaturedOrganizations(), ...(expert ? [expert] : []), ...(animal ? [animal] : [])];
}

export function getMvpOrganizationById(id: string): CuratedOrganization | undefined {
  return getMvpOrganizations().find((org) => org.id === id);
}

/** "Malaria Consortium: seasonal malaria chemoprevention" -> title + subtitle. Splits the packet's own name; adds no words. */
export function splitOrganizationName(name: string): { title: string; subtitle?: string } {
  const index = name.indexOf(": ");
  if (index === -1) return { title: name };
  return { title: name.slice(0, index), subtitle: name.slice(index + 2) };
}
