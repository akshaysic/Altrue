"use client";

import { useState } from "react";
import Link from "next/link";
import { Amount } from "@/components/ui/Amount";
import { buttonClassName } from "@/components/ui/Button";
import { CauseChip } from "@/components/ui/CauseChip";
import { PLACEHOLDER_COPY } from "@/lib/copy";
import { formatCents } from "@/lib/formatters";
import { PLACEHOLDER_GIVE } from "@/lib/giveConfig";
import { buildSplit } from "@/lib/mvpSplit";
import type { MvpCategory } from "@/lib/types";
import { toAreaSlug } from "./areas";
import { SplitList } from "./SplitList";

/** Slider + live split preview. Nothing is stored; the choices travel to /confirm in the URL. */
export function GiveForm({ areas, initialAmount, initialExperts }: { areas: MvpCategory[]; initialAmount: number; initialExperts: boolean }) {
  const copy = PLACEHOLDER_COPY.give;
  const { minAmount, maxAmount, step, currency } = PLACEHOLDER_GIVE;
  const [amount, setAmount] = useState(initialAmount);
  const [experts, setExperts] = useState(initialExperts);

  const lines = buildSplit({ areas, amountCents: amount * 100, letExpertsDecide: experts });
  const query = `areas=${areas.map(toAreaSlug).join(",")}&amount=${amount}${experts ? "&experts=1" : ""}`;
  const money = (value: number) => formatCents(value * 100, currency);

  return (
    <>
      <Amount cents={amount * 100} size="compact" currency={currency} caption={copy.amountCaption} className="mt-ds-lg" />

      <label htmlFor="monthly-amount" className="mt-ds-lg block text-ds-small text-ds-ink-2">
        {copy.sliderLabel}
      </label>
      <input
        id="monthly-amount"
        type="range"
        min={minAmount}
        max={maxAmount}
        step={step}
        value={amount}
        aria-valuetext={money(amount)}
        onChange={(event) => setAmount(Number(event.target.value))}
        className="h-ds-touch w-full accent-ds-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus"
      />
      <div className="flex justify-between text-ds-small tabular-nums text-ds-ink-2" aria-hidden>
        <span>{money(minAmount)}</span>
        <span>{money(maxAmount)}</span>
      </div>

      <div className="mt-ds-lg">
        <CauseChip label={copy.expertsLabel} selected={experts} onToggle={setExperts} />
        <p className="mt-ds-xs text-ds-small text-ds-ink-2">{copy.expertsNote}</p>
      </div>

      <section aria-labelledby="split-heading" className="mt-ds-xl">
        <h2 id="split-heading" className="text-ds-row">
          {copy.splitHeading}
        </h2>
        <p className="mt-ds-xs text-ds-small text-ds-ink-2">{copy.splitNote}</p>
        <div className="mt-ds-md" aria-live="polite">
          <SplitList lines={lines} totalLabel={copy.total} />
        </div>
      </section>

      <div className="mt-ds-xl">
        <Link href={`/confirm?${query}`} className={buttonClassName({ block: true })}>
          {copy.continue}
        </Link>
      </div>
    </>
  );
}
