<script setup>
import { ref } from "vue";
import LoginForm from '../components/LoginForm.vue'
import {  useRouter } from "vue-router";

const items = ref([
  {
    src: "img/capacitacion_PAS.jpg",
  },
]);
const { push } = useRouter()

const toHome = () => {
  push("/concursos");
};

</script>

<template>
  <div>
    <v-carousel
      hide-delimiters
      height="200px"
      :continuous="false"
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
    <v-container class="conteiner-form_login" > 
      <v-btn class="mb-2" icon dark @click="toHome">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    </v-container >
    <v-container class="conteiner-form_login" >      
      <LoginForm />
    </v-container >

  </div>
</template>

<style>
.conteiner-form_login{
  margin-top: 0px;
}
</style>
