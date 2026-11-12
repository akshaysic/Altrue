import { Ledger, LedgerRow } from "@/components/ui/Ledger";
import { formatCents } from "@/lib/formatters";
import { PLACEHOLDER_GIVE } from "@/lib/giveConfig";
import type { SplitLine } from "@/lib/mvpSplit";
import { splitCharityName } from "./charityName";
import { SourceLink } from "./SourceLink";

/** The split as label/amount rows plus a total. `withSources` adds each record's source link. */
export function SplitList({ lines, totalLabel, withSources = false }: { lines: SplitLine[]; totalLabel: string; withSources?: boolean }) {
  const total = lines.reduce((sum, line) => sum + line.cents, 0);
  return (
    <Ledger>
      {lines.map(({ organization, cents }) => (
        <LedgerRow
          key={organization.id}
          label={splitCharityName(organization.name).title}
          detail={
            <>
              {organization.category}
              {withSources ? (
                <>
                  <br />
                  <SourceLink href={organization.source_url} name={organization.source_name} />
                </>
              ) : null}
            </>
          }
          value={formatCents(cents, PLACEHOLDER_GIVE.currency)}
        />
      ))}
      <LedgerRow label={totalLabel} value={formatCents(total, PLACEHOLDER_GIVE.currency)} emphasis />
    </Ledger>
  );
}
