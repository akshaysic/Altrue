import { notFound } from "next/navigation";
import { MobileShell } from "@/components/layout/MobileShell";
import { getMvpOrganizationById } from "@/components/prototype/areas";
import { CharityDetail } from "@/components/prototype/CharityDetail";
import { curatedOrganizations, selectMvp } from "@/lib/seed";

export function generateStaticParams() {
  return selectMvp(curatedOrganizations).map((org) => ({ id: org.id }));
}

export default async function CharityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const charity = getMvpOrganizationById(id);
  if (!charity) notFound();

  return (
    <MobileShell>
      <CharityDetail charity={charity} />
    </MobileShell>
  );
}
