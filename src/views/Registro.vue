<template>
	<div>
		<template>
			<v-data-table :headers="headers" :items="excursionData" class="elevation-1">
				<template v-slot:item.calories="{ item }">
					<v-chip :color="getColor(item.calories)" dark>
						{{ item.calories }}
					</v-chip>
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
					text: 'Nombre',
					align: 'start',
					value: 'name',
				},
				{ text: 'Imagen', value: 'img' },
				{ text: 'Nombre', value: 'title' },
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
