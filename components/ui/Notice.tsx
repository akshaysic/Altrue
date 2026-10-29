import type { ReactNode } from "react";
import clsx from "clsx";

type NoticeProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

/** A warm, flat tinted block for anything that needs attention: the demo banner, caveats, warnings. */
export function Notice({ title, children, className }: NoticeProps) {
  return (
    <div role="note" className={clsx("rounded-2xl bg-ds-notice-bg px-4 py-3 font-ds text-ds-small text-ds-notice-ink", className)}>
      {title ? <p className="font-semibold">{title}</p> : null}
      <div className={clsx(title && "mt-1")}>{children}</div>
    </div>
  );
}
