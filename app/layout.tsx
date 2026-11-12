import type { Metadata } from "next";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";
import "@fontsource/instrument-sans/700.css";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/500.css";
import "./globals.css";
import { DemoBanner } from "@/components/layout/DemoBanner";

export const metadata: Metadata = {
  title: "Altrue MVP",
  description: "A donor-side meta-charity microdonation MVP scaffold.",
  // Unlisted prototype: keep it out of search results. vercel.json sends the same as an X-Robots-Tag header.
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <DemoBanner />
        {children}
      </body>
    </html>
  );
}
