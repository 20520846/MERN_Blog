/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#27b891',
        'dark': {
          soft : '#1d8267',
          hard: '#0f4234'
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

