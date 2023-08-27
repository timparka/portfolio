/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing:{
        "big":"48rem"
      }
    },
    screens:{
      sm:"640px",
      md:"768px",
      lg:"1280px",
      xl:"1920px",
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}
