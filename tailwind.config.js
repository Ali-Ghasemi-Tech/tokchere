/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    
    extend: {
      textShadow:{
        default: '4px 4px 3px var(--tw-shadow-color)'
      },
      screens:{
        '2xs' : '325px'
        ,'xs': '380px'
        , '3xl' : '1920px'
      },
      
      fontFamily:{
        lalezar: ['lalezar']
      },
      colors:{
      main: "#FA9457"
      },fontSize:{
        link: "clamp(0.6em , 4vw , 1.2em)",
        title: "clamp(0.8em , 5vw , 1.5em)",
        default: "clamp(0.8em, 4vw , 1em)",
        hero: "clamp(2.5em,  10vw, 7em)",
        numbers: "clamp(0.5em , 1.5vw , 1em)",
        price: "clamp(0.5em , 1.5vw , 1.2em)",
        slider: "clamp(1em , 2.5vw , 3em)"
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

