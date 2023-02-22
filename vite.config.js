import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  // define host and port for development
  server: {
    // host: 'localhost',
    port: 3002,
    hmr: {
      overlay: false,
      port: 4001
    }
  },
  plugins: [
    vue(), 
    vuetify(),],
})
