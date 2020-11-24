<template>
	<v-card>
		<v-container>
			<v-row dense>
				<v-col v-for="(item, i) in carrito" :key="i" cols="6">
					<v-card>
						<div class="d-flex justify-space-between">
							<div>
								<v-card-title class="headline">{{ item.title }}</v-card-title>
								<v-card-subtitle>Sub-Total: ${{ item.price }}</v-card-subtitle>
								<v-card-subtitle>
									<v-btn fab small @click="MINUS(item.id)"> <v-icon>mdi-minus</v-icon></v-btn>
									{{ item.cant }}
									<v-btn fab small @click="PLUS(item.id)"><v-icon>mdi-plus</v-icon></v-btn>
									</v-card-subtitle>
							</div>
						</div>
					</v-card>
				</v-col>
				<v-col cols="6">
					<v-card class="d-flex justify-space-between">
						<v-card-title class="headline"> Total: {{ total }}</v-card-title>
						<v-card-actions>
							<v-btn @click="pagarTotal"> Pagar </v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-card>
</template>

<script>
import { mapState, mapActions, mapMutations , mapGetters } from 'vuex';
export default {
	name: 'Carrito',
	data: () => ({
		items: [],
	}),
	computed: {
		...mapState('Carrito', ['carrito']),
		...mapGetters('Carrito', ['total']),
	},
	methods: {
		...mapMutations('Carrito', ['MINUS' , 'PLUS']),
		...mapActions('Carrito', ['pagarTotal']),
	},
};
</script>
