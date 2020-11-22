<template>
	<v-container>
		<template>
			<v-card class="mx-auto" max-width="400">
				<v-img class="white--text align-end" height="200px" :src="alojamiento.data.img">
					<v-card-title>{{ alojamiento.data.name }}</v-card-title>
				</v-img>

				<v-card-subtitle class="pb-0">
					{{ alojamiento.data.description }}
				</v-card-subtitle>
				<v-card-subtitle class="pb-0"> Dirección: {{ alojamiento.data.direction }} </v-card-subtitle>
				<v-card-subtitle class="pb-0"> Contacto: {{ alojamiento.data.contact }} </v-card-subtitle>
			</v-card>
		</template>
	</v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'alojamiento',
	props: ['alojamiento'],
	components: {},
	data: () => ({
		//
	}),
	computed: {
		...mapState(['alojamientos']),
	},
};
</script>
