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
			console.log(cant)
			cant > 1 ?
				(state.carrito = state.carrito.map((p) => {
					if (p.id == id) {
						p.cant = p.cant - 1;
						return p;
					}
					return p;
				})) :
				(state.carrito = state.carrito.filter((p) => p.id !== id));
		},
		PLUS(state, excursion) {
			// pasa por un map ya que no altera el arreglo original
			// diferencia entre map y foreach es que el foreach no devuelve un arreglo solamente recorre el arreglo
			// encambio el map devuelve un arreglo con la misma cantidad de elementos. el map itera un elemento. si no devuelvo nada devuelve undifined
			// el map sirve para modificar algo de un elemento que existe en el arreglo
			state.carrito = state.carrito.map((p) => {
				if (p.id == excursion.id) {
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
		agregarAlCarro({
			commit,
			state
		}, excursion) {
			excursion.cant = 1;
			const exc = state.carrito.find((p) => p.id == excursion.id);
			exc
				?
				commit('PLUS', excursion) : // esat accion me agregar un nuevo elemento en el arreglo por la logica del push
				commit('AGREGAR_AL_CARRO', excursion);
		},
		pagarTotal({
			commit,
			state
		}) {
			state.carrito.forEach((p) => {
				firebase
					.firestore()
					.collection('excurciones')
					.doc(p.id)
					.update({
						stock: p.stock - p.cant
					});
			});
		},
	},
	getters: {
		// logica para evitar que la app tome un valor inicial 0 Carrito es un arreglo vacio al inicio
		total: (state) => {
			const e = state.carrito.length > 0 ? state.carrito.map((p) => p.price * p.cant) : [0];
			return e.reduce((a, c) => a + c);
			//reduce es un acumulador, me permite que por cada iteracion me suma 0 mas el primer total
			// al ser un geter devuelve la suma de todos los elementos numericos del arreglo que se esta creando en la const
		},
	},
};