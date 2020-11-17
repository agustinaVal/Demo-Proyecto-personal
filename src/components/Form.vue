<template>
	<v-form ref="form">
		<v-text-field v-model="excursion.title" label="Nombre" required></v-text-field>
		<v-text-field v-model="excursion.img" label="Dirección de la imagen" required></v-text-field>
		<v-text-field v-model="excursion.description" label="Descripcion" required></v-text-field>
		<v-text-field v-model="excursion.price" label="Precios" required></v-text-field>
		<v-text-field v-model="excursion.stock" label="Stock" required></v-text-field>
		<v-text-field  
         v-model="excursion.time"   label="Horario" required></v-text-field>
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
			<v-btn color="primary" class="mr-4">
				Agregar 
			</v-btn>
			<v-btn color="succes" class="mr-4" >
				Editar  
			</v-btn>
		</template>
	</v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Form',
    time : [],
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
