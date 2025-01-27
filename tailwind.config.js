/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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