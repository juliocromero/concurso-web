<script setup>
import { computed, ref, watch } from "vue";

const items = ref(["@unsam.edu.ar", "@iib.unsam.edu.ar"]);
const menu = ref(false);
const Prefix = ref('@unsam.edu.ar')
</script>
<template>
  <v-row>
    <v-col md="6" col="12" class="card_form">
      <v-card rounded="0" height="350px">
        <v-card-text class="text-h5 py-2">
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="email"
              label="Email"
              variant="solo"
              required
              :suffix="Prefix"
            >
              <template v-slot:append-inner="{  }">
                <v-btn
                  icon="mdi-at"
                  size="xx-small"
                  id="test"
                >
                </v-btn>
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
        </v-card-text>

        <v-card-actions>
          <v-list-item class="w-100 text-center">
            <v-btn variant="flat" class="primary-brand" block> Entrar </v-btn>
            <a href>Olvidé mi contraseña</a> |
            <a href> Reenviar código de validación </a>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col md="6" cols="12">
      <div class="pa-4 d-flex flex-column justify-space-between register_form">
        <div>
          <h3>
            Si ya tenés cuenta en los sistemas Personal UNSAM (Capacitación y
            Concursos)
          </h3>
          <p>
            Si no tenés cuenta <a href="asd">Registrate aquí</a> por única vez
          </p>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
.login_form {
  border: 2px solid gray;
  padding: 20px;
  border-radius: 4px;
  background: blue;
}
.register_form {
  height: 100vh;
}
</style>
<style>
.card_form .v-card-title {
  color: white;
}
</style>
