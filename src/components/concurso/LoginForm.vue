<script setup>
import { onMounted, onUpdated, ref, watch, render } from "vue";
import FormConcurso from "./FormConcurso.vue";
import logo from "../../assets/logo.png";

const isLogin = defineProps({ isLogin: Boolean });

const login = ref(isLogin);

onUpdated(() => {
  login.value = isLogin.isLogin;
});

const items = ref(["@unsam.edu.ar", "@iib.unsam.edu.ar"]);
const menu = ref(false);
const Prefix = ref("@unsam.edu.ar");

const emit = defineEmits("closeLogin","loginIn");

const close = () => {
  emit("closeLogin", false);
};

const loginIn = () => {
  window.localStorage.setItem('token', 'asdasdasd')
  emit('loginIn')
  emit("closeLogin", false);
};
</script>

<template>
  <v-dialog
    v-model="login"
    transition="dialog-bottom-transition"
    max-width="600px"
  >
    <template v-slot:default="{ isActive }">
      <v-card rounded="0">
        <v-toolbar>
          <h3 class="ml-2">Inicio de sesion</h3>
          <v-spacer />
          <v-btn icon dark @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="text-h5 py-2">
          <div class="d-flex justify-center pa-4">
            <v-img :src="logo" height="50px" />
          </div>
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="email"
              label="Email"
              variant="solo"
              required
              :suffix="Prefix"
            >
              <template v-slot:append-inner="{}">
                <v-btn icon="mdi-at" size="xx-small" id="test"> </v-btn>
              </template>
            </v-text-field>
            <v-menu activator="#test">
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-btn @click="Prefix = item">{{ item }}</v-btn>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-text-field
              v-model="password"
              label="Password"
              variant="solo"
              type="password"
              required
            ></v-text-field>
          </v-form>
          <div
            class="pa-4 d-flex flex-column justify-space-between register_form"
          >
            <v-card-actions>
              <v-list-item class="w-100 text-center">
                <v-btn color="success" class="me-4"  @click="loginIn()">
                    Iniciar e Inscribirse
                    </v-btn> 
                <a href>Olvidé mi contraseña</a> |
                <a href> Reenviar código de validación </a>
              </v-list-item>
            </v-card-actions>
          </div>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<style></style>
