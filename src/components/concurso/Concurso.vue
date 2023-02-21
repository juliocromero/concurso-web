<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import LoginForm from "./LoginForm.vue";
import Block from "../../assets/icons/Block.vue";
import Canvas from "../../assets/icons/Canvas.vue";
const { items, disabled } = defineProps({
  items: Object,
  disabled: { type: Boolean, required: false, default: false },
});
const emit = defineEmits(["noRegister"]);
const expand = ref(false);
const descriptionExpand = ref(false);
const modalInscription = ref(false);

const { push } = useRouter();

const loginIn = () => {
  const token = localStorage.getItem("token");
  if (token) {
    push(`/concursos/${items.id}`, { name: "asdasd" });
  } else {
    emit("noRegister");
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
</script>

<template>
  <div class="canvas-cupo">
    <Canvas fill="#2C88CD" />
  </div>
  <v-card class="mx-auto d-flex flex-column" width="300px">
    <v-card-item :title="items.name"> </v-card-item>

    <v-card-text class="py-0">
      <div>
        {{ items.descripcion }}
      </div>
      <div class="pt-4">
        <Block />
      </div>

      <div
        class="w-100 d-flex justify-end"
        v-if="items.descripcion.length > 200"
      >
        <v-btn variant="text" @click="active = !active">{{
          active ? "ver menos" : "ver mas"
        }}</v-btn>
      </div>
    </v-card-text>

    <v-divider></v-divider>
    <v-card-text v-if="disabled">
      <h4 class="text-start pa-2">Concurso : {{ items.numero }}</h4>
      <v-divider />
      <h4>Jurados</h4>
      <v-list lines="one">
        <v-list-item
          v-for="item in items.concurso_jurado.slice(0, 2)"
          :key="item.title"
          :title="item.jurado.name"
          :subtitle="typeJurado(item.id_tipo_jurado)"
        ></v-list-item>
      </v-list>
      <v-btn block variant="flat" color="success" @click="toNomina(items.id)"
        >Ver mas</v-btn
      >
    </v-card-text>
    <v-card-actions v-if="!disabled">
      <v-btn
        block
        variant="flat"
        color="success"
        @click="loginIn()"
        :disabled="disabled"
        >Inscribirse</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<style scoped>
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
</style>
