import clsx from "clsx";
import { formatCents } from "@/lib/formatters";

type AmountProps = {
  /** Amount in cents, like everywhere else in the app. */
  cents: number;
  /** hero: the largest thing on a money screen (72 px, 88 px from md). compact: 56 px. */
  size?: "hero" | "compact";
  /** One short line under the amount, e.g. "every month". */
  caption?: string;
  className?: string;
};

export function Amount({ cents, size = "hero", caption, className }: AmountProps) {
  return (
    <div className={clsx("font-ds text-ds-ink", className)}>
      <p className={clsx("tabular-nums", size === "hero" ? "text-ds-amount-lg md:text-ds-amount-xl" : "text-ds-amount-md")}>
        {formatCents(cents)}
      </p>
      {caption ? <p className="mt-3 text-ds-body text-ds-ink-2">{caption}</p> : null}
    </div>
  );
}
