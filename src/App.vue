<template>
	<v-app id="app">
		<v-app-bar app color="white" class="pink--text " permanent elevate-on-scroll>
			<v-img lazy-src="./assets/tango.png" max-height="40" max-width="30" src="./assets/tango.png"></v-img>
			<router-link :to="{ name: 'Home' }" class="mx-5">Baireando</router-link>
			<v-spacer></v-spacer>

			<div class="botones_Nav">
				<router-link :to="{ name: 'Login' }">
					<v-btn><v-icon color="pink"> mdi-account</v-icon></v-btn>
				</router-link>
				<router-link :to="{ name: 'Carrito' }">
				<v-btn>	<v-icon color="pink"> mdi-cart</v-icon></v-btn>
				</router-link>
			</div>
		</v-app-bar>

		<!-- Sizes your content based upon application components -->
		<v-main>
			<!-- Provides the application the proper gutter -->
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-main>

		<v-footer color="white purple--text">
			<v-card flat tile class="white purple--text text--lighten-1 text-center">
				<v-card-text>
					<v-btn v-for="icon in icons" :key="icon" class="purple--text" icon>
						<v-icon size="24px">
							{{ icon }}
						</v-icon>
					</v-btn>
				</v-card-text>

				<v-card-text class="mx-4 purple--text pt-0">
					Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
					Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur
					dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
					Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
					diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes,
					nascetur ridiculus mus.
				</v-card-text>

				<v-divider></v-divider>

				<v-card-text class="mx-4 purple--text">
					{{ new Date().getFullYear() }} — <strong>Vuetify</strong>
				</v-card-text>
			</v-card>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
	}),
};
</script>

<style>
#app {
	font-family: 'Raleway', sans-serif;
}
.botones_Nav {
	text-decoration: none;
}
</style>
