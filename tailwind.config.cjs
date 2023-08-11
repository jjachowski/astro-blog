/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      colors: {
        green: {
          50: "#f6f7ee",
          100: "#eaedda",
          200: "#d6dcba",
          300: "#bbc591",
          400: "#a1ae6d",
          500: "#84934f",
          600: "#606c38",
          700: "#4f5a31",
          800: "#41492b",
          900: "#383f28",
          950: "#1d2112",
        },
      },
    },
    fontFamily: {
      jetbrains: ["JetBrains Mono Variable", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
