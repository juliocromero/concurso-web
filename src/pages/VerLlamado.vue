<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { getConcursoOne } from "../components/concurso/Services";

const { push } = useRouter();
const { params } = useRoute();
const nomina = ref();
onMounted(async () => {
  nomina.value = await getConcursoOne(params.id);
});
const replacing = (item) => {
  var res = item.replaceAll(/\n/g, "<br>");
  return res;
};
const toHome = () => {
  push("/concursos");
};
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
</script>

<template>
  <v-btn class="mb-2" icon dark @click="toHome">
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>

  <v-card>
    <div class="d-flex flex-column">
      <h2>Concurso no docentes vigentes</h2>
      <h4 class="ml-3">Llamado a concurso N° {{ nomina?.numero }}</h4>
    </div>

    <v-card-text>
      <v-container>
        <table v-if="nomina" class="table-concurso-watch">
          <tr>
            <td>
              <h2 class="text-center td-bg-color">
                LLAMADO A CONCURSO PARA LA COBERTURA DE CARGOS DEL PERSONAL NO
                DOCENTE
              </h2>
            </td>
          </tr>
          <tr>
            <div class="d-flex">
              <td class="text-start pl-1">
                <h4>
                  CONCURSO<br />
                  N° {{ nomina.numero }}
                </h4>
              </td>

              <td class="text-start pl-1">
                <h4>EXPEDIENTE N° {{ nomina.expediente }}</h4>
              </td>
              <td class="text-start pl-1">
                <h4>DSAyL N°{{ nomina.num_acto_adminstrativo }}</h4>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p>TIPO DE CONCURSO</p>
              </td>

              <td>
                <p>
                  {{ nomina.tipo_concurso }}
                </p>
              </td>
            </div>
          </tr>
          <tr>
            <td>
              <h3 class="text-center td-bg-color">
                DATOS DEL CARGO A CONCURSAR
              </h3>
            </td>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p>DEPENDENCIA</p>
              </td>

              <td>
                <p>
                  {{ nomina.dependencias.name }}
                </p>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p>SUBDEPENDENCIA</p>
              </td>

              <td>
                <p>
                  {{ nomina.id_subdependencia }}
                </p>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p>CATEGORIA (CCT Decreto N° 366/06)</p>
              </td>

              <td>
                <p>
                  {{ nomina.categoria }}
                </p>
              </td>
              <td>
                <p>CANTIDAD DE CARGOS A CUBRIR</p>
              </td>
              <td>
                <p>{{ nomina.cantidad_cargo_a_cubrir }}</p>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p>CARGO</p>
              </td>

              <td>
                <p>{{ nomina.denominacion_del_cargo }}</p>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p>AGRUPAMIENTO</p>
              </td>

              <td>
                <p>
                  {{ nomina.agrupamiento }}
                </p>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p>CARGA HORARIA PREVISTA</p>
              </td>

              <td>
                <p>
                  {{ nomina.carga_horario_prevista }}
                </p>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p>SEDE</p>
              </td>

              <td>
                <p>
                  {{ nomina.sede }}
                </p>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p>REMUNERACION CORRESPONDIENTE AL CARGO</p>
              </td>

              <td>
                <p>
                  {{ nomina.remu_corres_al_cargo }}
                </p>
              </td>
            </div>
          </tr>
          <tr>
            <td>
              <h3 class="text-center td-bg-color">
                REQUISITOS Y CONDICIONES DEL CARGO
              </h3>
            </td>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p
                  class="d-flex justify-center align-center"
                  style="height: 100%"
                >
                  REQUISITOS DEL CARGO
                </p>
              </td>

              <td>
                <p
                  class="text-start pl-2"
                  v-html="replacing(nomina.requisitos_del_cargo)"
                ></p>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p
                  class="d-flex justify-center align-center"
                  style="height: 100%"
                >
                  CONDICIONES GENERALES DEL CARGO Objetivo y Responsabilidad
                </p>
              </td>

              <td>
                <p
                  class="text-start pl-2"
                  v-html="replacing(nomina.cond_general_cargo)"
                ></p>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p
                  class="d-flex justify-center align-center"
                  style="height: 100%"
                >
                  CONDICIONES PARTICULARES DEL CARGO (Tareas a realizar)
                </p>
              </td>

              <td>
                <p
                  class="text-start pl-2"
                  v-html="replacing(nomina.cond_particular_cargo)"
                ></p>
              </td>
            </div>
          </tr>
          <tr>
            <td>
              <h3 class="text-center td-bg-color">
                INSCRIPCION EN EL CONCURSO
              </h3>
            </td>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p>FECHA DE INSCRIPCION EN EL CONCURSO</p>
              </td>

              <td>
                <p>
                  {{ formateDate(nomina.fecha_desde) }} al
                  {{ formateDate(nomina.fecha_hasta) }}
                </p>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p>LUGAR DONDE SE REALIZA LA INSCRIPCION</p>
              </td>

              <td>
                <p>
                  {{ nomina.lugar_inscripcion }}
                </p>
              </td>
            </div>
          </tr>
          <tr>
            <td>
              <h3 class="text-center td-bg-color">
                CONOCIMIENTOS Y TEMARIO DE LA EVALUACION
              </h3>
            </td>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p
                  class="d-flex justify-center align-center"
                  style="height: 100%"
                >
                  TEMARIO OBLIGATORIO DE PRUEBA DE OPOSICION
                </p>
              </td>

              <td>
                <p
                  class="text-start pl-2"
                  v-html="replacing(nomina.temario_obligatorio)"
                ></p>
              </td>
            </div>
          </tr>
          <tr>
            <td>
              <h3 class="text-center td-bg-color">INTEGRANTES DEL JURADO</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3 class="text-center td-bg-color">TITULARES</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3 class="text-center td-bg-color">APELLIDO Y NOMBRE</h3>
            </td>
            <td>
              <h3 class="text-center td-bg-color">DNI</h3>
            </td>
            <td>
              <h3 class="text-center td-bg-color">CARGO</h3>
            </td>
          </tr>
          <tr v-for="jurado in nomina.concurso_jurado">
            <div class="d-flex" v-if="jurado.id_tipo_jurado == 1">
              <td>
                <p>{{ jurado.jurado.apellido }} , {{ jurado.jurado.name }}</p>
              </td>

              <td>
                <p>{{ jurado.jurado.dni }}</p>
              </td>
              <td>
                <p>{{ jurado.jurado.cargo }}</p>
              </td>
            </div>
          </tr>

          <tr>
            <td>
              <h3 class="text-center td-bg-color">SUPLENTES</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3 class="text-center td-bg-color">APELLIDO Y NOMBRE</h3>
            </td>
            <td>
              <h3 class="text-center td-bg-color">DNI</h3>
            </td>
            <td>
              <h3 class="text-center td-bg-color">CARGO</h3>
            </td>
          </tr>
          <tr v-for="jurado in nomina.concurso_jurado">
            <div class="d-flex" v-if="jurado.id_tipo_jurado == 2">
              <td>
                <p>{{ jurado.jurado.apellido }} , {{ jurado.jurado.name }}</p>
              </td>

              <td>
                <p>{{ jurado.jurado.dni }}</p>
              </td>
              <td>
                <p>{{ jurado.jurado.cargo }}</p>
              </td>
            </div>
          </tr>
          <tr>
            <td>
              <h3 class="text-center td-bg-color">
                COMPONENTES DE LA SELECCIÓN Y EVALUACION
              </h3>
            </td>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                
                <p class="text-center">
                  El puntaje máximo de evaluación será de 100 puntos, los que
                  serán asignados conforme los siguientes criterios:
                </p>
                <div class="d-flex" style="margin: 6px">
                   <b>EVALUACIÓN DE ANTECEDENTES:</b> Puntaje máximo del
                  componente 50 puntos.<br />
                </div>
                <div class="d-flex" style="margin: 6px">
                  <p>Antigüedad: puntaje máximo del subcomponente 20 puntos.</p>
                </div>
                <div class="d-flex" style="margin: 6px">
                   <p>
                    Titulo y estudios formales realizados: puntaje máximo del
                    subcomponente 20 puntos.
                  </p>
                </div>
                  
                  <div class="d-flex" style="margin: 6px">
                     <p>
                    Saberes formales e informales que hacen a la función:
                    puntaje máximo del subcomponente 5 puntos.
                  </p>
                  </div>
                  <div class="d-flex" style="margin: 6px">
                     <p>
                    Categoría de revista: puntaje máximo del subcomponente 5
                    puntos.
                  </p>
                  </div>
                  <div class="d-flex" style="margin: 6px">
                    <b>PRUEBA DE OPOSICIÓN Y ENTREVISTA PERSONAL</b> Puntaje
                  máximo del componente 50 puntos.<br />
                   
                  </div>
                  <div class="d-flex" style="margin: 6px">
                    <p>
                      Prueba de oposición: puntaje máximo del subcomponente 40
                    puntos.
                  </p>
                  </div>
                   <div class="d-flex" style="margin: 6px">
                     <p>
                    Entrevista personal: puntaje máximo del subcomponente 10
                    puntos.
                  </p>
                   </div>
                    
                  
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <tr>
                <td><b>ENTREVISTA PERSONAL CON EL JURADO:</b> <br /></td>
              </tr>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p class="text-center pa-2">
                  DIA {{ formateDate(nomina.fecha_personal_jurado) }} HORA
                  {{
                    nomina.hora_personal_jurado
                      ? nomina.hora_personal_jurado
                      : "--"
                  }}
                  LUGAR
                  {{
                    nomina.lugar_entrevista_fecha1
                      ? nomina.lugar_entrevista_fecha1
                      : "--"
                  }}
                </p>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <tr>
                <td>
                  <b>PRUEBA DE OPOSICIÓN: EXAMEN ORAL Y/O ESCRITO –</b> <br />
                </td>
              </tr>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p class="text-center pa-2">
                  1ra Fecha, horario y lugar.
                  {{ formateDate(nomina.fecha1) }} -
                  {{ nomina.hora_entrevista_fecha1 }} Hs -
                  {{ nomina.lugar_entrevista_fecha1 }} <br />
                  2ra Fecha, horario y lugar.
                  {{ formateDate(nomina.fecha2) }} -
                  {{ nomina.hora_entrevista_fecha1 }} Hs -
                  {{ nomina.lugar_entrevista_fecha1 }} <br />
                </p>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p class="text-center pa-2" style="color:blue">
                  Para requerir más información comunicarse con la Coordinacion
                  de Asuntos No Docentes, dias hábiles de 11:00 a 16:00hs. Sita
                  en la calle
                  <br />
                  Yapeyú N° 2068, San Martin , Pcia. de Bs. As. TE:(011)
                  45807274 o a asuntosnodocentes@unsam.edu.ar<br />
                </p>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <b class="text-center pa-2">
                  Casilla de correo electrónico institucional en el que se
                  recibirán las impugnaciones al concurso:<br />
                  <a href="mailto:capitalhumano@unsam.edu.ar">
                    capitalhumano@unsam.edu.ar</a
                  >
                </b>
              </td>
            </div>
          </tr>
          <tr>
            <div class="d-flex">
              <td>
                <p class="text-center pa-2">
                  Se convoca a la Asociación del personal de la Universidad
                  Nacional de General San Martín para la designación de una
                  persona como veedora
                </p>
              </td>
            </div>
          </tr>
        </table>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.table-concurso-watch {
  width: 100%;

  border-spacing: 0;
  border-collapse: collapse;
}

.td-bg-color {
  background: grey;
}

td {
  text-align: center;
  width: 100%;
  border: 1px solid rgb(66, 66, 66);
}

h1 {
  padding: 10px 10px;
}

h2 {
  padding: 10px 10px;
}

tr {
  width: 100%;
  display: flex;
}

p {
  padding: 2px;
}

tr div {
  width: 100%;
}
</style>