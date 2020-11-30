<!-- @format -->

<template>
	<div id="Metro">
		<section>
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h1 class=" Home__titulo_principal">Metro de Buenos Aires</h1>
						<span class="Home__sub-titulo_principal py-4">
							El metro de Buenos Aires, más conocido como Subte, fue inaugurado
							en 1913 convirtiéndose en el primer sistema de transporte
							subterráneo de Iberoamérica y de todo el hemisferio sur.
						</span>
					</v-col>
				</v-row>
				<v-img
					height="650"
					class="Home__banner_principal"
					src="https://www.buenosaires.gob.ar/sites/gcaba/files/facultad-ok.jpg"
				>
				</v-img>
			</div>
		</section>

		<section>
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<span class="Home__sub-titulo_principal py-4">
							Aunque para muchos porteños el metro es la mejor forma de recorrer
							Buenos Aires, desde el punto de vista turístico se echa en falta
							una red más extensa, ya que hay zonas por las que no pasa ninguna
							línea.
						</span>
					</v-col>
				</v-row>
			</div>
		</section>

		<section id="Detalle__itinerario">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="titulos_metro py-2">Lineas de Metro</h2>
						<h4 class="py-1">
							El Subte(Metro) está formado por 6 líneas y 85 estaciones y
							actualmente se encuentra en proceso de expansión.
						</h4>

						<div class="py-3">
							<p>
								<strong>Línea A (celeste):</strong>
								Plaza de Mayo - San Pedrito.
							</p>
							<p>
								<strong>Línea B (roja):</strong>
								Leandro N. Alem - Juan Manuel Rosas.
							</p>
							<p>
								<strong>Línea C (azul):</strong>
								Retiro - Constitución.
							</p>
							<p>
								<strong>Línea D (verde):</strong>
								Catedral - Congreso Tucumán.
							</p>
							<p>
								<strong>Línea E (violeta):</strong>
								Bolívar - Plaza de los Virreyes.
							</p>
							<p>
								<strong>Línea H (amarilla):</strong>
								Las Heras - Hospitales
							</p>
						</div>
					</v-col>
				</v-row>
			</div>
		</section>
		<section id="Horarios__metro">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="py-1 titulos_metro">
							Horario
						</h2>
						<h4>
							El funcionamiento del Subte de Buenos Aires comienza a las 5:00 de
							la mañana y finaliza entre las 21:00 y las 23:00 horas en función
							de la línea.
						</h4>
						<br />
						<p>
							Los trenes tienen una frecuencia que varía entre 3 y 8 minutos
							dependiendo de la línea y la hora.
						</p>
					</v-col>
				</v-row>
			</div>
		</section>

		<section id="Tarifas">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="py-1 titulos_metro">
							Tarifas
						</h2>
						<h4>
							Un billete sencillo del Subte (Subtepass) tiene un precio de 16,50
							ARS (0,20 US$). Existe la posibilidad de comprar billetes de 1 o
							10 viajes, aunque la tarifa no se ve reducida al adquirir varios
							al mismo tiempo.
						</h4>
						<br />
						<p>
							Para utilizar el transporte público es necesario aquirir la
							Tarjeta SUBE.
						</p>
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
	export default {
		name: 'Metro',

		data: () => ({}),

		computed: {},
	}
</script>
<style>
	.titulos_metro {
		font-weight: 700;
		font-size: 30px;
		color: #d500f9;
	}
</style>
