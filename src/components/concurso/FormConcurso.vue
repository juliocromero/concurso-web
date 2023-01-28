<script setup>
import { onMounted, ref } from "vue";
import { VueEditor } from "vue3-editor";

const props = defineProps({ title: String, open: Boolean });

const dialog = ref(props.open || false);

const emit = defineEmits(["noRegister"]);

const isLogin = () => {
  const token = localStorage.getItem("token");
  if (token) {
    dialog.value = true;
  } else {
    emit("noRegister");
  }
};

const tabs = ref(1);
const menu = ref();
const Nacimiento = ref();
const text = ref("")

const changeText = (res)=>{
  console.log(res)
}

</script>
<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="800px"
  >
    <template v-slot:activator="{ props }">
      <slot name="active" :props="props">
        <v-btn color="success" class="me-4" @click="isLogin">
          Inscribirse
        </v-btn>
      </slot>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-toolbar color="primary" :title="props.title"></v-toolbar>
        <v-card-text>
          <v-window v-model="tabs">
            <v-window-item :value="1">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col sm="6">
                    <v-text-field
                      v-model="name"
                      :counter="10"
                      label="Nombre"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col sm="6">
                    <v-text-field
                      v-model="name"
                      :counter="10"
                      label="Apellido"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col sm="12">
                    <v-text-field
                      v-model="email"
                      label="Email"
                      required
                    ></v-text-field
                  ></v-col>
                  <v-col sm="6">
                    <v-text-field
                      v-model="dni"
                      label="DNI"
                      required
                      type="number"
                    ></v-text-field>
                  </v-col>
                  <v-col sm="6">
                    <v-text-field
                      v-model="Nacimiento"
                      label="Nacimiento"
                      min="1920-12-01"
                      type="date"
                    ></v-text-field
                  ></v-col>
                  <v-col sm="12">
                    <v-text-field
                      v-model="Telefono"
                      label="Telefono"
                    ></v-text-field
                  ></v-col>
                </v-row>
              </v-form>
            </v-window-item>

            <v-window-item :value="2">
              <v-row>
                <v-col sm="6">
                  <v-text-field
                    v-model="calle"
                    label="Calle"
                    required
                  ></v-text-field>
                </v-col>
                <v-col sm="6">
                  <v-text-field
                    v-model="numerodecalle"
                    label="Numero"
                    required
                    type="number"
                  ></v-text-field>
                </v-col>
                <v-col sm="4">
                  <v-text-field
                    v-model="Piso"
                    label="Piso"
                    required
                    type="number"
                  ></v-text-field>
                </v-col>
                <v-col sm="4">
                  <v-text-field
                    v-model="depto"
                    label="Depto"
                    required
                  ></v-text-field>
                </v-col>
                <v-col sm="4">
                  <v-text-field
                    v-model="postal"
                    label="Codigo Postal"
                    required
                    type="number"
                  ></v-text-field>
                </v-col>
                <v-col sm="6">
                  <v-text-field
                    v-model="localidad"
                    label="Localidad"
                    required
                  ></v-text-field>
                </v-col>
                <v-col sm="6">
                  <v-text-field
                    v-model="provincia"
                    label="Provincia"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-window-item>

            <v-window-item :value="3">
              <VueEditor v-model="text" />
            </v-window-item>
          </v-window>
          <div class="d-flex justify-space-between">
            <v-btn @click="tabs > 1 ? tabs-- : tabs">Atras</v-btn>
            <v-btn @click="tabs < 3 ? tabs++ : tabs">Siguiente</v-btn>
          </div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style></style>
