import Link from "next/link";
import { MobileShell } from "@/components/layout/MobileShell";
import { buttonClassName } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { parseAreas } from "@/components/prototype/areas";
import { flowHref, parseAmountCents, parseExperts, type SearchParam } from "@/components/prototype/giveParams";
import { SplitLedger } from "@/components/prototype/SplitLedger";
import { PLACEHOLDER_COPY } from "@/lib/copy";
import { splitDonation } from "@/lib/distribution";
import { curatedOrganizations, selectMvp } from "@/lib/seed/sources";

type ConfirmPageProps = { searchParams: Promise<{ areas?: SearchParam; amount?: SearchParam; experts?: SearchParam }> };

/** Simulated confirmation. Recomputes the split from the URL; nothing is charged or stored. */
export default async function ConfirmPage({ searchParams }: ConfirmPageProps) {
  const params = await searchParams;
  const causes = parseAreas(params.areas);
  const amountCents = parseAmountCents(params.amount);
  const expertsDecide = parseExperts(params.experts);
  const lines = splitDonation({ amountCents, causes, expertsDecide, organizations: selectMvp(curatedOrganizations) });
  const copy = PLACEHOLDER_COPY.confirm;

  return (
    <MobileShell>
      <p className="font-ds-mono text-ds-mono uppercase text-ds-ink-2">{copy.eyebrow}</p>
      <h1 className="mt-ds-sm text-ds-h1">{copy.title}</h1>
      <Notice className="mt-ds-md">{copy.body}</Notice>

      {lines.length > 0 ? (
        <section aria-labelledby="summary-heading" className="mt-ds-xl">
          <h2 id="summary-heading" className="text-ds-row">{copy.splitHeading}</h2>
          <div className="mt-ds-sm">
            <SplitLedger lines={lines} withSources totalLabel={copy.totalLabel} />
          </div>
        </section>
      ) : (
        <p className="mt-ds-xl text-ds-body text-ds-ink-2">{PLACEHOLDER_COPY.give.noCauses}</p>
      )}

      <div className="mt-ds-xl flex flex-col gap-ds-sm">
        {lines.length > 0 ? (
          <Link href={flowHref("/give", { causes, amountCents, expertsDecide })} className={buttonClassName({ variant: "secondary", block: true })}>
            {copy.changeAmount}
          </Link>
        ) : null}
        <Link href="/onboarding" className={buttonClassName({ variant: "quiet", block: true })}>
          {copy.startAgain}
        </Link>
      </div>
    </MobileShell>
  );
}
