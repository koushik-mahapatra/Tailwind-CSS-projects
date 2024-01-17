/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      // Setting up custom screen sizes
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      // for default centering
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        // Extending fonts
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        primary: "#FD3D57",
      },
    },
  },

  plugins: [],
};
