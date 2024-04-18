/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ussf': ['"USSF 90 Minutes Display Bold Regular"', 'sans-serif'],
        'sans': ['"Inter", sans-serif'],
        'serif': ['"Montserrat", sans-serif'],
        'digi': ['"Digital Numbers", sans-serif'],
        'oswo': ['"Oswald", sans-serif'],
      }
    },
  },
  plugins: [
    // require('tailwind-scrollbar-hide')
  ],
}
