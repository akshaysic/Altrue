import { MobileShell } from "@/components/layout/MobileShell";
import { CauseList } from "@/components/prototype/CauseList";
import { parseAreas } from "@/lib/seed/charities";

export default async function CausesPage({ searchParams }: { searchParams: Promise<{ areas?: string | string[] }> }) {
  const { areas } = await searchParams;
  return (
    <MobileShell>
      <CauseList areas={parseAreas(areas)} />
    </MobileShell>
  );
}
