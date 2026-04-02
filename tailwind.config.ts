import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Backgrounds ── */
        bg: "#FDFCF8",
        "bg-2": "#F4F0E6",
        "bg-3": "#E8E2D4",
        /* ── Cards ── */
        card: "#FFFFFF",
        "card-2": "#FAFAF6",
        /* ── Dark sections (nav, footer, hero) ── */
        ink: "#1C1A14",
        "ink-2": "#2C2820",
        /* ── Accent — warm amber gold ── */
        gold: "#B8730A",
        "gold-2": "#D4890E",
        "gold-3": "#F2B53C",
        /* ── Typography ── */
        text: "#18160C",
        muted: "#6A6452",
        dim: "#A09880",
        /* ── Borders ── */
        border: "rgba(24,22,12,0.11)",
        "border-2": "rgba(24,22,12,0.06)",
        /* ── Utility ── */
        green: "#22C55E",
        "wa-green": "#25D366",
        red: "#EF4444",
        "it-blue": "#3B82F6",
        "gst-green": "#10B981",
        "ipo-amber": "#F59E0B",
        "fema-purple": "#A855F7",
        "biz-orange": "#F97316",
        "cfo-teal": "#0D9488",
        "dd-indigo": "#6366F1",
        "startup-rose": "#F43F5E",
        "incorp-sky": "#0EA5E9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-lora)", "Lora", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.10), 0 8px 32px rgba(0,0,0,0.06)",
        subtle: "0 1px 2px rgba(0,0,0,0.05)",
      },
      borderColor: {
        DEFAULT: "rgba(24,22,15,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
