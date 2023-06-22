<script setup>
import { computed, ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import logo from "../assets/logo.png";
import { getIsLogin } from "./concurso/Services";
const items = ref(["@unsam.edu.ar", "@iib.unsam.edu.ar"]);
const menu = ref(false);
const Prefix = ref("@unsam.edu.ar");

onMounted(() => {
  let beforeAuth2 = document.getElementById("0auth2");
  beforeAuth2.remove();

  let auth2 = document.createElement("script");
  auth2.setAttribute("id", "0auth2");
  auth2.setAttribute("src", "https://accounts.google.com/gsi/client");
  auth2.setAttribute("async", true);
  auth2.setAttribute("defer", true);
  document.body.appendChild(auth2);
});
const errorLogin = ref({
  message: "",
  data: false,
});

const { push } = useRouter();
globalThis.login = async response => {
  localStorage.setItem("token", response.credential);
  const concursoId = localStorage.getItem("idConcurso");
  const isValidToken = await getIsLogin(response.credential);
  errorLogin.value.data = !isValidToken.data;
  errorLogin.value.message = isValidToken.message;
	
  if (isValidToken.data) {
    if (concursoId) {
      push(`/concursos/${concursoId}`);
    } 
	
  }
  if(response.credential) {
      push(`/concursos`);
    }
};
</script>
<template>
  <v-container>
    <v-card
      elevation="0"
      :border="false"
      class="d-flex flex-column align-start sing-up"
    >
      <v-card-text class="py-2 d-flex flex-column">
        <p class="ml-2 font-weight-bold mb-6">
          Iniciar sesion con su usuario@unsam.edu.ar para poder inscribirse al
          concurso
        </p>

        <!-- I guess -->
        <div
          id="g_id_onload"
          data-client_id="472052419243-tok5ai50skbbsb2h9tlfj0v767n234im.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-callback="login"
          data-auto_prompt="false"
        ></div>

        <!-- data-login_uri="/api/login" -->

        <div
          class="g_id_signin"
          data-type="standard"
          data-shape="pill"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-locale="es-419"
          data-logo_alignment="left"
        ></div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.sing-up {
  height: 200px;
  border: 1px solid #545454;
  border-radius: 0;
}
.login_form {
  border: 2px solid gray;
  padding: 20px;
  border-radius: 4px;
  background: blue;
}

.register_form {
  color: white;
}
</style>
<style>
.card_form .v-card-title {
  color: white;
}
</style>
