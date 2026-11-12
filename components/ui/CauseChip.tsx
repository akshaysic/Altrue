"use client";

import { Check } from "lucide-react";
import clsx from "clsx";

type CauseChipProps = {
  label: string;
  selected?: boolean;
  /** Called with the new selected state. */
  onToggle?: (selected: boolean) => void;
  disabled?: boolean;
};

/** A selectable cause. Selection shows a check as well as colour, so it doesn't rely on colour alone. */
export function CauseChip({ label, selected = false, onToggle, disabled = false }: CauseChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={() => onToggle?.(!selected)}
      className={clsx(
        "inline-flex min-h-ds-chip min-w-ds-touch max-w-full items-center gap-ds-sm rounded-full border px-ds-md py-ds-sm text-left font-ds text-ds-body font-medium",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus",
        "disabled:cursor-not-allowed disabled:border-ds-ink-2 disabled:bg-ds-ground disabled:text-ds-ink-2",
        selected ? "border-ds-accent bg-ds-accent text-ds-on-accent" : "border-ds-ink text-ds-ink enabled:hover:bg-ds-rule"
      )}
    >
      <Check aria-hidden size={18} strokeWidth={2.5} className={clsx("shrink-0", !selected && "invisible")} />
      <span className="min-w-0 break-words">{label}</span>
    </button>
  );
}
