import { notFound } from "next/navigation";
import { MobileShell } from "@/components/layout/MobileShell";
import { CharityDetail } from "@/components/prototype/CharityDetail";
import { charities, getCharityById } from "@/lib/seed/charities";

export function generateStaticParams() {
  return charities.map((charity) => ({ id: charity.id }));
}

export default async function CharityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const charity = getCharityById(id);
  if (!charity) notFound();

  return (
    <MobileShell>
      <CharityDetail charity={charity} />
    </MobileShell>
  );
}
