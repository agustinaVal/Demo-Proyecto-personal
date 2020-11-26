<!-- @format -->

<template>
	<v-container>
		<div class="alojamientos__hoteles">
			<template>
				<v-card class="mx-auto" max-width="344" alevate-5>
					<div class="img-hotel-conetent">
						<v-img
							:src="alojamiento.data.img"
							class="img-hotel"
							height="200px"
						></v-img>
					</div>

					<v-card-title>
						<strong>{{ alojamiento.data.name }}</strong>
					</v-card-title>

					<v-card-subtitle>
						<span>{{ alojamiento.data.description }}</span>
					</v-card-subtitle>

					<v-card-actions>
						<v-btn color="grey lighten-1" text>
							<strong>Ver más </strong></v-btn
						>

						<v-spacer></v-spacer>

						<v-btn icon @click="show = !show">
							<v-icon color="pink accent-2">{{
								show ? 'mdi-chevron-up' : 'mdi-chevron-down'
							}}</v-icon>
						</v-btn>
					</v-card-actions>

					<v-expand-transition>
						<div v-show="show">
							<v-divider></v-divider>

							<v-card-text>
								<strong>Dirección:</strong> <br />
								{{ alojamiento.data.direction }}
							</v-card-text>
							<v-card-text>
								<strong>Contacto:</strong> <br />
								{{ alojamiento.data.contact }}
							</v-card-text>
							<v-card-text>
								<strong>Visita la Web:</strong> <br />
								{{ alojamiento.data.url }}
							</v-card-text>
						</div>
					</v-expand-transition>
				</v-card>
			</template>
		</div></v-container
	>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'alojamiento',
		props: ['alojamiento'],
		components: {},
		data: () => ({
			show: false,
		}),
		computed: {
			...mapState(['alojamientos']),
		},
	}
</script>

<style>
	.img-hotel-conetent {
		overflow: hidden;
		position: relative;
	}
	.img-hotel {
		width: 100%;
		-webkit-transition: all 0.6s ease;
		transition: all 0.6s ease;
		z-index: 1;
	}
	.img-hotel-conetent:hover > .img-hotel {
		-webkit-transform: scale(1.1);
		-moz-transform: scale(1.1);
		-ms-transform: scale(1.1);
		-o-transform: scale(1.1);
		transform: scale(1.1);
		z-index: 1;
	}
</style>
