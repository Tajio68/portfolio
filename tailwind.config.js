/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      fontSize: {
        xs: '12px',
        s: '20px',
        m: '32px',
        l: '40px',
        xl: '58px',
        xxl: '70px'
      },
      colors: {
        blueDefault: '#2B6BFF',
        whiteDefault: 'FFFCF6',
        darkBlue: '113078'
      }
    },
    screens: {
      tab: '640px',
      pc: '1024px',
    } 
  },
  plugins: [],
  
}

