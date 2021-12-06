module.exports = {
  mod: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        app: "#292929",
        ccard: "#131313",
        pcard:"#232323"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
