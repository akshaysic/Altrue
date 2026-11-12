import Link from "next/link";
import clsx from "clsx";
import { buttonClassName } from "@/components/ui/Button";

const publicLinks = [
  { href: "/causes", label: "Causes" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/trust", label: "Trust" },
  { href: "/auth/sign-in", label: "Sign in" }
];

// Local feedback route planned for S3.4 (T-35). Until it exists the link 404s on purpose;
// do not point it at an external form.
const feedbackLink = { href: "/feedback", label: "Feedback" };

const linkClass =
  "inline-flex min-h-ds-touch min-w-ds-touch items-center justify-center rounded-md px-ds-sm font-ds text-ds-small text-ds-ink hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus";

export function PublicNav() {
  return (
    <header className="border-b border-ds-rule bg-ds-ground font-ds text-ds-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-ds-md px-ds-md py-ds-sm md:px-ds-lg">
        <Link
          className="inline-flex min-h-ds-touch items-center text-ds-row text-ds-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus"
          href="/"
        >
          Altrue
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-ds-sm md:flex">
          {[...publicLinks, feedbackLink].map((link) => (
            <Link className={linkClass} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className={clsx(buttonClassName(), "h-ds-touch px-ds-lg text-ds-small")} href="/onboarding">
          Start giving
        </Link>
      </div>
      {/* Phones: the desktop link row is hidden, so the same links scroll in a second row. */}
      <nav aria-label="Main" className="border-t border-ds-rule md:hidden">
        <ul className="flex gap-ds-xs overflow-x-auto px-ds-sm">
          {[...publicLinks, feedbackLink].map((link) => (
            <li className="shrink-0" key={link.href}>
              <Link className={linkClass} href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
