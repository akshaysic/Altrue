import type { ReactNode } from "react";
import { DonorNav } from "@/components/layout/DonorNav";

export function DonorAppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink md:flex">
      <DonorNav />
      <main className="w-full px-5 py-8 md:px-8">{children}</main>
    </div>
  );
}
