const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: 'https://rahulshettyacademy.com'
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
      require('cypress-mochawesome-reporter/plugin')(on,config);
    },
    specPattern: 'cypress/integration/e_commerce_Framework/*.js'
  },
});
