import {
  GET_ALL_SUPPLIERS,
  GET_CATEGORIES,
  SEARCH_PROFESSIONALS,
  APPLY_FILTERS,
  // GET_PROFESIONALS_BY_NAME
} from '../actionsTypes/actionsType'
import { filterSuppliers } from '../filters/reduxFilters'

const initialState = {
  suppliers: [],
  ocupations: [],
  backup: [],
  categories: [],
  filteredCategories: [],
  filteredSuppliers: [],
  filters: {
    category: 'Categorias',
    ocupation: 'Selecciona una categoria',
    rating: 'Rating',
    genre: 'Genero'
  }
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
      // case GET_PROFESIONALS_BY_NAME:
      //   return {
      //     ...state,
      //     suppliers: action.payload
      //   }
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
    //! caso por default
    default:
      return { ...state }
  }
}

export default reducer
