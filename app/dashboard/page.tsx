import { DonorAppLayout } from "@/components/layout/DonorAppLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { demoAllocations, demoPlans, demoReports } from "@/lib/seed";
import { formatCents, formatPercent } from "@/lib/formatters";

export default function DashboardPage() {
  const activePlan = demoPlans[0];

  return (
    <DonorAppLayout>
      <div className="mx-auto max-w-5xl">
        <PageHeader eyebrow="Donor dashboard" title="Demo donor home" description="This dashboard is scaffolded with a mocked active plan and demo report preview." />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_360px]">
          <PlaceholderCard title="Active plan">
            <p>Status: {activePlan.status}</p>
            <p className="mt-2">Monthly amount: {formatCents(activePlan.monthlyAmountCents)}</p>
            <p className="mt-2">Next mocked charge date: {activePlan.nextChargeDate}</p>
          </PlaceholderCard>
          <PlaceholderCard title="Plan controls placeholder">
            <p>Edit, pause, and cancel controls will be implemented in a future pass.</p>
          </PlaceholderCard>
          <PlaceholderCard title="Allocation">
            <div className="space-y-2">
              {demoAllocations.map((allocation) => (
                <p key={allocation.id}>{allocation.causeId}: {formatPercent(allocation.percentage)}</p>
              ))}
            </div>
          </PlaceholderCard>
          <PlaceholderCard title="Latest impact report">
            <p>{demoReports[0].summary}</p>
          </PlaceholderCard>
        </div>
      </div>
    </DonorAppLayout>
  );
}
