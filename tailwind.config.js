/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgAdd': "url('@/assets/images/1.avif')",
       
      }
    },
  },
  plugins: [],
}
