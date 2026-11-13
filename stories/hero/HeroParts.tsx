"use client";

import { Check, Minus, Plus } from "lucide-react";
import clsx from "clsx";
import type { ReactNode } from "react";
import { Amount } from "@/components/ui/Amount";
import { Ledger, LedgerRow } from "@/components/ui/Ledger";
import { formatCents } from "@/lib/formatters";
import type { MvpCategory } from "@/lib/types";
import { HERO_TRANSITION, useLandmarks } from "./HeroFrame";
import { AREAS, CURRENCY, groupByArea, shortName, type AreaTotal, type HeroSplitLine } from "./heroData";

/*
 * Story-local parts for the hero frames. Several stand in for design-system items that are planned but not built
 * (AreaMark B10, OptionRow B1, StepProgress B2, SplitBar B5); promote them through those cards, not from here.
 */

/* ------------------------------------------------------------------ Area marks and colours */

/**
 * PROVISIONAL area colours (no palette sign-off; plan item A4/C1). Each clears 3:1 on ground and carries a white
 * mark at 5:1 or more, so no segment reads as disabled. Clay stays reserved for "not real" labels.
 */
export const AREA_COLOR: Record<MvpCategory, string> = {
  "Global health": "#2E5E45",
  "Poverty relief": "#1F4E79",
  "Animal welfare": "#866515"
};

const AREA_SHAPE: Record<MvpCategory, "circle" | "square" | "triangle"> = {
  "Global health": "circle",
  "Poverty relief": "square",
  "Animal welfare": "triangle"
};

/** Circle, square or triangle for the area, so the split never relies on colour alone. Always decorative: a text label sits beside it. */
export function AreaMark({ area, size = 12, color }: { area: MvpCategory; size?: number; color?: string }) {
  const fill = color ?? AREA_COLOR[area];
  const shape = AREA_SHAPE[area];
  return (
    <svg aria-hidden width={size} height={size} viewBox="0 0 12 12" className="shrink-0">
      {shape === "circle" ? <circle cx="6" cy="6" r="5.5" fill={fill} /> : null}
      {shape === "square" ? <rect x="1" y="1" width="10" height="10" fill={fill} /> : null}
      {shape === "triangle" ? <polygon points="6,0.5 11.75,11.25 0.25,11.25" fill={fill} /> : null}
    </svg>
  );
}

/* ------------------------------------------------------------------ Labels */

/** Neutral estimate label (ink-2 mono). Clay is kept for things that are not real; an estimate is real, just uncertain. */
export function EstimateTag({ children = "Estimate" }: { children?: ReactNode }) {
  return <span className="font-ds-mono text-ds-mono uppercase text-ds-ink-2">{children}</span>;
}

/** Mono caps label for an area group, with its mark. The only place mono caps act as a heading. */
export function AreaLabel({ area, as: Tag = "h3" }: { area: MvpCategory; as?: "h3" | "p" | "span" }) {
  return (
    <Tag className="inline-flex items-center gap-ds-sm font-ds-mono text-ds-mono uppercase text-ds-ink-2">
      <AreaMark area={area} size={12} />
      {area}
    </Tag>
  );
}

/** One source line, verbatim from the seed: name (linked) and as-of date. */
export function SourceLine({ name, url, asOf }: { name: string; url: string; asOf: string }) {
  return (
    <p className="font-ds-mono text-ds-mono text-ds-ink-2">
      Source:{" "}
      <a href={url} target="_blank" rel="noreferrer" className="text-ds-ink underline underline-offset-2">
        {name}
      </a>{" "}
      · As of: {asOf}
    </p>
  );
}

/* ------------------------------------------------------------------ Split */

