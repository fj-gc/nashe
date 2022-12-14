/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/constants/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat'", 'sans-serif'],
        chivo: ["'Chivo'", 'sans-serif'],
        bebas: ["'Bebas Neue'", 'sans-serif']
      },
      animation: {
        'spin-fast': 'spin 200ms linear infinite'
      },
    },
  },
  plugins: [],
}
