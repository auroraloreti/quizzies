/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      extend: {},
    },
    colors: {
      purple: "#3D0E96ff",
      coral: "#F27F4Cff",
      periwinkle: "#D1D7F7ff",
      "dark-blue": "#24056Fff",
      liliac: "#9736E4ff",

      plugins: [require("flowbite/plugin")],
    },
  },
};
