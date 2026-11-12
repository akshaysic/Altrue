"use client";

import { useId, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Amount } from "@/components/ui/Amount";
import { Button } from "@/components/ui/Button";
import { CauseChip } from "@/components/ui/CauseChip";
import { DemoTag } from "@/components/ui/DemoTag";
import { Ledger, LedgerRow } from "@/components/ui/Ledger";
import { NonprofitStatus } from "@/components/ui/NonprofitStatus";
import { formatCents } from "@/lib/formatters";
import { curatedOrganizations, getExpertFund } from "@/lib/seed/sources";
import type { CuratedOrganization, MvpCategory } from "@/lib/types";
import { HeroFrame } from "./HeroFrame";
import {
  AreaLabel,
  AreaMark,
  EstimateTag,
  GroupedSplit,
  InfoRow,
  OptionRow,
  SourceLine,
  SplitBar,
  SplitStrip,
  StepIndicator,
  Switch,
  areaTotals
} from "./HeroParts";
import { AREAS, CURRENCY, formatDay, heroSplit, plannedForStartYear, recipientsFor, resolveGift, shortName } from "./heroData";
import { sampleDonor } from "./sampleDonor";

export type HeroScreenProps = { showConceptLabel?: boolean };

/* Copy on these frames is placeholder until it passes the two-vendor copy check (AGENTS.md §7). */

/** "Let experts decide", one treatment on every screen. Its wording is the seed record's own summary. */
export function ExpertsOption({ selected, onToggle }: { selected: boolean; onToggle: (selected: boolean) => void }) {
  const expert = getExpertFund();
  if (!expert) return null;
  return (
    <OptionRow
      title="Let experts decide"
      description={`All of it goes to the ${expert.name}. ${expert.summary}`}
      selected={selected}
      onToggle={onToggle}
    />
  );
}

/** Seed figures can share one source; show each distinct source once instead of under every figure. */
function distinctSources(figures: CuratedOrganization["figures"]) {
  const seen = new Map<string, { name: string; url: string; asOf: string }>();
  for (const f of figures) seen.set(`${f.source_url}|${f.as_of}`, { name: f.source_name, url: f.source_url, asOf: f.as_of });
  return [...seen.values()];
}

/* ------------------------------------------------------------------ Explore · choose causes */

export function ChooseCausesScreen({ showConceptLabel = true }: HeroScreenProps) {
  const [picked, setPicked] = useState<readonly MvpCategory[]>(sampleDonor.areas);
  const [experts, setExperts] = useState(false);

  const toggle = (area: MvpCategory, on: boolean) =>
    setPicked((current) => (on ? AREAS.filter((a) => a === area || current.includes(a)) : current.filter((a) => a !== area)));

  return (
    <HeroFrame
      tab="explore"
      showConceptLabel={showConceptLabel}
      actionBar={
        <Button block disabled={picked.length === 0 && !experts}>
          Choose an amount
        </Button>
      }
    >
      <StepIndicator current="Explore" />
      <div className="flex flex-col gap-ds-sm">
        <h1 className="text-ds-h1">What would you like to support?</h1>
        <p className="text-ds-body text-ds-ink-2">Pick one or more. Your gift is split equally between them.</p>
      </div>

      <ul className="flex flex-col border-t border-ds-rule">
        {AREAS.map((area) => (
          <li key={area} className="flex flex-col gap-ds-sm border-b border-ds-rule py-ds-md">
            <CauseChip label={area} selected={picked.includes(area)} onToggle={(on) => toggle(area, on)} />
            <p className="flex items-start gap-ds-sm text-ds-small text-ds-ink-2">
              <span className="mt-1">
                <AreaMark area={area} size={12} />
              </span>
              {recipientsFor(area).map(shortName).join(" · ")}
            </p>
          </li>
        ))}
      </ul>

      <ExpertsOption selected={experts} onToggle={setExperts} />
    </HeroFrame>
  );
}

/* ------------------------------------------------------------------ Plan · your plan */

export function YourPlanScreen({ showConceptLabel = true }: HeroScreenProps) {
  const [experts, setExperts] = useState(false);
  const splitId = useId();
  const lines = heroSplit(sampleDonor.areas, sampleDonor.monthlyCents, experts);

  return (
    <HeroFrame
      tab="plan"
      showConceptLabel={showConceptLabel}
      note="Simulated plan. No money moves."
      actionBar={<Button block>Confirm plan</Button>}
    >
      <StepIndicator current="Plan" />
      <div className="flex flex-col gap-ds-lg">
        <h1 className="text-ds-h1">Your plan</h1>
        <Amount cents={sampleDonor.monthlyCents} currency={CURRENCY} caption="every month" />
      </div>

      <ExpertsOption selected={experts} onToggle={setExperts} />

      <section aria-labelledby={splitId} className="flex flex-col gap-ds-md">
        <div className="flex items-baseline justify-between gap-ds-sm">
          <h2 id={splitId} className="text-ds-row">
            How it splits
          </h2>
          <DemoTag>Illustrative split</DemoTag>
        </div>
        <SplitBar totals={areaTotals(lines)} />
        <GroupedSplit lines={lines} />
      </section>
    </HeroFrame>
  );
}

