/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgb(190 231 255)',
          dark: 'rgb(6 72 147)',
        },
        secondary: {
          light: 'rgb(232 242 253)',
          dark: 'rgb(9 13 33)',
        },
        accent: {
          light: 'rgb(201 229 245)',
          dark: 'rgb(36 38 41)',
        },
      },
      fontFamily: {
        sans: ['Noto']
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
