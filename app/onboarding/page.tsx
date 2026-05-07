import { DecisionLayout } from "@/components/layout/DecisionLayout";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { DEFAULT_MONTHLY_AMOUNTS_CENTS } from "@/lib/constants";
import { causes } from "@/lib/seed";
import { formatCents } from "@/lib/formatters";

export default function OnboardingPage() {
  return (
    <DecisionLayout eyebrow="Onboarding" title="Select causes and a monthly amount" description="This placeholder shows the first donor decision points without saving data yet.">
      <div className="grid gap-5">
        <PlaceholderCard title="Cause multi-select placeholder">
          <div className="grid gap-2 md:grid-cols-2">
            {causes.map((cause) => (
              <div className="rounded-md bg-slate-50 p-3 text-sm" key={cause.id}>{cause.name}</div>
            ))}
          </div>
        </PlaceholderCard>
        <PlaceholderCard title="Monthly amount defaults">
          <div className="flex flex-wrap gap-2">
            {DEFAULT_MONTHLY_AMOUNTS_CENTS.map((amount) => (
              <span className="rounded-md bg-skywash px-3 py-2 text-sm font-medium text-ink" key={amount}>
                {formatCents(amount)}
              </span>
            ))}
            <span className="rounded-md bg-skywash px-3 py-2 text-sm font-medium text-ink">Custom</span>
          </div>
        </PlaceholderCard>
      </div>
    </DecisionLayout>
  );
}
