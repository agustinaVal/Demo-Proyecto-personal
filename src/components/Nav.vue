<template>
	<div>
		<v-app-bar app color="white" class="nav_bar pink--text" permanent elevate-5>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" color="pink"></v-app-bar-nav-icon>
			<v-toolbar-title>TurismoBaires</v-toolbar-title>
			<v-spacer></v-spacer>

			<div>
				  {{ usuario.name }}

				<router-link :to="{ name: 'Carrito' }">
					<v-icon color="pink" medium> mdi-cart</v-icon>
				</router-link>
			</div>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" absolute temporary>
			<v-list nav dense>
				<v-list-item-group active-class="pink--text text--accent-4">
					<v-list-item :to="{ name: 'Home' }">
						<v-list-item-title> <v-icon> mdi-home</v-icon> Inicio </v-list-item-title>
					</v-list-item>
					<v-list-item :to="{ name: 'Usuario' }">
						<v-list-item-title> <v-icon> mdi-pencil</v-icon>Crear cuenta</v-list-item-title>
					</v-list-item>
					<v-list-item :to="{ name: 'Login' }">
						<v-list-item-title> <v-icon> mdi-account</v-icon>Iniciar sesión</v-list-item-title>
					</v-list-item>

					<v-list-item>
						<v-list-item-title @click="logout"
							><v-icon> mdi-arrow-up-bold-box-outline</v-icon> Cerrar sesión</v-list-item-title
						>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<style></style>

<script>
import { mapActions, mapState } from 'vuex';
export default {
	data: () => ({
		drawer: false,
	}),

	computed: {
		...mapState(['usuario']),
	},
	methods: {
		Logout() {
			this.logout();
		},
		...mapActions(['logout']),
	},
};
</script>
