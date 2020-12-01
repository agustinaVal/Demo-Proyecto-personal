/** @format */

// https://docs.cypress.io/api/introduction/api.html

describe('Test agregar item al crud', () => {
	it('Visits the app root url', () => {
		cy.visit('/registro')
		cy.get('.titulo__principal__registro').contains('Registro')
	})
	cy.wait(2000)
	cy.get('#titlulo_crud').type('Estadio River PLate')
	cy.get('#subtitulo_crud').type('Estadio Antonio Vespucio Liberti')
	cy.get('#img_crud').type(
		'https://indiehoy.com/wp-content/uploads/2014/08/estadio-river-plate.jpg'
	)
	cy.get('#descripcion_crud').type(
		'El Monumental, como se conoce al estadio del Club River Plate (uno de los dos clubes de fútbol más populares de la Argentina, junto con Boca Juniors)'
	)
	cy.get('#precio_crud').type('50000')
	cy.get('stock_crud').type('50')
	cy.get('#agregar_item_crud').click()
	cy.wait(2000)
})
