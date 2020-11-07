<template>
	<div>
		<v-parallax
			dark
			height="1000"
			src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555352156/shape/mentalfloss/istock_000056850756_small.jpg?itok=1lz6dqnS"
		>
			<v-row align="center" justify="center">
				<v-col class="text-center" cols="12">
					<h1 class="display-1 font-weight-thin mb-4">
						Turismo Buenos Aires
					</h1>
					<h4 class="subheading">
						Todo lo que necesitas saber
					</h4>
				</v-col>
			</v-row>
		</v-parallax>

		<v-main>
			<!-- Provides the application the proper gutter -->
			<v-container fluid>
				<GridUno />
        	<Experiencias />
				<router-view></router-view>
			</v-container>
		</v-main>
	</div>
</template>

<script>
import GridUno from '@/components/GridUno.vue';
import Experiencias from '@/components/Experiencias.vue';


export default {
	name: 'Home',
	components: {
    GridUno,
    Experiencias
	},
	data: () => ({
		alignments: ['start', 'center', 'end'],
	}),
};
</script>
