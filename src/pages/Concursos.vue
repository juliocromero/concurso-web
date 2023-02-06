<script setup>
import ConcursoContainer from "../components/concurso/ConcursoContainer.vue";
import logo from "../assets/logo.png";

</script>

<template>
  <ConcursoContainer />

  <v-footer class="background-bran footer">
    <div class="pt-0 d-flex justify-space-between w-100">
      
      <v-img :src="logo" min-width="200px" max-width="200px" height="50px" ></v-img>
      <div>
        <p>UNSAM Campus Miguelete, 25 de Mayo y Francia. C.P.: 1650.</p>
        <p>
          San Martín, Provincia de Buenos Aires, Argentina Teléfonos: 4006-1500
        </p>
        <p>
          Ver otros contactos por área comunicacion.institucional@unsam.edu.ar
        </p>
      </div>
    </div>
  </v-footer>
</template>

<style scoped>
.brand-nav {
  width: 150px;
}
.footer {
  color: white;
}
</style>
