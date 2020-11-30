<!-- @format -->

<template>
	<div>
		<v-container align="center" justify="center">
			<div
				v-if="this.carrito.length == 0"
				class="align-center justify-center py-10"
			>
				<h2 class="text-center titulo__carrito__sinItem">
					<v-icon x-large color="green">mdi-cart</v-icon>Ups!! Tu Carrito está
					vacío!
				</h2>
			</div>
			<v-row v-else align="center" justify="center">
				<v-col cols="12" md="6">
					<div
						v-for="(item, i) in carrito"
						:key="i"
						class="cuerpo__pago elevation-3"
					>
						<div>
							<div>
								<h3 class="px-3">
									{{ item.title }}
								</h3>
								<span class="px-3">
									Precio Unitario: $
									{{ item.price }}
								</span>
								<v-img :src="item.img"></v-img>
							</div>

							<div class="contador__contenedor px-5">
								<v-row align="center" justify="center py-5">
									<v-btn fab x-small @click="MINUS(item.id)">
										<v-icon>mdi-minus</v-icon>
									</v-btn>
									<span class="px-3">{{ item.cant }}</span>
									<v-btn fab x-small @click="PLUS({ id: item.id })">
										<v-icon>mdi-plus</v-icon>
									</v-btn>
								</v-row>
							</div>
						</div>
					</div>
				</v-col>

				<div class="col-sm-6 col-lg-4 col-12">
					<div
						class="contenedor__servicios elevation-2"
						align="center"
						justify="center"
					>
						<h3>
							<v-icon large color="green">mdi-cash</v-icon> Total: ${{ total }}
						</h3>

						<v-container>
							<v-row align="center" justify="center">
								<v-btn
									small
									color="red accent-4 white--text"
									class="boton__comprar white--text"
									@click="pagar_Total"
									>Pagar</v-btn
								>
							</v-row>
						</v-container>
					</div>
				</div>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
	export default {
		name: 'Carrito',
		data: () => ({
			items: [],
		}),
		computed: {
			...mapState('Carrito', ['carrito']),
			...mapGetters('Carrito', ['total']),
		},
		methods: {
			...mapMutations('Carrito', ['MINUS', 'PLUS']),
			pagar_Total() {
				this.pagarTotal(this.$router)
			},
			...mapActions('Carrito', ['pagarTotal']),
		},
	}
</script>

<style>
	.titulo__carrito__sinItem {
		font-weight: 700;
		font-size: 35px;
		color: grey;
	}
	.cuerpo__pago {
		color: black;
		font-size: 20px;
		padding: 10px;
		border-radius: 10px;
	}

	.boton__comprar {
		width: 250px;
	}
</style>
