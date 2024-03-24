import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      ping: {
        "0%": { transform: "scale(1)" },
        "100%": { transform: "scale(0.8)" },
      },
      slideDown: {
        from: {
          height: "0",
        },
        to: {
          height: "var(--radix-accordion-content-height)",
        },
      },
      slideUp: {
        from: {
          height: "var(--radix-accordion-content-height)",
        },
        to: {
          height: "0",
        },
      },
      scaleXOpen: {
        from: {
          transform: "scaleX(0)",
        },
        to: {
          transform: "scaleX(1)",
        },
      },
      scaleXClose: {
        from: {
          transform: "scaleX(1)",
        },
        to: {
          transform: "scaleX(0)",
        },
      },
      fadeIn: {
        from: {
          opacity: "0",
        },
        to: {
          opacity: "1",
        },
      },
      fadeOut: {
        from: {
          opacity: "1",
        },
        to: {
          opacity: "0",
        },
      },
      blink: {
        "0%": { opacity: "0.2" },
        "20%": { opacity: "1" },
        "100% ": { opacity: "0.2" },
      },
    },
    extend: {
      animation: {
        ping: "2s ease-in-out infinite alternate ping",
        slideDown: "300ms slideDown ease-in-out",
        slideUp: "300ms slideUp ease-in-out",
        blink: "blink 1.4s both infinite",
        scaleXOpen: "scaleXOpen 500ms var(--ease-out-sine)",
        scaleXClose: "scaleXClose 500ms var(--ease-out-sine)",
        fadeIn: "fadeIn 500ms var(--ease-out-sine)",
        fadeOut: "fadeOut 500ms var(--ease-out-sine)",
      },
      boxShadow: {
        overlay: "0 9999px 0 9999px #0006",
      },
      colors: {
        text: "rgb(var(--color-text) / <alpha-value>)",
        star: "rgb(var(--color-star) / <alpha-value>)",
        "hero-headphones-cta": "rgb(var(--color-hero-headphones-cta) / <alpha-value>)",
        "main-bg": "rgb(var(--color-background-main) / <alpha-value>)",
        "button-bg": "rgb(var(--color-button-background) / <alpha-value>)",
        "feature-table": "rgb(var(--color-feature-table-background) / <alpha-value>)",
      },
      backgroundImage: {
        "hero-mw08": "var(--background-hero-mw08)",
        "hero-earphones": "var(--background-hero-earphones)",
        "hero-headphones": "var(--background-hero-headphones)",

        "hero-inner-mw08": "var(--background-hero-inner-mw08)",
        "hero-inner-earphones": "var(--background-hero-inner-earphones)",
        "hero-inner-headphones": "var(--background-hero-inner-headphones)",

        "hotspot-shadow": "var(--background-hotspot-shadow)",
      },
      fontFamily: {
        sans: ["var(--font-din-next)", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        heading: "1.1",
      },
      spacing: {
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "7.5": "1.875rem",
        "4.5": "1.125rem",
      },
      borderColor: ({ theme }) => ({
        ...theme("colors"),
        DEFAULT: "rgb(var(--color-text) / .12)",
      }),
      borderRadius: {
        button: "3.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
