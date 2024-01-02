/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#8DB27B",
      },
      boxShadow: {
        "3xl": "0px 0px 15px 0px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [],
};
