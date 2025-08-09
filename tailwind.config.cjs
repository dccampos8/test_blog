/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0F766E' // verde-petróleo; ajusta se quiseres
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
