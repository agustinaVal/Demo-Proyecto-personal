<!-- @format -->

<template>
	<div id="Home">
		<section id="Her__section">
			<div class="Home_principal">
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h1 class="display-3 my-5">{{ excursion.title }}</h1>
						<span class="Home__sub-titulo_principal py-5">{{
							excursion.subtitle
						}}</span>
					</v-col>
				</v-row>
				<v-parallax
					height="650"
					class="Home__banner_principal"
					:src="excursion.img"
				>
					<v-row align="center" justify="center">
						<v-col class="text-center" cols="12">
							<h1 class="display-1 my-5">TurismoBaires</h1>
						</v-col>
					</v-row>
				</v-parallax>
			</div>
		</section>

		<section id="Main__que_ver">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="Titulo_main_QUEVER">Recorrido</h2>
						<span class="Home__sub-titulo_principal py-5">{{
							excursion.description
						}}</span>
					</v-col>
				</v-row>

				<v-row align="center" justify="center">
					<v-col sm="12" md="4">
						<v-btn color="red accent-4 my-4 white--text" :to="{ name: 'Home' }"
							>Volver al Inicio</v-btn
						>
					</v-col>
				</v-row>
			</div>
		</section>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'Excursion',
		props: ['id'],
		computed: {
			...mapGetters(['getExcursion']),
			excursion() {
				const id = this.id
				return this.getExcursion(id).data
			},
		},
	}
</script>
