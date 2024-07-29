/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },
      ab: { max: "1160px" },
      ab1: { max: "1120px" },

      lg: { max: "1000px" },
      lg1: { max: "900px" },

      md: { max: "800px" },

      sm: { max: "780px" },
      sm1: { max: "700px" },
      sm2: { max: "700px" },
    },
    extend: {},
  },
  plugins: [],
};
