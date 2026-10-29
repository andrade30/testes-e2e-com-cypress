const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://notes-serverless-app.com",
    env: {
      viewportWidthBreakpoint: 768,
    },
    defaultCommandTimeout: 15000,
    supportFile: "cypress/support/e2e.js",
  },
  projectId: "ngu17h",
});
