import firebase from 'firebase';
import store from '../index';

export default {
	namespaced: true,
	state: {
		carrito: [],
	},
	mutations: {
		AGREGAR_AL_CARRO(state, excursion) {
			state.carrito.push(excursion);
		},
		MINUS(state, id) {
			// primero debo sabe la cantidad, si es  mayor a 1 agregará mas cantidad sino elimina del mismo id
			const cant = state.carrito.find((p) => p.id == id).cant;
			cant > 1
				? (state.carrito = state.carrito.map((p) => {
						if (p.id == id) {
							p.cant = p.cant - 1;
							return p;
						}
						return p;
				  }))
				: (state.carrito = state.carrito.filter((p) => p.id !== id));
		},
		PLUS(state, id) {
			state.carrito = state.carrito.map((p) => {
				if (p.id == id) {
					p.cant = p.cant + 1;
					return p;
				}
				return p;
			});
		},
		PAGAR_TOTAL(state) {
			state.carrito = [];
		},
	},
	actions: {
		agregarAlCarro({ commit }, excursion) {
			excursion.cant = 1;
			commit('AGREGAR_AL_CARRO', excursion);
		},
		pagarTotal({ commit, state }) {
			state.carrito
				.forEach((p) => {
					firebase
						.firestore()
						.collection('excurciones')
						.doc(p.id)
						.update({ stock: p.stock -  p.cant });
				})
		},
	},
	getters: {
		// logica para evitar que la app tome un valor inicial 0. Carrito es un arreglo vacio al inicio
		total: (state) => {
			const e = state.carrito.length > 0 ? state.carrito.map((p) => p.price * p.cant) : [0];
			return e.reduce((a, c) => a + c);
		},
	},
};
