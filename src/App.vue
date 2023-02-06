<script setup>
import { ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const {name} = useRoute()

console.log(name)
const drawer = ref(false);
const itemsNav = ref([
  { title: "Institucional", value: 1 },
  { title: "Enseñanza", value: 2 },
  { title: "I + D + i", value: 3 },
  { title: "Agenda cultural", value: 4 },
  { title: "UNSAM Edita", value: 5 },
  { title: "Programas", value: 6 },
]);


</script>

<template>
    <v-layout>
      <v-main class="mt-22 background-bran main-concurso" >
        <v-list class="background-bran pb-0 pt-0 d-flex justify-end">
          <v-btn variant="text" color="white" size="x-small"
            >UNSAM Digital</v-btn
          >
          <v-btn variant="text" color="white" size="x-small">Biblioteca</v-btn>
          <v-btn variant="text" color="white" size="x-small">Alumnos</v-btn>
          <v-btn variant="text" color="white" size="x-small">Docentes</v-btn>
          <v-btn variant="text" color="white" size="x-small">Personal</v-btn>
        </v-list>
        <RouterView />
      </v-main>
    </v-layout>
</template>

<style scoped>
.main-concurso {
  min-height: 100vh !important;
  height: max-content !important;
  display: flex;
  flex-direction: column;
}
</style>
