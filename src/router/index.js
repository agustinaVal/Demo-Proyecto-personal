import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import firebase from 'firebase';



Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/Cards',
		name: 'Cards',
		component: () => import(/* webpackChunkName: "about" */ '../components/Cards.vue'),
	},
	{
		path: '/experiencias',
		name: 'Experiencias',
		component: () => import(/* webpackChunkName: "about" */ '../components/Experiencias.vue'),
	},
	{
		path: '/valoracion',
		name: 'Valoracion',
		component: () => import(/* webpackChunkName: "about" */ '../components/Valoracion.vue'),
	},
	{
		path: '/carrito',
		name: 'Carrito',
		component: () => import(/* webpackChunkName: "about" */ '../views/Carrito.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
	},
	{
		path: '/usuario',
		name: 'Usuario',
		component: () => import(/* webpackChunkName: "about" */ '../views/Usuario.vue'),
	},
	{
		path: '/registro',
		name: 'Registro',
		component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue'),
		meta:{
			autentificando: true
		}
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	let usuario = firebase.auth().currentUser || {email: ""};
	let autorizacion = to.matched.some((ruta) => ruta.meta.autentificando);
	console.log(usuario)
	console.log(to)
	if ( to.path == "/registro" && usuario.email !== "admin@admin.cl" ) {
		next("/");
	} else  {
		next();
	}
  });

export default router;
