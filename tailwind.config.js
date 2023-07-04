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
        primary: "#8F55A4",
        secondary: "#B382C4",
        inactive: '#CCCCCC',
        decline: '#AB0F3C',
        notification: "#D3623F",
        text: "#D7B7E2"
      },
      dropShadow: {
        'primary': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'hover': '0px 4px 4px rgba(49, 2, 66, 0.8)',
      },
    },

  },
  plugins: [],
}

