/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        cream: "#FAF6E3",
        greenish: "#D8DBBD",
        brown: "#B59F78",
        navy: "#2A3663",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoBold: ["Roboto-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
