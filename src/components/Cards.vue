<!-- @format -->

<template>
	<v-hover v-slot="{ hover }" open-delay="200">
		<v-card
			:elevation="hover ? 16 : 2"
			:class="{ 'on-hover': hover }"
			class="mx-auto"
			height="400"
			max-width="400"
		>
			<v-img
				class="white--text align-end"
				height="200px"
				:src="excursion.data.img"
			>
			</v-img>
			<v-card-title
				><strong>{{ excursion.data.title }}</strong></v-card-title
			>

			<v-card-subtitle class="pb-0">
				<span>{{ excursion.data.subtitle }}</span>
			</v-card-subtitle>

			<v-card-text class="text--primary">
				<div>
					<h4>Precio:</h4>
					$ {{ excursion.data.price }}
				</div>
			</v-card-text>

			<v-card-actions>
				<div @click="loginModal = true" class="mx-10">
					<v-btn color="pink accent-2" text @click="agregar_Al_Carro">
						<strong>Comprar</strong>
					</v-btn>
				</div>

				<v-btn color="grey lighten-1" text :to="'/excursion/' + excursion.id">
					<strong>Detalles</strong>
				</v-btn>
			</v-card-actions>
			<v-dialog v-model="loginModal" max-width="390">
				<v-card class="pa-5" aling="center" justify="center">
					<v-card-title class="titilo__modal">
						¡Agregado con éxito!
					</v-card-title>
					<v-btn
						class="boton__modal__comprar"
						color="red accent-4 white--text"
						@click="loginModal = false"
						to="/carrito"
					>
						cerrar
					</v-btn>
				</v-card>
			</v-dialog>
		</v-card>
	</v-hover>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		name: 'Cards',
		props: ['excursion'],
		components: {},
		data: () => ({
			loginModal: false,
		}),
		computed: {},
		methods: {
			...mapActions('Carrito', ['agregarAlCarro']),
			agregar_Al_Carro() {
				// agregar al carro es un metodo que ejecuta un accion y le pasa el objeto.
				//esto dispara una accion que se encuentra en store carrito
				this.agregarAlCarro({
					img: this.excursion.data.img,
					title: this.excursion.data.title,
					price: this.excursion.data.price,
					id: this.excursion.data.id,
					stock: this.excursion.data.stock,
				})
			},
		},
	}
</script>

<style>
	.boton__modal__comprar {
		width: 350px;
	}
	.titilo__modal {
		justify-content: center;
		font-size: 50px;
		color: black;
		font-size: 400;
		margin: 10px;
		padding-bottom: 10px;
	}
</style>
