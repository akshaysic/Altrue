import type { ReactNode } from "react";

/** One phone-width column for the prototype flow. Mobile first; centred on wider screens. */
export function MobileShell({ children }: { children: ReactNode }) {
  return <main className="mx-auto w-full max-w-[430px] px-ds-md pb-ds-2xl pt-ds-lg font-ds text-ds-ink">{children}</main>;
}
