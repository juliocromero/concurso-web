<script setup>
import { getCurrentInstance, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { VueEditor } from "vue3-editor";
import pdftest from '../../public/anexo_III.pdf'
import Logo_UNSAM from '../assets/logo.png'



const createPdfAnexoIII = () => {
  console.log(jspdf)
  const doc = new jspdf.jsPDF(pdftest)
  doc.text("Gerencia de Informatica", 130, 10); 
  doc.addImage(Logo_UNSAM, 'png', 10, 2, 50, 10)
  doc.line(10, 15, 200, 15)
  doc.setTextColor("#6a99c0");
  doc.setFontSize(9);
  doc.text("Formularios a Generar", 10, 20)
  doc.text(`Gerencia de Informática 12 Formularios a Generar ANEXO III – RESOLUCIÓN N°885/2021`, 10, 30)
  doc.setTextColor("black");
  doc.text("NOTA SOLICITUD DE INSCRIPCIÓN", 105, 40, {align:"center"})
  doc.setFontSize(7);
  doc.text('San Martín, ........de .......................de ..........-', 200, 60 ,{align:"right"})
  doc.setFontSize(9);
  doc.text(`SECRETARÍA ADMINISTRATIVA Y LEGAL:`,10,70)
  doc.text(`Tengo el agrado de dirigirme a Ud. a fin de presentar la inscripción al:`,10,75)
  /* doc.table(10, 200, ["asdasd","asdasd"], ["asdasd","asdasdasd"]) */
  doc.save("a4.pdf");
}

createPdfAnexoIII()

import {
  getConcursoOne,
  postInscription,
} from "../components/concurso/Services";
import Pdf from "../components/concurso/Pdf.vue";

const props = defineProps({ title: String, open: Boolean });
const dialog = ref(props.open || false);

const titleConcurso = reactive({});

onMounted(async () => {
  const { params } = useRoute();
  const concursoOne = await getConcursoOne(params.id);
  titleConcurso.data = concursoOne;
});

const user = reactive({
  name: "",
  apellido: "",
  email: "",
  dni: null,
  fecha_nac: "",
  telefono: null,
  calle: "",
  numero: null,
  piso: "",
  depto: "",
  cod_postal: "",
  localidad: "",
  educacion: "",
  institucion: "",
  titulo: "",
  fecha_ingreso: "",
  dur_curso: "",
  id_concurso: "",

  antec_laborales: "",
  cargo_ocupado: "",
  categoria: "1",
  agrupamiento: "",
  per_desempeño: "",
  persona_a_cargo: "",
  eva_desempeño: "",
  lic_con_o_sin_gose_de_sueldo: "",
  sanciones: "",
  otras_referencias: "",
  otros_antecedente_laborales: "",
});

const emit = defineEmits(["noRegister"]);
const params = useRoute();
const isLogin = () => {
  const token = localStorage.getItem("token");
  if (token) {
    dialog.value = true;
  } else {
    emit("noRegister");
  }
};
const valid = ref({
  form1: null,
});

const tabs = ref(1);

const validOne = ref();
const validTwo = ref();
const validThree = ref();
const validFour = ref();

const { refs } = getCurrentInstance();

const form = ref();

user.id_concurso = parseInt(params.params.id);
const userResult = ref();

const validate = async () => {
/*   const { valid } = await form.value.validate();
 */
  if (true) {
    if (tabs.value < 5) tabs.value++;
    if (tabs.value == 5) {
      /* userResult.value = postInscription(user); */
    }
  }
};
const rulesEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const { push } = useRouter();
const toHome = () => {
  push("/concursos");
};
</script>
<template>
  <v-container
    style="height: max-content"
    class="d-flex flex-column justify-space-between container-form"
  >
    <v-btn class="mb-2" icon dark @click="toHome">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-window v-model="tabs" v-if="tabs < 5">
      <h1 class="text-center">{{ titleConcurso.data?.name }}</h1>

      <v-window-item :value="1">
        <v-form ref="form" v-model="validOne">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.name"
                :counter="30"
                label="Nombre"
                :rules="[(name) => !!name || 'Es requerido']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.apellido"
                :counter="30"
                :rules="[(apellido) => !!apellido || 'Es requerido']"
                label="Apellido"
                variant="solo"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field
                variant="solo"
                v-model="user.email"
                :rules="[(email) => rulesEmail.test(email) || 'Email Invalido']"
                label="Email"
                required
              ></v-text-field
            ></v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.dni"
                :rules="[
                  (dni) => !!dni || 'Es requerido',
                  (dni) => dni.length < 9 || 'DNI invalido',
                ]"
                label="DNI"
                required
                type="Number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.fecha_nac"
                label="Nacimiento"
                type="date"
                id="start"
                name="trip-start"
                min="01/01/1940"
                required
                :rules="[(fecha_nac) => !!fecha_nac || 'Es requerido']"
              ></v-text-field
            ></v-col>
            <v-col cols="12" sm="12">
              <v-text-field
                variant="solo"
                v-model="user.telefono"
                :rules="[(telefono) => !!telefono || 'Es requerido']"
                label="Telefono"
              ></v-text-field
            ></v-col>
          </v-row>
        </v-form>
      </v-window-item>

      <v-window-item :value="2">
        <v-form ref="form" v-model="validTwo">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.calle"
                :rules="[(calle) => !!calle || 'Es requerido']"
                label="Calle"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.numero"
                :rules="[(numerodecalle) => !!numerodecalle || 'Es requerido']"
                label="Numero"
                required
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                variant="solo"
                v-model="user.piso"
                :rules="[(piso) => !!piso || 'Es requerido']"
                label="Piso"
                required
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                variant="solo"
                v-model="user.depto"
                :rules="[(depto) => !!depto || 'Es requerido']"
                label="Depto"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                variant="solo"
                v-model="user.cod_postal"
                :rules="[(postal) => !!postal || 'Es requerido']"
                label="Codigo Postal"
                required
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.localidad"
                :rules="[(localidad) => !!localidad || 'Es requerido']"
                label="Localidad"
                required
              ></v-text-field>
            </v-col>
            <!-- <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.provincia"
                :rules="[(provincia) => !!provincia || 'Es requerido']"
                label="Provincia"
                required
              ></v-text-field>
            </v-col> -->
          </v-row>
        </v-form>
      </v-window-item>

      <!-- <v-window-item :value="3">
        <VueEditor v-model="text" />
      </v-window-item> -->
      <v-window-item :value="3">
        <v-form ref="form" v-model="validThree">
          <v-row>
            <v-col cols="12" sm="6"
              ><v-select
                variant="solo"
                v-model="user.educacion"
                label="Educacion"
                :items="[
                  'Primaria',
                  'Secundaria',
                  'Terciario',
                  'Univercitario',
                ]"
              ></v-select
            ></v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.titulo"
                :rules="[(titulo) => !!titulo || 'Es requerido']"
                label="Titulo"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.institucion"
                :rules="[(institucion) => !!institucion || 'Es requerido']"
                label="Institucion"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.fecha_ingreso"
                label="Fecha de Ingreso"
                min="1920-12-01"
                type="date"
                pattern="\d{4}-\d{2}-\d{2}"
                required
                :rules="[
                  (fechaDeIngreso) => !!fechaDeIngreso || 'Es requerido',
                ]"
              ></v-text-field
            ></v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.dur_curso"
                :rules="[(duracionCurso) => !!duracionCurso || 'Es requerido']"
                label="Duracion curso"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-window-item>

      <v-window-item :value="4">
        <v-form ref="form" v-model="validFour">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.cargo_ocupado"
                :rules="[(cargo) => !!cargo || 'Es requerido']"
                label="Cargo ocupado"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.categoria"
                type="number"
                :rules="[(categoria) => !!categoria || 'Es requerido']"
                label="Categoría"
                required
              ></v-text-field>
            </v-col>
             <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.agrupamiento"
                :rules="[(agrupamiento) => !!agrupamiento || 'Es requerido']"
                label="Agrupamiento"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.per_desempeño"
                :rules="[(desempeño) => !!desempeño || 'Es requerido']"
                label="Período desempeño"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.persona_a_cargo"
                :rules="[(cargo) => !!cargo || 'Es requerido']"
                type="number"
                label="Personal a cargo"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.eva_desempeño"
                :rules="[(desempeño) => !!desempeño || 'Es requerido']"
                label="Evaluación desempeño"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.lic_con_o_sin_gose_de_sueldo"
                :rules="[(sueldo) => !!sueldo || 'Es requerido']"
                label="Licencias con y sin goce de sueldo"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.sanciones"
                :rules="[(sanciones) => !!sanciones || 'Es requerido']"
                label="Sanciones"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.otras_referencias"
                :rules="[(referencias) => !!referencias || 'Es requerido']"
                label="Otras referencias"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.antec_laborales"
                :rules="[
                  (antecedentesLaborales) =>
                    !!antecedentesLaborales || 'Es requerido',
                ]"
                label="antecedentes laborales"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                variant="solo"
                v-model="user.otros_antecedente_laborales"
                :rules="[
                  (antecedentesLaborales) =>
                    !!antecedentesLaborales || 'Es requerido',
                ]"
                label="Otros antecedentes laborales"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-window-item>
    </v-window>

    <div class="mt-4 d-flex justify-space-between" v-if="tabs < 5">
      <v-btn
        @click="tabs > 1 ? tabs-- : tabs"
        :disabled="tabs == 1 ? true : false"
        >Atras</v-btn
      >
      <v-btn @click="validate">Siguiente</v-btn>
    </div>
    <div v-else>
      <Pdf :result="userResult" />
    </div>
  </v-container>
</template>

<style>
.container-form {
  height: calc(100vh - 20px);
  color: white;
}
/* .table-pdf td {
  color: black;
} */
.quillWrapper {
  background: white;
}
</style>
