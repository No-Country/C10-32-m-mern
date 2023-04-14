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
      lightPurple: '#F3EDF7',
      darkPurple: '#6750A4',
      darkBlue: '#1A60B9',
      buttonBg: '#1C1B1F',
      buttonBlue: '#1C64F2',
      buttonGray: '#DEDEDE',
      bgNav: '#E9F3FF',
      fontNav: '#2381f9',
      white: '#ffffff',
      black: '#000000',
      gray: '#FFFBFE',
      actionButtonBg: '#6750A4',
      textWhite: '#FFFBFE',


    },
    fontFamily: {
      montserrat: [ 'Montserrat' ],
      inter: ['Inter']
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
