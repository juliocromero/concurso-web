
<script setup>
import { ref } from "vue";
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { getConcursoOne } from "../components/concurso/Services";

const { params } = useRoute();

const nomina = ref();

onMounted(async () => {
  nomina.value = await getConcursoOne(params.id);
});

const typoJurado = (id) => {
  switch (id) {
    case 1:
      return "TITULAR";
    case 2:
      return "SUPLENTE";
    case 3:
      return "VEEDOR DE LA ASOCIACIÓN GREMIAL";
    default:
      return "";
  }
};

const forTypeOfJurado = computed(() => {
  return nomina.value?.concurso_jurado.filter((e) => e.id_tipo_jurado == 1);
});
const forTypeOfJuradoSuplente = computed(() => {
  return nomina.value?.concurso_jurado.filter((e) => e.id_tipo_jurado == 2);
});
const forTypeOfJuradoVeedor = computed(() => {
  return nomina.value?.concurso_jurado.filter((e) => e.id_tipo_jurado == 3);
});
const { push } = useRouter()
const toHome = ()=> {
  push('/concursos')
}


</script>

<template>

  <v-container>
    <v-btn class="mb-2" icon dark @click="toHome">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-table v-if="nomina" fixed-header>
      <tbody>
        <tr>
          <td class="color_t" colspan="4">
            <strong
              >NOMINA DE INSCRIPTOS AL CONCURSO PARA LA COBERTURA DE CARGOS DEL
              PERSONAL NO DOCENTE (PAS) S/RCS 64/2015</strong
            >
          </td>
        </tr>
        <tr>
          <td width="28%" class="ancho33">CONCURSO N° {{ nomina.numero }}</td>
          <td width="20%" class="ancho33 center">
            EXPEDIENTE N° {{ nomina.expediente }}
          </td>
          <td class="ancho33 center" colspan="3">D. SA N° {{nomina?.sa_rr_nro}}</td>
        </tr>
        <tr>
          <td class="ancho33">TIPO DE CONCURSO</td>
          <td class="ancho33 center">{{ nomina.estado.name }}</td>
          <td colspan="3" class="ancho33 center">{{ nomina.tipo_concurso }}</td>
        </tr>
        <tr>
          <td class="color_t text-center" colspan="5">DATOS DEL CARGO A CONCURSAR</td>
        </tr>
        <tr>
          <td>DEPENDENCIA</td>
          <td colspan="5" class="center text-center" style="text-transform: uppercase">
            {{ nomina.dependencia }}
          </td>
        </tr>
        <tr>
          <td>SUBDEPENDENCIA</td>
          <td colspan="5" class="center text-center">
            {{ nomina.subdependencia }}
          </td>
        </tr>
        <tr>
          <td class="ancho25">CATEGORIA (CCT Decreto N° 366/06)</td>
          <td class="center">{{nomina?.categoria}}</td>
          <td width="30%" class="ancho25">(CANTIDAD DE CARGOS A CUBRIR)</td>
          <td width="22%" colspan="2" class="center ancho25">{{}}</td>
        </tr>
        <tr>
          <td>CARGO</td>
          <td colspan="5" class="center">
            {{}}
          </td>
        </tr>
        <tr>
          <td colspan="5" class="color_t text-center">NOMINA DE INSCRIPTOS AL CONCURSO</td>
        </tr>
      </tbody>
    </v-table>
    <v-table>
      <tbody>
        <tr>
          <td colspan="2" class="color_t">NOMBRE Y APELLIDO</td>
          <td colspan="2" class="color_t">DNI</td>
        </tr>
        <tr v-for="(aspirante, index) in nomina?.aspirante" :key="index">
          <td style="text-transform: uppercase" >{{aspirante.name}} {{aspirante.apellido}}</td>
          <td class="center" colspan="3">{{aspirante.dni}}</td>
        </tr>
      </tbody>
    </v-table>
    <v-table fixed-header class="informacion-table" style="">
      <tbody>
        <tr>
          <td colspan="4" class="color_t">SELECCIÓN Y EVALUACIÓN</td>
        </tr>
        <tr>
          <td class="color_t ancho25">EVALUACIÓN</td>
          <td class="color_t ancho25">DIA</td>
          <td class="color_t">HORA</td>
          <td class="color_t ancho33">LUGAR</td>
        </tr>
        <tr>
          <td>ENTREVISTA PERSONAL<br />(publicada en llamado)</td>
          <td>{{nomina?.dia_entrevista}}</td>
          <td> {{nomina?.hora_entrevista}}</td>
          <td>
            {{nomina?.lugar_entrevista}}
          </td>
        </tr>
        <tr>
          <td colspan="4" class="color_t text-center">INTEGRANTES DEL JURADO</td>
        </tr>
        <tr v-if="forTypeOfJurado?.length > 0">
          <td colspan="4" class="color_t text-center">TITULAR</td>
        </tr>
        <tr v-if="forTypeOfJurado?.length > 0">
          <td class="color_t">NOMBRE Y APELLIDO</td>
          <td class="color_t" colspan="2">DNI</td>
          <td class="color_t">CARGO</td>
        </tr>
        <tr v-for="(jurado, index) in forTypeOfJurado" :key="index">
          <td style="text-transform: uppercase">
            {{ jurado.jurado.name }} {{ jurado.jurado.apellido }}
          </td>
          <td class="center" colspan="2">{{ jurado.jurado.dni }}</td>
          <td>DECANO INSTITUTO</td>
        </tr>
        <tr v-if="forTypeOfJuradoSuplente?.length > 0">
          <td colspan="4" class="color_t text-center">SUPLENTES</td>
        </tr>
        <tr v-if="forTypeOfJuradoSuplente?.length > 0">
          <td class="color_t">NOMBRE Y APELLIDO</td>
          <td class="color_t" colspan="2">DNI</td>
          <td class="color_t">CARGO</td>
        </tr>
        <tr v-for="(jurado, index) in forTypeOfJuradoSuplente" :key="index">
          <td style="text-transform: uppercase">
            {{ jurado.jurado.name }} {{ jurado.jurado.apellido }}
          </td>
          <td class="center" colspan="2">{{ jurado.jurado.dni }}</td>
          <td>DECANO INSTITUTO</td>
        </tr>
        <tr v-if="forTypeOfJuradoVeedor?.length > 0">
          <td colspan="4" class="color_t text-center">VEEDOR DE LA ASOCIACIÓN GREMIAL</td>
        </tr>
        <tr v-if="forTypeOfJuradoVeedor?.length > 0">
          <td class="color_t">NOMBRE Y APELLIDO</td>
          <td class="color_t" colspan="2">DNI</td>
          <td class="color_t">CARGO</td>
        </tr>
        <tr v-for="(jurado, index) in forTypeOfJuradoVeedor" :key="index">
          <td style="text-transform: uppercase">
            {{ jurado.jurado.name }} {{ jurado.jurado.apellido }}
          </td>
          <td class="center" colspan="2">{{ jurado.jurado.dni }}</td>
          <td>DECANO INSTITUTO</td>
        </tr>
        <!-- <tr>
          <td colspan="4" class="color_t">SUPLENTES</td>
        </tr>
        <tr>
          <td class="color_t">NOMBRE Y APELLIDO</td>
          <td class="color_t" colspan="2">DNI</td>
          <td class="color_t">CARGO</td>
        </tr>
        <tr>
          <td>MIRNA LORENA IBAÑEZ</td>
          <td class="center" colspan="2">23.412.281</td>
          <td>DIRECTORA ADMINISTRATIVA (CAT. 2)</td>
        </tr>
        <tr>
          <td>GASTON LEANDRO COMESAÑA</td>
          <td class="center" colspan="2">22.467.417</td>
          <td>COORDINADOR ADMINISTRATIVO DE SEDES (CAT. 3)</td>
        </tr>
        <tr>
          <td colspan="4" class="color_t">VEEDOR DE LA ASOCIACIÓN GREMIAL</td>
        </tr>
        <tr>
          <td colspan="2" class="color_t">NOMBRE Y APELLIDO</td>
          <td colspan="2" class="color_t">DNI</td>
        </tr>
        <tr></tr>
        <tr>
          <td colspan="2">EDUARDO MARTINEZ</td>
          <td class="center" colspan="2">23.899.367</td>
        </tr> -->
      </tbody>
    </v-table>
  </v-container>
</template>


<style>
.color_t {
  color: white;
  background-color: var(--color-brand);
}
</style>