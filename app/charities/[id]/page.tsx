import Link from "next/link";
import { notFound } from "next/navigation";
import { Screen } from "@/components/layout/Screen";
import { SourceLink } from "@/components/SourceLink";
import { DemoTag } from "@/components/ui/DemoTag";
import { copy } from "@/lib/copy";
import { getMvpOrganizationById, getMvpOrganizations, splitOrganizationName } from "@/lib/mvp";

type Params = Promise<{ id: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return getMvpOrganizations().map((org) => ({ id: org.id }));
}

const headingClass = "font-ds text-ds-row text-ds-ink";

export default async function CharityDetailPage({ params }: { params: Params }) {
  const { id } = await params;
  const org = getMvpOrganizationById(id);
  if (!org) notFound();

  const { title, subtitle } = splitOrganizationName(org.name);

  return (
    <Screen>
      <Link
        href="/causes"
        className="inline-flex min-h-ds-touch items-center font-ds text-ds-small text-ds-ink underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus"
      >
        {copy.detail.back}
      </Link>

      <p className="mt-ds-md font-ds-mono text-ds-mono uppercase text-ds-ink-2">{org.category}</p>
      <h1 className="mt-ds-xs break-words font-ds text-ds-h1 text-ds-ink">{title}</h1>
      {subtitle ? <p className="mt-ds-xs break-words font-ds text-ds-body text-ds-ink-2">{subtitle}</p> : null}
      <p className="mt-ds-md font-ds text-ds-body text-ds-ink">{org.summary}</p>
      <p className="mt-ds-sm font-ds text-ds-small text-ds-ink-2">
        {copy.detail.region}: {org.region}
      </p>

      <section aria-labelledby="figures" className="mt-ds-xl">
        <h2 id="figures" className={headingClass}>
          {copy.detail.figuresHeading}
        </h2>
        <p className="mt-ds-xs font-ds text-ds-small text-ds-ink-2">{copy.detail.figuresHint}</p>
        {org.figures.length === 0 ? <p className="mt-ds-md font-ds text-ds-body text-ds-ink">{copy.charities.noFigure}</p> : null}
        <ul className="mt-ds-md flex flex-col gap-ds-md">
          {org.figures.map((figure) => (
            <li key={`${figure.value}-${figure.label}`} className="rounded-2xl border border-ds-ink p-ds-md font-ds text-ds-ink">
              <p className="break-words text-3xl font-bold leading-none">{figure.value}</p>
              <p className="mt-ds-xs break-words text-ds-body">{figure.label}</p>
              <p className="mt-ds-xs">
                <DemoTag>{figure.figureLabel}</DemoTag>
              </p>
              <p className="mt-ds-sm break-words text-ds-small text-ds-ink-2">
                {copy.detail.basis}: {figure.basis}
              </p>
              <SourceLink href={figure.source_url} sourceName={figure.source_name}>
                {figure.source_name}
              </SourceLink>
              <p className="text-ds-small text-ds-ink-2">
                {copy.detail.asOf}: {figure.as_of}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="evidence" className="mt-ds-xl">
        <h2 id="evidence" className={headingClass}>
          {copy.detail.evidenceHeading}
        </h2>
        <p className="mt-ds-xs font-ds text-ds-body text-ds-ink">{org.evidence}</p>
      </section>

      <section aria-labelledby="source" className="mt-ds-xl">
        <h2 id="source" className={headingClass}>
          {copy.detail.sourceHeading}
        </h2>
        <SourceLink href={org.source_url}>{org.source_name}</SourceLink>
        <p className="font-ds text-ds-small text-ds-ink-2">
          {copy.detail.asOf}: {org.as_of}
        </p>
      </section>
    </Screen>
  );
}
