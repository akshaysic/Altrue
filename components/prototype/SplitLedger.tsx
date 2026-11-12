import { DemoTag } from "@/components/ui/DemoTag";
import { Ledger, LedgerRow } from "@/components/ui/Ledger";
import type { SplitLine } from "@/lib/distribution";
import { formatCents } from "@/lib/formatters";
import { PLACEHOLDER_COPY } from "@/lib/copy";
import { splitCharityName } from "./charityName";
import { SourceLink } from "./SourceLink";

type SplitLedgerProps = {
  lines: SplitLine[];
  /** Adds each organization's first packet figure (as an estimate, in USD as sourced) and its source link. */
  withSources?: boolean;
  /** Adds a bold total row. */
  totalLabel?: string;
};

/** Euro amounts per organization. Money only: it never turns euros into impact. */
export function SplitLedger({ lines, withSources = false, totalLabel }: SplitLedgerProps) {
  const copy = PLACEHOLDER_COPY.confirm;
  const total = lines.reduce((sum, line) => sum + line.amountCents, 0);

  return (
    <Ledger>
      {lines.map(({ organization, category, amountCents }) => {
        const figure = organization.figures[0];
        return (
          <LedgerRow
            key={organization.id}
            label={splitCharityName(organization.name).title}
            value={formatCents(amountCents, "EUR")}
            detail={
              <>
                <span className="block">{category}</span>
                {withSources ? (
                  <>
                    {figure ? (
                      <span className="mt-ds-sm block text-ds-ink">
                        {figure.value} {figure.label}
                        <span className="mt-ds-xs block">
                          <DemoTag>{figure.value.includes("$") ? copy.figureNoteUsd : copy.figureNote}</DemoTag>
                        </span>
                      </span>
                    ) : null}
                    <SourceLink href={organization.source_url} name={organization.source_name} className="text-[13px] leading-[18px]" />
                    <span className="block">
                      <DemoTag>{copy.asOfLabel}</DemoTag>{" "}
                      <span className="font-ds-mono text-ds-mono text-ds-ink">{organization.as_of}</span>
                    </span>
                  </>
                ) : null}
              </>
            }
          />
        );
      })}
      {totalLabel ? <LedgerRow label={totalLabel} value={formatCents(total, "EUR")} emphasis /> : null}
    </Ledger>
  );
}
