/* eslint-disable camelcase */
import { API, LOCAL } from "../../../utils/API/constants";
import axios from "axios";
import {
  GET_ALL_SUPPLIERS,
  GET_CATEGORIES,
  SEARCH_PROFESSIONALS,
  APPLY_FILTERS,
  //GET_OCUPATION_BY_NAME,
  UPDATE_PROFESIONAL,
  GET_INFO_PROFESIONALS,
  POST_PROFESIONAL
} from "../actionsTypes/actionsType";

//! Action para obtener a todos los Proveedores/Profesionales
const getAllSuppliers = () => {
  return function (dispatch) {
    axios
      .get(`https://backprofinder-production.up.railway.app/profesional`)
      .then((response) => {
        dispatch({ type: GET_ALL_SUPPLIERS, payload: response.data });
      })
      .catch((error) => console.error(error.message));
  };
};

//! Todas las categorias con su ID
const getAllCategories = () => {
  const URL = LOCAL.category;
  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        // console.log(results);
        dispatch({
          type: GET_CATEGORIES,
          payload: results,
        });
      })
      .catch((error) => console.error(error.message));
  };
};

//! action para buscar por nombre de profesion //*****Revisar si aun se esta usando si no borrar */
const searchProfessionals = (name) => {
  const URL = API.DOMAIN;
  return function (dispatch) {
    if (name) {
      // Verificar si name no es undefined
      axios
        .get(`${URL}/ocupations?name=${name}`)
        .then((response) => {
          console.info(response.data);
          dispatch({
            type: SEARCH_PROFESSIONALS,
            payload: response.data,
          });
        })
        .catch((error) => console.error(error.message));
    }
  };
};

// const getOcupationsByName = (name) => {
//   const URL = "https://backprofinder-production.up.railway.app/ocupations";
//   return async function (dispatch) {
//     try {
//       let response = await axios.get(`${URL}?name=${name}`);
//       console.log(response.data);
//       if (response.data) {
//         return dispatch({
//           type: GET_OCUPATION_BY_NAME,
//           payload: response.data,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

const applyFilters = (objFilters) => {
  return { type: APPLY_FILTERS, payload: objFilters };
};

const postServicio = (info) => {
  return async function () {
    try {
      // Verificación
      if (
        info.title === "" ||
        info.ocupation === "" ||
        info.category === "" ||
        info.image === "" ||
        info.profesionalId === "" ||
        info.content === 0
      ) {
        throw new Error("Faltan datos");
      }

      await axios.post(
        "https://backprofinder-production.up.railway.app/postprofesional",
        info,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      alert("Publicacion Creada");
    } catch (error) {
      alert(`${error.response.data.error}`);
    }
  };
};

//! Postear proveedor
const postProveedor = (info) => {
  const userSession = window.localStorage.getItem("userSession");
  if (userSession) {
    const user = JSON.parse(userSession);
    info.id = user.id;
  }

  return async function () {
    try {
      // Verificación
      if (
        info.name === "" ||
        info.email === "" ||
        info.image === "" ||
        info.genre === "" ||
        info.years_exp === "" ||
        info.password === "" ||
        info.CountryId === "" ||
        info.LocationId === "" ||
        info.phone === "" ||
        info.ocupations === "" ||
        info.categories === 0
      ) {
        throw new Error("Faltan datos");
      }

      await axios.put(
        `https://backprofinder-production.up.railway.app/profesional/${info.id}`,
        info,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      alert("Perfil creado");
    } catch (error) {
      console.error(error.response.data.error);
      alert(`${error.response.data.error}`);
    }
  };
};

//! Postear cliente
const postCliente = (info) => {
  const userSession = window.localStorage.getItem("userSession");
  if (userSession) {
    const user = JSON.parse(userSession);
    info.id = user.id;
  }

  return async function () {
    try {
      // Verificación
      if (
        info.name === "" ||
        info.email === "" ||
        info.phone === "" ||
        info.password === 0
      ) {
        throw new Error("Faltan datos");
      }

      await axios.put(
        `https://backprofinder-production.up.railway.app/client/${info.id}`,
        info,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      alert("Perfil creado");
    } catch (error) {
      alert(`${error.response.data.error}`);
    }
  };
};

const loginSessionGoogle = () => {
  return async function () {
    const URL = "http://localhost:3001/auth/google";
    // const URL = LOCAL.register

    await fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        return results;
      })
      .catch((error) => console.error(error.message));
    // localStorage.setItem("userSession", JSON.stringify(data));
    // data.status = data.email && !data.message.includes("No pertenece") ? true : false;
  };
};

const getSessionUser = (dataSession) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(dataSession),
  };

  return async function () {
    // const URL = `${API.LOCALHOST}/login`
    const URL = `${API.DOMAIN}/login`;

    try {
      const response = await fetch(URL, options);
      const data = await response.json();
      data.status =
        data.email && !data.message.includes("No pertenece") ? true : false;
      delete data.password;
      localStorage.setItem("userSession", JSON.stringify(data));
    } catch (error) {
      console.error(error.message);
    }
  };
};

const postSessionUser = (dataSession) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(dataSession),
  };

  return async function () {
    // const URL = `${API.LOCALHOST}/register`
    const URL = `${API.DOMAIN}/register`;

    try {
      const response = await fetch(URL, options);
      const data = await response.json();
      data.status =
        data.email && !data.message.includes("No pertenece") ? true : false;
      delete data.password;
      window.localStorage.setItem("userSession", JSON.stringify(data));
    } catch (error) {
      console.error(error.message);
    }
  };
};

//! Traigo profesionales  para renderizar sus post
const getProfesionals = () => {
  const URL = "https://backprofinder-production.up.railway.app/profesional";
  return async function (dispatch) {
    try {
      let response = await axios.get(`${URL}`);
      console.log(response.data);
      if (response.data) {
        return dispatch({
          type: GET_INFO_PROFESIONALS,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//! Actualizar Profesionales
const updateProfesionals = (id, data) => {
  //console.log(id);  // el id llega bien***** falta la data
  const URL = `https://backprofinder-production.up.railway.app/profesional/${id}`;

  return async function (dispatch) {
    try {
      const response = await axios.put(URL, data);
      if (response && response.data) {
        dispatch({
          type: UPDATE_PROFESIONAL,
          payload: response.data,
        });
      } else {
        console.log("La respuesta no contiene datos:", response);
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
};

// Action para obtener todos los clientes
const getAllClients = () => {
  return function (dispatch) {
    axios
      .get("https://backprofinder-production.up.railway.app/client")
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "GET_ALL_CLIENTS", payload: response.data });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};

// Action para modificar los datos de un cliente
const updateClient = (clientId, newData) => {
  const userSession = JSON.parse(localStorage.getItem('userSession'));
  console.log(userSession);  
  if (userSession) {
      newData.id = userSession.id;
      
    }
  return function (dispatch) {
    axios
      .put(
        `https://backprofinder-production.up.railway.app/client/${newData.id}`,
        newData
      )
      .then((response) => {
        dispatch({ type: "UPDATE_CLIENT", payload: response.data });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};
export const getPostProfesional = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://backprofinder-production.up.railway.app/profesional`
      );
      dispatch({ type: POST_PROFESIONAL, payload: response.data });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export {
  getAllSuppliers,
  getAllCategories,
  getAllClients,
  postProveedor,
  applyFilters,
  postCliente,
  //getOcupationsByName,
  getSessionUser,
  postSessionUser,
  loginSessionGoogle,
  searchProfessionals,
  postServicio,
  getProfesionals,
  updateProfesionals,
  updateClient,
};
