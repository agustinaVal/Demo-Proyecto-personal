// https://docs.cypress.io/api/introduction/api.html

describe('Test agregar item al crud', () => {
  it('Visits the app root url', () => {
    cy.visit('/registro')
    cy.get('.titulo__principal__registro').contains("Registro")

  })
})
