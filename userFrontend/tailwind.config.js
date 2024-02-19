/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage:{
        'food':"url(src/assets/kottu-6319357_1280.jpg)"
      }
    },
  },
  plugins: [],
}

