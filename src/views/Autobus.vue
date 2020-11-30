<!-- @format -->

<template>
	<div id="Autobus">
		<section>
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h1 class=" Home__titulo_principal">
							Autobuses en Buenos Aires (Colectivos)
						</h1>
						<span class="Home__sub-titulo_principal py-4">
							Los autobuses urbanos argentinos, más conocidos como "colectivos"
							o "bondi", son el sistema de transporte público más utilizado de
							la ciudad.
						</span>
					</v-col>
				</v-row>
				<v-img
					height="650"
					class="Home__banner_principal"
					src="https://i.pinimg.com/originals/ca/31/27/ca3127b07f89053c0957c3e3b9979444.jpg"
				>
				</v-img>
			</div>
		</section>

		<section>
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<span class="Home__sub-titulo_principal py-4">
							Los coletivos circulan por donde el Metro (Subte) no llega y son
							la única forma de llegar a ciertos lugares.
						</span>
						<span class="Home__sub-titulo_principal py-4">
							Los colectivos de Buenos Aires tuvieron su origen en 1928, cuando
							un grupo de taxis comenzaron a realizar un recorrido fijo
							permitiendo subir a varios pasajeros al mismo tiempo.
						</span>
					</v-col>
				</v-row>
			</div>
		</section>

		<section id="Detalle__itinerario">
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="titulos_Autobus py-2">Tarifas</h2>
						<h4 class="py-1">
							Los precios de los colectivos varían en función del trayecto. El
							trayecto mínimo es de 3 kilómetros y tiene un precio de 18 ARS
							(0,20 US$). De 3 a 6 kilómetros la tarifa asciende a los 20 ARS
							(0,20 US$).
						</h4>
						<h4 class="py-1">
							Es necesario llevar monedas, ya que los billetes (boletos) se
							compran a bordo del colectivo utilizando una máquina que sólo
							admite monedas. Para adquirir los boletos basta con decir el
							destino al conductor e introducir las monedas en la máquina.
						</h4>
						<h4 class="py-1">
							El pago debe hacerse utilizando la Tarjeta SUBE, que evita la
							necesidad de llevar monedas.
						</h4>
					</v-col>
				</v-row>
			</div>
		</section>
		<section>
			<div>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h2 class="py-1 titulos_Autobus">
							Horario y frecuencia
						</h2>
						<h4>
							Los colectivos en Buenos Aires circulan durante las 24 horas del
							día con frecuencias que oscilan entre los 2 minutos y los 40
							minutos, dependiendo de la línea y de la hora del día.
						</h4>
						<br />
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
		name: 'Autobus',

		data: () => ({}),

		computed: {},
	}
</script>
<style>
	.titulos_Autobus {
		font-weight: 700;
		font-size: 30px;
		color: #d500f9;
	}
	h4 {
		font-size: 20px;
		font-weight: 400;
	}
</style>
