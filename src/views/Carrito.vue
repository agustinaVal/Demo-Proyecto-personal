<template>
  <v-card class="mx-auto">
    <v-container>
      <v-row dense>
        <v-col v-for="(item, i) in carrito" :key="i" cols="6">
          <v-card>
            <div class="d-flex justify-space-between">
              <div>
                <v-card-title class="headline">{{
                  item.data.title
                }}</v-card-title>
                <v-card-subtitle
                  >Sub-Total: ${{ item.data.price }}</v-card-subtitle
                >
              </div>
              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.data.img"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="d-flex justify-space-between">
            <v-card-title class="headline"> Total de compra: </v-card-title>
            <v-card-actions>
              <v-btn text> Pagar </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Carrito",
  data: () => ({
    items: [],
  }),
  computed: {
	...mapState("Carrito", ["carrito"]),
  },
  methods:{
	  alert(){
		  console.log(item.data.price )
	  }
  }
};
</script>
