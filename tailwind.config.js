/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-color": "#dc3545"
      }, 
    },
    screens: {
      '2xs': '320px', 
      'xs': '375px', 
      'sm': '425px', 
      'md': '575px', 
      'lg': '768px', 
      'xl': '1024px', 
      '2xl': '1440px',
      '3xl': '2560px',
    }, 
  },
  plugins: [],
};
