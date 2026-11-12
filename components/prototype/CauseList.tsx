import Link from "next/link";
import { PLACEHOLDER_COPY } from "@/lib/copy";
import {
  ANIMAL_CHARITY_ID,
  EXPERTS_DECIDE_ID,
  FEATURED_CHARITY_IDS,
  MVP_IMPACT_AREAS,
  getCharityById,
  type MvpImpactArea
} from "@/lib/seed/charities";
import type { SourcedCharity } from "@/lib/types";
import { CharityCard } from "./CharityCard";

function byIds(ids: readonly string[]) {
  return ids.map(getCharityById).filter((charity): charity is SourcedCharity => Boolean(charity));
}

const linkClass =
  "inline-flex min-h-ds-touch items-center text-ds-small text-ds-ink underline decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus";

/** The cause list. `areas` empty means "show everything". */
export function CauseList({ areas }: { areas: MvpImpactArea[] }) {
  const copy = PLACEHOLDER_COPY.causeList;
  const shown = areas.length > 0 ? areas : [...MVP_IMPACT_AREAS];
  const inShownArea = (charity: SourcedCharity) => shown.includes(charity.impact_area as MvpImpactArea);

  const featured = byIds(FEATURED_CHARITY_IDS).filter(inShownArea);
  const experts = byIds([EXPERTS_DECIDE_ID]).filter(inShownArea);
  const animal = byIds([ANIMAL_CHARITY_ID]).filter(inShownArea);

  return (
    <>
      <p className="font-ds-mono text-ds-mono uppercase text-ds-ink-2">{copy.eyebrow}</p>
      <h1 className="mt-ds-sm text-ds-h1">{copy.title}</h1>
      <p className="mt-ds-sm text-ds-body text-ds-ink-2">{shown.join(" · ")}</p>
      <div className="mt-ds-xs flex flex-wrap gap-x-ds-md">
        <Link href="/onboarding" className={linkClass}>
          {copy.editCauses}
        </Link>
        {areas.length > 0 && areas.length < MVP_IMPACT_AREAS.length ? (
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
            {featured.map((charity) => (
              <li key={charity.id}>
                <CharityCard charity={charity} />
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
            {experts.map((charity) => (
              <li key={charity.id}>
                <CharityCard charity={charity} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {animal.length > 0 ? (
        <section aria-labelledby="animal-heading" className="mt-ds-xl">
          <h2 id="animal-heading" className="text-ds-row">{copy.animalHeading}</h2>
          <ul className="mt-ds-md">
            {animal.map((charity) => (
              <li key={charity.id}>
                <CharityCard charity={charity} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );
}
