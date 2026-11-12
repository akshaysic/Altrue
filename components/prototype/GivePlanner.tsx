"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Amount } from "@/components/ui/Amount";
import { buttonClassName } from "@/components/ui/Button";
import { CauseChip } from "@/components/ui/CauseChip";
import { PLACEHOLDER_AMOUNT_EUR, PLACEHOLDER_COPY } from "@/lib/copy";
import { splitDonation } from "@/lib/distribution";
import { formatCents } from "@/lib/formatters";
import { curatedOrganizations, selectMvp } from "@/lib/seed/sources";
import type { MvpCategory } from "@/lib/types";
import { flowHref } from "./giveParams";
import { SplitLedger } from "./SplitLedger";

const organizations = selectMvp(curatedOrganizations);

type GivePlannerProps = {
  causes: MvpCategory[];
  initialAmountCents: number;
  initialExpertsDecide: boolean;
};

/** Amount slider, the "let experts decide" switch and the live split. State lives here and in the URL only. */
export function GivePlanner({ causes, initialAmountCents, initialExpertsDecide }: GivePlannerProps) {
  const copy = PLACEHOLDER_COPY.give;
  const { min, max, step } = PLACEHOLDER_AMOUNT_EUR;
  const [euros, setEuros] = useState(initialAmountCents / 100);
  const [expertsDecide, setExpertsDecide] = useState(initialExpertsDecide);
  const amountCents = euros * 100;

  const lines = useMemo(
    () => splitDonation({ amountCents, causes, expertsDecide, organizations }),
    [amountCents, causes, expertsDecide]
  );

  return (
    <>
      <Amount cents={amountCents} currency="EUR" caption={copy.amountCaption} className="mt-ds-lg" />

      <label htmlFor="monthly-amount" className="sr-only">
        {copy.sliderLabel}
      </label>
      <input
        id="monthly-amount"
        type="range"
        min={min}
        max={max}
        step={step}
        value={euros}
        aria-valuetext={copy.sliderValueText(formatCents(amountCents, "EUR"))}
        onChange={(event) => setEuros(Number(event.target.value))}
        className="mt-ds-lg h-ds-touch w-full cursor-pointer accent-ds-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus"
      />
      <div aria-hidden className="flex justify-between font-ds-mono text-ds-mono text-ds-ink-2">
        <span>{formatCents(min * 100, "EUR")}</span>
        <span>{formatCents(max * 100, "EUR")}</span>
      </div>

      <div className="mt-ds-xl">
        <CauseChip label={copy.expertsLabel} selected={expertsDecide} onToggle={setExpertsDecide} />
        <p className="mt-ds-sm text-ds-small text-ds-ink-2">{copy.expertsHint}</p>
      </div>

      <section aria-labelledby="split-heading" className="mt-ds-xl">
        <h2 id="split-heading" className="text-ds-row">{copy.splitHeading}</h2>
        <p className="mt-ds-xs text-ds-small text-ds-ink-2">{copy.splitNote}</p>
        <div aria-live="polite" className="mt-ds-sm">
          <SplitLedger lines={lines} />
        </div>
      </section>

      <div className="sticky bottom-0 -mx-ds-md mt-ds-xl border-t border-ds-rule bg-ds-ground px-ds-md py-ds-sm">
        <Link href={flowHref("/confirm", { causes, amountCents, expertsDecide })} className={buttonClassName({ block: true })}>
          {copy.continue}
        </Link>
      </div>
    </>
  );
}
