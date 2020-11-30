<!-- @format -->

<template>
	<div id="Taxi">
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
						<span class="Home__sub-titulo_principal py-4">
							Por Buenos Aires circulan actualmente más de 35.000 taxis.
						</span>
					</v-col>
				</v-row>
			</div>
		</section>

		<section>
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="titulos_taxi py-2">Tarifas</h2>
						<h4 class="py-1">
							Aunque el precio de los taxis de Buenos Aires resulta bastante más
							elevado que el de los colectivos o el Subte, las tarifas son
							bastante económicas si las comparamos con Europa o Estados Unidos.
						</h4>
						<div class="py-3">
							<p>
								<strong>Bajada de bandera:</strong>
								38,50 ARS (0,50 US$)
							</p>
							<p>
								<strong>Cada 200 metros de trayecto:</strong>
								3,85 ARS (0 US$)
							</p>
							<p>
								<strong>Minuto de espera::</strong>
								3,26 ARS (0 US$)
							</p>

							<span class="Home__sub-titulo_principal py-4"
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
						<h2 class="py-1 titulos_taxi">
							Teléfonos
						</h2>
						<h4>
							Estos son los teléfonos de algunas de las compañías más conocidas
							de taxis de Buenos Aires:
						</h4>
						<div class="py-3">
							<p>
								<strong>Radio Taxi Premium:</strong>
								5238-0000.
							</p>
							<p>
								<strong>City Tax::</strong>
								4585-5544.
							</p>
							<p>
								<strong>Radio Taxi Ciudad:</strong>
								4923-7007.
							</p>
							<p>
								<strong>Radio Taxi Premier:</strong>
								4858-0888.
							</p>
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
		font-weight: 700;
		font-size: 30px;
		color: #d500f9;
	}
	h4 {
		font-size: 20px;
		font-weight: 400;
	}
</style>
