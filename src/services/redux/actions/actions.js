//aca vienen todas las actions

import axios from 'axios'
import { GET_ALL, GET_ALL_FAILURE } from '../actionsTypes/actionsType'

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
  
  export default get_all;
  
  
  
  
  
  
  



