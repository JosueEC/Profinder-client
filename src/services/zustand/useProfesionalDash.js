import { create } from 'zustand'
import { API } from '../../utils/API/constants'

const fetchData = async (URL) => {
  const data = await fetch(URL)
    .then(response => response.json())
    .then(results => {
      return results
    })
    .catch(error => console.error(error))
  return data
}

export const useProfesionalDash = create((set) => ({
  profesional: [],

  getProfesional: async () => {
    const response = await fetchData(`${API.LOCALHOST}/profesional`)
    set({ profesional: response })
  }
}))
