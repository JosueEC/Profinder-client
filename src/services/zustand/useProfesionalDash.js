import { create } from 'zustand'
import { API } from '../../utils/API/constants'

export const useProfesionalDash = create((set) => ({
  profesional: [],
  auxProfesional: [],
  messageBackend: '',
  filters: {
    category: 'Categoria',
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
    const response = await fetchData(`${API.LOCALHOST}/profesional`)
    set({
      profesional: response,
      auxProfesional: response
    })
  },

  getBannedProfesional: async () => {
    const response = await fetchData(`${API.LOCALHOST}/profesional/delete`)
    set({
      profesional: response,
      auxProfesional: response
    })
  },

  getActiveProfesional: async () => {
    const response = await fetchData(`${API.LOCALHOST}/profesional/noDelete`)
    set({
      profesional: response,
      auxProfesional: response
    })
  },

  getBasicProfesional: async () => {
    const response = await fetchData(`${API.LOCALHOST}/profesional/noPremiun`)
    set({
      profesional: response,
      auxProfesional: response
    })
  },

  getPremiumProfesional: async () => {
    const response = await fetchData(`${API.LOCALHOST}/profesional/premiun`)
    set({
      profesional: response,
      auxProfesional: response
    })
  },

  postBannedProfesional: async (userID) => {
    const options = {
      method: 'PUT'
    }
    const response = await fetchData(`${API.LOCALHOST}/profesional/delete/${userID}`, options)
    console.info(response)
    set({
      messageBackend: response
    })
  }

}))

const fetchData = async (URL, options) => {
  const data = await fetch(URL, options)
    .then(response => response.json())
    .then(results => {
      return results
    })
    .catch(error => console.error(error))
  return data
}
