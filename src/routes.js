import Login from './pages/Login.vue'
import Concursos from './pages/Concursos.vue'
import Concurso from './pages/FormConcurso.vue'

const routes = [
  
    { path: '/concursos', component: Concursos, name:"concursosGroup" },    
    { path: '/concursos/:id', component: Concurso, name:"concursos" },
    { path: '/login', component: Login}
  ]

  export default routes