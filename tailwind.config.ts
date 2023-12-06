import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "rgb(var(--color-text) / <alpha-value>)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "3.5": "0.875rem",
        "2.5": "0.625rem",
      },
      borderColor: ({ theme }) => ({
        ...theme("colors"),
        DEFAULT: "rgb(var(--color-border) / <alpha-value>)",
      }),
    },
  },
  plugins: [],
};
export default config;
