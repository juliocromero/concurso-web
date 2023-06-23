
<script setup>
import { ref } from "vue";
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { getConcursoOne } from "../components/concurso/Services";

const formateDate = (value) => {
  var fechaActual = new Date(value);
  var dia = (fechaActual.getDate() + 1).toString().padStart(2, "0");
  var mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0"); // Los meses comienzan desde 0, por lo que se suma 1
  var año = fechaActual.getFullYear();
  fechaActual.setDate(dia, mes, año);
  const offset = fechaActual.getTimezoneOffset();
  fechaActual = new Date(fechaActual.getTime() - offset * 60 * 1000);
  dia = fechaActual.getDate().toString().padStart(2, "0");
  mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0"); // Los meses comienzan desde 0, por lo que se suma 1
  año = fechaActual.getFullYear();
  return `${dia}/${mes}/${año}`;
};
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
    <h2 class="font-weight-bold">Nomina de inscriptos</h2>    
    <h4 >Concurso N° {{ nomina?.numero }}</h4>
<div class="d-flex" >
  
  <img style="width: 50px; height: 50px;"
              src="https://unsam.edu.ar/img/logo-unsam-ch.png"
              class="img mr-2"
              alt="UNSAM"
              border="0"
            />
            <h4 class="font-weight-bold" style="width: 200px">Universidad Nacional de San Martin</h4>
</div>
<div>
  <h4 class="text-end">SECRETARÍA ADMINISTRATIVA</h4>
</div>
<v-divider></v-divider>
<div>
  <h4 class="text-center font-weight-black">ANEXO II- DISPOSICION S.AD N° 22/2016</h4>
</div>
<div>
  <h2 class="text-center pt-4 pb-4"> <u>F4. FORMULARIO PUBLICACION DE LA NOMINA DE INSCRIPTOS</u></h2>
</div>
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
          <td class="ancho33 center" colspan="3">D. SA N°   {{nomina.num_acto_adminstrativo}}</td>
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
            {{ nomina.dependencias?.name }}
          </td>
        </tr>
        <tr>
          <td>SUBDEPENDENCIA</td>
          <td colspan="5" class="center text-center">
            {{ nomina.id_subdependencia }}
          </td>
        </tr>
        <tr>
          <td class="ancho25">CATEGORIA (CCT Decreto N° 366/06)</td>
          <td class="center">{{nomina?.categoria}}</td>
          <td width="30%" class="ancho25">(CANTIDAD DE CARGOS A CUBRIR)</td>
          <td width="22%" colspan="2" class="center ancho25">{{nomina.cantidad_cargo_a_cubrir}}</td>
        </tr>
        <tr>
          <td>CARGO</td>
          <td colspan="5" class="center">
            {{nomina.denominacion_del_cargo}}
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
          <td>{{formateDate(nomina?.fecha_personal_jurado)}}</td>
          <td> {{nomina?.hora_personal_jurado}}</td>
          <td>
            {{nomina?.lugar_entrevista_fecha1}}
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
          <td class="center" colspan="2">{{jurado.jurado.cargo}}</td>
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
          <td class="text-center" colspan="2">{{ jurado.jurado.dni }}</td>
          <td class="center" colspan="2">{{jurado.jurado.cargo}}</td>
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
          <td class="center" colspan="2">{{jurado.jurado.cargo}}</td>
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
  color: rgb(41, 41, 41);
  background-color: var(--color-brand);
}

</style>