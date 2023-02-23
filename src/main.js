import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import { createVuetify } from "vuetify";
import { mdi, aliases } from "vuetify/iconsets/mdi";
import routes from './routes'
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import { getIsLogin } from './components/concurso/Services'
const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  }});

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

const app = createApp(App);

router.beforeEach(async (to, from, next) => {
  if(to.name == 'concursos'){
    const token = await getIsLogin()
    if(token){
      next()
    }else{
      next('/concursos');
    }
  }else {
    next()
  }
})
app.use(router);
app.use(vuetify);

app.mount('#app')
