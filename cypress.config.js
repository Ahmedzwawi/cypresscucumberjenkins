

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default; //a ajouter
const grep = require("@cypress/grep/src/plugin");
module.exports = defineConfig({
  // reporter: "cypress-mochawesome-reporter",
  reporter: 'cypress-mochawesome-reporter',
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml',},
  
  e2e: {

    chromeWebSecurity: false, // a ajouter
    specPattern: "cypress/features/**/*.feature", 

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require('@cypress/grep/src/plugin')(config);
        grep(on, config);
        require('cypress-mochawesome-reporter/plugin')(on);// a ajouter
      return config;
      // require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