/** Flat split bar: one segment per area with its mark inside, widths easing over 150 ms. Only redraws cents the split computed. */
export function SplitBar({ totals, currency = CURRENCY }: { totals: readonly AreaTotal[]; currency?: string }) {
  const shown = totals.filter(({ cents }) => cents > 0);
  const sum = shown.reduce((acc, { cents }) => acc + cents, 0);

  return (
    <div className="flex flex-col gap-ds-sm">
      <div aria-hidden className="flex h-6 w-full gap-0.5 overflow-hidden rounded-md">
        {shown.map(({ area, cents }) => (
          <span
            key={area}
            className={clsx("flex h-full items-center justify-center overflow-hidden transition-[width]", HERO_TRANSITION)}
            style={{ width: `${(cents / sum) * 100}%`, backgroundColor: AREA_COLOR[area] }}
          >
            <AreaMark area={area} size={10} color="#FFFFFF" />
          </span>
        ))}
      </div>
      <ul className="flex flex-wrap gap-x-ds-md gap-y-ds-xs text-ds-small text-ds-ink-2">
        {shown.map(({ area, cents }) => (
          <li key={area} className="inline-flex items-center gap-ds-xs">
            <AreaMark area={area} size={12} />
            {area} · <span className="tabular-nums text-ds-ink">{formatCents(cents, currency)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function areaTotals(lines: readonly HeroSplitLine[]): AreaTotal[] {
  return AREAS.map((area) => ({
    area,
    cents: lines.filter(({ organization }) => organization.category === area).reduce((sum, { cents }) => sum + cents, 0)
  }));
}

/** Charities grouped by area, each group with its mark, a mono caps label and a subtotal. Used on Donate and Plan alike. */
export function GroupedSplit({ lines }: { lines: readonly HeroSplitLine[] }) {
  return (
    <div className="flex flex-col gap-ds-lg">
      {groupByArea(lines).map(({ area, cents, lines: inArea }) => (
        <div key={area} role="group" aria-label={area} data-area={area} className="flex flex-col gap-ds-xs">
          <div className="flex items-baseline justify-between gap-ds-sm">
            <AreaLabel area={area} />
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
        </div>
      ))}
    </div>
  );
}

/** Small inline split for a history row: each area's mark and amount, with the area name for screen readers. */
export function SplitStrip({ lines }: { lines: readonly HeroSplitLine[] }) {
  const fund = lines.length === 1 && lines[0].organization.type === "fund" ? lines[0].organization : null;
  return (
    <span className="flex flex-wrap items-center gap-x-ds-md gap-y-ds-xs text-ds-small text-ds-ink-2">
      {areaTotals(lines)
        .filter(({ cents }) => cents > 0)
        .map(({ area, cents }) => (
          <span key={area} className="inline-flex items-center gap-ds-xs tabular-nums">
            <AreaMark area={area} size={10} />
            <span className="sr-only">{area}</span>
            {formatCents(cents, CURRENCY)}
          </span>
        ))}
      {fund ? <span>{shortName(fund)}</span> : null}
    </span>
  );
}

/* ------------------------------------------------------------------ Controls */

/**
 * Full-width selectable row (story-local stand-in for plan item B1). One treatment everywhere "Let experts decide"
 * appears. The circle fills and shows a check as well as changing colour, so state never rests on colour alone.
 */
export function OptionRow({
  title,
  description,
  selected,
  onToggle
}: {
  title: string;
  description: ReactNode;
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

const roundButton =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-ds-ink text-ds-ink transition-colors " +
  `${HERO_TRANSITION} enabled:hover:bg-ds-rule disabled:cursor-not-allowed disabled:border-ds-ink-2 disabled:text-ds-ink-2 ` +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus";

/** The hero amount with − and + beside it, so the amount shows once instead of again in a separate stepper row. */
export function AmountControl({
  cents,
  onChange,
  step,
  min,
  max,
  caption
}: {
  cents: number;
  onChange: (cents: number) => void;
  step: number;
  min: number;
  max: number;
  caption: string;
}) {
  const stepLabel = formatCents(step, CURRENCY);
  return (
    <div className="flex items-start justify-between gap-ds-md">
      <div aria-live="polite">
        <Amount cents={cents} currency={CURRENCY} caption={caption} />
      </div>
      <div role="group" aria-label="Change monthly gift" className="mt-3.5 flex gap-ds-sm">
        <button
          type="button"
          aria-label={`Give ${stepLabel} less each month`}
          className={roundButton}
          disabled={cents - step < min}
          onClick={() => onChange(Math.max(min, cents - step))}
        >
          <Minus aria-hidden size={18} />
        </button>
        <button
          type="button"
          aria-label={`Give ${stepLabel} more each month`}
          className={roundButton}
          disabled={cents + step > max}
          onClick={() => onChange(Math.min(max, cents + step))}
        >
          <Plus aria-hidden size={18} />
        </button>
      </div>
    </div>
  );
}

/** Flat on/off switch: ink-2 outline when off, accent fill when on; the knob slides 150 ms, not at all under reduced motion. */
export function Switch({ label, checked, onChange }: { label: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex min-h-ds-touch w-full items-center justify-between gap-ds-md border-b border-ds-rule py-ds-sm text-left font-ds text-ds-body text-ds-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus"
    >
      {label}
      <span
        aria-hidden
        className={clsx(
          "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 transition-colors",
          HERO_TRANSITION,
          checked ? "border-ds-accent bg-ds-accent" : "border-ds-ink-2 bg-ds-ground"
        )}
      >
        <span
          className={clsx(
            "absolute left-0.5 size-4 rounded-full transition-transform",
            HERO_TRANSITION,
            checked ? "translate-x-5 bg-ds-on-accent" : "translate-x-0 bg-ds-ink-2"
          )}
        />
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ Navigation */

export const GIVING_STEPS = ["Explore", "Donate", "Plan"] as const;

/** One step indicator for Explore → Donate → Plan: three flat segments with their names; the current one carries aria-current. */
export function StepIndicator({ current }: { current: (typeof GIVING_STEPS)[number] }) {
  const landmarks = useLandmarks();
  const Nav = landmarks ? "nav" : "div";
  const index = GIVING_STEPS.indexOf(current);

  return (
    <Nav aria-label={landmarks ? "Giving steps" : undefined}>
      <ol className="grid grid-cols-3 gap-ds-xs">
        {GIVING_STEPS.map((step, i) => (
          <li key={step} aria-current={i === index ? "step" : undefined} className="flex flex-col gap-ds-xs">
            <span aria-hidden className={clsx("h-1 rounded-full", i <= index ? "bg-ds-accent" : "bg-ds-rule")} />
            <span className={clsx("text-ds-small", i === index ? "font-semibold text-ds-ink" : "text-ds-ink-2")}>
              <span className="sr-only">{`Step ${i + 1} of ${GIVING_STEPS.length}: `}</span>
              {step}
            </span>
          </li>
        ))}
      </ol>
    </Nav>
  );
}

/* ------------------------------------------------------------------ Rows */

/** A label and value row inside a <Ledger>, for values too long for LedgerRow's single right-hand line. */
export function InfoRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-ds-md border-b border-ds-rule py-ds-sm">
      <dt className="shrink-0 py-0.5 text-ds-small text-ds-ink-2">{label}</dt>
      <dd className="min-w-0 text-right text-ds-small text-ds-ink">{children}</dd>
    </div>
  );
}

