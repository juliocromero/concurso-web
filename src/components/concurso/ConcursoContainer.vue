<script setup>
import { onMounted, reactive, ref } from "vue";
import Concurso from "./Concurso.vue";
import capacitacion from "../../assets/capacitacion_PAS.jpg";
import data from "./data.js";
import LoginForm from "./LoginForm.vue";
import { useRouter } from "vue-router";
import { getConcursos } from "./Services";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

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
const concursoDrowMove = (even) => {
  console.log(even.target, "asdasdasdasd");
};
const moveConcursos = (ev) => {
  const concursoDrow = document.getElementById("concurso-drow");
  concursoDrow.addEventListener("mousemove", concursoDrowMove);
};
const stopConcurso = () => {
  const concursoDrow = document.getElementById("concurso-drow");
  concursoDrow.removeEventListener("mousemove", concursoDrowMove);
};

const width = ref("1.5");

const creacteGridConcurso = (value) => {
  if (value < 700) {
    width.value = 1;
  } else if (value > 700 && value < 900) {
    width.value = 2.5;
  } else if (value > 900 && value < 1100) {
    width.value = 3.0;
  } else if (value > 1100 && value < 1300) {
    width.value = 3.5;
  } else if (value > 1300 && value < 1500) {
    width.value = 4.0;
  } else if (value > 1500 && value < 1700) {
    width.value = 4.5;
  } else if (value > 1700 && value < 1900) {
    width.value = 5.0;
  } else if (value > 1700) {
    width.value = 5.5;
  }
};

addEventListener("resize", (event) => {
  creacteGridConcurso(event.target.innerWidth);
});

creacteGridConcurso(document.body.clientWidth);
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
  <Carousel :items-to-show="width" :wrap-around="true">
    <Slide v-for="concurso in concursos" :key="concurso.id">
      <Concurso :items="concurso" @noRegister="noRegister" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
  <v-container class="container-concurso">
    <!-- <div v-for="concurso in concursos" :key="concurso.id"  class="mt-4 pa-4 ">
      <div>
        <Concurso :items="concurso" @noRegister="noRegister" />
      </div>
    </div> -->

    <LoginForm
      :isLogin="isLogin"
      @closeLogin="noRegister"
      @loginIn="checkLogin()"
    />
  </v-container>
</template>
<style scoped>
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
