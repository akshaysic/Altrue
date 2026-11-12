import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { PLACEHOLDER_COPY } from "@/lib/copy";

/** External link to the record's source. Opens in a new tab and says so to screen readers. */
export function SourceLink({ href, name, className }: { href: string; name: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex min-h-ds-touch items-center gap-ds-xs text-ds-small text-ds-ink underline decoration-1 underline-offset-4 hover:decoration-2",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus",
        className
      )}
    >
      <span className="min-w-0 break-words">{name}</span>
      <ArrowUpRight aria-hidden size={14} className="shrink-0" />
      <span className="sr-only">({PLACEHOLDER_COPY.detail.externalHint})</span>
    </a>
  );
}
