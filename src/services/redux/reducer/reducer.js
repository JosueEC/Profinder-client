import {
  GET_ALL_SUPPLIERS,
  GET_CATEGORIES,
  SEARCH_PROFESSIONALS,
  APPLY_FILTERS,
  GET_OCUPATION_BY_NAME,
  UPDATE_PROFESIONAL
} from '../actionsTypes/actionsType'
import { filterSuppliers } from '../filters/reduxFilters'

const initialState = {
  suppliers: [],
  ocupations: [],
  backup: [],
  categories: [],
  clients: [],
  filteredCategories: [],
  filteredSuppliers: [],
  suppliersByname:[],
  filters: {
    category: 'Categorias',
    ocupation: 'Selecciona una categoria',
    rating: 'Rating',
    genre: 'Genero'
  },
  session: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SUPPLIERS:
      return {
        ...state,
        backup: action.payload,
        suppliers: filterSuppliers(action.payload, state.filters)
      }
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
      //! esta es para traer los profesionales por el nombre de la ocupacion y renderizarlos en categories, se implementa en la searchBar
      case GET_OCUPATION_BY_NAME:
        return {
          ...state,
          suppliersByname: action.payload
        }
           //! actualizar profesional // preguntar cual es el estado a actualizar
      case UPDATE_PROFESIONAL:
        return {
          ...state,
          session: action.payload, 
        };
    case APPLY_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, [action.payload.filter]: action.payload.value }
      }
    case SEARCH_PROFESSIONALS:
      return {
        ...state,
        professionals: action.payload
      }
   
      case "GET_ALL_CLIENTS":
      return {
        ...state,
        clients: action.payload,
      };
    case "UPDATE_CLIENT":
      return {
        ...state,
        clients: state.clients.map((client) =>
          client.id === action.payload.id ? action.payload : client
        ),
      };  
    //! caso por default
    default:
      return { ...state }
  }
}

export default reducer
