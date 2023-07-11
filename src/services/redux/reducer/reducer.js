import {
  GET_ALL_SUPPLIERS,
  GET_CATEGORIES,
  SEARCH_PROFESSIONALS,
  APPLY_FILTERS
} from '../actionsTypes/actionsType'
import { filterSuppliers } from '../filters/reduxFilters'

const initialState = {
  suppliers: [],
  backup: [],
  categories: [],
  filteredCategories: [],
  filteredSuppliers: [],
  filters: {
    category: '',
    ocupation: '',
    rating: '',
    genre: ''
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
