/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans serif"],
    },
    extend: {
      colors: {
        "primary-yellow": "#F9F871",
        "primary-light": "#FCEAFF",
        "primary-dark": "#101010",
        "secondary-dark": "#151415",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
