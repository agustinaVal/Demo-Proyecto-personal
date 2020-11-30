/** @format */

describe('My First Test', () => {
	it('Probando ingreso de producto al carrito', () => {
		cy.visit('/')

		cy.get('.nombre_Pizza:first').then(($e) => {
			const nombre = $e.text()

			cy.get('.select_size').click()
			cy.get('.v-list div:nth-child(2)').click()
			cy.get('.agregar_pizza').click()
			cy.get('#Carrito').click()
			cy.get('.v-card__title').contains(nombre)
		})
	})

	it('Validando contador', () => {
		cy.get('.mdi-plus:first').click()
		cy.get('.mdi-plus:first').click()
		cy.get('.mdi-plus:first').click()
		cy.get('.mdi-plus:first').click()
		cy.get('.mdi-plus:first').click()
		cy.get('.cantidad_item:first').contains(6)
	})

	it('Validando precio', () => {
		cy.get('.precio_producto:first').then(($e) => {
			const precio = $e.text()
			cy.get('.cantidad_item:first').then(($i) => {
				const cantidad = $i.text()
				cy.get('#total').contains(precio * cantidad)
			})
		})
	})
})
