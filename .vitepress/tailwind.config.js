/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{vue,html,js}"],
  safelist: [
    {
      pattern: /(bg|fill|ring)-(red|green|blue|fuchsia|amber|rose|teal)-*/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        inkut: ['Inknut Antiqua', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

