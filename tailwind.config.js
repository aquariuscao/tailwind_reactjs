/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica Neue LT Pro', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors:{
        'primary-color': '#222021',
        'second-color': '#FF6231',
        'background-color': '#F5F5F5',
      },
    },
  },
  plugins: [],
}

