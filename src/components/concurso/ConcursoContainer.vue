<script setup>
import { computed, onBeforeMount, onMounted, reactive, ref } from "vue";
import Concurso from "./Concurso.vue";
import capacitacion from "../../assets/capacitacion_PAS.jpg";
import data from "./data.js";
import LoginForm from "./LoginForm.vue";
import { useRouter } from "vue-router";
import { getConcursos } from "./Services";
import ConcursoInscripcion from "./ConcursosInscripcion.vue";
import Nominas from "./Nominas.vue";
const isLogin = ref(false);
const openFormConcurso = ref(false);

const concursos = ref();
const items = ref([
  {
    src: capacitacion,
  },
]);
onMounted(async () => {
  const concursosData = await getConcursos();
  concursos.value = concursosData;
});

const { push } = useRouter();
const noRegister = () => {
  isLogin.value = !isLogin.value;
};
const checkLogin = () => {
  push("/concursos/1");
};
const select = ref({ name: "Concurso - Inscripción", id: "2" });
const typeConcurso = ref([
  /* { name: "Presentación", id: "1" }, */
  { name: "Concurso - Inscripción", id: "2" },
  /* { name: "Marco Lesgilativo", id: "3" }, */
  { name: "Nómina de Inscripción", id: "4" },
]);

const typeDeConcurso = ref(ConcursoInscripcion);

const componentCaseSituation = computed(() => {
 
  const {id} = select.value;
  switch (id) {
    case "2":
      return ConcursoInscripcion;
    case "4":
      return Nominas;
  }
});



const changeType = type => {
  switch (type) {
    case 2:
      select.value = { name: "Concurso - Inscripción", id: "2" };
      break;
    case 4:
      select.value = { name: "Nómina de Inscripción", id: "4" };

      break;
  }
};
</script>

<template>
  <!-- <v-select
    class="pa-2 select-type"
    variant="solo"
    v-model="select"
    :items="typeConcurso"
    item-title="name"
    item-value="id"
    label="Select"
    persistent-hint
    return-object
    single-line
  ></v-select> -->
  <div class="d-flex">
  <v-btn :color="select.id == 2 ? '#1a527c': ''" :class="select.id == 2 ? 'color-text': ''" class="mr-2 " @click="changeType(2)">Concursos vigentes</v-btn>
  <v-btn :color="select.id == 4 ? '#1a527c': ''" :class="select.id == 4 ? 'color-text': ''" @click="changeType(4)">Nomina de inscriptos</v-btn>
</div>
  <v-container class="container-concurso">
    <!-- <div v-for="concurso in concursos" :key="concurso.id"  class="mt-4 pa-4 ">
      <div>
        <Concurso :items="concurso" @noRegister="noRegister" />
      </div>
    </div> -->
    <!-- :concursos="concursos" @noRegister="noRegister"  -->
    <h2 v-if="select.id == 2">Concurso no docentes vigentes</h2>
    <h2 v-if="select.id == 4">Nominas de inscriptos</h2>
    <component
      :is="componentCaseSituation"
      :concursos="concursos"
      @noRegister="noRegister"
    />
    <LoginForm
      :isLogin="isLogin"
      @closeLogin="noRegister"
      @loginIn="checkLogin()"
    />
  </v-container>
</template>
<style scoped>
.select-type {
  display: block;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
