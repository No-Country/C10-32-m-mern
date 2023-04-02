/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
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
      white: '#f0f0f0',
      gray: '#FFFBFE'
      
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
