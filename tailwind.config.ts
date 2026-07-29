import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#08080B",
          surface: "#101019",
          raised: "#16161F",
          line: "#232331",
        },
        bone: {
          DEFAULT: "#EDEBE2",
          muted: "#9C9AA6",
          faint: "#6B6975",
        },
        ledger: {
          50: "#FBF3DB",
          200: "#E9CC7C",
          400: "#C9A227",
          500: "#AD8A1F",
          600: "#8A6D17",
        },
        signal: {
          300: "#A79CFF",
          400: "#8377F2",
          500: "#6D5EF0",
          600: "#5747D6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "ledger-grid":
          "linear-gradient(to right, rgba(237,235,226,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,235,226,0.04) 1px, transparent 1px)",
        "glow-radial":
          "radial-gradient(circle at 50% 0%, rgba(109,94,240,0.18), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(201,162,39,0.15), 0 8px 40px -12px rgba(109,94,240,0.35)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;
