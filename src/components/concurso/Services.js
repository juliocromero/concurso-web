// const URL = "http://192.168.191.75:3001/";
// Get the url from the .env file named BACKEND_URL
const URL = import.meta.env.BACKEND_URL;

const getConcursos = async () => {
  const response = await fetch(URL + "concurso/list", {
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
export { getConcursos, getConcursoOne, postInscription, getNominas };
