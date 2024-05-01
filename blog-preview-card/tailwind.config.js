/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'yellow-card': 'hsl(47, 88%, 63%)',
      }
    },
    screens: {
      'mobile': { 'max': '375px'}
    }
  },
  plugins: [],
}

