<template>
	<v-form ref="form">
		<v-text-field v-model="excursion.title" label="Nombre" required></v-text-field>
		<v-text-field v-model="excursion.img" label="Dirección de la imagen" required></v-text-field>
		<v-text-field v-model="excursion.description" label="Descripcion" required></v-text-field>
		<v-text-field v-model="excursion.price" label="Precios" required></v-text-field>
		<v-text-field v-model="excursion.stock" label="Stock" required></v-text-field>
		<v-text-field
			v-for="(time, i) in excursion.time"
			:key="i"
			v-model="excursion.time[i]"
			label="Horario"
			required
		></v-text-field>

		<v-btn class="mx-2" fab small dark color="success" @click="add">
			<v-icon dark>
				mdi-plus
			</v-icon>
		</v-btn>

		<v-btn class="mx-2" fab small dark color="red" @click="Delete">
			<v-icon dark>
				mdi-delete
			</v-icon>
		</v-btn>

		<br />
		<br />

		<template>
			<v-btn v-show="!edit" color="primary" class="mr-4" @click="nuevaExcursion">
				Agregar
			</v-btn>
			<v-btn v-show="edit" color="yellow" class="mr-4" @click="editExcursion">
				Editar
			</v-btn>
		</template>
	</v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'Form',
	time: [],
	props: ['excursion', 'edit'],
	data: () => ({}),

	computed: {
		...mapGetters(['excursionData']),
	},
	methods: {
		...mapActions(['nuevoRegistro', 'editExcursionFB']),
		add() {
			this.excursion.time.push('');
		},
		Delete() {
			this.excursion.time.pop();
		},
		nuevaExcursion() {
			this.nuevoRegistro(this.excursion);
		},
		editExcursion() {
			this.editExcursionFB(this.excursion);
			this.$emit('hideDialog');
		},
	},
};
</script>
