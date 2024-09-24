/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: 'var(--black)',
        blue: 'var(--blue)',
        grey: 'var(--grey)',
        white: 'var(--white)',
        orange:'var(--orange)',
        golden:'var(--golden)',
      },
    },
  },
  plugins: [],
}

