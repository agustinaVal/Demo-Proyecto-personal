import firebase from 'firebase';


export default {
	state: {
        excursiones: [],
	},
	mutations: {
		
	},
	actions: {
		nuevoRegistro({ commit} , excursion){
         firebase.firestore().collection("excurciones").add(excursion)
         
        }
	},
	
}
