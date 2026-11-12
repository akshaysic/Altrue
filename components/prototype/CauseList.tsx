import Link from "next/link";
import { buttonClassName } from "@/components/ui/Button";
import { PLACEHOLDER_COPY } from "@/lib/copy";
import { getExpertFund, getFeaturedOrganizations, getMvpAnimalCharity } from "@/lib/seed";
import type { CuratedOrganization, MvpCategory } from "@/lib/types";
import { MVP_AREAS } from "./areas";
import { CharityCard } from "./CharityCard";
import { flowHref } from "./giveParams";

const linkClass =
  "inline-flex min-h-ds-touch items-center text-ds-small text-ds-ink underline decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus";

function present(org: CuratedOrganization | undefined): org is CuratedOrganization {
  return Boolean(org);
}

/** The cause list. `areas` empty means "show everything". */
export function CauseList({ areas }: { areas: MvpCategory[] }) {
  const copy = PLACEHOLDER_COPY.causeList;
  const shown = areas.length > 0 ? areas : [...MVP_AREAS];
  const inShownArea = (org: CuratedOrganization) => shown.includes(org.category);

  // getFeaturedOrganizations sorts alphabetically, so the order implies no top pick.
  const featured = getFeaturedOrganizations().filter(inShownArea);
  const experts = [getExpertFund()].filter(present).filter(inShownArea);
  const animal = [getMvpAnimalCharity()].filter(present).filter(inShownArea);

  return (
    <>
      <p className="font-ds-mono text-ds-mono uppercase text-ds-ink-2">{copy.eyebrow}</p>
      <h1 className="mt-ds-sm text-ds-h1">{copy.title}</h1>
      <p className="mt-ds-sm text-ds-body text-ds-ink-2">{shown.join(" · ")}</p>
      <div className="mt-ds-xs flex flex-wrap gap-x-ds-md">
        <Link href="/onboarding" className={linkClass}>
          {copy.editCauses}
        </Link>
        {areas.length > 0 && areas.length < MVP_AREAS.length ? (
          <Link href="/causes" className={linkClass}>
            {copy.showAll}
          </Link>
        ) : null}
      </div>

      {featured.length > 0 ? (
        <section aria-labelledby="featured-heading" className="mt-ds-xl">
          <h2 id="featured-heading" className="text-ds-row">{copy.featuredHeading}</h2>
          <p className="mt-ds-xs text-ds-small text-ds-ink-2">{copy.featuredNote}</p>
          <ul className="mt-ds-md grid grid-cols-2 gap-ds-sm">
            {featured.map((org) => (
              <li key={org.id}>
                <CharityCard charity={org} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {experts.length > 0 ? (
        <section aria-labelledby="experts-heading" className="mt-ds-xl">
          <h2 id="experts-heading" className="text-ds-row">{copy.expertsHeading}</h2>
          <p className="mt-ds-xs text-ds-small text-ds-ink-2">{copy.expertsNote}</p>
          <ul className="mt-ds-md">
            {experts.map((org) => (
              <li key={org.id}>
                <CharityCard charity={org} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {animal.length > 0 ? (
        <section aria-labelledby="animal-heading" className="mt-ds-xl">
          <h2 id="animal-heading" className="text-ds-row">{copy.animalHeading}</h2>
          <ul className="mt-ds-md">
            {animal.map((org) => (
              <li key={org.id}>
                <CharityCard charity={org} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="sticky bottom-0 -mx-ds-md mt-ds-xl border-t border-ds-rule bg-ds-ground px-ds-md py-ds-sm">
        <Link href={flowHref("/give", { causes: shown })} className={buttonClassName({ block: true })}>
          {copy.giveCta}
        </Link>
      </div>
    </>
  );
}
