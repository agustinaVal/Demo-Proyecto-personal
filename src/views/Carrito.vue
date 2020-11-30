<!-- @format -->

<template>
	<div>
		<v-container class="mx-auto py-4">
			<div
				v-if="this.carrito.length == 0"
				class="align-center justify-center py-10"
			>
				<h2 class="text-center titulo__carrito__sinItem">
					<v-icon x-large color="green">mdi-cart</v-icon>Ups!! Tu Carrito está
					vacío!
				</h2>
			</div>
			<v-row v-else>
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
							</div>

							<div class="contador__contenedor px-3">
								<v-row>
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
				<div>
					<v-col class="elevation-2 contenedor_total">
						<v-card max-width="550">
							<v-card-text>
								<h3 class="px-3">Total: ${{ total }}</h3></v-card-text
							>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn
									@click="pagar_Total"
									large
									color="red accent-4 white--text"
									class="boton__comprar"
								>
									Pagar
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
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
		width: 100%;
		color: black;
		font-size: 20px;
		padding: 20px;
	}

	.contenedor_total {
		margin: auto;
		justify-content: center;
		text-align: center;
	}

	.boton__comprar {
		width: 250px;
	}
</style>
