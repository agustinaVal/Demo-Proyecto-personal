<template>
	<div class="login">
		<form @submit.prevent="login" class="form">
			<h1>Iniciar sesión</h1>

			<v-text-field v-model="user.email" label="E-mail" required></v-text-field>

			<v-text-field
				v-model="user.password"
				:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
				:type="show1 ? 'text' : 'password'"
				label="Contraseña"
				@click:append="show1 = !show1"
			></v-text-field>

			<div class="my-2">
				<v-btn @click="loginUser" color="success" dark large class="mx-5">
					Ingresar
				</v-btn>
				<v-btn @click="logInGoogle" color="error" dark large>
					Login con Gmail
				</v-btn>
			</div>
		</form>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import firebase from 'firebase';
export default {
	name: 'Login',

	data: () => ({
		show1: false,
		user: {
			email: '',
			password: '',
		},
	}),

	methods: {
		...mapActions(['login']),
		async loginUser() {
			const email = this.user.email;
			const password = this.user.password;
			const respuesta = await this.login({ email, password });
			if (respuesta) {
				this.$router.push('/');
			}
    },
    logInGoogle() {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				this.$router.replace('/');
			});
	},
	},
	computed: {},
};
</script>

<style lang="scss"></style>