/* ------------------------------------------------------------------ Explore · charity detail */

export const EVIDENCE_CHARITY_ID = "against-malaria-foundation";

export function CharityEvidenceScreen({ showConceptLabel = true }: HeroScreenProps) {
  const figuresId = useId();
  const org = curatedOrganizations.find((record) => record.id === EVIDENCE_CHARITY_ID);
  if (!org) return null;
  const [lead, ...rest] = org.figures;

  return (
    <HeroFrame
      tab="explore"
      showConceptLabel={showConceptLabel}
      note="These are estimates for the charity's work overall. Altrue doesn't apply them to your amount."
      actionBar={<Button block>Add to my plan</Button>}
    >
      <div className="-mt-ds-sm flex flex-col gap-ds-sm">
        <a
          href="#explore"
          aria-label="Back to Explore"
          className="-ml-2 inline-flex min-h-ds-touch w-fit items-center gap-ds-xs pr-ds-sm text-ds-body text-ds-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus"
        >
          <ChevronLeft aria-hidden size={20} />
          Explore
        </a>
        <h1 className="text-ds-h1">{org.name}</h1>
        <p className="text-ds-body">{org.summary}</p>
      </div>

      <Ledger>
        <InfoRow label="Area">
          <AreaLabel area={org.category} as="span" />
        </InfoRow>
        <InfoRow label="Evaluator">
          <NonprofitStatus status="givewell" />
        </InfoRow>
        <InfoRow label="Evidence">{org.evidence}</InfoRow>
      </Ledger>

      <section aria-labelledby={figuresId} className="flex flex-col gap-ds-md">
        <h2 id={figuresId} className="text-ds-row">
          What GiveWell estimates
        </h2>
        {lead ? (
          <div className="flex flex-col gap-ds-xs">
            <EstimateTag>{lead.figureLabel}</EstimateTag>
            <p className="text-ds-amount-md tabular-nums">{lead.value}</p>
            <p className="text-ds-body">{lead.label}</p>
          </div>
        ) : null}
        {rest.length > 0 ? (
          <ul className="flex flex-col border-t border-ds-rule">
            {rest.map((figure) => (
              <li key={figure.label} className="flex flex-col gap-ds-xs border-b border-ds-rule py-ds-md">
                <EstimateTag>{figure.figureLabel}</EstimateTag>
                <p className="text-ds-h1 tabular-nums">{figure.value}</p>
                <p className="text-ds-small text-ds-ink-2">{figure.label}</p>
              </li>
            ))}
          </ul>
        ) : null}
        {distinctSources(org.figures).map((source) => (
          <SourceLine key={source.url + source.asOf} {...source} />
        ))}
      </section>
    </HeroFrame>
  );
}

/* ------------------------------------------------------------------ Profile */

/** The first figure GiveWell itself gives for each charity in the plan. Self-reported figures are left out of this block. */
function evaluatorFigures() {
  const orgs = sampleDonor.areas.flatMap(recipientsFor);
  const withFigure = orgs.flatMap((org) => {
    const figure = org.figures.find((f) => f.basis.startsWith("GiveWell"));
    return figure ? [{ org, figure }] : [];
  });
  const without = orgs.filter((org) => !withFigure.some((row) => row.org.id === org.id));
  return { withFigure, without };
}

