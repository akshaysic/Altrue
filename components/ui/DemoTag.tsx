import type { ReactNode } from "react";

/** Small mono label for demo data, estimates, sources and timestamps. */
export function DemoTag({ children = "Demo" }: { children?: ReactNode }) {
  return <span className="font-ds-mono text-ds-mono uppercase text-ds-demo">{children}</span>;
}
