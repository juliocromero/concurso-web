<script setup>
import { ref } from 'vue'
import Concurso from "./Concurso.vue"

import data from './data.js'
const concursos = ref(data)

</script>

<template>
    <v-container>   
        <div v-for="(concurso) in concursos" :key="concurso.id" class="mt-4"> 
            <Concurso :items="concurso" />
        </div> 
    </v-container>
</template>

<style scoped>
</style>
