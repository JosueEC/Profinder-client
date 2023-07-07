//aca vienen todas las actions
import { API } from '../../../utils/API/constants'
import axios from 'axios'
import { GET_ALL, GET_ALL_FAILURE, GET_ALL_SUPPLIERS } from '../actionsTypes/actionsType'

const get_all = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/johpaz/ApiProfinder/master/src/db.json');
        console.log(response.data);
      
        dispatch({
          type: GET_ALL,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: GET_ALL_FAILURE,
          payload: error.message
        });
      }
    };
  };

//! Action para obtener a todos lo Proveedores/Profesionales
const getAllSuppliers = () => {
  const URL = API.DOMAIN

  return function (dispatch) {
    fetch(URL)
      .then(response => response.json())
      .then(results => {
        console.info('fetching-all-suppliers')
        dispatch({ type: GET_ALL_SUPPLIERS, payload: results.data[2].profesionales })
      })
      .catch(error => console.error(error.message))
  }
}
  
  export {
    get_all,
    getAllSuppliers
  };
  
  
  
  
  
  
  



