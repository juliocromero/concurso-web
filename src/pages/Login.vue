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
    <v-container class="conteiner-form_login" > 
      <v-btn class="mb-2" icon dark @click="toHome" variant="text">
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
