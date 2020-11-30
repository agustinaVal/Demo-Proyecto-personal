/** @format */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/Cards',
		name: 'Cards',
		component: () =>
			import(/* webpackChunkName: "about" */ '../components/Cards.vue'),
	},
	{
		path: '/taxi',
		name: 'Taxi',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Taxi.vue'),
	},
	{
		path: '/autobus',
		name: 'Autobus',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Autobus.vue'),
	},
	{
		path: '/metro',
		name: 'Metro',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Metro.vue'),
	},
	{
		path: '/experiencias',
		name: 'Experiencias',
		component: () =>
			import(/* webpackChunkName: "about" */ '../components/Experiencias.vue'),
	},
	{
		path: '/galeria',
		name: 'Galeria',
		component: () =>
			import(/* webpackChunkName: "about" */ '../components/Galeria.vue'),
	},
	{
		path: '/carrito',
		name: 'Carrito',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Carrito.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Login.vue'),
	},
	{
		path: '/usuario',
		name: 'Usuario',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Usuario.vue'),
	},
	{
		path: '/registro',
		name: 'Registro',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Registro.vue'),
		meta: {
			autentificando: true,
		},
	},
	{
		path: '*',
		name: 'NotFound',
		component: () =>
			import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
	},
	{
		path: '/gracias',
		name: 'Gracias',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Gracias.vue'),
	},
	{
		path: '/excursion/:id',
		name: 'Excursion',
		props: true,
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Excursion.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, from, next) => {
	let usuario = firebase.auth().currentUser || { email: '' }
	let autorizacion = to.matched.some((ruta) => ruta.meta.autentificando)
	if (to.path == '/registro' && usuario.email !== 'admin@admin.cl') {
		next('/')
	} else {
		next()
	}
})

export default router
