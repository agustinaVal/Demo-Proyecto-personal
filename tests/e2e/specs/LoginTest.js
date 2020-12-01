/** @format */

describe('My First Test', () => {
	it('Test de loguear usuario', () => {
		cy.visit('/')
		cy.wait(1000)
		cy.get('#Boton__navbar').click()
		cy.get('#Login__nav').click()
		cy.visit('/login')
		cy.get('#Login__name').type('Gio2323@gmail.com')
		cy.get('#Login__contraseña').type('1234567')
		cy.wait(2000)
		cy.get('.loginUser_btn').click()
		cy.wait(2000)
		cy.get('.Nav_nombre_usuario').contains('Giorgio')
		cy.get('#Boton__navbar').click()
		cy.get('#inicio_btn').click()
		cy.visit('/')
	})
})
