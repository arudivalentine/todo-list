/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",],
  theme: {
    extend: {
      transitionDuration: {
        '1000': '1000ms',
      }
    },
  },
  plugins: [],
}

