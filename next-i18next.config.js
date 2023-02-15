const path = require("path");

module.exports = {
  i18n: {
    localeDetection: false,
    defaultLocale: "ru",
    locales: ["ru", "en"],
  },
  localePath: path.resolve("./src/i18n/locales"),
};
