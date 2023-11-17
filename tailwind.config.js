const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue:{
          100:"#0266F4",
          200:"#1F2666"
        },
        fadedBlack: "#292929"
      }
    },
  },
  plugins: [],
})

