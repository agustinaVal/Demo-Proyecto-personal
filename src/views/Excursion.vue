<template>
    <div>
        <h1>hola</h1>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';
export default {
    name: "Excursion",
    props: ["id"],
    computed:{
        ...mapGetters(['getExcursion'])
    }
}
</script>