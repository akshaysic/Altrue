import Link from "next/link";
import { PLACEHOLDER_COPY, PLACEHOLDER_FEEDBACK_HREF } from "@/lib/copy";

/** On every screen (root layout). The link target is one PLACEHOLDER constant in lib/copy.ts. */
export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[430px] border-t border-ds-rule px-ds-md py-ds-md font-ds">
      <Link
        href={PLACEHOLDER_FEEDBACK_HREF}
        className="inline-flex min-h-ds-touch items-center text-ds-small text-ds-ink underline decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus"
      >
        {PLACEHOLDER_COPY.footer.feedback}
      </Link>
    </footer>
  );
}
