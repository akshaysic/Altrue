"use client";

import type { ReactNode } from "react";
import type { MvpCategory } from "@/lib/types";
import { areaTotals } from "./HeroParts";
import { AREAS, recipientsFor, resolveGift } from "./heroData";
import { sampleDonor } from "./sampleDonor";

/*
 * Rough illustration options (Step 3 of the hero polish run). Not placed in any hero yet.
 * Rules: inline SVG; ink plus the one accent; one stroke weight (1.5 px, non-scaling); shapes built from the
 * area marks (circle, square, triangle); no people, no logos, no numbers. Informative ones carry role="img" and a
 * label; pass `decorative` to hide one from assistive tech when text beside it already says the same.
 */

const SW = 1.5;
const INK = "stroke-ds-ink";
const ACCENT = "stroke-ds-accent";

type IllustrationProps = { decorative?: boolean; label: string; viewBox: string; children: ReactNode };

function Illustration({ decorative = false, label, viewBox, children }: IllustrationProps) {
  return (
    <svg
      viewBox={viewBox}
      className="block h-auto w-full"
      {...(decorative ? { "aria-hidden": true } : { role: "img", "aria-label": label })}
    >
      {children}
    </svg>
  );
}

function Mark({ shape, x, y, size, filled, accent }: { shape: "circle" | "square" | "triangle"; x: number; y: number; size: number; filled: boolean; accent: boolean }) {
  const h = size / 2;
  const cls = `${accent ? ACCENT : INK} ${filled ? (accent ? "fill-ds-accent" : "fill-ds-ink") : "fill-ds-ground"}`;
  const common = { className: cls, strokeWidth: SW, vectorEffect: "non-scaling-stroke" as const, strokeLinejoin: "round" as const };
  if (shape === "circle") return <circle cx={x} cy={y} r={h} {...common} />;
  if (shape === "square") return <rect x={x - h} y={y - h} width={size} height={size} {...common} />;
  return <polygon points={`${x},${y - h} ${x + h},${y + h} ${x - h},${y + h}`} {...common} />;
}

const SHAPE: Record<MvpCategory, "circle" | "square" | "triangle"> = {
  "Global health": "circle",
  "Poverty relief": "square",
  "Animal welfare": "triangle"
};

function LabelAt({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} textAnchor="middle" className="fill-ds-ink font-ds-mono" fontSize={10}>
      {children}
    </text>
  );
}

function Line({ d, accent, dashed }: { d: string; accent: boolean; dashed?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      className={accent ? ACCENT : INK}
      strokeWidth={SW}
      vectorEffect="non-scaling-stroke"
      strokeDasharray={dashed ? "3 4" : undefined}
      strokeLinecap="round"
    />
  );
}

/* ------------------------------------------------------------------ c · How your gift flows (Plan) */

const COL = { you: 28, split: 112, area: 214, charity: 316 };
const ROW = [44, 100, 156];

/**
 * You → equal split → causes → charities, or → the fund when experts decide. Charity nodes come from the seed
 * (one per recipient), so the shape of the diagram follows the data. No amounts are drawn.
 */
export function GiftFlow({ experts = false, decorative }: { experts?: boolean; decorative?: boolean }) {
  const label = experts
    ? "How your gift flows: all of it goes to one fund, and GiveWell chooses the charities."
    : "How your gift flows: your gift splits equally across your causes, then across each cause's charities.";

  return (
    <Illustration viewBox="0 0 358 196" label={label} decorative={decorative}>
      <Mark shape="circle" x={COL.you} y={ROW[1]} size={26} filled={false} accent={false} />
      <Mark shape="circle" x={COL.you} y={ROW[1]} size={8} filled accent />
      {experts ? (
        <>
          <Line d={`M${COL.you + 13} ${ROW[1]} H${COL.area - 18}`} accent />
          {/* The fund: the three marks held in one frame. */}
          <rect x={COL.area - 18} y={ROW[1] - 18} width={36} height={36} rx={6} className={`${ACCENT} fill-ds-ground`} strokeWidth={SW} vectorEffect="non-scaling-stroke" />
          <Mark shape="circle" x={COL.area - 8} y={ROW[1] - 7} size={8} filled accent />
          <Mark shape="square" x={COL.area + 8} y={ROW[1] - 7} size={8} filled accent />
          <Mark shape="triangle" x={COL.area} y={ROW[1] + 8} size={9} filled accent />
          {[-36, -12, 12, 36].map((dy) => (
            <g key={dy}>
              <Line d={`M${COL.area + 18} ${ROW[1]} C ${COL.area + 50} ${ROW[1]}, ${COL.charity - 40} ${ROW[1] + dy}, ${COL.charity - 5} ${ROW[1] + dy}`} accent={false} dashed />
              <Mark shape="circle" x={COL.charity} y={ROW[1] + dy} size={9} filled={false} accent={false} />
            </g>
          ))}
          <LabelAt x={COL.you} y={188}>Your gift</LabelAt>
          <LabelAt x={COL.area} y={188}>Fund</LabelAt>
          <LabelAt x={COL.charity - 6} y={188}>GiveWell chooses</LabelAt>
        </>
      ) : (
        <>
          <Line d={`M${COL.you + 13} ${ROW[1]} H${COL.split - 5}`} accent />
          <Mark shape="circle" x={COL.split} y={ROW[1]} size={10} filled accent={false} />
          {AREAS.map((area, i) => {
            const y = ROW[i];
            const charities = recipientsFor(area);
            return (
              <g key={area}>
                <Line d={`M${COL.split + 5} ${ROW[1]} C ${COL.split + 45} ${ROW[1]}, ${COL.area - 55} ${y}, ${COL.area - 14} ${y}`} accent />
                <Mark shape={SHAPE[area]} x={COL.area} y={y} size={22} filled accent />
                {charities.map((org, j) => {
                  const cy = y + (j - (charities.length - 1) / 2) * 12;
                  return (
                    <g key={org.id}>
                      <Line d={`M${COL.area + 13} ${y} C ${COL.area + 50} ${y}, ${COL.charity - 45} ${cy}, ${COL.charity - 5} ${cy}`} accent={false} />
                      <Mark shape="circle" x={COL.charity} y={cy} size={9} filled accent={false} />
                    </g>
                  );
                })}
              </g>
            );
          })}
          <LabelAt x={COL.you} y={188}>Your gift</LabelAt>
          <LabelAt x={COL.split} y={188}>Equal split</LabelAt>
          <LabelAt x={COL.area} y={188}>Causes</LabelAt>
          <LabelAt x={COL.charity} y={188}>Charities</LabelAt>
        </>
      )}
    </Illustration>
  );
}

