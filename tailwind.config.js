/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#12102a",
      },
      fontFamily:{}, 
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          md:"3rem"
        }
      }
    },
  },
  plugins: [],
}
