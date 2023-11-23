<script setup>
import ConcursoContainer from "../components/concurso/ConcursoContainer.vue";
import logo from "../assets/logo.png";
import {
  createPdfAnexoIII,
  createPdfAnexoIV,
  createPdfAnexoV,
} from "../helpers/pdf";
import jsonConcurso from "../../pdfprueba.json";

/* function enviar() {
  createPdfAnexoV(jsonConcurso.data, jsonConcurso.concurso);
}

function enviarCentral() {
  createPdfAnexoIV(jsonConcurso.data, jsonConcurso.concurso);
} */
</script>

<template>
  <!-- <v-btn @click="enviar()">enviar </v-btn>
  <v-btn @click="enviarCentral()">enviar centrar</v-btn> -->
  <ConcursoContainer />
</template>

<style scoped>
.brand-nav {
  width: 150px;
}
.footer {
  color: white;
}
</style>
