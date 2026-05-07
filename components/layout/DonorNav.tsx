import Link from "next/link";

const donorLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/causes", label: "Causes" },
  { href: "/plan/new", label: "Plan" },
  { href: "/impact", label: "Impact" },
  { href: "/donations", label: "Donations" },
  { href: "/settings", label: "Settings" }
];

export function DonorNav() {
  return (
    <aside className="border-b border-slate-200 bg-white md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <div className="px-5 py-5">
        <Link className="text-lg font-semibold text-ink" href="/dashboard">
          Altrue
        </Link>
      </div>
      <nav className="flex gap-2 overflow-x-auto px-4 pb-4 text-sm md:flex-col md:overflow-visible">
        {donorLinks.map((link) => (
          <Link className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-ink" href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
