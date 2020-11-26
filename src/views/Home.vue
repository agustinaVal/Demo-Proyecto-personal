<template>
  <div id="Home">
    <section id="Her__section">
      <div class="Home_principal">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="Home__titulo_principal">Imperdibles</h1>
            <span class="Home__sub-titulo_principal py-5"
              >Si disponés de poco tiempo para visitar la ciudad, te proponemos
              algunos atractivos que no podés perderte. <br />
              ¡Disfrutá de una experiencia completa!</span
            >
          </v-col>
        </v-row>
        <v-parallax
          height="650"
          class="Home__banner_principal"
          src="https://turismo.buenosaires.gob.ar/sites/turismo/files/caminito_la_boca_1200_gente_2.jpg"
        >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h3>TurismoBaires</h3>
            </v-col>
          </v-row>
        </v-parallax>
      </div>
    </section>

    <section id="Main__que_ver">
      <div>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h2 class="Titulo_main_QUEVER">Destacados de la cuidad</h2>
            <span class="Home__sub-titulo_principal py-5"
              >Descubre los secretos y la historia de la ciudad a través de sus
              mejores paseos</span
            >
          </v-col>
        </v-row>

        <v-row>
          <v-col sm="12" md="4" v-for="(excursion, i) in excursiones" :key="i"
            ><Cards :excursion="excursion"
          /></v-col>
        </v-row>
      </div>
    </section>

    <section id="Main__donde_dormir">
      <div>
        <v-row align="center" justify="center">
          <v-col class="text-center" col="12" >
            <h2 class="Titulo_main_QUEVER">
              Los mejores Hoteles para descansar
            </h2>
            <span class="Home__sub-titulo_principal py-5"
              >Conoce los hoteles mas valorados por los viajeros</span
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col
            sm="12" md="4"
            v-for="(alojamiento, i) in alojamientos"
            :key="i"
            ><Experiencias :alojamiento="alojamiento"
          /></v-col>
        </v-row>
      </div>
    </section>

    <section id="Main__Galerias de imagenes">
      <div>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h2 class="Titulo_main_QUEVER">¡Siente Buenos Aires!</h2>
            <span class="Home__sub-titulo_principal py-5"
              >Enamórate de las imágenes</span
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col> <Galeria /> </v-col>
        </v-row>
      </div>
    </section>

    <section id="Footer">
      <div>
        <v-row align="center" justify="center">
          <v-col class="text-center" sm="12">
            <Footer />
          </v-col>
        </v-row>
      </div>
    </section>
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
.Home__titulo_principal {
  font-weight: 700;
  font-size: 60px;
  color: #d500f9;
}
.Home__sub-titulo_principal {
  color: #9e9e9e;
  font-size: 18px;
}
.Titulo_main_QUEVER {
  font-weight: 700;
  font-size: 40px;
  color: #d500f9;
}
</style>
