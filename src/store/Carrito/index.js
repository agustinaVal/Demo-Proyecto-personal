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
    },
    MINUS(state, id){
      state.carrito = state.carrito.map(p => {
        if(p.id == id) {
          p.cant = p.cant -1;
          return p
        }
        return p
      })
    },
    PLUS(state, id){
      state.carrito = state.carrito.map(p => {
        if(p.id == id) {
          p.cant = p.cant +1;
          return p
        }
        return p
      })
    },
    },
  actions: {
    agregarAlCarro({commit},excursion){
      excursion.cant = 1;
      commit("AGREGAR_AL_CARRO", excursion)
    }
   },
    getters: {
      total : (state) => {
        // funcion flecha que recibe el carrito del state, con el map extraigo el precio (me devuelve array con precios) y y con reduce sumo el total
         state.carrito.map(p.price).reduce( (a, c ) => a + c)
      }
    },
    
  }
  
