import Link from "next/link";
import { MobileShell } from "@/components/layout/MobileShell";
import { MVP_AREAS, parseAreas } from "@/components/prototype/areas";
import { GiveForm } from "@/components/prototype/GiveForm";
import { PLACEHOLDER_COPY } from "@/lib/copy";
import { parseAmount } from "@/lib/giveConfig";

type Search = { areas?: string | string[]; amount?: string | string[]; experts?: string | string[] };

export default async function GivePage({ searchParams }: { searchParams: Promise<Search> }) {
  const { areas: areasParam, amount, experts } = await searchParams;
  const picked = parseAreas(areasParam);
  const areas = picked.length > 0 ? picked : [...MVP_AREAS];
  const copy = PLACEHOLDER_COPY.give;

  return (
    <MobileShell>
      <p className="font-ds-mono text-ds-mono uppercase text-ds-ink-2">{copy.eyebrow}</p>
      <h1 className="mt-ds-sm text-ds-h1">{copy.title}</h1>
      <p className="mt-ds-sm text-ds-body text-ds-ink-2">
        {copy.causesLabel}: {areas.join(" · ")}
      </p>
      <Link
        href="/onboarding"
        className="inline-flex min-h-ds-touch items-center text-ds-small text-ds-ink underline decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus"
      >
        {copy.changeCauses}
      </Link>
      <GiveForm areas={areas} initialAmount={parseAmount(amount)} initialExperts={experts === "1"} />
    </MobileShell>
  );
}
