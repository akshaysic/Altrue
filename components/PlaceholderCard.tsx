import type { ReactNode } from "react";

export function PlaceholderCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-lg border border-dashed border-slate-300 bg-white p-5">
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <div className="mt-2 text-sm leading-6 text-slate-700">{children}</div>
    </section>
  );
}
