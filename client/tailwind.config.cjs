/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js" ],
  theme: {
    extend: {},
    colors: {
      backgroundColor: '#EEFBFA',
      primary: { start: '#1C6ACC', end: '#2384FF' },
      secondary: '#E9F3FF',
      borders: '#828282',
      lightGreen: '#76D9D5',
      lightBlue: '#7BB5FF',
      lightYellow: '#E8D633',
      buttonBg: '#1C1B1F',
      bgNav: '#E9F3FF',
      fontNav: '#2381f9',
      white: '#ffffff',
      gray: '#FFFBFE',
      actionButtonBg: '#6750A4'

    },
    fontFamily: {
      montserrat: [ 'Montserrat' ]
    },
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
    }
  },
  plugins: [],
}
