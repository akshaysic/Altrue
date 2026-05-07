import Link from "next/link";
import { ReportLayout } from "@/components/layout/ReportLayout";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { demoReports } from "@/lib/seed";
import { formatCents } from "@/lib/formatters";

export default function ImpactPage() {
  return (
    <ReportLayout title="Demo impact reports" description="Impact reporting is seeded and demo-only in this scaffold.">
      <div className="grid gap-4">
        {demoReports.map((report) => (
          <Link href={`/impact/${report.id}`} key={report.id}>
            <PlaceholderCard title={`${report.periodStart} to ${report.periodEnd}`}>
              <p>Total mocked donations: {formatCents(report.totalDonatedCents)}</p>
              <p className="mt-2">{report.summary}</p>
            </PlaceholderCard>
          </Link>
        ))}
      </div>
    </ReportLayout>
  );
}
