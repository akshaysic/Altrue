import { PLACEHOLDER_COPY } from "@/lib/copy";

/** Persistent, flat demo banner. Lives in the root layout so it is on every screen. */
export function DemoBanner() {
  return (
    <div
      role="note"
      className="sticky top-0 z-10 border-b border-ds-notice-ink/20 bg-ds-notice-bg px-ds-md py-ds-sm text-center font-ds text-ds-small font-semibold text-ds-notice-ink"
    >
      {PLACEHOLDER_COPY.demoBanner}
    </div>
  );
}
