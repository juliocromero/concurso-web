<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import LoginForm from "./LoginForm.vue";
import Block from "../../assets/icons/Block.vue";
import Canvas from "../../assets/icons/Canvas.vue";
import { getIsLogin } from './Services'
const { items, disabled } = defineProps({
  items: Object,
  disabled: { type: Boolean, required: false, default: false },
});
const emit = defineEmits(["noRegister"]);
const expand = ref(false);
const descriptionExpand = ref(false);
const modalInscription = ref(false);

const { push } = useRouter();

const loginIn = async () => {
  const token = await getIsLogin()
  localStorage.setItem('idConcurso', items.id)
  if (token.data) {
    push(`/concursos/${items.id}`);
  } else {
    push('/login', {reload: true})
  }
};
const active = ref(false);

const typeJurado = (type) => {
  switch (type) {
    case 1:
      return "TITULAR";
    case 2:
      return "SUPLENTE";
    case 3:
      return "VEEDOR";
  }
};


const toNomina = (id) => {
  push(`/nomina/${id}`);
};

const verLlamado = () => {
  push('/verLlamado')
}
</script>

<template>
  <div class="flex-column  pa-4" :class="!disabled ? 'carta-concurso': 'carta-nomina'" width="300px" >
    <v-card-item v-if="!disabled" class=""> <h4 class="font-weight-bold">Concurso N° {{ items.numero }}</h4></v-card-item>
    <v-card-text v-if="!disabled" class="py-0 content_concursos">
      <div class="d-flex">
        <p class="font-weight-bold">N° de expediente :</p> {{ items.expediente }}
      </div>
      <div>
        <p class="font-weight-bold">Denominacion del cargo:</p>{{ items.denominacion_del_cargo }}
      </div>
      <div class="d-flex">
        <p class="font-weight-bold">Categoria : </p> {{ items.categoria }}
      </div>
      <div >
        <p class="font-weight-bold">Dependencia : </p> {{ items.dependencias.name }}
      </div>
      <div
        class="w-100 d-flex justify-end"
        v-if="items.agrupamiento.length > 200"
      >
        <v-btn variant="text" @click="active = !active">{{
          active ? "ver menos" : "ver mas"
        }}</v-btn>
      </div>
    </v-card-text>


    <v-card-item v-if="disabled" class=""> <h4 class="font-weight-bold">Concurso N° {{ items.numero }}</h4></v-card-item>
    <v-card-text v-if="disabled" class="py-0 content_concursos content-nomina__inscripto">
      <div class="d-flex">
        <p class="font-weight-bold">N° de expediente :</p> {{ items.expediente }}
      </div>
      <div>
        <p class="font-weight-bold">Denominacion del cargo:</p>{{ items.denominacion_del_cargo }}
      </div>
      <div class="d-flex">
        <p class="font-weight-bold">Categoria : </p> {{ items.categoria }}
      </div>
      <div >
        <p class="font-weight-bold">Dependencia : </p> {{ items.dependencias.name }}
      </div>
      <h3 class="text-center">Jurados</h3>
      
      <v-divider class="ma-0"></v-divider>
      <v-list lines="one" >
        <v-list-item
        class="list_jurados"
          v-for="item in items.concurso_jurado.filter(e => e.id_tipo_jurado == 3)"
          :key="item.title"
          :title="item.jurado.name"
          :subtitle="typeJurado(item.id_tipo_jurado)"
        ></v-list-item>
      </v-list>
      <v-list lines="one" >
        <v-list-item
        class="list_jurados"
          v-for="item in items.concurso_jurado.slice(0, 1).filter(e => e.id_tipo_jurado == 1)"
          :key="item.title"
          :title="item.jurado.name"
          :subtitle="typeJurado(item.id_tipo_jurado)"
        ></v-list-item>
      </v-list>
      
      <div
        class="w-100 d-flex justify-end"
        v-if="items.agrupamiento.length > 200"
      >
        <v-btn variant="text" @click="active = !active">{{
          active ? "ver menos" : "ver mas"
        }}</v-btn>
      </div>
    </v-card-text>
    <!-- <div v-if="disabled" class="carta-concurso">
    <v-card-text >
      <div class="d-flex"><p class="font-weight-bold" >Concurso :</p> {{ items.numero }}</div>
      
      <v-list lines="one">
        <v-list-item
          v-for="item in items.concurso_jurado.slice(0, 2)"
          :key="item.title"
          :title="item.jurado.name"
          :subtitle="typeJurado(item.id_tipo_jurado)"
        ></v-list-item>
      </v-list>
    </v-card-text >
    </div> -->

      <div v-if="!disabled" class="d-flex justify-space-between">
      <button
        block
        variant="flat"
        color="#1a527c"
        class="button-concurso--action button-concurso--action-secundary"
        style="color:white"
        @click="verLlamado()"
        :disabled="disabled"
        size="small"
        >VER LLAMADO</button
      >
      <button
        block
        variant="flat"
        color=""
        class="button-concurso--action "
        @click="loginIn()"
        size="small"
        :disabled="disabled"
        > INSCRIBIRSE </button
      >
    </div>
    <div v-if="disabled" class="d-flex justify-space-between">
      <button
        block
        variant="flat"
        color="#1a527c"
        class="button-concurso--action button-concurso--action-secundary button-concurso--action-terciary"
        style="color:white"
        @click="toNomina(items.id)"
        size="small"
        >VER NOMINA</button
      >
    </div>
  </div>
</template>

<style scoped>

.content_concursos{
  overflow: auto;
}
.button-concurso--action{
  border: 1px solid #1a527c;
  border-radius: 5px;
  padding: 8px;
  color: #1a527c;
  font-size: 12px;
  
}
.button-concurso--action-secundary {
  background-color: #1a527c;
}
.button-concurso--action-terciary{
  width:100%;
}
.carta-concurso{
  width: 270px;
  height: 350px;
  border: 1px solid #545454;
  display: flex;
}
.concurso__description {
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.concurso__ver-mas {
  width: 100%;
}
.canvas-cupo {
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  text-align: end;
  padding: 8px 20px;
}
.carta-nomina{
  
  width: 270px;
  height: 550px;
  border: 1px solid #545454;
  display: flex;
}
.list_jurados{
  text-align: center;
}
</style>
