import { DonorAppLayout } from "@/components/layout/DonorAppLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { demoUser } from "@/lib/seed";

export default function SettingsPage() {
  return (
    <DonorAppLayout>
      <div className="mx-auto max-w-4xl">
        <PageHeader eyebrow="Settings" title="Account and plan controls" description="Settings are placeholder-only in this scaffold, with no real auth or payment method." />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <PlaceholderCard title="Profile">
            <p>{demoUser.name}</p>
            <p className="mt-2">{demoUser.email}</p>
          </PlaceholderCard>
          <PlaceholderCard title="Payment method">
            <p>Payment methods are not implemented. No real payment details should be collected.</p>
          </PlaceholderCard>
          <PlaceholderCard title="Plan controls">
            <p>Future controls: edit, pause, cancel.</p>
          </PlaceholderCard>
          <PlaceholderCard title="Notifications">
            <p>Monthly reports: {demoUser.notificationPreferences.monthlyReports ? "on" : "off"}</p>
          </PlaceholderCard>
        </div>
      </div>
    </DonorAppLayout>
  );
}
