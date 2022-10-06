module.exports = {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  purge: {
    enabled: true,
    options: {
      safelist: ["dark"],
    },
  },
  theme: {
    extend: {
      colors: {
        "tl-black": "#0C0C0F",
        "tl-dark-gray": "#131318",
        "tl-gray": "#1E1F27",
        "tl-light-gray": "#D2D7DF",
        "tl-blue": "#256EFF",
        "tl-green": "#4AE485",
        "tl-yellow": "#F8C50C",
        "tl-red": "#C1292E",
      },
      typography: () => ({
        dark: {
          css: {
            color: "white",
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
