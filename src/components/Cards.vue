<template>
	<v-container>
		<template>
			<v-card class="mx-auto my-12">

				<v-img height="250" :src="excursion.data.img"></v-img>

				<v-card-title>{{ excursion.data.title }}</v-card-title>

				<v-card-text>
					{{ excursion.data.subtitle }}
				</v-card-text>

				<v-divider class="mx-4"></v-divider>

				<v-card-title> ${{ excursion.data.price }}</v-card-title>

				<v-card-actions>
					<v-btn color="pink" text @click="agregarAlCarrito(excursion.id)">
						Comprar
					</v-btn>
				</v-card-actions>
			</v-card>
		</template>
	</v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	name: 'Cards',
	props: ['excursion'],
	components: {},
	data: () => ({
		//
	}),
	computed: {
		...mapState(['excursiones']),
	},
	methods: {
		...mapActions('Carrito', ['agregarAlCarrito']),
		
	},
};
</script>
