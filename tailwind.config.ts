import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1f2933",
        paper: "#f7f8f5",
        moss: "#4f6f52",
        clay: "#b46b4f",
        skywash: "#dcebf2",
        // "Ledger" design-system tokens (proposed, see .context/inputs/design-direction.md).
        // Values live as CSS variables in app/globals.css so they can change in one place.
        ds: {
          ground: "var(--ds-ground)",
          ink: "var(--ds-ink)",
          "ink-2": "var(--ds-ink-2)",
          rule: "var(--ds-rule)",
          accent: "var(--ds-accent)",
          "on-accent": "var(--ds-on-accent)",
          demo: "var(--ds-demo)",
          "notice-bg": "var(--ds-notice-bg)",
          "notice-ink": "var(--ds-notice-ink)"
        }
      },
      fontFamily: {
        ds: ['"Instrument Sans"', '"Helvetica Neue"', "Arial", "sans-serif"],
        "ds-mono": ['"Geist Mono"', "ui-monospace", "monospace"]
      },
      fontSize: {
        "ds-amount-xl": ["88px", { lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "700" }],
        "ds-amount-lg": ["72px", { lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "700" }],
        "ds-amount-md": ["56px", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "ds-h1": ["32px", { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "ds-row": ["17px", { lineHeight: "22px", fontWeight: "600" }],
        "ds-body": ["16px", { lineHeight: "24px" }],
        "ds-small": ["14px", { lineHeight: "20px" }],
        "ds-mono": ["12px", { lineHeight: "16px", letterSpacing: "0.02em" }]
      }
    }
  },
  plugins: []
};

export default config;
