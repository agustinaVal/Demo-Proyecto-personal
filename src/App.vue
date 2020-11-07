<template>
	<v-app>
		<v-app-bar app color="white" class="pink--text " permanent elevate-on-scroll>
			<v-img lazy-src="./assets/tango.png" max-height="40" max-width="30" src="./assets/tango.png"></v-img>
			<v-toolbar-title class="mx-5">Baireando</v-toolbar-title>
			<v-spacer></v-spacer>

			<div class="text-center">
				<v-menu offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-btn text color="pink" v-bind="attrs" v-on="on">
							Que ver
						</v-btn>
					</template>
					<v-list>
						<v-list-item v-for="(item, index) in items" :key="index">
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</div>
			<div c>
				<v-menu offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-btn text color="pink" v-bind="attrs" v-on="on">
							Que comer
						</v-btn>
					</template>
					<v-list>
						<v-list-item v-for="(item, index) in items" :key="index">
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</div>
			<div class="text-center">
				<v-menu offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-btn text color="pink" v-bind="attrs" v-on="on">
							Donde Dormir
						</v-btn>
					</template>
					<v-list>
						<v-list-item v-for="(item, index) in items" :key="index">
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</div>

			<div class="text-center ">
				<v-menu left bottom>
					<template v-slot:activator="{ on, attrs }">
						<v-btn class="purple--text " icon v-bind="attrs" v-on="on">
							<v-icon>mdi-dots-vertical</v-icon>
						</v-btn>
					</template>

					<v-list>
						<v-list-item v-for="n in 2" :key="n" @click="() => {}">
							<v-list-item-title>Option {{ n }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
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
		items: [{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me 2' }],
		icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
	}),
};
</script>

<style>
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
	color: 'purple accent-3';
	font-family: 'Raleway', sans-serif;
}
</style>
