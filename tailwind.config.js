const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-pink": "#fbc8d4",
        "gradient-purple": "#9795f0",
        "gradient-first-dark": colors.slate[900],
        "gradient-second-dark": colors.gray[700],

        "primary-text": colors.slate[900],
        "primary-text-highlight": colors.neutral[100],
        "primary-text-dark": colors.gray[100],
        "primary-text-highlight-dark": colors.gray[400],

        link: colors.orange[900],
        "link-dark": colors.white,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
