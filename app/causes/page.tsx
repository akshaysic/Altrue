import Link from "next/link";
import { OrganizationCard } from "@/components/OrganizationCard";
import { Screen } from "@/components/layout/Screen";
import { copy } from "@/lib/copy";
import { getMvpCauses } from "@/lib/seed/causes";
import { getExpertFund, getFeaturedOrganizations, getMvpAnimalCharity } from "@/lib/seed/sources";

type SearchParams = Promise<{ c?: string | string[] }>;

export default async function CausesPage({ searchParams }: { searchParams: SearchParams }) {
  const { c } = await searchParams;
  const chosen = (Array.isArray(c) ? c.join(",") : (c ?? "")).split(",").filter(Boolean);

  const allCauses = getMvpCauses();
  // No valid choice (e.g. opened from the nav): show all three MVP causes.
  const picked = allCauses.filter((cause) => chosen.includes(cause.id));
  const causes = picked.length > 0 ? picked : allCauses;

  const featured = getFeaturedOrganizations();
  const expertFund = getExpertFund();
  const animalCharity = getMvpAnimalCharity();

  return (
    <Screen>
      <h1 className="font-ds text-ds-h1 text-ds-ink">{copy.charities.title}</h1>
      <p className="mt-ds-sm font-ds text-ds-body text-ds-ink">{copy.charities.intro}</p>
      <Link
        href="/onboarding"
        className="mt-ds-sm inline-flex min-h-ds-touch items-center font-ds text-ds-small text-ds-ink underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus"
      >
        {copy.charities.changeCauses}
      </Link>

      {causes.map((cause) => {
        const category = cause.mvpCategory;
        const featuredHere = featured.filter((org) => org.category === category);
        const expertHere = expertFund && expertFund.category === category ? expertFund : undefined;
        const animalHere = animalCharity && animalCharity.category === category ? animalCharity : undefined;
        const nothing = featuredHere.length === 0 && !expertHere && !animalHere;

        return (
          <section key={cause.id} aria-labelledby={`cause-${cause.id}`} className="mt-ds-xl">
            <h2 id={`cause-${cause.id}`} className="font-ds text-ds-row text-ds-ink">
              {category}
            </h2>

            {featuredHere.length > 0 ? (
              <>
                <p className="mt-ds-xs font-ds text-ds-small text-ds-ink-2">{copy.charities.featuredHint}</p>
                <div className="mt-ds-md grid grid-cols-2 gap-ds-sm">
                  {featuredHere.map((org) => (
                    <OrganizationCard key={org.id} organization={org} />
                  ))}
                </div>
              </>
            ) : null}

            {expertHere ? <OrganizationCard className="mt-ds-md" organization={expertHere} eyebrow={copy.charities.expertHeading} showSummary /> : null}

            {animalHere ? (
              <div className="mt-ds-md grid grid-cols-2 gap-ds-sm">
                <OrganizationCard organization={animalHere} />
              </div>
            ) : null}

            {nothing ? <p className="mt-ds-md font-ds text-ds-small text-ds-ink-2">{copy.charities.empty}</p> : null}
          </section>
        );
      })}
    </Screen>
  );
}
