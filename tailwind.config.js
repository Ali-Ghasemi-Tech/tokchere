/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    
    extend: {
      fontFamily:{
        lalezar: ['lalezar']
      },
      colors:{
      main: "#FA9457"
      },fontSize:{
        link: "clamp(0.8em , 4vw , 1.3em)",
        title: "clamp(1em , 5vw , 1.5em)",
        default: "clamp(1em, 4vw , 1.2em)"
      },
    },
  },
  plugins: [],
}

