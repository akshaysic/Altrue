import { MobileShell } from "@/components/layout/MobileShell";
import { parseAreas } from "@/components/prototype/areas";
import { CauseList } from "@/components/prototype/CauseList";

export default async function CausesPage({ searchParams }: { searchParams: Promise<{ areas?: string | string[] }> }) {
  const { areas } = await searchParams;
  return (
    <MobileShell>
      <CauseList areas={parseAreas(areas)} />
    </MobileShell>
  );
}
