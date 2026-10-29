import type { ReactNode } from "react";
import clsx from "clsx";

/** A list of label and value rows, separated by 1 px rules. */
export function Ledger({ children, className }: { children: ReactNode; className?: string }) {
  return <dl className={clsx("border-t border-ds-rule font-ds", className)}>{children}</dl>;
}

type LedgerRowProps = {
  label: ReactNode;
  value: ReactNode;
  /** Secondary line under the label: a nonprofit, a status, a caveat. */
  detail?: ReactNode;
  /** Bold, for totals such as "Goes to causes". */
  emphasis?: boolean;
};

/** One row of a Ledger. Must sit inside <Ledger>. */
export function LedgerRow({ label, value, detail, emphasis = false }: LedgerRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-ds-rule py-4">
      <dt className="min-w-0">
        <span className={clsx("block text-ds-row text-ds-ink", emphasis && "font-bold")}>{label}</span>
        {detail ? <span className="mt-1 block text-ds-small text-ds-ink-2">{detail}</span> : null}
      </dt>
      <dd className={clsx("shrink-0 text-ds-row tabular-nums text-ds-ink", emphasis && "font-bold")}>{value}</dd>
    </div>
  );
}
