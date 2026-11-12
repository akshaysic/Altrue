"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { CauseChip } from "@/components/ui/CauseChip";
import { PLACEHOLDER_COPY } from "@/lib/copy";
import type { MvpCategory } from "@/lib/types";
import { MVP_AREAS, toAreaSlug } from "./areas";

const MAX_PICKS = 3;

/** Up to three MVP areas. Picks travel to the cause list in the URL; nothing is stored yet (T-16). */
export function CausePicker() {
  const router = useRouter();
  const [picked, setPicked] = useState<MvpCategory[]>([]);
  const copy = PLACEHOLDER_COPY.onboarding;

  function toggle(area: MvpCategory, selected: boolean) {
    setPicked((current) =>
      selected ? [...current, area].slice(0, MAX_PICKS) : current.filter((item) => item !== area)
    );
  }

  function goNext() {
    const areas = MVP_AREAS.filter((area) => picked.includes(area)).map(toAreaSlug).join(",");
    router.push(`/causes?areas=${areas}`);
  }

  return (
    <>
      <div role="group" aria-label={copy.title} className="mt-ds-lg flex flex-col items-start gap-ds-sm">
        {MVP_AREAS.map((area) => (
          <CauseChip
            key={area}
            label={area}
            selected={picked.includes(area)}
            disabled={!picked.includes(area) && picked.length >= MAX_PICKS}
            onToggle={(selected) => toggle(area, selected)}
          />
        ))}
      </div>
      <p aria-live="polite" className="mt-ds-md font-ds-mono text-ds-mono uppercase text-ds-ink-2">
        {copy.pickedCount(picked.length, MAX_PICKS)}
      </p>
      <div className="mt-ds-xl">
        <Button block disabled={picked.length === 0} onClick={goNext}>
          {copy.continue}
        </Button>
      </div>
    </>
  );
}