/* ------------------------------------------------------------------ d · Where the numbers come from (charity detail) */

/** Evaluator → estimate → as-of date. Outline marks so they don't read as the filled area marks. */
export function NumberSource({ decorative }: { decorative?: boolean }) {
  const xs = [48, 179, 310];
  const y = 30;
  return (
    <Illustration
      viewBox="0 0 358 72"
      label="Where the numbers come from: an evaluator publishes an estimate, and Altrue shows it with its as-of date."
      decorative={decorative}
    >
      {[0, 1].map((i) => (
        <g key={i}>
          <Line d={`M${xs[i] + 18} ${y} H${xs[i + 1] - 24}`} accent={false} />
          <polygon
            points={`${xs[i + 1] - 18},${y} ${xs[i + 1] - 25},${y - 4} ${xs[i + 1] - 25},${y + 4}`}
            className="fill-ds-ink"
          />
        </g>
      ))}
      <Mark shape="square" x={xs[0]} y={y} size={24} filled={false} accent={false} />
      <Line d={`M${xs[0] - 6} ${y - 4} H${xs[0] + 6} M${xs[0] - 6} ${y + 3} H${xs[0] + 3}`} accent={false} />
      <Mark shape="circle" x={xs[1]} y={y} size={26} filled accent />
      <Mark shape="triangle" x={xs[2]} y={y + 1} size={26} filled={false} accent={false} />
      <LabelAt x={xs[0]} y={66}>Evaluator</LabelAt>
      <LabelAt x={xs[1]} y={66}>Estimate</LabelAt>
      <LabelAt x={xs[2]} y={66}>As of</LabelAt>
    </Illustration>
  );
}

/* ------------------------------------------------------------------ a · Giving pattern (Profile) */

/**
 * The sample donor's area marks, sized by their share of money given (area, not height, scales with share).
 * Uses the existing split data only. It shows where money went, never what it achieved.
 */
export function GivingPattern({ decorative }: { decorative?: boolean }) {
  const totals = areaTotals(sampleDonor.history.flatMap((gift) => resolveGift(gift.lines)));
  const max = Math.max(...totals.map((t) => t.cents));
  const MAX_SIZE = 72;
  const xs = [70, 179, 288];
  const base = 96;
  const largest = totals.find((t) => t.cents === max)?.area;

  return (
    <Illustration
      viewBox="0 0 358 128"
      label={`Giving pattern: where the sample donor's gifts went by cause, largest share ${largest ?? "none"}.`}
      decorative={decorative}
    >
      {totals.map(({ area, cents }, i) => {
        const size = cents > 0 ? Math.max(14, MAX_SIZE * Math.sqrt(cents / max)) : 0;
        return (
          <g key={area}>
            {size > 0 ? <Mark shape={SHAPE[area]} x={xs[i]} y={base - size / 2} size={size} filled accent /> : null}
            <Line d={`M${xs[i] - 40} ${base + 6} H${xs[i] + 40}`} accent={false} />
            <LabelAt x={xs[i]} y={base + 24}>{area}</LabelAt>
          </g>
        );
      })}
    </Illustration>
  );
}
