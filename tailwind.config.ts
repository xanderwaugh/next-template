import type { Config as TWConfig } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import forms from "@tailwindcss/forms";
import scrollbar from "tailwind-scrollbar";
import animate from "tailwindcss-animate";
import daisyui, { type Config as DaisyConfig } from "daisyui";

import themes from "daisyui/src/theming/themes";

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
        //   "comp-accent": "#265ae2",
        //   "comp-bg": "#262626",
        //   "comp-text": "#fefefe",
        // * Off black
        btext: "#1e1e1e",
        // * Off white
        wtext: "#fefefe",
        "scrollbar-bg": "#888",
        "scrollbar-thumb": "#555",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          ...themes.dark,
          primary: "#3b82f6", // * Primary color
          secondary: "#e879f9", // * Secondary color
          accent: "#d8b4fe", // * Accent color
          "base-100": "#262626", // * background-color
          // neutral: "#6b7280", // * text-color
          info: "#22d3ee", // * info-color
          success: "#22c55e", // * success-color
          warning: "#f59e0b", // * warning-color
          error: "#dc2626", // * error-color
        },
      },
      "dark",
    ],
    logs: false,
    darkTheme: "mytheme",
  } as DaisyConfig,
  plugins: [animate, forms({ strategy: "class" }), scrollbar, daisyui],
} satisfies TWConfig;
