<template>
	<v-app id="app">
		<Nav />
		<v-main>
			<v-container >
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import { mapActions } from 'vuex';
import Nav from '@/components/Nav.vue';
export default {
	name: 'App',
	components: {
		Nav,
	},
	data: () => ({
	}),
	methods: {
		...mapActions(['getData', 'getDataHostal']),
	},
	created() {
		this.getData();
	},
	mounted(){
		this.getDataHostal();
	}
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
	font-family: 'Raleway', sans-serif;
}
a {
	text-decoration: none !important;
}

</style>
