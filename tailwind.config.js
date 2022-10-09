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
    light: lighen(red, 0.2),
    dark: darken(red, 0.2),
  },
};

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
      colors,
      typography: () => ({
        dark: {
          css: {
            color: "white",
          },
        },
      }),
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
