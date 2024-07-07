/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'background': '#D9E6F7',
        'text1': '#4E93AA',
        'text2': '#979797',
        'text3': '#000000',
        'btn-menu-bg': '#979797',
        'btn-menu-text': '#535C69',
        'one-about': '#DEEEFD',
        'two-about': '#EEF8FE',
        'card': '#F0F0F0',
        'email-text': '#36527D',
      },
      boxShadow: {
        'sombra': '4px 4px 5px 0 rgba(81,127,197,0.255)',
      }
    },
  },
  plugins: [],
}

