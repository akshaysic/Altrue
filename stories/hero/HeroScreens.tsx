"use client";

import { useState } from "react";
import clsx from "clsx";
import { Amount } from "@/components/ui/Amount";
import { Button } from "@/components/ui/Button";
import { CauseChip } from "@/components/ui/CauseChip";
import { DemoTag } from "@/components/ui/DemoTag";
import { Ledger, LedgerRow } from "@/components/ui/Ledger";
import { NonprofitStatus } from "@/components/ui/NonprofitStatus";
import { Notice } from "@/components/ui/Notice";
import { formatCents } from "@/lib/formatters";
import { distribute } from "@/lib/distribution";
import { curatedOrganizations, getExpertFund, getFeaturedOrganizations, getMvpAnimalCharity } from "@/lib/seed/sources";
import type { CuratedOrganization, MvpCategory } from "@/lib/types";
import { HERO_TRANSITION, HeroFrame, SourceLine, SplitBar, formatDay, type AreaTotal } from "./HeroFrame";
import { sampleDonor } from "./sampleDonor";

export type HeroScreenProps = { showConceptLabel?: boolean };

export const AREAS: readonly MvpCategory[] = ["Global health", "Poverty relief", "Animal welfare"];
export const CURRENCY = sampleDonor.currency;

/** Copy on these frames is placeholder until it passes the two-vendor copy check (AGENTS.md §7). */

/** Recipients per area, straight from the seed loaders. */
function recipientsFor(area: MvpCategory): CuratedOrganization[] {
  if (area === "Animal welfare") {
    const animal = getMvpAnimalCharity();
    return animal ? [animal] : [];
  }
  return getFeaturedOrganizations().filter((org) => org.category === area);
}

export type HeroSplitLine = { organization: CuratedOrganization; cents: number };

/** The app's own split rule (lib/distribution.ts) fed only with records from lib/seed/sources.ts. */
export function heroSplit(areas: readonly MvpCategory[], amountCents: number, letExpertsDecide: boolean): HeroSplitLine[] {
  const expert = getExpertFund();
  const animal = getMvpAnimalCharity();
  if (!expert || !animal) return [];
  const byId = new Map(curatedOrganizations.map((org) => [org.id, org]));

  return distribute({
    totalCents: amountCents,
    areas,
    featured: getFeaturedOrganizations(),
    animalCharityId: animal.id,
    expertFundId: expert.id,
    letExpertsDecide
  }).flatMap(({ organizationId, cents }) => {
    const organization = byId.get(organizationId);
    return organization ? [{ organization, cents }] : [];
  });
}

export function areaTotals(lines: readonly HeroSplitLine[]): AreaTotal[] {
  return AREAS.map((area) => ({
    area,
    cents: lines.filter(({ organization }) => organization.category === area).reduce((sum, { cents }) => sum + cents, 0)
  }));
}

/** Short display name: drops the programme suffix after the colon ("Helen Keller Intl: vitamin A…" → "Helen Keller Intl"). */
export function shortName(org: CuratedOrganization) {
  return org.name.split(":")[0];
}

/* ------------------------------------------------------------------ 1 · Choose causes */

export function ChooseCausesScreen({ showConceptLabel = true }: HeroScreenProps) {
  const [picked, setPicked] = useState<readonly MvpCategory[]>(sampleDonor.areas);
  const expert = getExpertFund();

  const toggle = (area: MvpCategory, on: boolean) =>
    setPicked((current) => (on ? AREAS.filter((a) => a === area || current.includes(a)) : current.filter((a) => a !== area)));

  return (
    <HeroFrame showConceptLabel={showConceptLabel}>
      <div className="flex flex-col gap-ds-sm">
        <p className="font-ds-mono text-ds-mono text-ds-ink-2">Step 1 of 3</p>
        <h1 className="text-ds-h1">What would you like to support?</h1>
        <p className="text-ds-body text-ds-ink-2">Pick one or more. Your gift is split equally between them.</p>
      </div>

      <ul className="flex flex-col border-t border-ds-rule">
        {AREAS.map((area) => {
          const names = recipientsFor(area).map(shortName);
          return (
            <li key={area} className="flex flex-col gap-ds-sm border-b border-ds-rule py-ds-md">
              <CauseChip label={area} selected={picked.includes(area)} onToggle={(on) => toggle(area, on)} />
              <p className="text-ds-small text-ds-ink-2">{names.join(" · ")}</p>
            </li>
          );
        })}
      </ul>

      {expert ? (
        <section aria-labelledby="experts-heading" className="flex flex-col gap-ds-sm">
          <h2 id="experts-heading" className="text-ds-row">
            Or let experts decide
          </h2>
          <p className="text-ds-small text-ds-ink-2">
            <span className="font-semibold text-ds-ink">{expert.name}.</span> {expert.summary}
          </p>
          <NonprofitStatus status="givewell" />
        </section>
      ) : null}

      <div className="mt-auto">
        <Button block disabled={picked.length === 0}>
          Continue
        </Button>
      </div>
    </HeroFrame>
  );
}

/* ------------------------------------------------------------------ 2 · Your plan */

