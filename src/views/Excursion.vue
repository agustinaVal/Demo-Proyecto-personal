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
				<v-img
					height="650"
					class="Home__banner_principal"
					:src="excursion.imagen"
				>
				</v-img>
			</div>
		</section>

		<section id="Detalle__queVer">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="titulos_detalle_excursion py-2">¿Que esperar?</h2>
						<p class="py-3">{{ excursion.description }}</p>
					</v-col>
				</v-row>
			</div>
		</section>

		<section id="Detalle__itinerario">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="titulos_detalle_excursion py-2">Itinerario</h2>
						<p class="py-3">{{ excursion.itinerario }}</p>
						<span class="py-3">
							<strong>Duración total</strong> - {{ excursion.duracion }}</span
						>
					</v-col>
				</v-row>
			</div>
		</section>

		<section id="Detalle__curiosidades">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="titulos_detalle_excursion py-2">Curiosidades</h2>
						<p class=" py-3">{{ excursion.curiosidades }}</p>
					</v-col>
				</v-row>
			</div>
		</section>
		<section id="Detalle__medidasCovid">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="titulos_detalle_excursion py-2">Medidas Covid-19</h2>
						<p>
							Todos nuestros servicios cumplen la legislación local y las
							recomendaciones sanitarias en materia de protección y seguridad
							para evitar el contagio del virus Covid-19. En concreto, esta
							actividad tiene las siguientes medidas:
						</p>
						<div class="py-3">
							<span>
								<strong>1</strong> - Se mantendrá la distancia de seguridad de 1
								metro entre clientes siempre que sea posible.
							</span>
							<span>
								<strong>2</strong> - El uso de mascarilla es obligatorio. El
								cliente debe llevar su propia mascarilla.
							</span>
							<span>
								<strong>3</strong> - Se facilitará gel hidroalcohólico antes,
								durante y después del servicio.
							</span>
							<span>
								<strong>4</strong> - Todo el personal implicado (guía, chófer,
								etc..) llevará mascarilla durante la realización del servicio.
							</span>
							<span>
								<strong>5</strong> - Se controlará diariamente la temperatura y
								síntomas de todo el personal implicado en el servicio excluyendo
								y manteniendo en cuarentena de 14 días a aquellos que presenten
								fiebre o síntomas.
							</span>
							<span>
								<strong>6</strong> - Todos los medios de transporte implicados
								serán desinfectados antes y después de cada servicio y lavados
								en profundidad cada 24 horas.
							</span>
							<span>
								<strong>7</strong> - Será suficiente con tener el bono o reserva
								en el móvil y no imprimirlo.
							</span>
						</div>
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

<style>
	.titulos_detalle_excursion {
		font-weight: 600;
		font-size: 40px;
		color: #d500f9;
	}
</style>
