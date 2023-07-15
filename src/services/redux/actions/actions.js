/* eslint-disable camelcase */
import { API, LOCAL } from "../../../utils/API/constants";
import axios from "axios";
import {
  GET_ALL_SUPPLIERS,
  GET_CATEGORIES,
  SEARCH_PROFESSIONALS,
  APPLY_FILTERS,
  GET_OCUPATION_BY_NAME,
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
        dispatch({
          type: GET_CATEGORIES,
          payload: results,
        });
      })
      .catch((error) => console.error(error.message));
  };
};

//! action para buscar por nombre de profesion
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

const getOcupationsByName = (name) => {
  const URL = "https://backprofinder-production.up.railway.app/ocupations";
  return async function (dispatch) {
    try {
      let response = await axios.get(`${URL}?name=${name}`);
      console.log(response.data);
      if (response.data) {
        return dispatch({
          type: GET_OCUPATION_BY_NAME,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const applyFilters = (objFilters) => {
  return { type: APPLY_FILTERS, payload: objFilters };
};

const postServicio = (info) => {
  return async function () {
    try {
      // Verificación
      if (
        info.title === "" ||
        info.ocupations === "" ||
        info.categories === "" ||
        info.images === "" ||
        info.content ===  0
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
  const userSession = window.localStorage.getItem('userSession')
    if (userSession) {
      const user = JSON.parse(userSession)
      info.id = user.id
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
        info.ubication === "" ||
        info.phone === "" ||
        info.ocupations === "" ||
        info.categories === 0
      ) {
        throw new Error("Faltan datos");
      }

      // `http://localhost:3001/profesional/${info.id}`
      // `https://backprofinder-production.up.railway.app/profesional/${info.id}`
      await axios.put(
        `https://backprofinder-production.up.railway.app/profesional/${info.id}`,
        info,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      // alert("Perfil creado");
    } catch (error) {
      console.error(error.response.data.error)
      // alert(`${error.response.data.error}`);
    }
  };
};

//! Postear cliente
const postCliente = (info) => {
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

      await axios.post(
        "https://backprofinder-production.up.railway.app/client",
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
      data.status = data.email && !data.message.includes("No pertenece") ? true : false;
      delete data.password
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
      data.status = data.email && !data.message.includes("No pertenece") ? true : false;
      delete data.password
      window.localStorage.setItem("userSession", JSON.stringify(data));
    } catch (error) {
      console.error(error.message);
    }
  };
};

export {
  getAllSuppliers,
  getAllCategories,
  postProveedor,
  applyFilters,
  postCliente,
  getOcupationsByName,
  getSessionUser,
  postSessionUser,
  loginSessionGoogle,
  searchProfessionals,
  postServicio,
};
