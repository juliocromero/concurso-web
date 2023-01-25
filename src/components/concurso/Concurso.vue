<script setup>
import { ref } from 'vue'
const { items } = defineProps({
    items:  Object
})

const expand = ref(false)
</script>

<template>
  <v-card
    class="mx-auto"
    max-width="368"
  >
    <v-card-item :title="items.title">
      <template v-slot:subtitle>

        {{ items.description }}
      </template>
    </v-card-item>

    <v-card-text class="py-0">
    </v-card-text>


    <v-expand-transition>
      <div v-if="expand">
        <div class="pa-4">
            <v-form
                ref="form"
            >
                <v-text-field
                v-model="name"
                label="Name"
                required
                ></v-text-field>

                <v-text-field
                v-model="email"
                label="Email"
                required
                ></v-text-field>



                <v-btn
                color="success"
                class="me-4"
                @click="validate"
                >
                Enviar
                </v-btn>

            </v-form>
        </div>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn @click="expand = !expand">
        {{ !expand ? 'Anotarse' : 'Cerrar' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
</style>
