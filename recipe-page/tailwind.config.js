/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Nutmeg': "hsl(14, 45%, 36%)",
        'Dark-Raspberry':"hsl(332, 51%, 32%)",
        'White-page': "hsl(0, 0%, 100%)",
        'Rose-White':"hsl(330, 100%, 98%)",
        'Eggshell:' : "hsl(30, 54%, 90%)",
        'Light-Grey': "hsl(30, 18%, 87%)",
        'Wenge-Brown': "hsl(30, 10%, 34%)",
        'Dark-Charcoal':"hsl(24, 5%, 18%)"

      }
    },

    screens: {
      'mobile': { 'max': '375px' } 
    }
  },
  plugins: [],
}

