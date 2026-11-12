import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DemoTag } from "@/components/ui/DemoTag";
import { Ledger, LedgerRow } from "@/components/ui/Ledger";
import { Notice } from "@/components/ui/Notice";
import { PLACEHOLDER_COPY } from "@/lib/copy";
import type { SourcedCharity } from "@/lib/types";
import { splitCharityName } from "./charityName";
import { SourceLink } from "./SourceLink";

/** Everything the packet says about one record, with the source and dates last. */
export function CharityDetail({ charity }: { charity: SourcedCharity }) {
  const copy = PLACEHOLDER_COPY.detail;
  const { title, program } = splitCharityName(charity.name);

  return (
    <article>
      <Link
        href="/causes"
        className="-ml-ds-xs inline-flex min-h-ds-touch items-center gap-ds-xs px-ds-xs text-ds-small underline decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus"
      >
        <ArrowLeft aria-hidden size={16} />
        {copy.back}
      </Link>

      <p className="mt-ds-md font-ds-mono text-ds-mono uppercase text-ds-ink-2">{charity.impact_area}</p>
      <h1 className="mt-ds-sm text-ds-h1">{title}</h1>
      {program ? <p className="mt-ds-xs text-ds-row text-ds-ink-2">{program}</p> : null}
      <p className="mt-ds-md text-ds-body">{charity.summary}</p>

      <section aria-labelledby="figures-heading" className="mt-ds-xl">
        <h2 id="figures-heading" className="text-ds-row">{copy.figuresHeading}</h2>
        {charity.key_figures.length > 0 ? (
          <Ledger className="mt-ds-sm">
            {charity.key_figures.map((figure) => (
              <LedgerRow
                key={figure.value + figure.label}
                label={<span className="font-normal">{figure.label}</span>}
                value={figure.value}
                detail={
                  <>
                    <DemoTag>{copy.figureTag}</DemoTag>
                    <span className="mt-ds-xs block">{figure.basis}</span>
                  </>
                }
              />
            ))}
          </Ledger>
        ) : (
          <p className="mt-ds-sm text-ds-small text-ds-ink-2">{copy.noFigures}</p>
        )}
      </section>

      <section aria-labelledby="evidence-heading" className="mt-ds-xl">
        <h2 id="evidence-heading" className="text-ds-row">{copy.evidenceHeading}</h2>
        <Notice className="mt-ds-sm">{charity.evidence}</Notice>
      </section>

      <dl className="mt-ds-xl grid gap-ds-md text-ds-small">
        <div>
          <dt className="font-semibold">{copy.evaluatorHeading}</dt>
          <dd className="mt-ds-xs text-ds-ink-2">{charity.evaluator}</dd>
        </div>
        <div>
          <dt className="font-semibold">{copy.regionHeading}</dt>
          <dd className="mt-ds-xs text-ds-ink-2">{charity.region}</dd>
        </div>
      </dl>

      <section aria-labelledby="source-heading" className="mt-ds-xl border-t border-ds-rule pt-ds-md">
        <h2 id="source-heading" className="text-ds-row">{copy.sourceHeading}</h2>
        <SourceLink href={charity.source_url} name={charity.source_name} className="mt-ds-xs" />
        <dl className="mt-ds-sm grid grid-cols-[auto_1fr] items-baseline gap-x-ds-md gap-y-ds-xs">
          <dt><DemoTag>{copy.asOfLabel}</DemoTag></dt>
          <dd className="font-ds-mono text-ds-mono text-ds-ink">{charity.source_as_of}</dd>
          <dt><DemoTag>{copy.retrievedLabel}</DemoTag></dt>
          <dd className="font-ds-mono text-ds-mono text-ds-ink">{charity.retrieved}</dd>
        </dl>
      </section>
    </article>
  );
}
