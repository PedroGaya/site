import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              pre: {
                backgroundColor: "#272822",
              },
              code: {
                backgroundColor: "transparent",
              },
            },
          },
        };
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#f0f0f0",
          },
        },
        dark: {
          colors: {
            background: "#18181b",
          },
        },
      },
    }),
    require("@tailwindcss/typography"),
  ],
};
