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
        bg: "#FAFAF7",
        "bg-2": "#F2EDE4",
        "bg-3": "#E8E2D8",
        /* ── Cards ── */
        card: "#FFFFFF",
        "card-2": "#FAF8F4",
        /* ── Dark sections (nav, footer, hero) ── */
        ink: "#0F1F17",
        "ink-2": "#1A3326",
        /* ── Accent — deep forest green ── */
        gold: "#1D5C3A",
        "gold-2": "#2A7A4F",
        "gold-3": "#3EA86B",
        /* ── Typography ── */
        text: "#1A1A18",
        muted: "#5A5A52",
        dim: "#9A9A8E",
        /* ── Borders ── */
        border: "rgba(26,26,24,0.12)",
        "border-2": "rgba(26,26,24,0.07)",
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
        DEFAULT: "rgba(26,26,24,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
