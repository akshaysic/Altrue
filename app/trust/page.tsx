import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";

export default function TrustPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-4xl px-5 py-10">
        <PageHeader
          eyebrow="Trust and transparency"
          title="Clear caveats before real money moves"
          description="The scaffold keeps trust surfaces visible while payments, verification, and live AI remain mocked."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <PlaceholderCard title="Payments">
            <p>Payments are not implemented. Checkout creates mocked plan state only.</p>
          </PlaceholderCard>
          <PlaceholderCard title="AI">
            <p>AI recommendations are not live. Future logic must use approved app data only.</p>
          </PlaceholderCard>
          <PlaceholderCard title="Nonprofits">
            <p>Seed nonprofits are placeholders and do not imply partnership or endorsement.</p>
          </PlaceholderCard>
          <PlaceholderCard title="Impact">
            <p>Impact reports use demo estimates and must display caveats.</p>
          </PlaceholderCard>
        </div>
      </section>
    </PublicLayout>
  );
}
