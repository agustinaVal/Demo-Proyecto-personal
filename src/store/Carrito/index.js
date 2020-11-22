import firebase from "firebase";
import store from '../index'


export default {
  namespaced: true,
  state: {
    carrito: [],
  },
  mutations: {
    AGREGAR_AL_CARRO(state, excursion){
      state.carrito.push(excursion)
    }
    },
   
  
  actions: {
    agregarAlCarro({commit},excursion){
      commit("AGREGAR_AL_CARRO", excursion)
    }
   },
    getters: {
      
    },
    
  }
  
