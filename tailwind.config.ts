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
        bg: "#07101E",
        "bg-2": "#0B1628",
        "bg-3": "#0F1E35",
        card: "#111F38",
        "card-2": "#0D1930",
        gold: "#C9A84C",
        "gold-2": "#E8C55A",
        "gold-3": "#F5D98A",
        border: "rgba(201,168,76,0.15)",
        "border-2": "rgba(255,255,255,0.06)",
        text: "#F0EDE8",
        muted: "#8A93A8",
        dim: "#4A5568",
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
      },
      borderColor: {
        DEFAULT: "rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
