<template>
	<div fluid>
		<template>
			<v-data-table :headers="headers" :items="excursionData" class="elevation-1">
				<template v-slot:item.img="{ item }">
					<img width="130" :src="item.img" />
				</template>
                <template v-slot:item.time="{ item }">
            <ul>
              <li v-for="(time, i) in item.time" :key="i">
                {{ time }}
              </li>
            </ul>
          </template>
			</v-data-table>
		</template>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'Registro',
	data() {
		return {
			headers: [
				{
					align: 'start',
					value: 'name',
                },
                { text: 'Nombre', value: 'title' },
                { text: 'Imagen', value: 'img' },
                { text: 'Descripcion', value: 'description' },
				{ text: 'Precios', value: 'price' },
				{ text: 'Stock', value: 'stock' },
				{ text: 'Horario', value: 'time' },
				{ text: 'Acciones', value: 'acciones' },
			],
		};
	},
	methods: {
		getColor(calories) {
			if (calories > 400) return 'red';
			else if (calories > 200) return 'orange';
			else return 'green';
		},
	},
	computed: {
		...mapGetters(['excursionData']),
	},
};
</script>

<style lang="scss">
ul {
  padding: 10px;
  list-style: none;
}
</style>
