<template>
	<div>
		<div class="pa-10 ma-5 text-center">
			<h1 class=" title pink--text">Imperdibles</h1>
			<br />
			<h3 class=" pink--text">
				Si disponés de poco tiempo para visitar la ciudad, <br />
				te proponemos algunos atractivos que no podés perderte. ¡Disfrutá de una experiencia completa!
			</h3>
		</div>

		<template>
			<v-parallax src="https://aws.traveler.es/prod/designs/v1/assets/940x630/73836.jpg"></v-parallax>
		</template>

		<v-main>
			<!-- Provides the application the proper gutter -->
			<v-container fluid>
				<GridUno />
				<Experiencias />
        <Valoracion />
				<router-view></router-view>
			</v-container>
		</v-main>
	</div>
</template>

<script>
import GridUno from '@/components/GridUno.vue';
import Experiencias from '@/components/Experiencias.vue';
import Valoracion from '@/components/Valoracion.vue';

export default {
	name: 'Home',
	components: {
		GridUno,
    Experiencias,
    Valoracion
	},
	data: () => ({}),
};
</script>

<style>
.v-application .title{
  font-size: 60px !important;
  font-weight: black
}
</style>
