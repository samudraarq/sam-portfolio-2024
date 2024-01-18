/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        display: ["Gelasio", "serif"],
      },
      colors: {
        primary: "#EAF5F9",
      },
    },
  },
  plugins: [],
};
