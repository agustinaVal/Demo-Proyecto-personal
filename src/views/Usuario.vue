<template>
	<div>
		<v-form ref="form" lazy-validation>
			<v-text-field v-model="nuevoUsuario.name" :counter="10" label="Nombre Completo" required></v-text-field>

			<v-text-field v-model="nuevoUsuario.email" label="E-mail" required></v-text-field>

			<v-text-field v-model="nuevoUsuario.direccion" label="Dirección" required></v-text-field>

			<v-text-field
				v-model="nuevoUsuario.password"
				:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
				:type="show1 ? 'text' : 'password'"
				label="Contraseña"
				@click:append="show1 = !show1"
			></v-text-field>
		</v-form>
		<v-btn color="green" text @click="CearUsuario">
			Crear cuenta
		</v-btn>
	</div>
</template>

<script>
import { mapActions , mapState } from  "vuex";
export default {
	data: () => ({
		show1: false,
		nuevoUsuario: {
			name: '',
			email: '',
			direccion: '',
			password: '',
		},
		usuario: {
			email: '',
			password: '',
		},
	}),
	methods: {
		crearUsuario() {
			this.addUser(this.nuevoUsuario);
		},
		...mapActions(['addUser']),
	},
	computed: {
    ...mapState(["usuario"]),
  },
};
</script>
