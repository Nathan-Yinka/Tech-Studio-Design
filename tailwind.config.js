/** @type {import('tailwindcss').Config} */
export default {
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
        }
      }
    },
  },
  plugins: [],
}

