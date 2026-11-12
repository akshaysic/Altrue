import type { ReactNode } from "react";
import { PublicNav } from "@/components/layout/PublicNav";
import { copy } from "@/lib/copy";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ds-ground font-ds text-ds-ink">
      <PublicNav />
      <main>{children}</main>
      <footer className="border-t border-ds-rule bg-ds-ground">
        <div className="mx-auto flex max-w-6xl flex-col gap-ds-sm px-ds-md py-ds-lg text-ds-small text-ds-ink-2 md:px-ds-lg md:flex-row md:items-center md:justify-between">
          <p>{copy.footer}</p>
        </div>
      </footer>
    </div>
  );
}
