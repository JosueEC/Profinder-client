import allProfesionals from "../../../utils/Mockups/all-profesionals.json";
import { API } from "../../../utils/API/constants";
import axios from "axios";
import {
  FILTER_BY_CATEGORY,
  GET_ALL,
  GET_ALL_FAILURE,
  GET_ALL_SUPPLIERS,
  GET_CATEGORIES,
  SEARCH_PROFESSIONALS,
  ORDER_BY_RATING,
  FILTER_BY_GENRES,
} from "../actionsTypes/actionsType";

//! toda la data de la api, paque? por si la necesitas jajaja
const get_all = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/johpaz/ApiProfinder/master/src/db.json"
      );
      console.log(response.data);

      dispatch({
        type: GET_ALL,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_FAILURE,
        payload: error.message,
      });
    }
  };
};

//! Action para obtener a todos lo Proveedores/Profesionales
//TODO: Por ahora consume de forma local para no acabarse las 500 peticiones de la API.
const getAllSuppliers = () => {
  const URL = API.DOMAIN;

  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then(() => {
        console.info("fetching-all-suppliers");
        dispatch({ type: GET_ALL_SUPPLIERS, payload: allProfesionals });
      })
      .catch((error) => console.error(error.message));
  };
};

// const getCategory = (categoryId) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`https://raw.githubusercontent.com/johpaz/ApiProfinder/master/src/db.json/${categoryId}`);
//       dispatch({
//         type: GET_CATEGORY,
//         payload: response.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: GET_ALL_FAILURE,
//         payload: error.message
//       });
//     }
//   };
// };

//! Todas las categorias con su ID
const getAllCategories = () => {
  const URL = API.DOMAIN;
  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: results.data[0].categorias,
        });
       
        //  console.log(results.data[0].categorias);
      })
      .catch((error) => console.error(error.message));
  };
};

//! Filtrar por categoria
const filterByCategory = (category) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: category,
  };
};

const resetCategoryFilter = () => {
  return {
    type: "RESET_CATEGORY_FILTER",
  };
};

//! action para buscar por nombre de profesion
export const searchProfessionals = (searchTerm) => {
  const URL = API.DOMAIN;

  return function (dispatch) {
    fetch(`${URL}/professionals?name=${searchTerm}`)
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        dispatch({
          type: SEARCH_PROFESSIONALS,
          payload: results.data,
        });
      })
      .catch((error) => console.error(error.message));
  };
};

//!
const orderByRating = (payload) => {
  return {
    type: ORDER_BY_RATING,
    payload,
  };
};

//! Filter by Genres
const filterByGenres = (payload) => {
  return {
    type: FILTER_BY_GENRES,
    payload,
  };
};

//! Postear porveerdore
//! Postear proveedor
const postProveedor = (info) => {
  return async function (dispatch) {
    try {
      // Verificación
      if (
        info.name === "" ||
        info.email === "" ||
        info.image === "" ||
        info.genre === "" ||
        info.years_exp === "" ||
        info.description === "" ||
        info.ubication === "" ||
        info.phone === "" ||
        info.professions.length === 0 ||
        info.category === ""
      ) {
        throw new Error("Faltan datos");
      }

      const formattedProfessions = info.professions.map((profession) => ({
        id: profession.id,
        category: profession.category,
        occupations: profession.occupations.map((occupation) => ({
          id: occupation.id,
          name: occupation.name,
        })),
      }));

      const formattedInfo = {
        ...info,
        professions: formattedProfessions,
      };

      console.log(formattedInfo); // Mostrar los datos formateados en la consola

      await axios.post(
        "https://backprofinder-production.up.railway.app/profesional/",
        formattedInfo
      );

      alert("Proveedor creado");
    } catch (error) {
      alert(error.message);
    }
  };
};


export {
  get_all,
  getAllSuppliers,
  getAllCategories,
  filterByCategory,
  resetCategoryFilter,
  orderByRating,
  filterByGenres,
  postProveedor,
  //getCategory
};
