import type { ReactNode } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";

/** One phone-width column inside the app shell, used by every prototype screen. */
export function Screen({ children }: { children: ReactNode }) {
  return (
    <PublicLayout>
      <div className="mx-auto w-full max-w-md px-ds-md py-ds-lg">{children}</div>
    </PublicLayout>
  );
}
