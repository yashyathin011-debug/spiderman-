/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111114',
        paper: '#FDFCFA',
        web: '#D8D8D6',
        signal: '#D2232A',
        deep: '#1B2C4F',
        slate: '#5B5B62',
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
