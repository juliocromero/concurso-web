<script setup>
import { computed, ref } from "vue";
import html2pdf from "html2pdf.js";
import logo from "../../assets//logo.png";
import { useRoute, useRouter } from "vue-router";

import { createPdfAnexoIII, createPdfAnexoIV, createPdfAnexoV } from "../../helpers/pdf";
const {  concurso, result } = defineProps({
  result: Object,
  concurso: Object
});
/* const fechaDeCreacion = computed(() => {
  const res = result.value.sys_creation_date.split("-");
  res[2] = res[2].split("T")[0];
  return res;
}); */

const exportToPDF = () => {
  /* html2pdf(document.getElementById("element-to-convert"), {
    margin: 1,
    filename: "i-was-html.pdf",
  }); */
  Anexo1();
};

const createTest = () => {
  createPdfAnexoV(result.value, concurso)
}
const path = useRouter();
</script>

<template>
  <div>
    <div>
      <v-img
        src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Logo_UNSAM.png"
        height="300px"
        class="img-brand"
      ></v-img>
      <v-alert type="success"> inscripción con exito </v-alert>
    </div>
    <v-card class="mx-auto mt-12" width="100%">
      <v-list v-model:opened="open">
        <v-list-item
          subtitle="anexo_III.pdf"
          prepend-icon="mdi-file-document"
          title="Anexo III"
        >
          <template v-slot:append>
            
            <v-btn
              color="blue-grey"
              prepend-icon="mdi-cloud-upload"
              @click="createPdfAnexoIII(result.value, concurso)"
            >
              Descarga
            </v-btn>
          </template>
        </v-list-item>
        <v-list-item
          subtitle="anexo_IV.pdf"
          prepend-icon="mdi-file-document"
          title="Anexo IV"
          ><template v-slot:append>
            <v-btn
              color="blue-grey"
              prepend-icon="mdi-cloud-upload"
              @click="createPdfAnexoIV(result.value, concurso)"
            >
              Descarga
            </v-btn>
          </template></v-list-item
        >
        <v-list-item
          subtitle="anexo_V.pdf"
          prepend-icon="mdi-file-document"
          title="Anexo V"
          ><template v-slot:append>
            <v-btn
              color="blue-grey"
              prepend-icon="mdi-cloud-upload"
              @click="createTest"
            >
              Descarga
            </v-btn>
          </template></v-list-item
        >
      </v-list>
    </v-card>
  </div>
</template>

<style>
.img-brand {
  background: white;
}
</style>
