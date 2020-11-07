<template>
	<v-app>
		<v-navigation-drawer app v-model="drawer" absolute bottom temporary>
			<v-list nav dense>
				<v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
					<v-list-item>
						<v-list-item-title>Foo</v-list-item-title>
					</v-list-item>

					<v-list-item>
						<v-list-item-title>Bar</v-list-item-title>
					</v-list-item>

					<v-list-item>
						<v-list-item-title>Fizz</v-list-item-title>
					</v-list-item>

					<v-list-item>
						<v-list-item-title>Buzz</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app color="white" class="teal--text text--lighten-1 mx-4 teal--text"  elevate-on-scroll>
			<v-app-bar-nav-icon class="mx-4 teal--text"  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title>My files</v-toolbar-title>

			<v-spacer></v-spacer>

	

			<v-btn icon>
				<v-icon></v-icon>
			</v-btn>

		</v-app-bar>

		<!-- Sizes your content based upon application components -->
		<v-main>
			<!-- Provides the application the proper gutter -->
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-main>

		<v-footer app color="white teal--text" >
			<v-card flat tile class="white teal--text text--lighten-1 text-center">
				<v-card-text>
					<v-btn v-for="icon in icons" :key="icon" class="mx-4 teal--text" icon>
						<v-icon size="24px">
							{{ icon }}
						</v-icon>
					</v-btn>
				</v-card-text>

				<v-card-text class="mx-4 teal--text pt-0">
					Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
					Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur
					dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
					Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
					diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes,
					nascetur ridiculus mus.
				</v-card-text>

				<v-divider></v-divider>

				<v-card-text class="mx-4 teal--text">
					{{ new Date().getFullYear() }} — <strong>Vuetify</strong>
				</v-card-text>
			</v-card>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: false,
		group: null,
		icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
	}),

	watch: {
		group() {
			this.drawer = false;
		},
	},
};
</script>


<style >

</style>
