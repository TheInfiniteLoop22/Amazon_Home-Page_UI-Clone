/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('Assets/banner.jpg')",
      }
    },
  },
  plugins: [],
}

