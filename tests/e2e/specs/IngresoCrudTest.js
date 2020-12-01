/** @format */

describe('My First Test', () => {
	it('Test de logearme con admin', () => {
		cy.visit('/')
		cy.wait(1000)
		cy.get('#Boton__navbar').click()
		cy.get('#Login__nav').click()
		cy.get('#Login__name').type('admin@admin.cl')
		cy.get('#Login__contraseña').type('1234567')
		cy.get('.loginUser_btn').click()
		cy.wait(2000)
		cy.get('#Boton__navbar').click()
		cy.get('.boton__ingresoCrud').click()
		cy.get('.titulo__principal__registro').contains('Registro')
		cy.get('.text-start:nth-child(2)').contains(' Cabildo de Buenos Aires')
	})
})
