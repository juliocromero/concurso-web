<script setup>
import { ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const { name } = useRoute();

const drawer = ref(false);
const itemsNav = ref([
  { title: "Institucional", value: 1 },
  { title: "Enseñanza", value: 2 },
  { title: "I + D + i", value: 3 },
  { title: "Agenda cultural", value: 4 },
  { title: "UNSAM Edita", value: 5 },
  { title: "Programas", value: 6 },
]);
</script>

<template>
  <div>
    <!-- <v-layout>
      <v-main class="mt-22 background-bran main-concurso">
        <v-list class="background-bran pb-0 pt-0 d-flex justify-end">
          <v-btn variant="text" color="white" size="x-small"
            >UNSAM Digital</v-btn
          >
          <v-btn variant="text" color="white" size="x-small">Biblioteca</v-btn>
          <v-btn variant="text" color="white" size="x-small">Alumnos</v-btn>
          <v-btn variant="text" color="white" size="x-small">Docentes</v-btn>
          <v-btn variant="text" color="white" size="x-small">Personal</v-btn>
        </v-list>
      </v-main>
    </v-layout> -->

    <div>
      <link rel="stylesheet" href="https://www.unsam.edu.ar/css/sidemenu.css" />
      <link
        href="https://www.unsam.edu.ar/css/font-awesome/css/font-awesome.min.css"
        rel="stylesheet"
        type="text/css"
      />

      <div class="container" style="padding-top: 20px">
        <!-- DESKTOP -->
        <div
          class="col-xs-3 oculto-movil"
          style="margin: 0px"
          id="logo-unsam-desk"
        >
          <a href="/">
            <img
              src="https://www.unsam.edu.ar/img/logo-UNSAM-40-democracia.jpg"
              class="img"
              alt="UNSAM"
              border="0"
            />
          </a>
        </div>

        <div class="oculto-movil" style="clear: both"></div>

        <!-- /. DESKTOP -->

        <!-- MOBILE -->

        <div
          class="col-xs-12 oculto-desktop"
          style="margin: 0 auto; width: 320px"
          id="logo-unsam-mob"
        >
          <a href="/">
            <img
              src="/img/logo-UNSAM-40-democracia.jpg"
              class="img"
              alt="UNSAM"
              border="0"
            />
          </a>
        </div>
        <div class="oculto-desktop" style="clear: both"></div>
        <div class="oculto-desktop"></div>
      </div>
      <div class="oculto-desktop" style="clear: both; height: 10px"></div>
    </div>

    <div
      class="contenedor100 oculto-movil"
      style="
        border-bottom: 7px solid #004f7f;
        background-color: #fff;
        padding-top: 15px;
      "
    ></div>

    <div></div>
    <div
      class="contenedor100"
      style="
        background-color: #fff;
        overflow: auto;
        background-image: url(https://www.unsam.edu.ar/img/sec_insti1.jpg);
        background-repeat: no-repeat;
        background-position-x: right;
        border-bottom: 2px solid #1a527c;
      "
    >
      <div
        class="contenedor"
        style="position: relative; overflow: auto; padding: 0"
      >
        <div class="grid3" style="background-color: #1a527c; min-height: 130px">
          <div id="menu_ua">
            <div class="titulo">Personal</div>
          </div>
        </div>
        <div style="position: absolute; bottom: 0" class="oculto-movil">
          <div style="float: left; background-color: #1a527c; padding: 10px">
            <img src="https://www.unsam.edu.ar/img/flecha_blanca.png" />
          </div>
          <div
            style="
              background-color: #fff;
              color: #444;
              float: left;
              padding: 2px 27px 2px 15px;
              font-size: 150%;
              color: #1a527c;
              border-right: 1px solid #1a527c;
              border-top: 1px solid #1a527c;
            "
          >
            Concursos no docentes
          </div>
          <div style="clear: both"></div>
        </div>
      </div>
    </div>
    <div class="contenedor100" style="background-color: #fff">
      <div class="contenedor">
        <div class="grid12" style="padding: 15px">
          
            
          <v-layout>
      <v-main class="mt-22 main-concurso">
              <RouterView />
              
            </v-main>
            </v-layout>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
        </div>
      </div>
    </div>
    <div style="clear: both"></div>
    <footer
      style="background-color: #fff; border-top: 7px solid #004f7f"
      id="footer-sec"
    >
      <div
        class="contenedor100"
        style="overflow: auto; background-color: #fff; color: #444"
      >
        <div class="contenedor" style="position: relative">
          <div class="grid6">
            <div style="margin: 20px">
              UNSAM Campus Miguelete, 25 de Mayo y Francia.<br />
              C.P.: 1650. San Mart&iacute;n, Provincia de Buenos Aires,
              Argentina<br />
              Tel&eacute;fonos: 4006-1500 -
              <A href="https://www.unsam.edu.ar/home/contacto.asp"
                >Ver otros contactos por &aacute;rea</A
              ><br />
              <a href="mailto:comunicacion.institucional@unsam.edu.ar"
                >comunicacion.institucional@unsam.edu.ar</a
              ><br />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.main-concurso {
  height: max-content !important;
  display: flex;
  flex-direction: column;
}
</style>
