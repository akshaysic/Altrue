import { notFound } from "next/navigation";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { causes, getCauseBySlug, getImpactMetricsByCauseId, getNonprofitsByCauseId } from "@/lib/seed";
import { formatCents } from "@/lib/formatters";

export function generateStaticParams() {
  return causes.map((cause) => ({ slug: cause.slug }));
}

export default function CauseDetailPage({ params }: { params: { slug: string } }) {
  const cause = getCauseBySlug(params.slug);

  if (!cause) {
    notFound();
  }

  const nonprofits = getNonprofitsByCauseId(cause.id);
  const metrics = getImpactMetricsByCauseId(cause.id);

  return (
    <PublicLayout>
      <section className="mx-auto max-w-6xl px-5 py-10">
        <PageHeader eyebrow="Cause detail" title={cause.name} description={cause.userFacingExplanation} />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_360px]">
          <div className="space-y-5">
            <PlaceholderCard title="Example interventions">
              <ul className="list-disc space-y-1 pl-5">
                {cause.exampleInterventions.map((intervention) => (
                  <li key={intervention}>{intervention}</li>
                ))}
              </ul>
            </PlaceholderCard>
            <PlaceholderCard title="Demo impact metrics">
              <div className="grid gap-3 md:grid-cols-2">
                {metrics.map((metric) => (
                  <div className="rounded-md border border-slate-200 p-4" key={metric.id}>
                    <h2 className="font-semibold text-ink">{metric.name}</h2>
                    <p className="mt-1 text-sm text-slate-700">{metric.description}</p>
                    <p className="mt-2 text-sm font-medium text-ink">Demo cost: {formatCents(metric.costPerUnitCents)} per {metric.unit}</p>
                    <p className="mt-1 text-xs text-slate-500">{metric.caveat}</p>
                  </div>
                ))}
              </div>
            </PlaceholderCard>
          </div>
          <aside className="space-y-5">
            <PlaceholderCard title="Placeholder nonprofits">
              <div className="space-y-3">
                {nonprofits.map((nonprofit) => (
                  <div className="rounded-md bg-slate-50 p-3" key={nonprofit.id}>
                    <h2 className="font-semibold text-ink">{nonprofit.name}</h2>
                    <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{nonprofit.verificationStatus}</p>
                    <p className="mt-2 text-sm">{nonprofit.trustNotes}</p>
                  </div>
                ))}
              </div>
            </PlaceholderCard>
            <PlaceholderCard title="Uncertainty notes">
              <ul className="list-disc space-y-1 pl-5">
                {cause.uncertaintyNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </PlaceholderCard>
          </aside>
        </div>
      </section>
    </PublicLayout>
  );
}
