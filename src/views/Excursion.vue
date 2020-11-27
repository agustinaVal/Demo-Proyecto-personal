<!-- @format -->

<template>
	<div id="Home">
		<section id="Her__section">
			<div class="Home_principal">
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h1 class=" Home__titulo_principal">{{ excursion.title }}</h1>
						<span class="Home__sub-titulo_principal py-5">{{
							excursion.subtitle
						}}</span>
					</v-col>
				</v-row>
				<v-img height="650" class="Home__banner_principal" :src="excursion.img">
				</v-img>
			</div>
		</section>

		<section id="">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="">¿Que esperar?</h2>
						<span class="py-5">{{ excursion.description }}</span>
					</v-col>
				</v-row>
			</div>
		</section>

		<section id="">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="">Recogida</h2>
						<span class=" py-5">{{ excursion.description }}</span>
					</v-col>
				</v-row>
			</div>
		</section>

		<section id="">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="">Medidas Covid-19</h2>
						<span class=" py-5">{{ excursion.description }}</span>
					</v-col>
				</v-row>
			</div>
		</section>
		<section id="">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="">Detalles</h2>
						<span class=" py-5">{{ excursion.description }}</span>
					</v-col>
				</v-row>
			</div>
		</section>
		<section id="Excrusion__boton_Volver">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
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
