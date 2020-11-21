<template>
  <div class="home">
    <v-container>
      <div class="pa-10 ma-5 text-center">
        <h1 class="title pink--text">Imperdibles</h1>
        <br />
        <h3 class="pink--text">
          Si disponés de poco tiempo para visitar la ciudad, <br />
          te proponemos algunos atractivos que no podés perderte. ¡Disfrutá de
          una experiencia completa!
        </h3>
      </div>
      <template>
        <v-parallax
          src="https://aws.traveler.es/prod/designs/v1/assets/940x630/73836.jpg"
        ></v-parallax>
      </template>

      <div class="ma-5 text-center">
        <h1>Que Ver</h1>
      </div>
      <v-row>
        <v-col md="3" v-for="(excursion, i) in excursiones" :key="i"
          ><Cards :excursion="excursion"
        /></v-col>
      </v-row>
      <Experiencias />
      <Valoracion />
	  	<Footer />
    </v-container>
  </div>
</template>




<script>
import Cards from "@/components/Cards.vue";
import Experiencias from "@/components/Experiencias.vue";
import Valoracion from "@/components/Valoracion.vue";
import Footer from '@/components/Footer.vue';
import { mapState } from "vuex";
export default {
  name: "Home",
  
  components: {
    Cards,
    Experiencias,
	Valoracion,
	Footer
  },
  data: () => ({}),
  computed: {
    ...mapState(["excursiones"]),
  },
  props: {},
};
</script>

<style>
.v-application .title {
  font-size: 60px !important;
  font-weight: black;
}
</style>
