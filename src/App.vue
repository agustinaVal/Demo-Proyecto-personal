<template>
	<v-app id="app">
		<Nav />
		<v-main>
			<v-container >
				<router-view></router-view>
			</v-container>
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import { mapActions } from 'vuex';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
export default {
	name: 'App',
	components: {
		Nav,
		Footer
	},
	data: () => ({
	}),
	methods: {
		...mapActions(['getData']),
	},
	created() {
		this.getData();
	},
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
