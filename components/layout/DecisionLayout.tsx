import type { ReactNode } from "react";
import { PublicNav } from "@/components/layout/PublicNav";

type DecisionLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function DecisionLayout({ eyebrow, title, description, children }: DecisionLayoutProps) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <PublicNav />
      <main className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-[1fr_320px]">
        <section>
          <p className="text-sm font-semibold uppercase tracking-wide text-moss">{eyebrow}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-normal text-ink md:text-4xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">{description}</p>
          <div className="mt-8">{children}</div>
        </section>
        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-700">
          <h2 className="font-semibold text-ink">MVP note</h2>
          <p className="mt-2">This scaffold uses mocked auth, mocked payments, and deterministic AI-shaped recommendations.</p>
        </aside>
      </main>
    </div>
  );
}
