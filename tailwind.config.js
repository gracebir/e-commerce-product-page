/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange-color":"hsl(26, 100%, 55%)",
        "pale-orange":"hsl(25, 100%, 94%)",
        "very-dark-blue":"hsl(220, 13%, 13%)",
        "dark-grayish-blue": "hsl(219, 9%, 45%)",
        "grayish-blue":"hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
        "white-color":"hsl(0, 0%, 100%)",
        "black-opac":"hsl(0, 0%, 0%)"
      },
      fontFamily: ['Kumbh Sans', 'sans-serif'],
      boxShadow:{
        "checkout": `-2px 4px 5px 0px rgba(186,183,183,0.75);
        -webkit-box-shadow: -2px 4px 5px 0px rgba(186,183,183,0.75);
        -moz-box-shadow: -2px 4px 5px 0px rgba(186,183,183,0.75);`
      }
    },
  },
  plugins: [],
}

