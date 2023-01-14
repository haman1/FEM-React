/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': 'hsl(36, 100%, 99%)',
      'orange': 'hsl(35, 77%, 62%)',
      'red': 'hsl(5, 85%, 63%)',
      'grayish-blue': 'hsl(233, 8%, 79%)',
      'Dark-grayish-blue': 'hsl(236, 13%, 42%)',
      'Very-dark-blue': 'hsl(240, 100%, 5%)',
    }
  
  },
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      
      }, 
    },
 
  plugins: [],

}