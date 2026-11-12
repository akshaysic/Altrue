import { copy } from "@/lib/copy";

/** Persistent on every screen (mounted in the root layout). Flat, no shadow. */
export function DemoBanner() {
  return (
    <div
      role="note"
      className="sticky top-0 z-10 bg-ds-notice-bg px-ds-md py-ds-sm text-center font-ds text-ds-small font-semibold text-ds-notice-ink"
    >
      {copy.demoBanner}
    </div>
  );
}
