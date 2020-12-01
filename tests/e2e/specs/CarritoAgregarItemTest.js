/** @format */

describe('My First Test', () => {
	it('Probando ingreso de producto al carrito', () => {
		cy.visit('/')
		cy.get('#icon_carrito').click()
		cy.contains('Ups!! Tu Carrito está vacío!')
		cy.visit('/')

		cy.get('.titulo_nombre_exc:first').then(($e) => {
			const nombre = $e.text()

			cy.get('#comprar__btn').click()
			cy.get('.boton__modal__comprar').click()
			cy.get('.v-card__title').contains(nombre)
		})
	})
})
