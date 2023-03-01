const URL = import.meta.env.VITE_BACKEND_URL_DEV;
// Get the url from the .env file named BACKEND_URL
/* const URL = import.meta.env.VITE_BACKEND_URL */

const getConcursos = async () => {
  const response = await fetch(URL + "concurso/status?id_status=2", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("err");
      return [];
    });
  return response;
};

const getConcursoOne = async (id) => {
  /* http://192.168.191.75:3001/concurso/listById?id_concurso=1 */
  const response = await fetch(URL + "concurso/listById?id_concurso=" + id, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return {};
    });
  return response;
};
const postInscription = async (user) => {
  const response = await fetch(URL + "concurso/create-aspirante", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(user),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return {};
    });
  return response;
};

const getNominas = async (id) => {
  const response = await fetch(URL + `concurso/status?id_status=3`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "GET",
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return {};
    });
  return response;
};

const getIsLogin = async () => {
  const token = localStorage.getItem('token')
  if (!token) return { "message": "Usuario sin acceso comunicarse con el administrador", "data": false }

  const response = await fetch(URL + `users/auth`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "token": token }),
    method: "POST",
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err
    });
  return response;


};

export { getConcursos, getConcursoOne, postInscription, getNominas, getIsLogin };
