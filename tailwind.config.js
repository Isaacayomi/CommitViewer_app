/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#18214D',
        paragraph: '#3E4462',
        neutral: '#DFE4EA)',
        secondary: '#F3663F',

      }
    },
  },
  plugins: [],
}

