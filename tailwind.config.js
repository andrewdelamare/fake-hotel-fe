module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          101: "#75cff0",
          102: "#69B9D6",
          103: "#5698B0",
        },
        yellow: {
          101: "#f2d267",
        },
      },
      fontFamily: {
        sans: ["Ruda", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
      },
      backgroundImage: {},
      height: {
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "1000px",
        1100: "1100px",
        1200: "1200px",
      },
      width: {
        400: "400px",
        700: "700px",
        1200: "1200px",
        1300: "1300px",
        1400: "1400px",
        1500: "1500px",
        1600: "1600px",
      },
    },
  },
  plugins: [],
};
