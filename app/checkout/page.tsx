import { DecisionLayout } from "@/components/layout/DecisionLayout";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { MOCKED_FEE_CENTS } from "@/lib/constants";
import { demoPlans } from "@/lib/seed";
import { formatCents } from "@/lib/formatters";

export default function CheckoutPage() {
  const activePlan = demoPlans[0];

  return (
    <DecisionLayout eyebrow="Mock checkout" title="Confirm a mocked plan" description="Payments are not implemented. This page must not collect payment details or move money.">
      <PlaceholderCard title="Payment placeholder">
        <p>Monthly amount: {formatCents(activePlan.monthlyAmountCents)}</p>
        <p className="mt-2">Mocked platform fee: {formatCents(MOCKED_FEE_CENTS)}</p>
        <p className="mt-2">Status after a future confirmation: mocked plan activation only.</p>
      </PlaceholderCard>
    </DecisionLayout>
  );
}
