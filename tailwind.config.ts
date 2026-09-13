import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          navy: "#0f233a",
          "navy-light": "#1e3a5f",
          blue: "#335d93",
          "blue-light": "#ebf3fc",
          teal: "#0e7490",
          "teal-dark": "#155e75",
          "teal-light": "#f0fdfa",
          "teal-subtle": "#ccfbf1",
          rose: "#cd507d",
          "rose-dark": "#be185d",
          "rose-light": "#fdf2f8",
          "rose-subtle": "#ffe4ec",
          purple: "#6b2d5c",
          "purple-light": "#fbf2f8",
          "purple-subtle": "#f3e8f1",
          "purple-dark": "#501d44",
          whatsapp: "#25D366",
          "whatsapp-dark": "#1da851",
          slate: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
            950: "#020617",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(15, 35, 58, 0.05), 0 1px 2px -1px rgba(15, 35, 58, 0.05)",
        card: "0 4px 20px -2px rgba(15, 35, 58, 0.06), 0 2px 6px -1px rgba(15, 35, 58, 0.03)",
        elevated: "0 12px 32px -4px rgba(15, 35, 58, 0.08), 0 4px 12px -2px rgba(15, 35, 58, 0.04)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
