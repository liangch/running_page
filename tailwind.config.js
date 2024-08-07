/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    fontFamily: {
      sans: [
        'Chirp',
        'OPlusSans3',
        '-apple-system',
        'sans-serif',
      ],
    },
    extend: {},
  },
  plugins: [],
};
