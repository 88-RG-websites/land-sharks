/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.md"],
  theme: {
    extend: {
      screens: {
        nav: '990px',
      },
      colors: {
        navy: {
          50:  '#EEF2FA',
          100: '#D0DAEA',
          200: '#AFBEDB',
          300: '#8EA3CB',
          400: '#6D88BB',
          500: '#4C6DAB',
          600: '#2F539A',
          700: '#1A3B82',
          800: '#0E2660',
          900: '#071540',
          DEFAULT: '#0E2660',
        },
        teal: {
          50:  '#E0F8F8',
          100: '#B3EDEE',
          200: '#80E2E3',
          300: '#4DD6D8',
          400: '#26CCCE',
          500: '#00C2C5',
          600: '#0AB5B7',
          700: '#089FA1',
          800: '#068688',
          900: '#04605F',
          DEFAULT: '#0AB5B7',
        },
        coral: {
          50:  '#FDE8E8',
          100: '#FAC5C5',
          200: '#F59E9E',
          300: '#EE7373',
          400: '#E54E4E',
          500: '#D92B2B',
          DEFAULT: '#D92B2B',
          600: '#C22020',
          700: '#A81818',
          800: '#8A1010',
          900: '#6B0A0A',
        },
        sand: {
          DEFAULT: '#FFF8F0',
          dark:    '#F0E8D8',
        },
      },
      fontFamily: {
        heading: ['Righteous', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
