import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";

export default function SignUpPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-xl px-5 py-10">
        <PageHeader eyebrow="Mock auth" title="Create account" description="Account creation is a placeholder in this first pass." />
        <div className="mt-8">
          <PlaceholderCard title="Placeholder account form">
            <p>This route exists to preserve the MVP route map without adding real auth yet.</p>
          </PlaceholderCard>
        </div>
      </section>
    </PublicLayout>
  );
}
