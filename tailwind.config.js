/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#3D0E96ff",
        coral: "#F27F4Cff",
        periwinkle: "#D1D7F7ff",
        "dark-blue": "#24056Fff",
        lilac: "#9736E4ff",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },

};
