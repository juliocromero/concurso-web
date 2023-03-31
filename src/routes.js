import Login from './pages/Login.vue'
import Concursos from './pages/Concursos.vue'
import Concurso from './pages/FormConcurso.vue'
import Nomina from './pages/Nomina.vue'

const routes = [
  
    { path: '/concursos', component: Concursos, name:"concursosGroup" },    
    { path: '/concursos/:id', component: Concurso, name:"concursos" },       
    { path: '/nomina/:id', component: Nomina, name:"nomina" },
    { path: '/login', component: Login},
	{ path: '/', component: Login}
  ]

  export default routes
