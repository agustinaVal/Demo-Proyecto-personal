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
					<h5>
						<v-icon small class="pa-1" color="green">mdi-phone</v-icon>
						4315-2326
					</h5>
					<h5>
						<v-icon small class="pa-1" color="green">mdi-email</v-icon
						>info@turismobaires.com.ar
					</h5>
					<h5>
						<v-icon small class="pa-1" color="green">mdi-home</v-icon>Paraguay
						729 Piso 5 Of 22, Retiro, Ciudad de Buenos Aires.
					</h5>
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
</style>
