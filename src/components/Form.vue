<template>
	<v-form ref="form">
		<v-text-field v-model="excursionData.title" label="Nombre" required></v-text-field>
		<v-text-field v-model="excursionData.img" label="Dirección de la imagen" required></v-text-field>
		<v-text-field v-model="excursionData.description" label="Descripcion" required></v-text-field>
		<v-text-field v-model="excursionData.price" label="Precios" required></v-text-field>
		<v-text-field v-model="excursionData.stock" label="Stock" required></v-text-field>

		<h3>Horarios:</h3>
		<v-text-field
			v-for="(excursion, i) in excursionData.time"
			:key="i"
			v-model="excursionData.time[i]"
			label="Hora"
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
		<v-btn>
			Agregar actividad
		</v-btn>
		<v-btn>
			editar pizza
		</v-btn>
	</v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'Form',

	computed: {
		...mapGetters(['excursionData']),
    },
    methods:{
        add() {
      this.excursionData.time.push("");
    },
    Delete() {
      this.excursionData.time.pop();
    },
    }
};
</script>
