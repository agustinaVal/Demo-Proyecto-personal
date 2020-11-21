import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import data from './data';
import Carrito from './Carrito/index';


Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		excursiones: [],
		usuario: {},
	},
	mutations: {
		GET_DATA(state, excursiones) {
			state.excursiones = excursiones;
		},
		LOGIN(state, usuario) {
			state.usuario = usuario;
		},
	},
	actions: {
		getData({ commit }) {
			firebase
				.firestore()
				.collection('excurciones')
				.onSnapshot((snapshot) => {
					let excursiones = [];
					snapshot.forEach((p) => {
						excursiones.push({
							id: p.id,
							data: p.data(),
						});
					});
					commit('GET_DATA', excursiones);
				});
		},
		addUser(context, user) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(user.email, user.password)
				.then(() => {
					const usuario = Object.assign({}, user);
					delete usuario.password;
					firebase
						.firestore()
						.collection('users')
						.add(usuario)
						.then(() => {
							context.dispatch('login', user);
						});
				});
		},
		async login({ commit }, usuario) {
			try {
				const user = await firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.password);

				const snapshot = await firebase
					.firestore()
					.collection('users')
					.where('email', '==', usuario.email)
					.get();

				snapshot.forEach((doc) => {
					commit('LOGIN', doc.data());
				});

				return true;
			} catch (e) {
				console.log(e);
				return false;
			}
		},

		async logout({ commit }) {
			try {
				await firebase.auth().signOut();
				commit('LOGOUT');
				return true;
			} catch (e) {
				return false;
			}
		},
	},
	getters: {
		excursionData: (state) => {
			return state.excursiones.map((p) => {
				const data = p.data;
				data.id = p.id;
				return data;
			});
		},
	},

	modules: {
		data,
		Carrito
	},
    
});
