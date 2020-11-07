<template>
	<v-container fluid px-16>
		<v-row class="mb-6" pl-3>
			<v-col cols="6" md="3" v-for="n in 4" :key="n">
				<template>
					<v-hover>
						<template v-slot:default="{ hover }">
							<v-card class="mx-auto" max-width="344">
								<v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>

								<v-fade-transition>
									<v-overlay v-if="hover" absolute color="#036358">
										<v-btn>See more info</v-btn>
									</v-overlay>
								</v-fade-transition>
							</v-card>
						</template>
					</v-hover>
				</template>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'GridUno',
	components: {},
	data: () => ({
		//
	}),
};
</script>
