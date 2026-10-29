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
        "inline-flex min-h-12 items-center gap-2 rounded-full border px-5 font-ds text-ds-body font-medium",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-ink",
        "disabled:cursor-not-allowed disabled:opacity-40",
        selected ? "border-ds-accent bg-ds-accent text-ds-on-accent" : "border-ds-ink text-ds-ink enabled:hover:bg-ds-rule"
      )}
    >
      {selected ? <Check aria-hidden size={18} strokeWidth={2.5} /> : null}
      {label}
    </button>
  );
}
