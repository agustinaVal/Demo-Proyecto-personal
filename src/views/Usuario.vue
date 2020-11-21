<template>
	<div>
		<v-form ref="form" lazy-validation>
			<v-text-field v-model="user.name"  label="Nombre Completo" required></v-text-field>

			<v-text-field v-model="user.email" label="E-mail" required></v-text-field>

			<v-text-field v-model="user.direccion" label="Dirección" required></v-text-field>

			<v-text-field
				v-model="user.password"
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
import { mapActions , mapState } from  "vuex";
export default {
	data: () => ({
		show1: false,
		user: {
			name: '',
			email: '',
			direccion: '',
			password: '',
		},
		
	}),
	methods: {
		...mapActions(['addUser']),
		CrearUsuario() {
			this.addUser(this.user);
		},
		
	},
	computed: {
   
  },
};
</script>
