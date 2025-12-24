/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      maxWidth: {
        layout: "1280px",
      },
      fontFamily: {
        sans: ["Montserrat", "serif"],
      },
      colors: {
        primary: "#13b4fd",
      },
      spacing: {
        section: "50px",
        gap: "30px",
      },
    },
  },
  plugins: [],
};
