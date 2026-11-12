"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { CauseChip } from "@/components/ui/CauseChip";
import { copy } from "@/lib/copy";

const MAX_CAUSES = 3;

type Option = { id: string; label: string };

/** Picks causes and passes them to the charity list in the URL; browser-local state is T-16. */
export function OnboardingForm({ options }: { options: Option[] }) {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);
  const full = selected.length >= MAX_CAUSES;

  const toggle = (id: string, on: boolean) =>
    setSelected((current) => (on ? [...current, id] : current.filter((value) => value !== id)));

  return (
    <form
      className="mt-ds-lg flex flex-col gap-ds-lg"
      onSubmit={(event) => {
        event.preventDefault();
        if (selected.length > 0) router.push(`/causes?c=${selected.join(",")}`);
      }}
    >
      <div className="flex flex-col items-start gap-ds-sm" role="group" aria-label={copy.onboarding.title}>
        {options.map((option) => (
          <CauseChip
            key={option.id}
            label={option.label}
            selected={selected.includes(option.id)}
            disabled={full && !selected.includes(option.id)}
            onToggle={(on) => toggle(option.id, on)}
          />
        ))}
      </div>
      <p className="font-ds text-ds-small text-ds-ink-2" aria-live="polite">
        {full ? copy.onboarding.limitReached : copy.onboarding.hint}
      </p>
      <Button type="submit" block disabled={selected.length === 0}>
        {copy.onboarding.next}
      </Button>
    </form>
  );
}
