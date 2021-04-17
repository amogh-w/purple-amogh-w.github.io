module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        lilacLight: "#E9DBF2",
        lilac: "#D3B5E5",
        lilacDark: "#BD8FD8",
      },
      borderColor: {
        lilacLight: "#E9DBF2",
        lilac: "#D3B5E5",
        lilacDark: "#BD8FD8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
