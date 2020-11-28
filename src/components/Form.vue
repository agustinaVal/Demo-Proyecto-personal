<!-- @format -->

<template>
	<v-form ref="form">
		<v-text-field
			v-model="excursion.title"
			label="Nombre"
			required
		></v-text-field>
		<v-text-field
			v-model="excursion.subtitle"
			label="Sub-titulo"
			required
		></v-text-field>
		<v-text-field
			v-model="excursion.img"
			label="Dirección de la imagen"
			required
		></v-text-field>
		<v-text-field
			v-model="excursion.description"
			label="Descripcion"
			required
		></v-text-field>
		<v-text-field
			v-model="excursion.price"
			label="Precios"
			required
		></v-text-field>
		<v-text-field
			v-model="excursion.stock"
			label="Stock"
			required
		></v-text-field>

		<br />
		<template>
			<v-btn
				v-show="!edit"
				color="primary"
				class="mr-4"
				@click="nuevaExcursion"
			>
				Agregar
			</v-btn>
			<v-btn v-show="edit" color="yellow" class="mr-4" @click="editExcursion">
				Editar
			</v-btn>
		</template>
	</v-form>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	export default {
		name: 'Form',
		props: ['excursion', 'edit'],
		data: () => ({}),

		computed: {
			...mapGetters(['excursionData']),
		},
		methods: {
			...mapActions(['nuevoRegistro', 'editExcursionFB']),

			nuevaExcursion() {
				this.nuevoRegistro(this.excursion)
			},
			editExcursion() {
				this.editExcursionFB(this.excursion)
				this.$emit('hideDialog')
			},
		},
	}
</script>
