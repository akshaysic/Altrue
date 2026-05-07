import { DecisionLayout } from "@/components/layout/DecisionLayout";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { demoAllocations } from "@/lib/seed";
import { formatCents, formatPercent } from "@/lib/formatters";

export default function PlanReviewPage() {
  return (
    <DecisionLayout eyebrow="Mock AI review" title="Review an editable allocation" description="AI recommendations are not live. This page uses seeded allocation rows only.">
      <PlaceholderCard title="Seeded allocation placeholder">
        <div className="space-y-3">
          {demoAllocations.map((allocation) => (
            <div className="rounded-md bg-slate-50 p-3" key={allocation.id}>
              <p className="font-medium text-ink">{allocation.causeId}</p>
              <p className="text-sm text-slate-700">{formatPercent(allocation.percentage)} · {formatCents(allocation.amountCents)}</p>
              <p className="mt-1 text-sm text-slate-600">{allocation.rationale}</p>
            </div>
          ))}
        </div>
      </PlaceholderCard>
    </DecisionLayout>
  );
}
