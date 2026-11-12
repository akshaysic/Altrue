import { ExternalLink } from "lucide-react";
import clsx from "clsx";

type SourceLinkProps = {
  href: string;
  /** Visible text. */
  children: string;
  /** Full source name, for screen readers when the visible text is short. */
  sourceName?: string;
  className?: string;
};

export function SourceLink({ href, children, sourceName, className }: SourceLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={sourceName ? `${children}: ${sourceName} (opens in a new tab)` : undefined}
      className={clsx(
        "inline-flex min-h-ds-touch items-center gap-ds-xs font-ds text-ds-small text-ds-ink underline underline-offset-4",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus",
        className
      )}
    >
      <span className="min-w-0 break-words">{children}</span>
      <ExternalLink aria-hidden size={14} className="shrink-0" />
    </a>
  );
}
