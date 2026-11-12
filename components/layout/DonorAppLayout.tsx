import type { ReactNode } from "react";
import { DonorNav } from "@/components/layout/DonorNav";

export function DonorAppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ds-ground font-ds text-ds-ink md:flex">
      <DonorNav />
      <main className="min-w-0 flex-1 px-ds-md py-ds-lg md:px-ds-xl md:py-ds-xl">{children}</main>
    </div>
  );
}
