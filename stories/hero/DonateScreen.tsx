"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";
import { Amount } from "@/components/ui/Amount";
import { AmountStepper } from "@/components/ui/AmountStepper";
import { Button } from "@/components/ui/Button";
import { DemoTag } from "@/components/ui/DemoTag";
import { Ledger, LedgerRow } from "@/components/ui/Ledger";
import { formatCents } from "@/lib/formatters";
import { getExpertFund } from "@/lib/seed/sources";
import type { MvpCategory } from "@/lib/types";
import { HERO_TRANSITION, HeroFrame, SplitBar, formatDay } from "./HeroFrame";
import { AREAS, CURRENCY, areaTotals, heroSplit, shortName, type HeroScreenProps, type HeroSplitLine } from "./HeroScreens";
import { sampleDonor } from "./sampleDonor";

/** Copy on this frame is placeholder until it passes the two-vendor copy check (AGENTS.md §7). */

export const DONATE_STEP_CENTS = 100;
/** $3 is the floor so each of the three areas still gets at least $1. */
export const DONATE_MIN_CENTS = 300;
export const DONATE_MAX_CENTS = 10000;

/** Story-local option row (design-system OptionRow is plan item B1). The circle fills as well as the border, so the state never rests on colour alone. */
function OptionRow({
  title,
  description,
  selected,
  onToggle
}: {
  title: string;
  description: string;
  selected: boolean;
  onToggle: (selected: boolean) => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onToggle(!selected)}
      className={clsx(
        "flex w-full min-h-ds-touch items-start gap-ds-md rounded-2xl border px-ds-md py-ds-md text-left font-ds transition-colors",
        HERO_TRANSITION,
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus",
        selected ? "border-ds-accent" : "border-ds-ink-2 hover:border-ds-ink"
      )}
    >
      <span
        aria-hidden
        className={clsx(
          "mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
          HERO_TRANSITION,
          selected ? "border-ds-accent bg-ds-accent text-ds-on-accent" : "border-ds-ink-2 text-transparent"
        )}
      >
        <Check size={14} strokeWidth={3} />
      </span>
      <span className="flex min-w-0 flex-col gap-ds-xs">
        <span className="text-ds-row text-ds-ink">{title}</span>
        <span className="text-ds-small text-ds-ink-2">{description}</span>
      </span>
    </button>
  );
}

type AreaGroup = { area: MvpCategory; cents: number; lines: HeroSplitLine[] };

function groupByArea(lines: readonly HeroSplitLine[]): AreaGroup[] {
  return AREAS.map((area) => {
    const inArea = lines.filter(({ organization }) => organization.category === area);
    return { area, lines: inArea, cents: inArea.reduce((sum, { cents }) => sum + cents, 0) };
  }).filter(({ lines: inArea }) => inArea.length > 0);
}

export function DonateScreen({ showConceptLabel = true }: HeroScreenProps) {
  const [amount, setAmount] = useState<number>(sampleDonor.monthlyCents);
  const [experts, setExperts] = useState(false);
  const expert = getExpertFund();

  const lines = heroSplit(sampleDonor.areas, amount, experts);
  const groups = groupByArea(lines);

  return (
    <HeroFrame
      showConceptLabel={showConceptLabel}
      actionBar={
        <>
          <p className="flex items-baseline justify-between gap-ds-sm text-ds-small text-ds-ink-2">
            <span>
              <span className="font-semibold tabular-nums text-ds-ink">{formatCents(amount, CURRENCY)}</span> every month
            </span>
            <DemoTag>Simulated</DemoTag>
          </p>
          <Button block>Review monthly gift</Button>
        </>
      }
    >
      <div className="flex flex-col gap-ds-lg">
        <div className="flex flex-col gap-ds-sm">
          <p className="text-ds-small text-ds-ink-2">{sampleDonor.displayName}</p>
          <h1 className="text-ds-h1">Your monthly gift</h1>
        </div>
        <Amount cents={amount} currency={CURRENCY} />
        <div className="border-t border-ds-rule">
          <AmountStepper
            label="Monthly gift"
            cents={amount}
            onChange={setAmount}
            stepCents={DONATE_STEP_CENTS}
            minCents={DONATE_MIN_CENTS}
            maxCents={DONATE_MAX_CENTS}
          />
        </div>
      </div>

      <section aria-labelledby="donate-split-heading" className="flex flex-col gap-ds-md">
        <div className="flex items-baseline justify-between gap-ds-sm">
          <h2 id="donate-split-heading" className="text-ds-row">
            Where it goes
          </h2>
          <DemoTag>Illustrative split</DemoTag>
        </div>
        <SplitBar totals={areaTotals(lines)} currency={CURRENCY} />

        <div className="flex flex-col gap-ds-lg">
          {groups.map(({ area, cents, lines: inArea }) => (
            <section key={area} aria-label={area} data-area={area} className="flex flex-col gap-ds-xs">
              <div className="flex items-baseline justify-between gap-ds-sm">
                <h3 className="font-ds-mono text-ds-mono uppercase text-ds-ink-2">{area}</h3>
                <p className="text-ds-small font-semibold tabular-nums text-ds-ink">
                  <span className="sr-only">Subtotal </span>
                  {formatCents(cents, CURRENCY)}
                </p>
              </div>
              <Ledger>
                {inArea.map(({ organization, cents: lineCents }) => (
                  <LedgerRow key={organization.id} label={shortName(organization)} value={formatCents(lineCents, CURRENCY)} />
                ))}
              </Ledger>
            </section>
          ))}
        </div>

        {expert ? (
          <OptionRow
            title="Let experts decide"
            description={`Send it all to the ${expert.name}. ${expert.summary}`}
            selected={experts}
            onToggle={setExperts}
          />
        ) : null}
      </section>

      <section aria-labelledby="donate-schedule-heading" className="flex flex-col gap-ds-sm">
        <h2 id="donate-schedule-heading" className="text-ds-row">
          Payment
        </h2>
        <Ledger>
          <LedgerRow label="Payment method" detail="Sample card. Nothing is charged." value={sampleDonor.paymentMethod} />
          <LedgerRow label="Next gift" value={formatDay(sampleDonor.nextGiftDate)} />
        </Ledger>
      </section>
    </HeroFrame>
  );
}
