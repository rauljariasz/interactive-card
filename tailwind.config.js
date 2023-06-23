/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      primary: 'Space Grotesk'
    },
    extend: {
      colors: {
        error: '#ff5252',
        darkViolet: '#21092f',
        grayishViolet:	'#8e8593',
        lightGrayish: '#dedddf'
      }
    }
  },
  plugins: [],
}

