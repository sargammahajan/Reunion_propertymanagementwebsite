/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        merriweather: "'Merriweather', serif",
        cuprum: "'Cuprum', sans-serif",
        arimo: "'Arimo', sans-serif",
        poppins: "'Poppins', sans-serif",
        inter: "'Inter', sans-serif"
      },
      colors: {
        'light-black': "#666666",
        'darkish-blue': "#003145",
        'dark-blue': "#002A3B",
        'green-light': "#FFCE5C",
        'green-md': "#44924C",
        'green-dark': "#336d39",
        'off-white': "#F8F9FD",
        'pre': "#F2C94C",
        'pre-light': "#F2C94C40",
        'active': '#44924C',
        'active-light': '#44924C3D',
        'over': '#FF3C00',
        'over-light': '#FF3C002B'
      },
    },
  },
  plugins: [],
}
