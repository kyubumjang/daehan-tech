module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    locales: ["default", "en", "ko"],
    defaultLocale: "default",
    localeDetection: false,
  },
};
