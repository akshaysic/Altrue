import { DecisionLayout } from "@/components/layout/DecisionLayout";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { demoDonorProfile } from "@/lib/seed";

export default function NewPlanPage() {
  return (
    <DecisionLayout eyebrow="Donation plan" title="Build a monthly plan" description="This route will become the plan builder. For now it shows the demo donor profile inputs.">
      <PlaceholderCard title="Demo plan inputs">
        <p>Selected causes: {demoDonorProfile.selectedCauseIds.join(", ")}</p>
        <p className="mt-2">Priority style: {demoDonorProfile.priorityStyle}</p>
      </PlaceholderCard>
    </DecisionLayout>
  );
}
