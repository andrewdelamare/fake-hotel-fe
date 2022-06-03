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
      },
    },
  },
  plugins: [],
};
