import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f6f0e8",
        sand: "#dfd1c1",
        sage: "#93a38c",
        terracotta: "#c7896d",
        stone: "#4f4742",
        ink: "#2f2622"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(84, 64, 49, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
