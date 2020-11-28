<!-- @format -->

<template>
	<div class="NotFoun__pagina">
		<v-row class="text-center" cols="12">
			<v-col align="center" justify="center">
				<v-img
					src="https://www.webempresa.com/wp-content/uploads/2017/05/error-404-ejemplo-pagina-no-encontrada.jpg"
				>
				</v-img>
				<v-btn color="red accent-4 my-4 white--text" :to="{ name: 'Home' }"
					>Volver al inicio</v-btn
				>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	export default {
		name: 'NotFound',
	}
</script>

<style lang="scss" scoped></style>
