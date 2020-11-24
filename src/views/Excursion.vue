<template>
    <div>
        <h1>{{excursion.title}}</h1>
        <v-btn :to=" {name: 'Home'}">Volver al Inicio</v-btn>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';
export default {
    name: "Excursion",
    props: ["id"],
    computed:{
        ...mapGetters(['getExcursion']),
        excursion(){
            const id = this.id
            return this.getExcursion(id).data;
        }
    }
}
</script>