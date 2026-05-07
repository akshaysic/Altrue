import { DonorAppLayout } from "@/components/layout/DonorAppLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { demoDonations } from "@/lib/seed";
import { formatCents } from "@/lib/formatters";

export default function DonationsPage() {
  return (
    <DonorAppLayout>
      <div className="mx-auto max-w-5xl">
        <PageHeader eyebrow="Donation history" title="Mocked donation history" description="Donation records are simulated in this first scaffold." />
        <div className="mt-8 space-y-3">
          {demoDonations.map((donation) => (
            <PlaceholderCard title={donation.chargedAt.slice(0, 10)} key={donation.id}>
              <p>Amount: {formatCents(donation.amountCents)}</p>
              <p className="mt-2">Fee: {formatCents(donation.feeCents)}</p>
              <p className="mt-2">Status: {donation.status}</p>
            </PlaceholderCard>
          ))}
        </div>
      </div>
    </DonorAppLayout>
  );
}
