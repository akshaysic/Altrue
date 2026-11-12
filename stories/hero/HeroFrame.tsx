import type { ReactNode } from "react";
import clsx from "clsx";
import { DemoTag } from "@/components/ui/DemoTag";
import { formatCents } from "@/lib/formatters";
import type { MvpCategory } from "@/lib/types";

export const CONCEPT_LABEL = "Concept mockup · sample data";

/** 150 ms, and none at all when the viewer asks for reduced motion. */
export const HERO_TRANSITION = "duration-150 ease-out motion-reduce:transition-none";

type HeroFrameProps = {
  /** Every pitch frame carries the concept label so a screenshot can't pass for the live product. */
  showConceptLabel?: boolean;
  children: ReactNode;
};

/** One flat 390 px screen: no bezel, no shadow, just the ground colour and a plain-text wordmark. */
export function HeroFrame({ showConceptLabel = true, children }: HeroFrameProps) {
  return (
    <div className="flex min-h-[844px] w-[390px] flex-col bg-ds-ground font-ds text-ds-ink">
      <header className="flex min-h-ds-touch items-center justify-between gap-ds-sm border-b border-ds-rule px-ds-md">
        <span className="text-ds-row font-bold tracking-tight">Altrue</span>
        {showConceptLabel ? <DemoTag>{CONCEPT_LABEL}</DemoTag> : null}
      </header>
      <main className="flex flex-1 flex-col gap-ds-xl px-ds-md pb-ds-lg pt-ds-lg">{children}</main>
    </div>
  );
}

/** Source name, link and as-of date, verbatim from the seed record. */
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

/** Area fills. Each clears 3:1 on ground, and the legend names every segment so colour is never the only cue. */
const AREA_FILL: Record<MvpCategory, string> = {
  "Global health": "bg-ds-accent",
  "Poverty relief": "bg-ds-ink",
  "Animal welfare": "bg-ds-ink-2"
};

export type AreaTotal = { area: MvpCategory; cents: number };

/**
 * Story-local split bar (the design-system SplitBar is plan item B5, not built yet). It only redraws cents the
 * split already computed; widths ease over 150 ms so switching to "Let experts decide" reads as a change.
 */
export function SplitBar({ totals, currency }: { totals: readonly AreaTotal[]; currency?: string }) {
  const sum = totals.reduce((acc, { cents }) => acc + cents, 0);

  return (
    <div className="flex flex-col gap-ds-sm">
      <div aria-hidden className="flex h-3 w-full gap-0.5 overflow-hidden rounded-full">
        {totals.map(({ area, cents }) => (
          <span
            key={area}
            data-area={area}
            className={clsx("h-full transition-[width]", HERO_TRANSITION, AREA_FILL[area])}
            style={{ width: sum > 0 ? `${(cents / sum) * 100}%` : "0%" }}
          />
        ))}
      </div>
      <ul className="flex flex-wrap gap-x-ds-md gap-y-ds-xs text-ds-small text-ds-ink-2">
        {totals
          .filter(({ cents }) => cents > 0)
          .map(({ area, cents }) => (
            <li key={area} className="inline-flex items-center gap-ds-xs">
              <span aria-hidden className={clsx("size-2.5 rounded-full", AREA_FILL[area])} />
              {area} · <span className="tabular-nums text-ds-ink">{formatCents(cents, currency)}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

/** "1 Nov 2026" from an ISO date, pinned to UTC so the date can't drift with the viewer's time zone. */
export function formatDay(iso: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`)
  );
}
