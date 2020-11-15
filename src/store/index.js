import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    excursiones : [],
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
        .collection("excurciones")
        .onSnapshot((snapshot) => {
          let excursiones = [];
          snapshot.forEach((p) => {
            excursiones.push({ id: p.id, data: p.data() });
          });
          commit("GET_DATA", excursiones);
        });
    },
  },
  modules: {
  }
})
