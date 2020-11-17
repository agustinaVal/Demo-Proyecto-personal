<template>
	<div id="Registro">
		<template>
			<h1>Registro</h1>
			<br />
			<v-data-table :headers="headers" :items="excursionData" class="elevation-1">
				<template v-slot:item.img="{ item }">
					<img width="130" :src="item.img" />
				</template>
				<template v-slot:item.time="{ item }">
					<v-select :items="item.time" label="Seleccionar"></v-select>
				</template>
				<template v-slot:item.acciones="{ item }">
					<v-btn color="warning" fab small dark>
						<v-icon>mdi-pencil</v-icon>
					</v-btn>
					<v-btn color="red" fab small dark @click="deleteExcursion(item.id)">
						<v-icon>mdi-delete</v-icon>
					</v-btn>
				</template>
			</v-data-table>
			<Form />
		</template>
	</div>
</template>

<script>
import Form from '@/components/Form';
import { mapGetters, mapActions } from 'vuex';
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
	components: {
		Form,
	},
	methods: {
		...mapActions(['deleteExcursionFB']),
		deleteExcursion(id) {
			this.deleteExcursionFB(id);
		},
	},
	computed: {
		...mapGetters(['excursionData']),
	},
};
</script>

<style lang="scss">
#Registro {
	margin-top: 50px;
	font-size: 10px;
}

ul {
	padding: 10px;
}
</style>
