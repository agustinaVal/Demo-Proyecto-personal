<!-- @format -->

<template>
	<div>
		<v-parallax
			height="750"
			dark
			src="https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-colorful-splatter-banner-background-effect-image_80175.jpg"
		>
			<v-row align="center" justify="center">
				<v-col class="text-center" cols="12">
					<h1 class="display-2 my-4">
						¡Gracias por confiar en
						<strong class="Gracias__titulo">TusimoBaires</strong> !
					</h1>
					<h2 class="display-1 my-10">Un ejecutivo se comunicará contigo</h2>
					<v-btn color="red accent-4 my-4 white--text" :to="{ name: 'Home' }"
						>Volver al inicio</v-btn
					>
				</v-col>
			</v-row>
		</v-parallax>
	</div>
</template>

<script>
	export default {
		name: 'Gracias',
	}
</script>

<style>
	.Gracias__titulo {
		font-weight: 800;
		color: #00e5ff;
	}
	.v-image .v-responsive .theme--light {
		margin: 0 !important;
	}
</style>
