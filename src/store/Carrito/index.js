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
    }
  },
  actions: {
    agregarAlCarrito({commit},id){
        const excursion = store.state.excursiones.find( p => p.id == id)
        console.log(excursion)
         commit("AGREGAR_AL_CARRITO", excursion)
    }
    },
    
  }
  
