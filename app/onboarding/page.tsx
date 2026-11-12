import { OnboardingForm } from "@/components/OnboardingForm";
import { Screen } from "@/components/layout/Screen";
import { copy } from "@/lib/copy";
import { getMvpCauses } from "@/lib/seed/causes";

export default function OnboardingPage() {
  // Only the three MVP causes. Labels are the canonical MVP category names.
  const options = getMvpCauses().map((cause) => ({ id: cause.id, label: cause.mvpCategory ?? cause.name }));

  return (
    <Screen>
      <h1 className="font-ds text-ds-h1 text-ds-ink">{copy.onboarding.title}</h1>
      <OnboardingForm options={options} />
    </Screen>
  );
}
