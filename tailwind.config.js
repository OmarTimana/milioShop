/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          200: '#FFFFFF',
          100: '#E7E7E7'
        },
        softgreen: {
          100: '#61E27D',
          200: '#00DD30',
        },
        iconorange: {
          200: '#F26F3F',
          100: '#f2b9a5',
        },
      },
    },
    fontFamily: {
      'DMsans': ['DM Sans', 'sans-serif'],

    },
    screens: {
      'xs': '462px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}

