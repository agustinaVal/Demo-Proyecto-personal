<!-- @format -->

<template>
	<div>
		<v-app-bar app color="white" class="NavBar__principal" permanent elevate-5>
			<v-app-bar-nav-icon
				@click.stop="drawer = !drawer"
				color="green accent-4"
				large
				id="Boton__navbar"
			></v-app-bar-nav-icon>
			<v-toolbar-title class="Nav_titulo_principal"
				>TurismoBaires</v-toolbar-title
			>
			<v-spacer></v-spacer>

			<div class="Nav_nombre_usuario">
				<strong>{{ usuario.name }}</strong>
			</div>
			<router-link :to="{ name: 'Carrito' }">
				<v-icon color="green accent-4" large>mdi-cart</v-icon>
			</router-link>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" app>
			<v-list nav>
				<v-list-item-group active-class="green--text text--lighten-1">
					<v-list-item :to="{ name: 'Home' }">
						<v-list-item-title> Inicio </v-list-item-title>
					</v-list-item>

					<v-list-item :to="{ name: 'Usuario' }">
						<v-list-item-title id="CrearCuenta__nav">
							Crear cuenta</v-list-item-title
						>
					</v-list-item>

					<v-list-item :to="{ name: 'Login' }">
						<v-list-item-title>Iniciar sesión</v-list-item-title>
					</v-list-item>

					<v-list-item>
						<v-list-item-title @click="logout">Cerrar sesión</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
			<v-container>
				<v-row>
					<v-btn
						color="grey lighten-4 mx-4 boton__ingresoCrud"
						:to="{ name: 'Registro' }"
						>Ingreso Proveedores</v-btn
					>
				</v-row>
			</v-container>
		</v-navigation-drawer>
	</div>
</template>

<script>
	import { mapActions, mapState } from 'vuex'
	export default {
		data: () => ({
			drawer: false,
		}),

		computed: {
			...mapState(['usuario']),
		},
		methods: {
			Logout() {
				this.logout()
			},
			...mapActions(['logout']),
			itemCart() {},
		},
	}
</script>

<style>
	.Nav_titulo_principal {
		font-weight: 800;
		color: #00e5ff;
	}

	.Nav_nombre_usuario {
		color: #00e5ff;
	}
	.boton__ingresoCrud {
		margin-top: 400px;
	}
</style>
