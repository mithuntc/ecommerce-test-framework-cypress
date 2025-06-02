const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  env: {
    baseUrl: 'https://rahulshettyacademy.com'
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochareports', // Adjust as needed
    reportFile: 'report',  // Adjust as needed
    reportPageTitle: 'Cypress Test Report', // Adjust as needed
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    video: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on, config);
    },
    specPattern: 'cypress/integration/e_commerce_Framework/*.js',
  },
});
