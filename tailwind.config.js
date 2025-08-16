/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode via class strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if your structure includes more folders
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        annie: ["Annie Use Your Telescope", "cursive"],
        amatic: ['"Amatic SC"', "cursive"],
        chewy: ['"Chewy"', "cursive"],
      },
      writingMode: {
        vertical: "vertical-rl",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
