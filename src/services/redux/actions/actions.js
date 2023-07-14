/* eslint-disable camelcase */
import { API, LOCAL } from "../../../utils/API/constants";
import axios from "axios";
import {
  GET_ALL_SUPPLIERS,
  GET_CATEGORIES,
  SEARCH_PROFESSIONALS,
  APPLY_FILTERS,
  GET_PROFESIONALS_BY_NAME,
} from "../actionsTypes/actionsType";

//! Action para obtener a todos lo Proveedores/Profesionales
const getAllSuppliers = () => {
  // const URL = `${API.DOMAIN}/profesional`
  const URL = LOCAL.pofesional;

  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        //console.info("fetching-all-suppliers");
        dispatch({ type: GET_ALL_SUPPLIERS, payload: results });
      })
      .catch((error) => console.error(error.message));
  };
};

//! Todas las categorias con su ID
const getAllCategories = () => {
  // const URL = API.DOMAIN
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
export const searchProfessionals = (name) => {
  const URL = API.DOMAIN;
  // const URL = LOCAL.profesionalOcupation
  return function (dispatch) {
    fetch(`${URL}/ocupations?name=${name}`)
      .then((response) => response.json())
      .then((results) => {
        console.info(results);
        dispatch({
          type: SEARCH_PROFESSIONALS,
          payload: results,
        });
      })
      .catch((error) => console.error(error.message));
  };
};

const getOcupationsByName = (name) => {
  const URL = "https://backprofinder-production.up.railway.app/ocupationsp";
  return async function (dispatch) {
    try {
      let json = await axios.get(`${URL}/?name=${name}`);
      console.log(json.data); 
      if (json.data) {
        return dispatch({
          type: GET_PROFESIONALS_BY_NAME,
          payload: json.data,
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

//! Postear proveedor
const postProveedor = (info) => {
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

      await axios.post(
        "https://backprofinder-production.up.railway.app/profesional/",
        info
      );
      alert("Perfil creado");
    } catch (error) {
      alert(`${error.response.data.error}`);
    }
  };
};

//! postear cliente

const postCiente = (info) => {
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
        info
      );
      alert("Perfil creado");
    } catch (error) {
      alert(`${error.response.data.error}`);
    }
  };
};

const getSessionUser = (dataSession) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataSession)
  }

  return async function () {
    // const URL = `${API.LOCALHOST}/login`
    const URL = LOCAL.register

    const data = await fetch(URL, options)
      .then((response) => response.json())
      .then((results) => {
        return results
      })
      .catch((error) => {
        console.error(error.message)
      })
      data.status = (data.email && !data.message.includes('No pertenece')) ? true : false
      localStorage.setItem('userSession', JSON.stringify(data))
  }
}

const postSessionUser = (dataSession) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataSession)
  }

  return async function () {
    // const URL = `${API.LOCALHOST}/register`
    const URL = LOCAL.register

    const data = await fetch(URL, options)
      .then((response) => response.json())
      .then((results) => {
        return results
      })
      .catch((error) => {
        console.error(error.message)
      })
      data.status = (data.email && !data.message.includes('No pertenece')) ? true : false
      window.localStorage.setItem('userSession', JSON.stringify(data))
  }
}

export {
  getAllSuppliers,
  getAllCategories,
  postProveedor,
  applyFilters,
  postCiente,
  getOcupationsByName,
  getSessionUser,
  postSessionUser
};
