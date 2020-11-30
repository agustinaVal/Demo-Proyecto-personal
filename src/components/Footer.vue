<!-- @format -->

<template>
	<div>
		<v-footer class="white pa-16">
			<v-card flat tile class="white text-center">
				<v-card-text class="mx-4 footer__text">
					Disfruta del esparcimiento, la cultura y diversión junto a
					TurismoBaires. Te brindamos un servicio único en el cual podrás
					recorrer todos los atractivos de Buenos Aires y sus alrededores.
				</v-card-text>
				<v-card-text class="my-4 footer__text">
					<h3 class="titulo__footer"><strong>Contáctanos</strong></h3>

					<h4><strong>Teléfono:</strong> 4315-2326</h4>
					<h4><strong>Correo:</strong> info@turismobaires.com.ar</h4>
					<h4>
						<strong>Dirección:</strong> Paraguay 729 Piso 5 Of 22, Retiro,
						Ciudad de Buenos Aires.
					</h4>
				</v-card-text>

				<v-divider></v-divider>

				<v-card-text class="mx-4" id="footer_final">
					{{ new Date().getFullYear() }} — <strong>TurismoBaires</strong>
				</v-card-text>
			</v-card>
		</v-footer>
	</div>
</template>
<script>
	export default {
		name: 'Footer',
		data: () => ({}),
	}
</script>

<style>
	.footer__text {
		color: #9e9e9e;
	}

	#footer_final {
		color: #00e5ff;
	}
	.titulo__footer {
		color: black;
	}
</style>
