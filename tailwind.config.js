/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    
    extend: {
      fontFamily: {
        primary: ['Archivo', 'sans-serif'],
      },
      colors: {
        primary: "#78C6A3",
        secondary: "#A5D8C1",
        inactive: '#CCCCCC',
        decline: '#E2896D',
        notification: "#D3623F",
        text: "#D3623F"
      },
      backgroundImage: {
        'bg-image': 'url(./src/assets/images/bg-landing.svg)'
      },
      dropShadow: {
        'primary': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'hover': '0px 4px 4px rgba(36, 130, 119, 0.8)',
      },
    },

  },
  plugins: [],
}

