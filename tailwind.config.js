/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'modal-container': 'rgba(0, 0, 0, .85)',
      },
    },
  },
  plugins: [],
}