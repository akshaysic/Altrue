"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { DemoTag } from "@/components/ui/DemoTag";
import { Ledger, LedgerRow } from "@/components/ui/Ledger";
import { HeroFrame } from "./HeroFrame";
import { AmountControl, GroupedSplit, SplitBar, StepIndicator, areaTotals } from "./HeroParts";
import { ExpertsOption, type HeroScreenProps } from "./HeroScreens";
import { formatDay, heroSplit } from "./heroData";
import { sampleDonor } from "./sampleDonor";

/* Copy on this frame is placeholder until it passes the two-vendor copy check (AGENTS.md §7). */

export const DONATE_STEP_CENTS = 100;
/** $3 is the floor so each of the three areas still gets at least $1. */
export const DONATE_MIN_CENTS = 300;
export const DONATE_MAX_CENTS = 10000;

export function DonateScreen({ showConceptLabel = true }: HeroScreenProps) {
  const [amount, setAmount] = useState<number>(sampleDonor.monthlyCents);
  const [experts, setExperts] = useState(false);
  const splitId = useId();
  const paymentId = useId();

  const lines = heroSplit(sampleDonor.areas, amount, experts);

  return (
    <HeroFrame
      tab="plan"
      showConceptLabel={showConceptLabel}
      note="Simulated. The card is a sample and nothing is charged."
      actionBar={<Button block>Review monthly gift</Button>}
    >
      <StepIndicator current="Donate" />
      <div className="flex flex-col gap-ds-lg">
        <h1 className="text-ds-h1">Your monthly gift</h1>
        <AmountControl
          cents={amount}
          onChange={setAmount}
          step={DONATE_STEP_CENTS}
          min={DONATE_MIN_CENTS}
          max={DONATE_MAX_CENTS}
          caption="every month"
        />
      </div>

      <ExpertsOption selected={experts} onToggle={setExperts} />

      <section aria-labelledby={splitId} className="flex flex-col gap-ds-md">
        <div className="flex items-baseline justify-between gap-ds-sm">
          <h2 id={splitId} className="text-ds-row">
            Where it goes
          </h2>
          <DemoTag>Illustrative split</DemoTag>
        </div>
        <SplitBar totals={areaTotals(lines)} />
        <GroupedSplit lines={lines} />
      </section>

      <section aria-labelledby={paymentId} className="flex flex-col gap-ds-sm">
        <h2 id={paymentId} className="text-ds-row">
          Payment
        </h2>
        <Ledger>
          <LedgerRow label="Payment method" value={sampleDonor.paymentMethod} />
          <LedgerRow label="Next gift" value={formatDay(sampleDonor.nextGiftDate)} />
        </Ledger>
      </section>
    </HeroFrame>
  );
}