export function ProfileScreen({ showConceptLabel = true }: HeroScreenProps) {
  const [paused, setPaused] = useState(false);
  const [prefs, setPrefs] = useState<{ monthlySummary: boolean; productUpdates: boolean }>(sampleDonor.notifications);
  const planId = useId();
  const progressId = useId();
  const historyId = useId();
  const estimatesId = useId();
  const notificationsId = useId();

  const given = sampleDonor.history.reduce((sum, { cents }) => sum + cents, 0);
  const planned = plannedForStartYear();
  const { withFigure, without } = evaluatorFigures();
  const sources = distinctSources(withFigure.map(({ figure }) => figure));

  return (
    <HeroFrame tab="profile" showConceptLabel={showConceptLabel} note="Simulated gifts. No money moved.">
      <div className="flex flex-col gap-ds-xs">
        <h1 className="text-ds-h1">{sampleDonor.displayName}</h1>
        <p className="text-ds-small text-ds-ink-2">Giving since {formatDay(sampleDonor.planStartedOn)}</p>
      </div>

      <section aria-labelledby={planId} className="flex flex-col gap-ds-md">
        <h2 id={planId} className="text-ds-row">
          Active plan
        </h2>
        <div className="flex flex-col gap-ds-sm border-y border-ds-rule py-ds-md">
          <p className="text-ds-row tabular-nums">{formatCents(sampleDonor.monthlyCents, CURRENCY)} every month</p>
          <p className="flex flex-wrap gap-x-ds-md gap-y-ds-xs text-ds-small text-ds-ink-2">
            {sampleDonor.areas.map((area) => (
              <span key={area} className="inline-flex items-center gap-ds-xs">
                <AreaMark area={area} size={12} />
                {area}
              </span>
            ))}
          </p>
          <p className="text-ds-small text-ds-ink-2">
            {paused
              ? "Paused. No gifts until you resume."
              : `Next gift ${formatDay(sampleDonor.nextGiftDate)} · ${sampleDonor.paymentMethod}`}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-ds-sm">
          <Button variant="secondary">Change plan</Button>
          <Button variant="secondary" onClick={() => setPaused((p) => !p)}>
            {paused ? "Resume plan" : "Pause plan"}
          </Button>
        </div>
      </section>

      <section aria-labelledby={progressId} className="flex flex-col gap-ds-sm">
        <h2 id={progressId} className="text-ds-row">
          {planned.year} so far
        </h2>
        <p className="text-ds-body tabular-nums">
          {formatCents(given, CURRENCY)}{" "}
          <span className="text-ds-ink-2">of {formatCents(planned.cents, CURRENCY)} planned</span>
        </p>
        <div
          role="progressbar"
          aria-labelledby={progressId}
          aria-valuemin={0}
          aria-valuemax={planned.cents}
          aria-valuenow={given}
          aria-valuetext={`${formatCents(given, CURRENCY)} of ${formatCents(planned.cents, CURRENCY)}`}
          className="h-2 w-full overflow-hidden rounded-full bg-ds-rule"
        >
          <div className="h-full bg-ds-accent" style={{ width: `${Math.min(100, (given / planned.cents) * 100)}%` }} />
        </div>
      </section>

      <section aria-labelledby={historyId} className="flex flex-col gap-ds-sm">
        <h2 id={historyId} className="text-ds-row">
          History
        </h2>
        <Ledger>
          {sampleDonor.history.map(({ date, cents, lines }) => (
            <LedgerRow
              key={date}
              label={formatDay(date)}
              detail={<SplitStrip lines={resolveGift(lines)} />}
              value={formatCents(cents, CURRENCY)}
            />
          ))}
        </Ledger>
      </section>

      <section aria-labelledby={estimatesId} className="flex flex-col gap-ds-sm">
        <h2 id={estimatesId} className="text-ds-row">
          What evaluators estimate
        </h2>
        <p className="text-ds-small text-ds-ink-2">For each charity&apos;s work overall, not for your gifts.</p>
        <ul className="flex flex-col border-t border-ds-rule">
          {withFigure.map(({ org, figure }) => (
            <li key={org.id} className="flex flex-col gap-ds-xs border-b border-ds-rule py-ds-sm">
              <div className="flex items-baseline justify-between gap-ds-md">
                <span className="text-ds-row">{shortName(org)}</span>
                <span className="shrink-0 text-ds-row tabular-nums">{figure.value}</span>
              </div>
              <div className="flex items-baseline justify-between gap-ds-md">
                <span className="text-ds-small text-ds-ink-2">{figure.label}</span>
                <EstimateTag>{figure.figureLabel}</EstimateTag>
              </div>
            </li>
          ))}
        </ul>
        {sources.map((source) => (
          <SourceLine key={source.url + source.asOf} {...source} />
        ))}
        {without.length > 0 ? (
          <p className="text-ds-small text-ds-ink-2">
            No evaluator figure in the source packet yet for {without.map(shortName).join(" or ")}.
          </p>
        ) : null}
      </section>

      <section aria-labelledby={notificationsId} className="flex flex-col gap-ds-xs">
        <h2 id={notificationsId} className="text-ds-row">
          Notifications
        </h2>
        <div className="flex flex-col border-t border-ds-rule">
          <Switch
            label="Monthly summary"
            checked={prefs.monthlySummary}
            onChange={(v) => setPrefs((p) => ({ ...p, monthlySummary: v }))}
          />
          <Switch
            label="Product updates"
            checked={prefs.productUpdates}
            onChange={(v) => setPrefs((p) => ({ ...p, productUpdates: v }))}
          />
        </div>
      </section>
    </HeroFrame>
  );
}
