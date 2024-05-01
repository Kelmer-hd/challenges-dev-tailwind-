/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Green' : 'hsl(75, 94%, 57%)',
        'White-page': 'hsl(0, 0%, 100%)',
        'Grey': 'hsl(0, 0%, 20%)',
        'Dark-Grey': 'hsl(0, 0%, 12%)',
        'Off-Black': 'hsl(0, 0%, 8%)'
      }
    },
    screens: {
      'max-xs': { 'max': '375px' } 
    }
  },
  plugins: [],
}

