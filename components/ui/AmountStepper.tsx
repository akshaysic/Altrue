import { Minus, Plus } from "lucide-react";
import { formatCents } from "@/lib/formatters";

type AmountStepperProps = {
  /** What the money goes to, e.g. a cause name. */
  label: string;
  cents: number;
  /** Called with the new amount. The stepper never goes below minCents or above maxCents. */
  onChange?: (cents: number) => void;
  stepCents?: number;
  minCents?: number;
  maxCents?: number;
};

const stepButton =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-ds-ink text-ds-ink " +
  "enabled:hover:bg-ds-rule disabled:cursor-not-allowed disabled:opacity-30 " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-ink";

/** One row of split controls: give less, the amount, give more. */
export function AmountStepper({
  label,
  cents,
  onChange,
  stepCents = 100,
  minCents = 0,
  maxCents = Number.POSITIVE_INFINITY
}: AmountStepperProps) {
  return (
    <div role="group" aria-label={label} className="flex items-center justify-between gap-4 border-b border-ds-rule py-3 font-ds">
      <p className="min-w-0 text-ds-row text-ds-ink">{label}</p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={`Give less to ${label}`}
          className={stepButton}
          disabled={cents - stepCents < minCents}
          onClick={() => onChange?.(Math.max(minCents, cents - stepCents))}
        >
          <Minus aria-hidden size={18} />
        </button>
        <output aria-live="polite" className="w-16 text-center text-ds-row tabular-nums text-ds-ink">
          {formatCents(cents)}
        </output>
        <button
          type="button"
          aria-label={`Give more to ${label}`}
          className={stepButton}
          disabled={cents + stepCents > maxCents}
          onClick={() => onChange?.(Math.min(maxCents, cents + stepCents))}
        >
          <Plus aria-hidden size={18} />
        </button>
      </div>
    </div>
  );
}
