import "@/app/globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const dinNext = localFont({
  src: [
    {
      path: "../fonts/DIN-Next/DINNextW1G-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/DIN-Next/DINNextW1G-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/DIN-Next/DINNextW1G-UltraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/DIN-Next/DINNextW1G-UltraLightIt.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/DIN-Next/DINNextW1G-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/DIN-Next/DINNextW1G-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/DIN-Next/DINNextW1G-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/DIN-Next/DINNextW1G-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/DIN-Next/DINNextW1G-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/DIN-Next/DINNextW1G-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/DIN-Next/DINNextW1G-Black.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/DIN-Next/DINNextW1G-BlackItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/DIN-Next/DINNextW1G-Heavy.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../fonts/DIN-Next/DINNextW1G-HeavyItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-din-next",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | Lumino",
    default: "Lumino",
  },
  description: "Lumino eccomerce store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx(inter.variable, dinNext.variable)}>
      <body>{children}</body>
    </html>
  );
}
