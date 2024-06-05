import type { Config as TWConfig } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import forms from "@tailwindcss/forms";
import scrollbar from "tailwind-scrollbar";
import animate from "tailwindcss-animate";
import daisyui, { type Config as DaisyConfig } from "daisyui";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: { center: true },
      screens: { xs: { max: "639px" } },
      fontFamily: {
        // * Heading
        mono: ["var(--font-mono)", ...fontFamily.mono],
        // * Body
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        "comp-accent": "#265ae2",
        "comp-bg": "#262626",
        "comp-bg-alt": "#1e1e1e",
        "comp-text": "#fefefe",
        "comp-scrollbar-bg": "#888",
        "comp-scrollbar-thumb": "#555",
      },
    },
  },
  daisyui: {
    themes: ["luxury", "dark", "light"],
    logs: false,
  } as DaisyConfig,
  plugins: [animate, forms({ strategy: "class" }), scrollbar, daisyui],
} satisfies TWConfig;
