<template>
	<v-form ref="form">
		<v-text-field v-model="excursionData.title" label="Nombre" required></v-text-field>
		<v-text-field v-model="excursionData.img" label="Dirección de la imagen" required></v-text-field>
		<v-text-field v-model="excursionData.description" label="Descripcion" required></v-text-field>
		<v-text-field v-model="excursionData.price" label="Precios" required></v-text-field>
		<v-text-field v-model="excursionData.stock" label="Stock" required></v-text-field>
		<v-text-field  
         v-model="excursionData.time"   label="Horario" required></v-text-field>
<v-text-field
      v-for="(horario, i) in excursion.time"
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

		
	</v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'Form',
	data: () => ({
		excursion:{
            title : "",
            img : "",
            description : "",
            price : "",
            stock : "",
            time : [],

        }
	}),

	computed: {
		...mapGetters(['excursionData']),
	},
	methods: {
	 add() {
      this.excursion.time.push("");
    },
    Delete() {
      this.excursion.time.pop();
    },
	},
};
</script>
