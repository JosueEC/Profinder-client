import { create } from 'zustand'
import { API } from '../../utils/API/constants'

export const useProfesionalDash = create((set) => ({
  profesional: [],
  auxProfesional: [],
  filters: {
    category: 'Categoria',
    ocupation: 'Ocupacion'
  },

  getProfesional: async () => {
    const response = await fetchData(`${API.LOCALHOST}/profesional`)
    set({
      profesional: response,
      auxProfesional: response
    })
  },

  applyFilter: (filter) => {
    set((state) => ({
      filters: {...state.filters, [filter.name]: filter.value}
    }))
  }
}))

const fetchData = async (URL) => {
  const data = await fetch(URL)
    .then(response => response.json())
    .then(results => {
      return results
    })
    .catch(error => console.error(error))
  return data
}
