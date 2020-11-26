<template>
	<v-container>
		<template>
			<v-card class="mx-auto my-12">
				<v-img height="250" widht="250" :src="excursion.data.img"></v-img>

				<v-card-title>{{ excursion.data.title }}</v-card-title>

				<v-card-text>
					{{ excursion.data.subtitle }}
				</v-card-text>

				<v-divider class="mx-4"></v-divider>

				<v-card-title> ${{ excursion.data.price }}</v-card-title>

				<v-card-actions @click="loginModal = true">
					<v-btn color="pink" text @click="agregar_Al_Carro">
						Comprar
					</v-btn>
				</v-card-actions>
				<v-card-actions>
					<v-btn color="pink" text :to="'/excursion/' + excursion.id">
						ver detalle
					</v-btn>
				</v-card-actions>
			</v-card>
			<v-dialog v-model="loginModal" max-width="200">
				<v-card class="pa-5">
					<v-card-title class="headline">
						¡Agregado con éxito!
					</v-card-title>
					<v-card-actions>
						<v-btn color="red darken-1" @click="loginModal = false">
							cerrar
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</template>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex';
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
			});
		},
	},
};
</script>
