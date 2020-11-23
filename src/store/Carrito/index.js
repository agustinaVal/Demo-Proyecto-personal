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
    PLUS(state, id) {
      state.carrito = state.carrito.map((p) => {
        if (p.id == id) {
          p.cant = p.cant + 1;
          return p;
        }
        return p;
      });
    },
  },
  actions: {
    agregarAlCarro({
      commit
    }, excursion) {
      excursion.cant = 1;
      commit('AGREGAR_AL_CARRO', excursion);
    },
  },
  getters: {
    total: (state) => {
      const e =
        state.carrito.length > 0
          ? state.carrito.map((p) => p.price * p.cant)
          : [0];
      return e.reduce((a, c) => a + c);
    },
  },
};