<script setup>
import { getCurrentInstance, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { VueEditor } from "vue3-editor";
import {
  getConcursoOne,
  postInscription,
} from "../components/concurso/Services";
import Pdf from '../components/concurso/Pdf.vue'

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

const changeText = (res) => {
  console.log(res);
};
const validOne = ref();
const validTwo = ref();
const validThree = ref();
const { refs } = getCurrentInstance();
const form = ref();

user.id_concurso = parseInt(params.params.id);
const userResult = ref()

const validate = async () => {
  if (tabs.value < 5) tabs.value++;
  if (tabs.value == 5) {
    console.log("creado con exito");
  }
  /* const { valid } = await form.value.validate();

  if (valid) {
    if (tabs.value < 5) tabs.value++;
    if (tabs.value == 5) {
      userResult.value = postInscription(user);
    }
  } */
};
const rulesEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


</script>
<template>
  <v-container style="height: max-content;" class="d-flex flex-column justify-space-between container-form">
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

      <v-window-item :value="3">
        <VueEditor v-model="text" />
      </v-window-item>
      <v-window-item :value="4">
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
