/** @format */

describe('My First Test', () => {
	it('Test de crear usuario', () => {
		cy.visit('/home')

		cy.get('#Boton__navbar').click()
		cy.get('#CrearCuenta__nav').click()
		cy.visit('/usuario')
		cy.get('#Nombre_usuario').type('Giorgio')
		cy.get('#Correo_usuario').type('Gio2323@gmail.com')
		cy.get('#Direccion_usuario').type('tegualda')
		cy.get('#Contraseña_usuario').type('1234567')
		cy.get('.crearUsuario').click()
		cy.wait(2000)
		cy.get('.Nav_nombre_usuario').contains('Giorgio')
	})
})
