/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {  
      backgroundColor:theme => ({
        'brand-color':'#4c3398',
        'primary-brand-color':'#5d3ebc',
        'secondary-brand-color':'#7849f7'
      }),
      textColor:theme => ({
        'brand-color':'#4c3398',
        'primary-brand-color':'#5d3ebc',
        'secondary-brand-color':'#7849f7'
      }),
    },
  },
  plugins: [],
}