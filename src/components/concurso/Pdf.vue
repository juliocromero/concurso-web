<script setup>
import { computed, ref } from "vue";
import html2pdf from "html2pdf.js";
import logo from "../../assets//logo.png";

import { useRoute, useRouter } from "vue-router";
/* const { result } = defineProps({
    result: Object
}) */
const result = ref({
  id: 9,
  name: "123123",
  apellido: "123123",
  email: "123123@asd.com",
  dni: "123123",
  fecha_nac: "0323-02-21",
  telefono: "123123123",
  calle: "123123",
  numero: "123123",
  piso: "123123",
  depto: "123123",
  cod_postal: "123123",
  localidad: "123",
  educacion: "Primaria",
  institucion: "123123",
  titulo: "123123",
  fecha_ingreso: "0003-02-21",
  dur_curso: "123123",
  id_concurso: 1,
  sys_creation_date: "2023-02-05T22:02:04.909Z",
  sys_update_date: null,
  sys_created_by: null,
  sys_updated_by: null,
});

const fechaDeCreacion = computed(() => {
  const res = result.value.sys_creation_date.split("-");
  res[2] = res[2].split("T")[0];
  return res;
});

const exportToPDF = () => {
  /* html2pdf(document.getElementById("element-to-convert"), {
    margin: 1,
    filename: "i-was-html.pdf",
  }); */
  Anexo1();
};
const path = useRouter();
const Anexo1 = () => {
  var link = document.createElement("a");
  link.href = "/anexo_III.pdf";
  link.download = "anexo_III.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
};
const Anexo2 = () => {
  var link = document.createElement("a");
  link.href = "/anexo_IV.pdf";
  link.download = "anexo_IV.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
};
const Anexo3 = () => {
  var link = document.createElement("a");
  link.href = "/anexo_V.pdf";
  link.download = "anexo_V.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
};
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
        <v-list-item subtitle="anexo_III.pdf" prepend-icon="mdi-file-document" title="Anexo III">
          <template v-slot:append>
            <v-btn
              color="blue-grey"
              prepend-icon="mdi-cloud-upload"
              @click="Anexo1"
            >
              Descarga
            </v-btn>
          </template>
        </v-list-item>
        <v-list-item subtitle="anexo_IV.pdf" prepend-icon="mdi-file-document" title="Anexo IV"
          ><template v-slot:append>
            <v-btn
              color="blue-grey"
              prepend-icon="mdi-cloud-upload"
              @click="Anexo2"
            >
              Descarga
            </v-btn>
          </template></v-list-item
        >
        <v-list-item subtitle="anexo_V.pdf" prepend-icon="mdi-file-document" title="Anexo V"
          ><template v-slot:append>
            <v-btn
              color="blue-grey"
              prepend-icon="mdi-cloud-upload"
              @click="Anexo3"
            >
              Descarga
            </v-btn>
          </template></v-list-item
        >
      </v-list>
    </v-card>
    <!-- <div class="d-flex justify-space-between">
      <v-btn class="mb-4" color="success" @click="exportToPDF">Anexo III</v-btn
      ><v-btn class="mb-4" color="success" @click="exportToPDF">Anexo IV</v-btn
      ><v-btn class="mb-4" color="success" @click="exportToPDF">Anexo V</v-btn>
    </div> -->

    <!-- <v-btn class="mb-4" block color="success" @click="exportToPDF"
      >Export to PDF</v-btn
    > -->

    <!-- <div id="app" ref="document">
      <div id="element-to-convert" style="background: white">
        <div class="pa-12">
          <div class="d-flex justify-space-between pa-2">
            <img :src="logo" alt="" />
            <h3 style="color: grey">Gerencia de Informática</h3>
          </div>
          <hr class="mt-4 mb-4" />
          <div style="color: blue; font-size: 20px">
            <p>Formularios a Generar</p>
            <p>ANEXO III – RESOLUCIÓN N°885/2021</p>
          </div>
          <center style="color: black">
            <h3 class="pa-4 pb-12"><u>NOTA SOLICITUD DE INSCRIPCIÓN</u></h3>
          </center>
          <p style="color: black" class="text-end">
            San Martín,{{ fechaDeCreacion[2] }} de {{fechaDeCreacion[1]}} de {{fechaDeCreacion[0]}}.-
          </p>
          <p style="color: black" class="pt-4">
            SECRETARÍA ADMINISTRATIVA Y LEGAL: Tengo el agrado de dirigirme a
            Ud. a fin de presentar la inscripción al:
          </p>
          <div style="color: black">
            <table
              class="mt-16 mb-16"
              cellspacing="0"
              cellpadding="0"
              style="
                width: 100%;
                border: 0.75pt solid #000000;
                -aw-border: 0.5pt single;
                border-collapse: collapse;
              "
            >
              <tbody>
                <tr style="height: 12.95pt">
                  <td
                    colspan="3"
                    style="
                      width: 473.8pt;
                      border-bottom-style: solid;
                      border-bottom-width: 0.75pt;
                      padding-right: 3.12pt;
                      padding-left: 3.12pt;
                      vertical-align: middle;
                      background-color: #bfbfbf;
                      -aw-border-bottom: 0.5pt single;
                    "
                  >
                    <p
                      style="
                        margin-top: 0pt;
                        margin-bottom: 8pt;
                        text-align: center;
                        font-size: 11pt;
                      "
                    >
                      <span style="font-weight: bold"
                        >CONCURSO PARA LA COBERTURA DE CARGOS DEL PERSONAL NO
                        DOCENTE
                      </span>
                    </p>
                  </td>
                </tr>
                <tr style="height: 19.9pt">
                  <td
                    style="
                      width: 147.1pt;
                      border-top-style: solid;
                      border-top-width: 0.75pt;
                      border-right-style: solid;
                      border-right-width: 0.75pt;
                      border-bottom-style: solid;
                      border-bottom-width: 0.75pt;
                      padding-right: 3.12pt;
                      padding-left: 3.12pt;
                      vertical-align: middle;
                      -aw-border-bottom: 0.5pt single;
                      -aw-border-right: 0.5pt single;
                      -aw-border-top: 0.5pt single;
                    "
                  >
                    <p
                      style="
                        margin-top: 0pt;
                        margin-bottom: 8pt;
                        font-size: 11pt;
                      "
                    >
                      <span>CONCURSO N° {{ result.id }} /20..</span>
                    </p>
                  </td>
                  <td
                    style="
                      width: 100.9pt;
                      border-top-style: solid;
                      border-top-width: 0.75pt;
                      border-right-style: solid;
                      border-right-width: 0.75pt;
                      border-bottom-style: solid;
                      border-bottom-width: 0.75pt;
                      padding-right: 3.12pt;
                      padding-left: 3.5pt;
                      vertical-align: middle;
                      -aw-border-bottom: 0.5pt single;
                      -aw-border-right: 0.5pt single;
                      -aw-border-top: 0.5pt single;
                    "
                  >
                    <p
                      style="
                        margin-top: 0pt;
                        margin-bottom: 8pt;
                        font-size: 11pt;
                      "
                    >
                      <span>Exp. N°…………..</span>
                    </p>
                  </td>
                  <td
                    style="
                      width: 211.8pt;
                      border-top-style: solid;
                      border-top-width: 0.75pt;
                      border-bottom-style: solid;
                      border-bottom-width: 0.75pt;
                      padding-right: 3.12pt;
                      padding-left: 3.5pt;
                      vertical-align: middle;
                      -aw-border-bottom: 0.5pt single;
                      -aw-border-top: 0.5pt single;
                    "
                  >
                    <p
                      style="
                        margin-top: 0pt;
                        margin-bottom: 8pt;
                        font-size: 11pt;
                      "
                    >
                      <span>D. SAD o RR N°………../20..</span>
                    </p>
                  </td>
                </tr>
                <tr style="height: 20.9pt">
                  <td
                    style="
                      width: 147.1pt;
                      border-top-style: solid;
                      border-top-width: 0.75pt;
                      border-right-style: solid;
                      border-right-width: 0.75pt;
                      border-bottom-style: solid;
                      border-bottom-width: 0.75pt;
                      padding-right: 3.12pt;
                      padding-left: 3.12pt;
                      vertical-align: middle;
                      -aw-border-bottom: 0.5pt single;
                      -aw-border-right: 0.5pt single;
                      -aw-border-top: 0.5pt single;
                    "
                  >
                    <p
                      style="
                        margin-top: 0pt;
                        margin-bottom: 8pt;
                        font-size: 11pt;
                      "
                    >
                      <span>DEPENDENCIA</span>
                    </p>
                  </td>
                  <td
                    colspan="2"
                    style="
                      width: 319.7pt;
                      border-top-style: solid;
                      border-top-width: 0.75pt;
                      border-bottom-style: solid;
                      border-bottom-width: 0.75pt;
                      padding-right: 3.12pt;
                      padding-left: 3.5pt;
                      vertical-align: middle;
                      -aw-border-bottom: 0.5pt single;
                      -aw-border-top: 0.5pt single;
                    "
                  >
                    <p
                      style="
                        margin-top: 0pt;
                        margin-bottom: 8pt;
                        font-size: 11pt;
                      "
                    >
                      <span style="-aw-import: ignore">&nbsp;</span>
                    </p>
                  </td>
                </tr>
                <tr style="height: 12.95pt">
                  <td
                    style="
                      width: 147.1pt;
                      border-right-style: solid;
                      border-right-width: 0.75pt;
                      border-bottom-style: solid;
                      border-bottom-width: 0.75pt;
                      padding-right: 3.12pt;
                      padding-left: 3.12pt;
                      vertical-align: middle;
                      -aw-border-bottom: 0.5pt single;
                      -aw-border-right: 0.5pt single;
                    "
                  >
                    <p
                      style="
                        margin-top: 0pt;
                        margin-bottom: 8pt;
                        font-size: 11pt;
                      "
                    >
                      <span>CARGO</span>
                    </p>
                  </td>
                  <td
                    colspan="2"
                    style="
                      width: 319.7pt;
                      border-bottom-style: solid;
                      border-bottom-width: 0.75pt;
                      padding-right: 3.12pt;
                      padding-left: 3.5pt;
                      vertical-align: middle;
                      -aw-border-bottom: 0.5pt single;
                    "
                  >
                    <p
                      style="
                        margin-top: 0pt;
                        margin-bottom: 8pt;
                        font-size: 11pt;
                      "
                    >
                      <span>&nbsp;</span>
                    </p>
                    <p
                      style="
                        margin-top: 0pt;
                        margin-bottom: 8pt;
                        font-size: 11pt;
                      "
                    >
                      <span style="-aw-import: ignore">&nbsp;</span>
                    </p>
                  </td>
                </tr>
                <tr style="height: 30.75pt">
                  <td
                    style="
                      width: 147.1pt;
                      border-right-style: solid;
                      border-right-width: 0.75pt;
                      padding-right: 3.12pt;
                      padding-left: 3.12pt;
                      vertical-align: middle;
                      -aw-border-right: 0.5pt single;
                    "
                  >
                    <p
                      style="
                        margin-top: 0pt;
                        margin-bottom: 8pt;
                        font-size: 11pt;
                      "
                    >
                      <span>CATEGORÍA </span>
                    </p>
                  </td>
                  <td
                    colspan="2"
                    style="
                      width: 319.7pt;
                      padding-right: 3.12pt;
                      padding-left: 3.5pt;
                      vertical-align: middle;
                    "
                  >
                    <p
                      style="
                        margin-top: 0pt;
                        margin-bottom: 8pt;
                        font-size: 11pt;
                      "
                    >
                      <span>&nbsp;</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="pa-12">
              <p
                style="
                  margin-top: 0pt;
                  margin-bottom: 8pt;
                  text-indent: 35.4pt;
                  text-align: justify;
                  line-height: 150%;
                "
              >
                <span>Se adjunta el </span
                ><span style="font-weight: bold"
                  >Formulario de Antecedentes Personales.</span
                >
              </p>
              <p
                style="
                  margin-top: 0pt;
                  margin-bottom: 8pt;
                  text-indent: 35.4pt;
                  text-align: justify;
                  line-height: 150%;
                "
              >
                <span>Sin otro particular lo saludo muy atentamente.</span>
              </p>
            </div>
            <div class="pa-12 d-flex flex-column align-end">
              <p
                style="
                  margin-top: 0pt;
                  margin-left: 177pt;
                  margin-bottom: 8pt;
                  text-indent: 35.4pt;
                  text-align: justify;
                  line-height: 150%;
                "
              >
                <span>Firma: ……………………………………………………</span>
              </p>
              <p
                style="
                  margin-top: 0pt;
                  margin-bottom: 8pt;
                  text-align: justify;
                  line-height: 150%;
                "
              >
                <span style="-aw-import: spaces"></span><span>Aclaración:</span
                ><span style="-aw-import: spaces"></span
                ><span>………………………………………..........</span>
              </p>
              <p
                style="
                  margin-top: 0pt;
                  margin-bottom: 8pt;
                  text-align: justify;
                  line-height: 150%;
                "
              >
                <span style="width: 35.4pt; display: inline-block"></span
                ><span style="width: 35.4pt; display: inline-block"></span
                ><span style="width: 35.4pt; display: inline-block">&nbsp;</span
                ><span style="width: 35.4pt; display: inline-block">&nbsp;</span
                ><span style="width: 35.4pt; display: inline-block">&nbsp;</span
                ><span style="width: 35.4pt; display: inline-block">&nbsp;</span
                ><span
                  >DNI: ..............................................</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style>
.img-brand {
  background: white;
}
</style>
