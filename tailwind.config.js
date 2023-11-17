const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
});