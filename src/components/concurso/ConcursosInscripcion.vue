<script setup>
import { onMounted, reactive, ref , onBeforeMount} from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Concurso from './Concurso.vue'
const { concursos } = defineProps(['concursos']);

const width = ref("1.5");
const inscripcion = ref();

const emit = defineEmits(['noRegister'])

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

const IsRegister = () => {
  emit('noRegister')
};

</script>

<template>
    <div class="d-flex container-concurso " >
      <Concurso v-for="concurso in concursos" :key="concurso.id" :items="concurso" @noRegister="IsRegister" />
    </div>
</template>


<style>
.container-concurso{
  gap: 10px;
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