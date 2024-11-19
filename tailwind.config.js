import colors from 'tailwindcss/colors'


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange' : '#F79348',
        'orange-700' : '#e46c12',
        'custom' : '#FAF9F7',
      },
      fontFamily: {
        poppins: "'Poppins', static",
        Oswald: "'Oswald', sans-serif",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
