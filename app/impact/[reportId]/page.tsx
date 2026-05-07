import { notFound } from "next/navigation";
import { ReportLayout } from "@/components/layout/ReportLayout";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { causes, demoReportItems, demoReports, impactMetrics } from "@/lib/seed";
import { formatCents } from "@/lib/formatters";

export function generateStaticParams() {
  return demoReports.map((report) => ({ reportId: report.id }));
}

export default function ImpactReportDetailPage({ params }: { params: { reportId: string } }) {
  const report = demoReports.find((item) => item.id === params.reportId);

  if (!report) {
    notFound();
  }

  const items = demoReportItems.filter((item) => item.impactReportId === report.id);

  return (
    <ReportLayout title="Demo impact report detail" description={report.summary}>
      <div className="space-y-4">
        <PlaceholderCard title="Report period">
          <p>{report.periodStart} to {report.periodEnd}</p>
          <p className="mt-2">Total mocked donations: {formatCents(report.totalDonatedCents)}</p>
        </PlaceholderCard>
        {items.map((item) => {
          const cause = causes.find((entry) => entry.id === item.causeId);
          const metric = impactMetrics.find((entry) => entry.id === item.metricId);

          return (
            <PlaceholderCard title={cause?.name ?? item.causeId} key={item.id}>
              <p>{item.narrative}</p>
              <p className="mt-2">Estimated units: {item.estimatedUnits} {metric?.unit ?? "units"}</p>
              <p className="mt-2">Allocated amount: {formatCents(item.amountAllocatedCents)}</p>
              <p className="mt-2 text-xs text-slate-500">{item.methodologyNote}</p>
            </PlaceholderCard>
          );
        })}
      </div>
    </ReportLayout>
  );
}
