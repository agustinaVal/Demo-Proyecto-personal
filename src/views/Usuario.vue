<!-- @format -->

<template>
	<div id="login">
		<v-container class="mx-auto">
			<v-form @submit.prevent="login" class="elevation-1">
				<v-container>
					<v-row>
						<v-col cols="12" align="center">
							<h2 class="titulos_crear text-center py-2">Crear Cuenta</h2>
							<v-text-field
								v-model="nuevoUsuario.name"
								label="Nombre Completo"
								required
								id="Nombre_usuario"
							></v-text-field>
							<v-text-field
								v-model="nuevoUsuario.email"
								label="E-mail"
								required
								id="Correo_usuario"
							></v-text-field>
							<v-text-field
								v-model="nuevoUsuario.direccion"
								label="Dirección"
								required
								id="Direccion_usuario"
							></v-text-field>
							<v-text-field
								v-model="nuevoUsuario.password"
								:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
								:type="show1 ? 'text' : 'password'"
								label="Contraseña"
								@click:append="show1 = !show1"
								id="Contraseña_usuario"
							></v-text-field>
						</v-col>
						<v-col cols="12" align="center">
							<v-btn
								@click="CrearUsuario"
								color="red accent-4 my-4 white--text"
								dark
								large
								class="mx-5 crearUsuario"
							>
								Confirmar
							</v-btn>
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</v-container>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
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
				this.addUser(this.nuevoUsuario)
				this.$router.push('login')
			},
		},
	}
</script>

<style>
	.titulos_crear {
		font-weight: 700;
		font-size: 40px;
		color: #d500f9;
	}
</style>
