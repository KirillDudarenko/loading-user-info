/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          700: "#219653"
        },
        grey: {
          217: "#D9D9D9",
          133: "#858585"
        },
        slate: {
          690: "#333D37"
        },
        blue: {
          231: "#E7EDF0"
        }
      },
      fontFamily: {
        sans: ['Sofia Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}
