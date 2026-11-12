import { MobileShell } from "@/components/layout/MobileShell";
import { CausePicker } from "@/components/prototype/CausePicker";
import { PLACEHOLDER_COPY } from "@/lib/copy";

export default function OnboardingPage() {
  const copy = PLACEHOLDER_COPY.onboarding;
  return (
    <MobileShell>
      <p className="font-ds-mono text-ds-mono uppercase text-ds-ink-2">{copy.eyebrow}</p>
      <h1 className="mt-ds-sm text-ds-h1">{copy.title}</h1>
      <p className="mt-ds-sm text-ds-body text-ds-ink-2">{copy.body}</p>
      <CausePicker />
    </MobileShell>
  );
}
