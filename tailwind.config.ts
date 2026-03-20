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
        background: "#0f172a", // slate-900
        foreground: "#f8fafc", // slate-50
        accent: {
          light: "#fcd34d", // amber-300
          DEFAULT: "#fbbf24", // amber-400
          dark: "#f59e0b", // amber-500
        }
      },
    },
  },
  plugins: [],
};
export default config;
