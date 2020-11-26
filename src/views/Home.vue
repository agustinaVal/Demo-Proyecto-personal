<template>
  <div id="Home">
    <section >
      <div class="Home_principal">
	  <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="Home__titulo_principal">Imperdibles</h1>
			  <span class="Home__sub-titulo_principal py-5">Si disponés de poco tiempo para visitar la ciudad, te proponemos algunos atractivos que no podés perderte. <br> ¡Disfrutá de una experiencia completa!</span>
            </v-col>
          </v-row>
        <v-parallax
          height="850"
          class="Home__banner_principal"
          src="https://turismo.buenosaires.gob.ar/sites/turismo/files/caminito_la_boca_1200_gente_2.jpg">
        </v-parallax>
      </div>
    </section>

    <div class="ma-5 text-center">
      <h3>Que Ver</h3>
      <v-row>
        <v-col cols="6" md="3" v-for="(excursion, i) in excursiones" :key="i"
          ><Cards :excursion="excursion"
        /></v-col>
      </v-row>
    </div>

    <div class="ma-5 text-center">
      <h3>Donde dormir</h3>
      <v-row>
        <v-col
          cols="6"
          md="3"
          v-for="(alojamiento, i) in alojamientos"
          :key="i"
        >
          <Experiencias :alojamiento="alojamiento"
        /></v-col>
      </v-row>
    </div>

    <div class="ma-5 text-center">
      <h3>Galeria de imagenes</h3>
      <Galeria />
    </div>

    <Footer />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import Experiencias from "@/components/Experiencias.vue";
import Galeria from "@/components/Galeria.vue";
import Footer from "@/components/Footer.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Cards,
    Experiencias,
    Galeria,
    Footer,
  },
  data: () => ({}),
  computed: {
    ...mapState(["excursiones", "alojamientos"]),
  },
  props: {},
};
</script>

<style>
.Home__titulo_principal{
	font-weight: 700;
	font-size: 60px;
	color:#D500F9;
}
.Home__sub-titulo_principal{
	color:#9E9E9E;
	font-size: 18px;

}
</style>
