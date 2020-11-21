<template>
	<v-container>
		<template>
			<v-card class="mx-auto my-12">
				<template slot="progress">
					<v-progress-linear color="deep-purple" height="10"></v-progress-linear>
				</template>

				<v-img height="250" :src="excursion.data.img"></v-img>

				<v-card-title>{{ excursion.data.title }}</v-card-title>

				<v-card-text>
					<div>
						{{ excursion.data.subtitle }}
					</div>
				</v-card-text>

				<v-divider class="mx-4"></v-divider>

				<v-card-text>
					<v-card-subtitle> Horarios Disponibles </v-card-subtitle>
					<v-chip-group active-class="pink accent-4 white--text" column>
						<v-chip>{{ excursion.data.time[0] }}</v-chip>

						<v-chip>{{ excursion.data.time[1] }}</v-chip>

						<v-chip>{{ excursion.data.time[2] }}</v-chip>

						<v-chip>{{ excursion.data.time[3] }}</v-chip>
					</v-chip-group>
				</v-card-text>

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
