<template>
	<div>
		<h1>Crear Cuenta</h1>
		<v-form ref="form" lazy-validation>
			<v-text-field v-model="nuevoUsuario.name" label="Nombre Completo" required></v-text-field>
			<v-text-field v-model="nuevoUsuario.email" label="E-mail" required></v-text-field>
			<v-text-field v-model="nuevoUsuario.direccion" label="Dirección" required></v-text-field>
			<v-text-field
				v-model="nuevoUsuario.password"
				:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
				:type="show1 ? 'text' : 'password'"
				label="Contraseña"
				@click:append="show1 = !show1"
			></v-text-field>
			<v-btn color="green" @click="CrearUsuario">
				Crear cuenta
			</v-btn>
		</v-form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	data: () => ({
		show1: false,
		nuevoUsuario: {
			name: '',
			email: '',
			direccion: '',
			password: '',
		},
	}),
	methods: {
		...mapActions(['addUser']),
		CrearUsuario() {
			this.addUser(this.nuevoUsuario);
			this.$router.push('login');
		},
	},
};
</script>
