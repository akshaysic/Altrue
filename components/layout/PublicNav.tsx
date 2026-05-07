import Link from "next/link";

const publicLinks = [
  { href: "/causes", label: "Causes" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/trust", label: "Trust" },
  { href: "/auth/sign-in", label: "Sign in" }
];

export function PublicNav() {
  return (
    <header className="border-b border-slate-200 bg-white/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link className="text-lg font-semibold text-ink" href="/">
          Altrue
        </Link>
        <div className="hidden items-center gap-5 text-sm text-slate-700 md:flex">
          {publicLinks.map((link) => (
            <Link className="hover:text-ink" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-white" href="/onboarding">
          Start giving
        </Link>
      </nav>
    </header>
  );
}
