module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      textColor(theme) {
        return {
          primaryLight: "#C4B5FD",
          primary: "#A78BFA",
          primaryDark: "#8B5CF6",
        }
      },
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme("colors.gray.200"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.gray.100"),
              },
              strong: {
                color: theme("colors.gray.100"),
              },
              "ol > li::before": {
                color: theme("colors.gray.200"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.400"),
              },
              hr: {
                borderColor: theme("colors.gray.500"),
              },
              blockquote: {
                color: theme("colors.gray.100"),
              },
              h1: {
                color: theme("colors.gray.100"),
              },
              h2: {
                color: theme("colors.gray.100"),
              },
              h3: {
                color: theme("colors.gray.100"),
              },
              h4: {
                color: theme("colors.gray.100"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.gray.100"),
              },
              "a code": {
                color: theme("colors.gray.900"),
              },
              thead: {
                color: theme("colors.gray.100"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.500"),
              },
            },
          },
        }
      },
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [require("@tailwindcss/typography")],
}
