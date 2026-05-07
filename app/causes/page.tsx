import Link from "next/link";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { causes } from "@/lib/seed";

export default function CausesPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-6xl px-5 py-10">
        <PageHeader
          eyebrow="Cause discovery"
          title="Choose what you care about"
          description="All eight MVP cause areas are seeded here for inspection. This is cause-first discovery, not a charity marketplace."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {causes.map((cause) => (
            <Link className="rounded-lg border border-slate-200 bg-white p-5 hover:border-moss" href={`/causes/${cause.slug}`} key={cause.id}>
              <div className="flex flex-wrap gap-2">
                {cause.tags.slice(0, 3).map((tag) => (
                  <span className="rounded-full bg-skywash px-2.5 py-1 text-xs font-medium text-ink" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-ink">{cause.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">{cause.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
