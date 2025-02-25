/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textIndent:{
        8: "2rem",
        12: "3rem",
      },
      colors: {
        customeWhite: '#FFFFFF',
        customYellow: '#FFC905',
        customBlue: '#08293C',
        darkBlue: '#09283C',
        customeYellow: '#FFC905'
      },
    },
  },
  plugins: [
  ],
}