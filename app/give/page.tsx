import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MobileShell } from "@/components/layout/MobileShell";
import { buttonClassName } from "@/components/ui/Button";
import { parseAreas } from "@/components/prototype/areas";
import { GivePlanner } from "@/components/prototype/GivePlanner";
import { flowHref, parseAmountCents, parseExperts, type SearchParam } from "@/components/prototype/giveParams";
import { PLACEHOLDER_COPY } from "@/lib/copy";

type GivePageProps = { searchParams: Promise<{ areas?: SearchParam; amount?: SearchParam; experts?: SearchParam }> };

export default async function GivePage({ searchParams }: GivePageProps) {
  const params = await searchParams;
  const causes = parseAreas(params.areas);
  const copy = PLACEHOLDER_COPY.give;

  return (
    <MobileShell>
      <Link
        href={flowHref("/causes", { causes })}
        className="-ml-ds-xs inline-flex min-h-ds-touch items-center gap-ds-xs px-ds-xs text-ds-small underline decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus"
      >
        <ArrowLeft aria-hidden size={16} />
        {copy.back}
      </Link>
      <p className="mt-ds-md font-ds-mono text-ds-mono uppercase text-ds-ink-2">{copy.eyebrow}</p>
      <h1 className="mt-ds-sm text-ds-h1">{copy.title}</h1>
      {causes.length > 0 ? (
        <>
          <p className="mt-ds-sm text-ds-body text-ds-ink-2">{causes.join(" · ")}</p>
          <GivePlanner causes={causes} initialAmountCents={parseAmountCents(params.amount)} initialExpertsDecide={parseExperts(params.experts)} />
        </>
      ) : (
        <>
          <p className="mt-ds-md text-ds-body text-ds-ink-2">{copy.noCauses}</p>
          <Link href="/onboarding" className={`${buttonClassName({ variant: "secondary" })} mt-ds-lg`}>
            {copy.pickCauses}
          </Link>
        </>
      )}
    </MobileShell>
  );
}
