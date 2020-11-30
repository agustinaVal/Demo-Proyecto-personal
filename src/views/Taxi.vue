<!-- @format -->

<template>
	<div id="Metro">
		<section>
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h1 class=" Home__titulo_principal">Taxis en Buenos Aires</h1>
						<span class="Home__sub-titulo_principal py-4">
							Los taxis de Buenos Aires son una alternativa cómoda y
							relativamente económica para desplazarse por la ciudad,
							especialmente por la noche, cuando el tráfico se despeja y los
							colectivos disminuyen su frecuencia.
						</span>
					</v-col>
				</v-row>
				<v-img
					height="650"
					class="Home__banner_principal"
					src="https://k8d7k6t9.rocketcdn.me/wp-content/uploads/2020/01/How-does-a-taxi-in-Buenos-Aires-look.jpg"
				>
				</v-img>
			</div>
		</section>

		<section>
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<span class="py-1">
							Por Buenos Aires circulan actualmente más de 35.000 taxis.
						</span>
					</v-col>
				</v-row>
			</div>
		</section>

		<section id="Detalle__itinerario">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h3 class="titulos_taxi py-2">Tarifas</h3>
						<p class="py-1">
							Aunque el precio de los taxis de Buenos Aires resulta bastante más
							elevado que el de los colectivos o el Subte, las tarifas son
							bastante económicas si las comparamos con Europa o Estados Unidos.
						</p>
						<div class="py-3">
							<ul>
								* Bajada de bandera: 38,50 ARS (0,50 US$)
							</ul>
							<ul>
								* Cada 200 metros de trayecto: 3,85 ARS (0 US$)
							</ul>
							<ul>
								* Minuto de espera: 3,26 ARS (0 US$)
							</ul>
							<br />
							<span
								>Todas las tarifas se incrementan un 20% en horario nocturno,
								entre las 22:00 y las 06:00 horas.</span
							>
						</div>
					</v-col>
				</v-row>
			</div>
		</section>
		<section>
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h3 class="py-1 titulos_taxi">
							Teléfonos
						</h3>
						<span
							>Estos son los teléfonos de algunas de las compañías más conocidas
							de taxis de Buenos Aires:</span
						>
						<div class="py-3">
							<ul>
								<strong>Radio Taxi Premium:</strong>
								5238-0000.
							</ul>
							<ul>
								<strong>City Tax::</strong>
								4585-5544.
							</ul>
							<ul>
								<strong>Radio Taxi Ciudad:</strong>
								4923-7007.
							</ul>
							<ul>
								<strong>Radio Taxi Premier:</strong>
								4858-0888.
							</ul>
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
	export default {
		name: 'Taxi',

		data: () => ({}),

		computed: {},
	}
</script>
<style>
	.titulos_taxi {
		font-weight: 400;
		font-size: 30px;
		color: #d500f9;
	}
</style>
