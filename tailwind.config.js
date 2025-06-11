 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      fontFamily: {
                alumni: ['"Alumni Sans SC"', 'sans-serif'],
        lora: ['Lora', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],

      },
            colors: {
        crema: '#FFF1CA',
      },
     }
     ,
   },
   plugins: [],
 }