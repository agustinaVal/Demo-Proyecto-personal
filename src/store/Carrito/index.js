import firebase from "firebase";
import store from "../index";

export default {
  namespaced: true,
  state: {
    carrito: [],
  },
  mutations: {
    AGREGAR_AL_CARRITO(state, excursion){
        state.carrito.push(excursion)
    },
    PLUS({commit},carrito){
      state.carrito = state.carrito.map(p => {
        if( p.id == id){
          p.cant = p.cant + 1;
          return p;
        }
        return p
      })
    },
    MINUS({commit},carrito){
      state.carrito = state.carrito.map(p => {
        if( p.id == id){
          p.cant = p.cant - 1;
          return p;
        }
        return p
      })
    },
  },
  actions: {
    agregarAlCarrito({commit},id){
      const excursion = store.state.excursiones.find( p => p.id == id)
      excursion.cant = 1;
         commit("AGREGAR_AL_CARRITO", excursion)
    },
   },
    getters: {
      total: (state) => {
        return state.carrito.map((p) => p.price).reduce((a, c) => a + c);
      },
    },
    
  }
  
