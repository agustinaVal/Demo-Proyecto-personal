import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import data from './data';

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
		addUser({ commit }, user) {
			firebase
			  .auth()
			  .createUserWithEmailAndPassword(user.email, user.password)
			  .then(() => {
				const usuario =  user
				delete usuario.password;
				firebase
				  .firestore()
				  .collection("users")
				  .add(usuario)
				  
			
			  });
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
	},
	
});
