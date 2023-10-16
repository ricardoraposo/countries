/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Nunito Sans', 'ui-sans-serif']
    },
    colors: {
      "dark-blue": "#2b3945",
      "very-dark-blue": "#202c37",
      "very-dark-blue-light": "#111517",
      "dark-gray": "#858585",
      "light-gray": "#fafafa",
      "white": "#ffffff",
    },
    extend: {
       animation: {
        'spin-slow': 'spin 1.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
