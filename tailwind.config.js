/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#28CB8B',
        grad_primary: '#1D976C',
        secondary: '#263238',
        silverbg: '#F5F7FA',
        blacktxt: '#263238',
        Lgrey: '#89939E',
        abumuda: '#e6e6e6 ',
      },
      screens: {
        '2xl': '1440px',
        'xl': '1024px',
      },
      fontFamily: {
        'Josefin': ["Josefin Sans", 'sans-serif'],
      },
    },
  },
  plugins: [],
}