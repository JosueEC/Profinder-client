import { create } from 'zustand'
import { API } from '../../utils/API/constants'
import { filterData } from '../../views/DashboardAdmin/components/FiltersDashboard/filters'

export const useProfesionalDash = create((set) => ({
  profesional: [],
  auxProfesional: [],
  messageBackend: '',
  filters: {
    category: 'Categorias',
    ocupation: 'Ocupacion',
    status: 'Estatus',
    plan: 'Plan'
  },

  applyFilter: (filter) => {
    set((state) => ({
      filters: { ...state.filters, [filter.name]: filter.value }
    }))
  },

  getProfesional: async () => {
    const response = await fetchData(`${API.DBONLINE}/profesional`)
    set((state) => ({
      profesional: filterData(response, state.filters),
      auxProfesional: response
    }))
  },

  getBannedProfesional: async () => {
    const response = await fetchData(`${API.DBONLINE}/profesional/delete`)
    set({
      profesional: response,
      auxProfesional: response
    })
  },

  getActiveProfesional: async () => {
    const response = await fetchData(`${API.DBONLINE}/profesional/noDelete`)
    set({
      profesional: response,
      auxProfesional: response
    })
  },

  getBasicProfesional: async () => {
    const response = await fetchData(`${API.DBONLINE}/profesional/noPremiun`)
    set({
      profesional: response,
      auxProfesional: response
    })
  },

  getPremiumProfesional: async () => {
    const response = await fetchData(`${API.DBONLINE}/profesional/premiun`)
    set({
      profesional: response,
      auxProfesional: response
    })
  },

  postBannedProfesional: async (userID) => {
    const options = { method: 'PUT' }
    const response = await fetchData(`${API.DBONLINE}/profesional/delete/${userID}`, options)
    set({
      messageBackend: response
    })
  },

  postPremiumProfesional: async (userID) => {
    const options = { method: 'PUT' }
    const response = await fetchData(`${API.DBONLINE}/profesional/premiun/${userID}`, options)
    set({
      messageBackend: response
    })
  }

}))

const fetchData = async (URL, options) => {
  const data = await fetch(URL, options)
    .then(response => response.json())
    .then(results => {
      if (results.message) {
        return [noResultsObject]
      }
      return results
    })
    .catch(error => console.error(error))
  return data
}

const noResultsObject = {
  id: 1,
  name: 'Ningun',
  email: 'Resultado',
  image: undefined,
  active: undefined,
  softDelete: undefined,
  noResults: true
}
