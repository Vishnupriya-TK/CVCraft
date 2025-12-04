import { defineConfig } from '@tailwindcss/vite'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Urbanist', 'sans-serif']
      },
      colors: {
        primary: '#9328E7',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
})