export function YourPlanScreen({ showConceptLabel = true }: HeroScreenProps) {
  const [experts, setExperts] = useState(false);
  const lines = heroSplit(sampleDonor.areas, sampleDonor.monthlyCents, experts);
  const totals = areaTotals(lines);
  const total = lines.reduce((sum, { cents }) => sum + cents, 0);

  return (
    <HeroFrame showConceptLabel={showConceptLabel}>
      <div className="flex flex-col gap-ds-lg">
        <div className="flex flex-col gap-ds-sm">
          <p className="text-ds-small text-ds-ink-2">{sampleDonor.displayName}</p>
          <h1 className="text-ds-h1">Your plan</h1>
        </div>
        <Amount cents={sampleDonor.monthlyCents} currency={CURRENCY} caption="every month, simulated" />
      </div>

      <section aria-labelledby="split-heading" className="flex flex-col gap-ds-md">
        <div className="flex items-baseline justify-between gap-ds-sm">
          <h2 id="split-heading" className="text-ds-row">
            How it splits
          </h2>
          <DemoTag>Illustrative split</DemoTag>
        </div>
        <SplitBar totals={totals} currency={CURRENCY} />
        <Ledger>
          {lines.map(({ organization, cents }) => (
            <LedgerRow
              key={organization.id}
              label={shortName(organization)}
              detail={organization.category}
              value={formatCents(cents, CURRENCY)}
            />
          ))}
          <LedgerRow label="Total" value={formatCents(total, CURRENCY)} emphasis />
        </Ledger>
        <div className="flex flex-col gap-ds-xs">
          <CauseChip label="Let experts decide" selected={experts} onToggle={setExperts} />
          <p className={clsx("text-ds-small text-ds-ink-2 transition-opacity", HERO_TRANSITION, experts ? "opacity-100" : "opacity-0")} aria-hidden={!experts}>
            All of it goes to the GiveWell Top Charities Fund.
          </p>
        </div>
      </section>

      <div className="mt-auto flex flex-col gap-ds-md">
        <Notice>Simulated plan. No money moves.</Notice>
        <Button block>Confirm plan</Button>
      </div>
    </HeroFrame>
  );
}

/* ------------------------------------------------------------------ 3 · Charity evidence */

export const EVIDENCE_CHARITY_ID = "against-malaria-foundation";

export function CharityEvidenceScreen({ showConceptLabel = true }: HeroScreenProps) {
  const org = curatedOrganizations.find((record) => record.id === EVIDENCE_CHARITY_ID);
  if (!org) return null;

  return (
    <HeroFrame showConceptLabel={showConceptLabel}>
      <div className="flex flex-col gap-ds-sm">
        <p className="font-ds-mono text-ds-mono text-ds-ink-2">{org.category}</p>
        <h1 className="text-ds-h1">{org.name}</h1>
        <NonprofitStatus status="givewell" />
        <p className="mt-ds-xs text-ds-body">{org.summary}</p>
      </div>

      <section aria-labelledby="figures-heading" className="flex flex-col gap-ds-md">
        <h2 id="figures-heading" className="text-ds-row">
          What GiveWell estimates
        </h2>
        <ul className="flex flex-col border-t border-ds-rule">
          {org.figures.map((figure) => (
            <li key={figure.label} className="flex flex-col gap-ds-xs border-b border-ds-rule py-ds-md">
              <DemoTag>{figure.figureLabel}</DemoTag>
              <p className="text-ds-amount-md tabular-nums">{figure.value}</p>
              <p className="text-ds-body">{figure.label}</p>
              <SourceLine name={figure.source_name} url={figure.source_url} asOf={figure.as_of} />
            </li>
          ))}
        </ul>
        <p className="text-ds-small text-ds-ink-2">
          These are estimates for the charity&apos;s work overall. Altrue doesn&apos;t apply them to your amount.
        </p>
      </section>

      <section aria-labelledby="evidence-heading" className="flex flex-col gap-ds-xs">
        <h2 id="evidence-heading" className="text-ds-row">
          Evidence
        </h2>
        <p className="text-ds-small text-ds-ink-2">{org.evidence}</p>
      </section>

      <div className="mt-auto">
        <Button block>Add to my plan</Button>
      </div>
    </HeroFrame>
  );
}

/* ------------------------------------------------------------------ 4 · Giving history */

/** "6 charities", or the one recipient's name when the gift went to a single place (the experts fund). */
function giftDetail(lines: readonly { organizationId: string }[]) {
  if (lines.length === 1) {
    const org = curatedOrganizations.find((record) => record.id === lines[0].organizationId);
    return org ? `All to ${shortName(org)}` : "1 charity";
  }
  return `Split across ${lines.length} charities`;
}

export function GivingHistoryScreen({ showConceptLabel = true }: HeroScreenProps) {
  const total = sampleDonor.history.reduce((sum, { cents }) => sum + cents, 0);

  return (
    <HeroFrame showConceptLabel={showConceptLabel}>
      <div className="flex flex-col gap-ds-sm">
        <p className="text-ds-small text-ds-ink-2">
          {sampleDonor.displayName} · since {formatDay(sampleDonor.planStartedOn)}
        </p>
        <h1 className="text-ds-h1">Your giving</h1>
      </div>

      <Amount cents={total} currency={CURRENCY} size="compact" caption={`${sampleDonor.history.length} simulated monthly gifts`} />

      <section aria-labelledby="history-heading" className="flex flex-col gap-ds-md">
        <div className="flex items-baseline justify-between gap-ds-sm">
          <h2 id="history-heading" className="text-ds-row">
            History
          </h2>
          <DemoTag>Simulated</DemoTag>
        </div>
        <Ledger>
          {sampleDonor.history.map(({ date, cents, lines }) => (
            <LedgerRow
              key={date}
              label={formatDay(date)}
              detail={giftDetail(lines)}
              value={formatCents(cents, CURRENCY)}
            />
          ))}
          <LedgerRow label="Total" value={formatCents(total, CURRENCY)} emphasis />
        </Ledger>
      </section>

      <Notice className="mt-auto">
        No money moved. Altrue doesn&apos;t estimate what your own gifts achieved; it shows each charity&apos;s sourced
        estimates instead.
      </Notice>
    </HeroFrame>
  );
}
