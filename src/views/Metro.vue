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
						<p class="py-1">
							Aunque para muchos porteños el metro es la mejor forma de recorrer
							Buenos Aires, desde el punto de vista turístico se echa en falta
							una red más extensa, ya que hay zonas por las que no pasa ninguna
							línea.
						</p>
					</v-col>
				</v-row>
			</div>
		</section>

		<section id="Detalle__itinerario">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h3 class="titulos_metro py-2">Lineas de Metro</h3>
						<p class="py-1">
							El Subte(Metro) está formado por 6 líneas y 85 estaciones y
							actualmente se encuentra en proceso de expansión.
						</p>
						<div class="py-3">
							<ul>
								<strong>1</strong>
								- Línea A (celeste): Plaza de Mayo - San Pedrito.
							</ul>
							<ul>
								<strong>2</strong>
								- Línea B (roja): Leandro N. Alem - Juan Manuel Rosas.
							</ul>
							<ul>
								<strong>3</strong>
								- Línea C (azul): Retiro - Constitución.
							</ul>
							<ul>
								<strong>4</strong>
								- Línea D (verde): Catedral - Congreso Tucumán.
							</ul>
							<ul>
								<strong>5</strong>
								- Línea E (violeta): Bolívar - Plaza de los Virreyes.
							</ul>
							<ul>
								<strong>6</strong>
								- Línea H (amarilla): Las Heras - Hospitales
							</ul>
						</div>
					</v-col>
				</v-row>
			</div>
		</section>
		<section id="Horarios__metro">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h3 class="py-1 titulos_metro">
							Horario
						</h3>
						<span
							>El funcionamiento del Subte de Buenos Aires comienza a las 5:00
							de la mañana y finaliza entre las 21:00 y las 23:00 horas en
							función de la línea.</span
						>
						<br />
						<span
							>Los trenes tienen una frecuencia que varía entre 3 y 8 minutos
							dependiendo de la línea y la hora.</span
						>
					</v-col>
				</v-row>
			</div>
		</section>

		<section id="Tarifas">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h3 class="py-1 titulos_metro">
							Tarifas
						</h3>
						<span
							>Un billete sencillo del Subte (Subtepass) tiene un precio de
							16,50 ARS (0,20 US$). Existe la posibilidad de comprar billetes de
							1 o 10 viajes, aunque la tarifa no se ve reducida al adquirir
							varios al mismo tiempo.</span
						>
						<br />
						<span
							>Para utilizar el transporte público es necesario aquirir la
							Tarjeta SUBE.
						</span>
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
		font-weight: 400;
		font-size: 30px;
		color: #d500f9;
	}
</style>
