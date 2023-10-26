const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'http://giftly.klickly-dev.com/marketplace',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
