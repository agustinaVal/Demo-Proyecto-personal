<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Galeria",
  data() {
    return {
      items: [
        {
          src:
            "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/EWRWZLV7FZEM7C24TIEPFBJCP4.jpg",
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/0/0f/ObeliscoBA2017.jpg",
        },
        {
          src:
            "https://aws.traveler.es/prod/designs/v1/assets/940x627/157486.jpg",
        },
        {
          src:
            "https://turismo.buenosaires.gob.ar/sites/turismo/files/panoramica_barrio_la_boca_1500x610_0.jpg",
        },
      ],
    };
  },
};
</script>
