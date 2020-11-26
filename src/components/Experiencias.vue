<template>
  <v-container>
    <div class="alojamientos__hoteles">
      <template>
        <v-card class="mx-auto" max-width="344" alevate-5>
          <v-img
            :src="alojamiento.data.img"
            class="Hoteles__img"
            height="200px"
          ></v-img>

          <v-card-title>
            <strong>{{ alojamiento.data.name }}</strong>
          </v-card-title>

          <v-card-subtitle>
            <span>{{ alojamiento.data.description }}</span>
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="green accent-4" text> Ver más </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon color="green accent-4">{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                <strong>Dirección:</strong> <br />
                {{ alojamiento.data.direction }}
              </v-card-text>
              <v-card-text>
                <strong>Contacto:</strong> <br />
                {{ alojamiento.data.contact }}
              </v-card-text>
              <v-card-text>
                <strong>Visita la Web:</strong> <br />
                {{ alojamiento.data.url }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </template>
    </div></v-container
  >
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "alojamiento",
  props: ["alojamiento"],
  components: {},
  data: () => ({
    show: false,
  }),
  computed: {
    ...mapState(["alojamientos"]),
  },
};
</script>

<style>
.Hoteles__img {
  transform: scale(1);
  transition: 0.7s;
}
</style>
