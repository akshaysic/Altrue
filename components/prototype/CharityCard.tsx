import Link from "next/link";
import { DemoTag } from "@/components/ui/DemoTag";
import { PLACEHOLDER_COPY } from "@/lib/copy";
import type { CuratedOrganization } from "@/lib/types";
import { splitCharityName } from "./charityName";
import { SourceLink } from "./SourceLink";

/** One charity, one key figure, one source. Every card gets the same treatment so none reads as ranked. */
export function CharityCard({ charity }: { charity: CuratedOrganization }) {
  const copy = PLACEHOLDER_COPY.causeList;
  const { title, program } = splitCharityName(charity.name);
  const figure = charity.figures[0];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-ds-rule p-ds-md">
      <p className="font-ds-mono text-ds-mono uppercase text-ds-ink-2">{charity.category}</p>
      <h3 className="mt-ds-xs text-ds-row">
        <Link
          href={`/causes/${charity.id}`}
          className="underline decoration-ds-rule decoration-1 underline-offset-4 hover:decoration-ds-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus"
        >
          {title}
        </Link>
      </h3>
      {program ? <p className="mt-ds-xs text-ds-small text-ds-ink-2">{program}</p> : null}

      <div className="mt-ds-md flex-1">
        {figure ? (
          <>
            <p className="text-[28px] font-bold leading-8 tracking-tight tabular-nums">{figure.value}</p>
            <p className="mt-ds-xs text-ds-small">{figure.label}</p>
            <p className="mt-ds-xs">
              <DemoTag>{figure.figureLabel}</DemoTag>
            </p>
          </>
        ) : (
          <p className="text-ds-small text-ds-ink-2">{copy.noFigure}</p>
        )}
      </div>

      <div className="mt-ds-sm border-t border-ds-rule pt-ds-xs">
        <SourceLink href={figure?.source_url ?? charity.source_url} name={figure?.source_name ?? charity.source_name} className="text-[13px] leading-[18px]" />
      </div>
    </article>
  );
}
