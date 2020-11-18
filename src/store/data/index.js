import firebase from 'firebase';

export default {
	state: {
		excursiones: [],
	},
	mutations: {},
	actions: {
		nuevoRegistro({ commit }, excursion) {
			firebase
				.firestore()
				.collection('excurciones')
				.add(excursion);
		},
		deleteExcursionFB({ commit }, id) {
			firebase
				.firestore()
				.collection('excurciones')
				.doc(id)
				.delete();
		},
		editExcursionFB({ commit }, excursion) {
			firebase
				.firestore()
				.collection('excurciones')
				.doc(excursion.id)
				.set(excursion);
		},
	},
};
