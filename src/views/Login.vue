<!-- @format -->

<template>
	<div id="login">
		<v-container class="mx-auto">
			<v-form @submit.prevent="login" class="elevation-1">
				<v-container>
					<v-row>
						<v-col cols="12" align="center">
							<h2 class="titulos_iniciar text-center py-2">Iniciar Sesión</h2>

							<v-text-field
								v-model="user.email"
								label="E-mail"
								required
							></v-text-field>
							<v-text-field
								v-model="user.password"
								:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
								:type="show1 ? 'text' : 'password'"
								label="Contraseña"
								@click:append="show1 = !show1"
							></v-text-field>
						</v-col>
						<v-col cols="12" align="center">
							<v-btn
								@click="loginUser"
								color="green accent-4 my-4 white--text"
								dark
								large
								class="mx-5"
							>
								Ingresar
							</v-btn>
							<v-btn
								@click="logInGoogle"
								color="red accent-4 my-4 white--text"
								dark
								large
							>
								Ingresar con Gmail
							</v-btn>
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</v-container>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	import firebase from 'firebase'
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
				const email = this.user.email
				const password = this.user.password
				const respuesta = await this.login({ email, password })
				if (respuesta) {
					this.$router.push('/')
				}
			},
			logInGoogle() {
				const provider = new firebase.auth.GoogleAuthProvider()
				firebase
					.auth()
					.signInWithPopup(provider)
					.then((result) => {
						this.$router.replace('/')
					})
			},
		},
		computed: {},
	}
</script>

<style>
	.titulos_iniciar {
		font-weight: 700;
		font-size: 40px;
		color: #d500f9;
	}
</style>
