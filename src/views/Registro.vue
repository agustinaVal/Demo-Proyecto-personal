<template>
	<div id="Registro">
		<template>
			<h1>Registro</h1>
			<br />
			<Form :excursion="excursion" />
			<br />
			<v-data-table :headers="headers" :items="excursionData" class="elevation-1">
				<template v-slot:item.img="{ item }">
					<img width="130" :src="item.img" />
				</template>
				<template v-slot:item.time="{ item }">
					<v-select :items="item.time" label="Seleccionar"></v-select>
				</template>
				<template v-slot:item.acciones="{ item }">
					<v-btn color="warning" fab small dark @click="excuUpdate(item.id)">
						<v-icon>mdi-pencil</v-icon>
					</v-btn>

					<v-btn color="red" fab small dark @click="deleteExcursion(item.id)">
						<v-icon>mdi-delete</v-icon>
					</v-btn>
					<v-dialog v-model="dialog" max-width="590">
						<v-card>
							<v-card-title class="headline">
								Editando la actividad
							</v-card-title>
							<v-card-text
								><Form :excursion="excuEdit" @hideDialog="dialog = false" :edit="true"
							/></v-card-text>
						</v-card>
					</v-dialog>
				</template>
			</v-data-table>
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
			dialog: false,
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
			excursion: {
				title: '',
				img: '',
				description: '',
				price: '',
				stock: '',
				time: [''],
			},
			excuEdit: {},
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
		excuUpdate(id) {
			// se construye json para evitar errores en la edicion de datos
			this.excuEdit = JSON.parse(JSON.stringify(this.excursionData.find((p) => p.id == id)));
			this.dialog = true;
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
