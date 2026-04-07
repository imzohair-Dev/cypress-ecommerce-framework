const cypress = require('cypress')

cypress.run({
  spec: 'cypress/e2e/api/api.cy.js',
  browser: 'chrome', // or 'electron'
  headless: true
}).then((results) => {
  if (results.failures) {
    console.error('Could not execute tests')
    console.error(results.message)
    process.exit(1)
  }

  console.log('Run results:')
  console.log(JSON.stringify(results, null, 2))
  process.exit(0)
}).catch((err) => {
  console.error('Cypress error:')
  console.error(err)
  process.exit(1)
})
