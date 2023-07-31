const colors = require("tailwindcss/colors");

const primaryPink = "#fbc8d4";
const primaryPurple = "#9795f0";
const secondaryLight = "#3b2ea6";
const primaryDarkBlue = colors.slate[900];
const primaryDarkGray = colors.gray[700];

const primaryWhite = colors.neutral[100];

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
        "gradient-pink": primaryPink,
        "gradient-purple": primaryPurple,
        "gradient-first-dark": primaryDarkBlue,
        "gradient-second-dark": primaryDarkGray,

        "primary-text": primaryDarkBlue,
        "secondary-text": secondaryLight,
        "primary-text-highlight": primaryWhite,
        "primary-text-dark": primaryWhite,
        "secondary-text-dark": primaryPink,
        "primary-text-unhighlighted-dark": colors.gray[300],
        "primary-text-highlight-dark": colors.white,

        link: primaryWhite,
        "link-hover": primaryDarkBlue,
        "link-dark": primaryPurple,
        "link-dark-hover": primaryPink,
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
