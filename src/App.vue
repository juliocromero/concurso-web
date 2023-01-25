<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

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
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

     <!--  <v-app-bar prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-spacer></v-spacer>
        <img
          src="http://www.unsam.edu.ar/img/logo-unsam.png"
          class="brand-nav mr-2"
        />
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="left" temporary>
        <v-list :items="itemsNav" class="mt-7"></v-list>
      </v-navigation-drawer> -->

      <v-main class="mt-22" height="100vh">
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
        <v-footer class="background-bran footer">
          <div class="pt-0">
            <p>UNSAM Campus Miguelete, 25 de Mayo y Francia. C.P.: 1650.</p>
            <p>San
            Martín, Provincia de Buenos Aires, Argentina Teléfonos:  4006-1500 </p>
            <p> Ver otros contactos por área comunicacion.institucional@unsam.edu.ar</p>
          </div>

        </v-footer>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
.brand-nav {
  width: 150px;
}
.footer{
  color: white;
}
</style>
