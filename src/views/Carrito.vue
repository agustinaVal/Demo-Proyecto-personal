<template>
	<v-card class="mx-auto">
		<v-container>
			<v-row dense>
				<v-col v-for="(item, i) in carrito" :key="i" cols="6">
					<v-card>
						<div class="d-flex justify-space-between">
							<div>
								<v-card-title class="headline">{{ item.title }}</v-card-title>
								<v-card-subtitle>Sub-Total: ${{ item.price }}</v-card-subtitle>
								<v-card-subtitle>
									<v-btn fab small > <v-icon>mdi-minus</v-icon></v-btn>
									{{ item.cant }}
									<v-btn fab small 
										><v-icon>mdi-plus</v-icon>
									</v-btn></v-card-subtitle
								>
							</div>
							<v-avatar class="ma-3" size="125" tile>
								<v-img :src="item.img"></v-img>
							</v-avatar>
						</div>
					</v-card>
				</v-col>
				<v-col cols="6">
					<v-card class="d-flex justify-space-between">
						<v-card-title class="headline"> Total: </v-card-title>
						<v-card-actions>
							<v-btn text> Pagar </v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-card>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
export default {
	name: 'Carrito',
	data: () => ({
		items: [],
	}),
	computed: {
		...mapState('Carrito', ['carrito']),
	
	},
	methods: {
		
	},
};
</script>
