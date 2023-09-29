<script setup>
import ConcursoContainer from "../components/concurso/ConcursoContainer.vue";
import logo from "../assets/logo.png";
import { createPdfAnexoIII, createPdfAnexoIV, createPdfAnexoV } from "../helpers/pdf";


</script>

<template>
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
