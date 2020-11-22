<template>
	<div class="home">
		<v-container >
			<div class="ma-5 text-center">
				<h1 class="title pink--text">Imperdibles</h1>
				<br />
				<h2 class="pink--text">
					Si disponés de poco tiempo para visitar la ciudad, <br />
					te proponemos algunos atractivos que no podés perderte. ¡Disfrutá de una experiencia completa!
				</h2>
			</div>
			<template>
				<v-parallax src="https://www.reportur.com/wp-content/uploads/2019/11/buenos-aires-impuesto.jpg"></v-parallax>
			</template>

			<div class="ma-5 text-center">
				<h3>Que Ver</h3>
				<v-row>
					<v-col cols="6" md="3" v-for="(excursion, i) in excursiones" :key="i"
						><Cards :excursion="excursion"
					/></v-col>
				</v-row>
			</div>

			<div class="ma-5 text-center">
				<h3>Donde dormir</h3>
				<v-row>
					<v-col cols="6" md="3" v-for="(alojamiento, i) in alojamientos" :key="i">
						<Experiencias :alojamiento="alojamiento"
					/></v-col>
				</v-row>
			</div>

			<div class="ma-5 text-center">
				<h3>Galeria de imagenes</h3>
				<Galeria />
			</div>

			
			<Footer />
		</v-container>
	</div>
</template>

<script>
import Cards from '@/components/Cards.vue';
import Experiencias from '@/components/Experiencias.vue';
import Galeria from '@/components/Galeria.vue';
import Footer from '@/components/Footer.vue';
import { mapState } from 'vuex';
export default {
	name: 'Home',
	components: {
		Cards,
		Experiencias,
		Galeria,
		Footer,
	},
	data: () => ({}),
	computed: {
		...mapState(['excursiones', 'alojamientos']),
	},
	props: {},
};
</script>

<style>
.v-application .title {
	font-size: 60px !important;
	font-weight: black;
}
</style>
