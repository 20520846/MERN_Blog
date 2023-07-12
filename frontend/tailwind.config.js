/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFC0CB',
        'dark': {
          light: '#FB8DA0',
          soft : '#FB6B90',
          hard: '#FB4570'
        }
      }
    },
    fontFamily: {
      opensans: ['Open Sans', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}

