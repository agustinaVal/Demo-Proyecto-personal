<template>
	<div>
		<v-footer color="white">
			<v-card flat tile class="white pink--text text--lighten-1 text-center">
				<v-card-text>
					<v-btn v-for="icon in icons" :key="icon" class="pink--text" icon>
						<v-icon size="24px">
							{{ icon }}
						</v-icon>
					</v-btn>
				</v-card-text>

				<v-card-text class="mx-4  pink--text pt-0">
					Disfruta del esparcimiento, la cultura y diversión junto a TurismoBaires.
					 Te brindamos un servicio único en el cual podrás recorrer todos los atractivos de Buenos Airesy sus alrededores.
				</v-card-text>

				<v-divider></v-divider>

				<v-card-text class="mx-4 pink--text">
					{{ new Date().getFullYear() }} — <strong>TurismoBaires</strong>
				</v-card-text>
			</v-card>
		</v-footer>
	</div>
</template>
<script>
export default {
	name: 'Footer',
	data: () => ({
		icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
	}),
};
</script>

<style></style>
