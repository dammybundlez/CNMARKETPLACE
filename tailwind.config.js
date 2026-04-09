/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Public Sans', 'sans-serif'],
      },
       colors: {
          'brand-green': '#16a34a',
          'brand-orange': '#fb923c',
          'brand-yellow': '#facc15',
          'brand-rose': '#f43f5e',
      }
    },
  },
  plugins: [],
}

