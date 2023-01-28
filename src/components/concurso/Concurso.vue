<script setup>
import { ref } from "vue";
import FormConcurso from "./FormConcurso.vue";
import LoginForm from "./LoginForm.vue";

const { items } = defineProps({
  items: Object,
});
const emit = defineEmits(['noRegister'])
const expand = ref(false);
const descriptionExpand = ref(false);
const modalInscription = ref(false);

const noRegister = (res) => {
  emit('noRegister')
};
</script>

<template>
  <v-card class="mx-auto" width="75%">
    <v-card-item :title="items.title"> </v-card-item>

    <v-card-text class="py-0">
      <div class="concurso__description" v-if="!items.active">
        {{ items.description }}
      </div>
      <v-expand-transition>
        <div v-if="items.active">
          {{ items.description }}
        </div>
      </v-expand-transition>

      <div
        class="w-100 d-flex justify-end"
        v-if="items.description.length > 200"
      >
        <v-btn variant="text" @click="items.active = !items.active">{{
          items.active ? "ver menos" : "ver mas"
        }}</v-btn>
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <FormConcurso :title="items.title" @noRegister="noRegister" />
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
</style>
