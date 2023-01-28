<script setup>
import { reactive, ref } from 'vue'
import Concurso from "./Concurso.vue"
import capacitacion from '../../assets/capacitacion_PAS.jpg'
import data from './data.js'
import LoginForm from './LoginForm.vue'
import FormConcurso from './FormConcurso.vue'

const isLogin = ref(false)
const openFormConcurso = ref(false)

const concursos = ref(data)
const items = ref([
  {
    src: capacitacion,
  },
]);

const noRegister = ()=> {
    isLogin.value = !isLogin.value 
}
const checkLogin = () => {

    openFormConcurso.value = !openFormConcurso.value

    console.log(openFormConcurso)
}
</script>

<template>
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
    <v-container>   
        <div v-for="(concurso) in concursos" :key="concurso.id" class="mt-4"> 
            <Concurso :items="concurso" @noRegister="noRegister" />
        </div> 
        
    
      <LoginForm :isLogin="isLogin" @closeLogin="noRegister"  @loginIn="checkLogin()" />
      <FormConcurso :open="openFormConcurso" />
    </v-container>
</template>
<style scoped>
</style>
