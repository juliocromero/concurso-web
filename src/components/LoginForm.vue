<script setup>
import { computed, ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import logo from "../assets/logo.png";
import { getIsLogin } from './concurso/Services'
const items = ref(["@unsam.edu.ar", "@iib.unsam.edu.ar"]);
const menu = ref(false);
const Prefix = ref('@unsam.edu.ar')

onMounted(()=>{
	let beforeAuth2 = document.getElementById('0auth2')
	beforeAuth2.remove()

	let auth2 = document.createElement('script')
	auth2.setAttribute('id','0auth2')
	auth2.setAttribute('src','https://accounts.google.com/gsi/client')
	auth2.setAttribute('async', true)
	auth2.setAttribute('defer', true)
	document.body.appendChild(auth2)
})
const errorLogin = ref({
    "message": "",
    "data": false
})

const { push } = useRouter()
	globalThis.login = async (response) => {
	localStorage.setItem("token", response.credential);
	const concursoId = localStorage.getItem('idConcurso')
	const isValidToken = await getIsLogin(response.credential)
	errorLogin.value.data = !isValidToken.data
	errorLogin.value.message = isValidToken.message

	if(isValidToken.data){
		push(`/concursos/`)
	}else{
	}
};


</script>
<template>
	<v-container>
	<v-row>
		<v-col md="6" col="12" class="card_form pa-0 pt-2" >
			<v-card rounded="0" class="d-flex flex-column h-100 align-center">
				<v-toolbar class="bg-white">
					<h3 class="ml-2 ">Inicio de sesion</h3>
				</v-toolbar>
				<v-card-text class="text-h5 py-2 d-flex flex-column justify-space-between">
				<div class="d-flex justify-center pa-4">
					<v-img :src="logo" height="50px" />
				</div>

				<!-- I guess -->
				<div id="g_id_onload"
					data-client_id="472052419243-tok5ai50skbbsb2h9tlfj0v767n234im.apps.googleusercontent.com"
					data-context="signin"
					data-ux_mode="popup"
					data-callback="login"
					data-auto_prompt="false">
				</div>

				<!-- data-login_uri="/api/login" -->

				<div class="g_id_signin"
					data-type="standard"
					data-shape="pill"
					data-theme="outline"
					data-text="signin_with"
					data-size="large"
					data-locale="es-419"
					data-logo_alignment="left">
				</div>

				</v-card-text>
				<!-- First try login -->

				<!-- <v-card-text class="text-h5 py-2">
					<v-form ref="form" lazy-validation>
						<v-text-field v-model="email" label="Email" variant="solo" required :suffix="Prefix">
							<template v-slot:append-inner="{}">
								<v-btn icon="mdi-at" size="xx-small" id="test">
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
						<v-text-field v-model="password" label="Password" variant="solo" type="password"
							required></v-text-field>
					</v-form>
				</v-card-text>

				<v-card-actions>
					<v-list-item class="w-100 text-center">
						<v-btn variant="flat" class="primary-brand" block> Entrar </v-btn>
						<a href>Olvidé mi contraseña</a> |
						<a href> Reenviar código de validación </a>
					</v-list-item>
				</v-card-actions> -->
			</v-card>
		</v-col>
		<v-col md="6" cols="12" class="pa-0 pt-2">
			<v-img src="img/3.jpg"  />
			
		</v-col>
		</v-row>
		<div >
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
			
		<v-snackbar v-model="errorLogin.data">
			{{ errorLogin.message }}
			<template v-slot:actions>
			<v-btn
				:color="errorLogin.data == false? 'green': 'pink' "
				variant="text"
				@click="errorLogin.data = false"
			>
			Close
			</v-btn>
		</template>
          </v-snackbar>
		</div>
	</v-container>
</template>

<style scoped>
.login_form {
	border: 2px solid gray;
	padding: 20px;
	border-radius: 4px;
	background: blue;
}

.register_form {
	color:white;
}
</style>
<style>
.card_form .v-card-title {
	color: white;
}
</style>
