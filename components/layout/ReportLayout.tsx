import type { ReactNode } from "react";
import { DonorAppLayout } from "@/components/layout/DonorAppLayout";

type ReportLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function ReportLayout({ title, description, children }: ReportLayoutProps) {
  return (
    <DonorAppLayout>
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-moss">Impact reporting</p>
        <h1 className="mt-2 text-3xl font-semibold text-ink">{title}</h1>
        <p className="mt-3 max-w-2xl text-slate-700">{description}</p>
        <div className="mt-8">{children}</div>
      </div>
    </DonorAppLayout>
  );
}
