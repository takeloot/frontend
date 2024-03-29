const Color = require("color");

const lighen = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();

const background = "#0C0C0F";
const surface = "#131318";
const cloud = "#D2D7DF";
const gray = "#1E1F27";
const blue = "#256EFF";
const green = "#4AE485";
const yellow = "#F8C50C";
const red = "#C1292E";
const mil = "#4b69ff";
const restricted = "#8847ff";
const cover = "#eb4b4b";

const colors = {
  background: {
    DEFAULT: background,
    light: lighen(background, 0.2),
    dark: darken(background, 0.2),
  },
  surface: {
    DEFAULT: surface,
    light: lighen(surface, 0.2),
    dark: darken(surface, 0.2),
  },
  gray: {
    DEFAULT: gray,
    light: lighen(gray, 0.2),
    dark: darken(gray, 0.2),
  },
  cloud: {
    DEFAULT: cloud,
    light: lighen(cloud, 0.2),
    dark: darken(cloud, 0.2),
  },
  blue: {
    DEFAULT: blue,
    light: lighen(blue, 0.2),
    dark: darken(blue, 0.2),
  },
  green: {
    DEFAULT: green,
    light: lighen(green, 0.2),
    dark: darken(green, 0.2),
  },
  yellow: {
    DEFAULT: yellow,
    light: lighen(yellow, 0.2),
    dark: darken(yellow, 0.2),
  },
  red: {
    DEFAULT: red,
    lightest: lighen(red, 0.35),
    light: lighen(red, 0.2),
    dark: darken(red, 0.2),
  },
  mil: {
    DEFAULT: mil,
    light: lighen(mil, 0.2),
    dark: darken(mil, 0.2),
  },
  restricted: {
    DEFAULT: restricted,
    light: lighen(restricted, 0.2),
    dark: darken(restricted, 0.2),
  },
  cover: {
    DEFAULT: cover,
    light: lighen(cover, 0.2),
    dark: darken(cover, 0.2),
  },
};

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  purge: {
    enabled: true,
    options: {
      safelist: ["dark"],
    },
  },
  theme: {
    extend: {
      colors,
      typography: () => ({
        dark: {
          css: {
            color: "white",
          },
        },
      }),
      backgroundImage: () => ({
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-to-tr": "radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-tl": "radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-br": "radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))",
        "gradient-radial-to-bl": "radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))",
        "gradient-radial-main": "radial-gradient(ellipse 80% 50% at 50% -20%, var(--tw-gradient-stops))",
      }),
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    // keyframes: {
    //   // Dialog
    //   "scale-fade-in": {
    //     "0%": {opacity: 0, transform: "scale(.95)"},
    //     "100%": {opacity: 1, transform: "scale(1)"},
    //   },
    //   "scale-fade-out": {
    //     "0%": {opacity: 1, transform: "scale(1)"},
    //     "100%": {opacity: 1, transform: "scale(.95)"},
    //   },
    //   "fade-in": {
    //     "0%": {opacity: 0},
    //     "100%": {opacity: 1},
    //   },
    //   "fade-out": {
    //     "0%": {opacity: 1},
    //     "100%": {opacity: 0},
    //   },
    // },
    // animation: {
    //   // Dialog
    //   "scale-fade-in": "scale-fade-in 0.2s ease-in-out",
    //   "scale-fade-out": "scale-fade-out 0.2s ease-in-out",
    //   "fade-in": "fade-in 0.2s ease",
    //   "fade-out": "fade-out 0.2s ease",
    // },
    transitionProperty: {
      button: "box-shadow, background-color, opacity",
      input: "box-shadow, background-color, opacity",
      link: "box-shadow, background-color, opacity",
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({nocompatible: true}),
    require("@tailwindcss/forms"),
    require("tailwindcss-radix")(),
  ],
};
