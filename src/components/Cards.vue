<template>
	<v-container>
		<h1 align="center">Que Ver</h1>
		<v-row>
			<v-col cols="6" md="3" v-for="n in 4" :key="n">
				<template>
					<v-card class="mx-auto my-12" max-width="374">
						<template slot="progress">
							<v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
						</template>

						<v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

						<v-card-title>Cafe Badilico</v-card-title>

						<v-card-text>
						
	
							<div>
								Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
								seating.
							</div>
						</v-card-text>

						<v-divider class="mx-4"></v-divider>

						<v-card-title>Tonight's availability</v-card-title>

						<v-card-text>
							<v-chip-group active-class="deep-purple accent-4 white--text" column>
								<v-chip>5:30PM</v-chip>

								<v-chip>7:30PM</v-chip>

								<v-chip>8:00PM</v-chip>

								<v-chip>9:00PM</v-chip>
							</v-chip-group>
						</v-card-text>

						<v-card-actions>
							<v-btn color="deep-purple lighten-2" text>
								Reservar
							</v-btn>
						</v-card-actions>
					</v-card>
				</template>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'Cards',
	components: {},
	data: () => ({
		//
	}),
	computed: {
		...mapState(['excursiones'])
	}
};
</script>
