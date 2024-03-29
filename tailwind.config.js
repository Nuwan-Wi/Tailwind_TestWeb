/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./public/**/*.js"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: '#FF6363',
        secondary: {
          100: '#e2e2d5',
          200: '#888883',
        }
      })
    },
    fontFamily: ({ fontFamily }) => ({
      body: ['Nunito']
    })
  },
  plugins: [],
}

