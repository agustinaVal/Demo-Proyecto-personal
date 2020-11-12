import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import firebase from 'firebase';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBOJqRDta8O2rAcuefFQN6M6Gd4kZ1aSXk",
  authDomain: "tienda-online-f27ab.firebaseapp.com",
  databaseURL: "https://tienda-online-f27ab.firebaseio.com",
  projectId: "tienda-online-f27ab",
  storageBucket: "tienda-online-f27ab.appspot.com",
  messagingSenderId: "578629473966",
  appId: "1:578629473966:web:ab7349e95c141bbd143f3f"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
