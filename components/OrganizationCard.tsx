import Link from "next/link";
import clsx from "clsx";
import { SourceLink } from "@/components/SourceLink";
import { DemoTag } from "@/components/ui/DemoTag";
import { buttonClassName } from "@/components/ui/Button";
import { copy } from "@/lib/copy";
import { splitOrganizationName } from "@/lib/mvp";
import type { CuratedOrganization } from "@/lib/types";

type OrganizationCardProps = {
  organization: CuratedOrganization;
  /** Optional line above the name, e.g. "Let experts decide". */
  eyebrow?: string;
  /** Show the packet's summary line. Used on the full-width expert fund card only. */
  showSummary?: boolean;
  className?: string;
};

/** One equal-sized card: name, ONE key figure with its label (or the evidence note when the packet has none), a source link, and a details link. No default pick. */
export function OrganizationCard({ organization, eyebrow, showSummary = false, className }: OrganizationCardProps) {
  const { title, subtitle } = splitOrganizationName(organization.name);
  const figure = organization.figures[0];

  return (
    <article className={clsx("flex flex-col gap-ds-sm rounded-2xl border border-ds-ink p-ds-md font-ds text-ds-ink", className)}>
      {eyebrow ? <p className="font-ds-mono text-ds-mono uppercase text-ds-ink-2">{eyebrow}</p> : null}
      <div>
        <h3 className="break-words text-ds-row">{title}</h3>
        {subtitle ? <p className="break-words text-ds-small text-ds-ink-2">{subtitle}</p> : null}
      </div>
      {showSummary ? <p className="text-ds-small">{organization.summary}</p> : null}
      {figure ? (
        <div className="mt-auto">
          <p className="break-words text-3xl font-bold leading-none">{figure.value}</p>
          <p className="mt-ds-xs break-words text-ds-small">{figure.label}</p>
          <p className="mt-ds-xs">
            <DemoTag>{copy.charities.estimate}</DemoTag>
          </p>
          <SourceLink href={figure.source_url} sourceName={figure.source_name}>
            {copy.charities.source}
          </SourceLink>
        </div>
      ) : (
        // The packet has no figure for this record (The Humane League). Show its evidence note instead; never invent a number.
        <div className="mt-auto">
          <p className="break-words text-ds-small">{organization.evidence}</p>
          <p className="mt-ds-xs text-ds-small text-ds-ink-2">{copy.charities.noFigure}</p>
          <SourceLink href={organization.source_url} sourceName={organization.source_name}>
            {copy.charities.source}
          </SourceLink>
        </div>
      )}
      <Link
        href={`/charities/${organization.id}`}
        className={clsx(buttonClassName({ variant: "secondary", block: true }), "min-h-ds-touch text-ds-small")}
      >
        {copy.charities.details}
        <span className="sr-only">: {organization.name}</span>
      </Link>
    </article>
  );
}
