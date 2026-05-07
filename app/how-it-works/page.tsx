import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";

export default function HowItWorksPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-4xl px-5 py-10">
        <PageHeader
          eyebrow="How it works"
          title="A simple mocked flow for the MVP"
          description="This placeholder explains the intended donor journey without implementing payments or live AI yet."
        />
        <div className="mt-8 grid gap-4">
          {["Choose causes", "Set a monthly amount", "Review a mocked AI allocation", "Confirm a mocked plan", "Read demo impact reports"].map((step, index) => (
            <PlaceholderCard title={`${index + 1}. ${step}`} key={step}>
              <p>This section is scaffolded for future product copy and interaction details.</p>
            </PlaceholderCard>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
