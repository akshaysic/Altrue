"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const donorLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/causes", label: "Causes" },
  { href: "/plan/new", label: "Plan" },
  { href: "/impact", label: "Impact" },
  { href: "/donations", label: "Donations" },
  { href: "/settings", label: "Settings" }
];

// Local feedback route planned for S3.4 (T-35). Until it exists the link 404s on purpose;
// do not point it at an external form.
const feedbackLink = { href: "/feedback", label: "Feedback" };

// /plan/new and /plan/review both belong to "Plan", so match on the first path segment.
function isCurrent(pathname: string, href: string) {
  const section = `/${href.split("/")[1]}`;
  return pathname === section || pathname.startsWith(`${section}/`);
}

export function DonorNav() {
  const pathname = usePathname() ?? "";

  const linkClass = (href: string) =>
    clsx(
      "inline-flex min-h-ds-touch min-w-ds-touch items-center rounded-md px-ds-sm font-ds text-ds-small",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus",
      isCurrent(pathname, href) ? "bg-ds-ink text-ds-ground" : "text-ds-ink hover:underline hover:underline-offset-4"
    );

  return (
    <aside className="border-b border-ds-rule bg-ds-ground md:flex md:min-h-screen md:w-64 md:shrink-0 md:flex-col md:border-b-0 md:border-r">
      <div className="flex items-center justify-between px-ds-md pt-ds-sm md:block md:px-ds-lg md:py-ds-lg">
        <Link
          className="inline-flex min-h-ds-touch items-center font-ds text-ds-row text-ds-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-focus"
          href="/dashboard"
        >
          Altrue
        </Link>
      </div>
      <nav aria-label="Donor" className="px-ds-sm pb-ds-sm md:flex-1 md:px-ds-md">
        <ul className="flex gap-ds-xs overflow-x-auto md:h-full md:flex-col md:overflow-visible">
          {donorLinks.map((link) => (
            <li className="shrink-0" key={link.href}>
              <Link
                aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                className={clsx(linkClass(link.href), "md:w-full")}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="shrink-0 md:mt-auto md:border-t md:border-ds-rule md:pt-ds-sm">
            <Link
              aria-current={isCurrent(pathname, feedbackLink.href) ? "page" : undefined}
              className={clsx(linkClass(feedbackLink.href), "md:w-full")}
              href={feedbackLink.href}
            >
              {feedbackLink.label}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
