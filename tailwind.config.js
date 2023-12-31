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
        "big":"48rem",
        "small":"36rem",
      }
    },
    screens:{
      sm:"640px",
      md:"768px",
      lg:"1440px",
      xl:"2000px",
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}
