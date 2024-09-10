import { colors } from "./src/Styles/colors";
import { fontFamily } from "./src/Styles/fontFamily";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Permite a alternância baseada na classe
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
};
