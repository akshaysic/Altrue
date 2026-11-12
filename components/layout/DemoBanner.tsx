import { FEEDBACK_URL, PLACEHOLDER_COPY } from "@/lib/copy";

/** Persistent, flat demo banner with the feedback link. Lives in the root layout so it is on every screen. */
export function DemoBanner() {
  return (
    <div className="sticky top-0 z-10 border-b border-ds-notice-ink/20 bg-ds-notice-bg font-ds text-ds-small text-ds-notice-ink">
      <div className="mx-auto flex w-full max-w-[430px] items-center justify-between gap-ds-md px-ds-md">
        <p role="note" className="py-ds-sm font-semibold">
          {PLACEHOLDER_COPY.demoBanner}
        </p>
        <a
          href={FEEDBACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-ds-touch items-center underline decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus"
        >
          {PLACEHOLDER_COPY.feedbackLink}
          <span className="sr-only"> ({PLACEHOLDER_COPY.detail.externalHint})</span>
        </a>
      </div>
    </div>
  );
}
