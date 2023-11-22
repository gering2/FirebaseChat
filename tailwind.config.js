/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'dark': {
        '50': '#ffffff',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#d9d9d9',
        '400': '#c4c4c4',
        '500': '#9d9d9d',
        '600': '#424549',
        '700': '#36393e',
        '800': '#282b30',
        '900': '#1e2124',
        '950': "#000000"
      },
    },
    extend: {},
  },
  plugins: [],
});