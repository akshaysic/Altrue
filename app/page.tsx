import Link from "next/link";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { causes } from "@/lib/seed";

export default function HomePage() {
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-moss">Donor-side MVP scaffold</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-normal text-ink md:text-5xl">
            Recurring microdonations, allocated with clarity.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Altrue helps donors choose causes, set a small monthly amount, review an editable AI-shaped allocation, and see transparent demo impact reporting.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="rounded-md bg-ink px-5 py-3 text-sm font-medium text-white" href="/onboarding">
              Start giving
            </Link>
            <Link className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-ink" href="/causes">
              Browse causes
            </Link>
          </div>
        </div>
        <PlaceholderCard title="Mocked first pass">
          <p>No real payments, live AI calls, or charity admin tooling are implemented in this scaffold.</p>
          <p className="mt-3">Seed data is demo-only and all nonprofit records are placeholders.</p>
        </PlaceholderCard>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <h2 className="text-2xl font-semibold text-ink">MVP cause areas</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {causes.slice(0, 8).map((cause) => (
            <Link className="rounded-lg border border-slate-200 bg-white p-4 hover:border-moss" href={`/causes/${cause.slug}`} key={cause.id}>
              <h3 className="font-semibold text-ink">{cause.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{cause.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
