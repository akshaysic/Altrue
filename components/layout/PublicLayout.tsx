import type { ReactNode } from "react";
import { PublicNav } from "@/components/layout/PublicNav";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <PublicNav />
      <main>{children}</main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>Altrue MVP scaffold. Demo data only.</p>
          <p>No real donations, payments, or nonprofit partnerships are active.</p>
        </div>
      </footer>
    </div>
  );
}
