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
    plan: 'Plan',
    results: 0
  },

  applyFilter: (filter) => {
    set((state) => ({
      filters: { ...state.filters, [filter.name]: filter.value }
    }))
  },

  countResults: (totalResults) => {
    set((state) => ({
      filters: { ...state.filters, results: totalResults }
    }))
  },

  getProfesional: async (URL) => {
    const response = await fetchData(URL)
    set((state) => ({
      profesional: response.message ? noResultsObject : filterData(response, state.filters),
      auxProfesional: response
    }))
  },

  postBannedProfesional: async (userID) => {
    const options = { method: 'PUT' }
    const response = await fetchData(`${API.DBONLINE}/profesional/delete/${userID}`, options)
    set({
      messageBackend: response
    })
  },

  postUnbannedProfesional: async (userID) => {
    const options = { method: 'PUT' }
    const response = await fetchData(`${API.DBONLINE}/profesional/reverseDelete/${userID}`, options)
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
  },

  postRemovePremium: async (userID) => {
    const options = { method: 'PUT' }
    const response = await fetchData(`${API.DBONLINE}/profesional/reversePremiun/${userID}`, options)
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
