import Link from "next/link";
import { MobileShell } from "@/components/layout/MobileShell";
import { MVP_AREAS, parseAreas, toAreaSlug } from "@/components/prototype/areas";
import { SplitList } from "@/components/prototype/SplitList";
import { buttonClassName } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { PLACEHOLDER_COPY } from "@/lib/copy";
import { formatCents } from "@/lib/formatters";
import { PLACEHOLDER_GIVE, parseAmount } from "@/lib/giveConfig";
import { buildSplit } from "@/lib/mvpSplit";

type Search = { areas?: string | string[]; amount?: string | string[]; experts?: string | string[] };

const linkClass =
  "inline-flex min-h-ds-touch items-center text-ds-small text-ds-ink underline decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus";

export default async function ConfirmPage({ searchParams }: { searchParams: Promise<Search> }) {
  const { areas: areasParam, amount: amountParam, experts } = await searchParams;
  const picked = parseAreas(areasParam);
  const areas = picked.length > 0 ? picked : [...MVP_AREAS];
  const amount = parseAmount(amountParam);
  const letExpertsDecide = experts === "1";
  const lines = buildSplit({ areas, amountCents: amount * 100, letExpertsDecide });
  const copy = PLACEHOLDER_COPY.confirm;
  const back = `/give?areas=${areas.map(toAreaSlug).join(",")}&amount=${amount}${letExpertsDecide ? "&experts=1" : ""}`;

  return (
    <MobileShell>
      <p className="font-ds-mono text-ds-mono uppercase text-ds-ink-2">{copy.eyebrow}</p>
      <h1 className="mt-ds-sm text-ds-h1">{copy.title}</h1>

      <Notice title={copy.notice} className="mt-ds-md">
        {copy.noticeBody}
      </Notice>

      <p className="mt-ds-lg text-ds-row">{copy.summary(formatCents(amount * 100, PLACEHOLDER_GIVE.currency))}</p>

      <section aria-labelledby="split-heading" className="mt-ds-lg">
        <h2 id="split-heading" className="text-ds-row">
          {copy.splitHeading}
        </h2>
        <div className="mt-ds-md">
          <SplitList lines={lines} totalLabel={PLACEHOLDER_COPY.give.total} withSources />
        </div>
        <p className="mt-ds-md text-ds-small text-ds-ink-2">{copy.sourcesNote}</p>
      </section>

      <div className="mt-ds-xl flex flex-col items-start gap-ds-xs">
        <Link href="/onboarding" className={buttonClassName({ block: true })}>
          {copy.startAgain}
        </Link>
        <Link href={back} className={linkClass}>
          {copy.changeAmount}
        </Link>
      </div>
    </MobileShell>
  );
}
