import { create } from 'zustand'
import { API } from '../../utils/API/constants'

export const useClientDash = create((set) => ({
  client: [],
  auxClient: [],
  messageBackend: '',
  countsGraphic: {
    clients: 0,
    clientsActive: 0,
    clientsBanned: 0
  },
  filters: {
    status: 'Estatus',
    results: 0
  },

  applyFilters: (filter) => {
    set((state) => ({
      filters: { ...state.filters, [filter.name]: filter.value }
    }))
  },

  countResults: (totalResults) => {
    set((state) => ({
      filters: { ...state.filters, results: totalResults }
    }))
  },

  getClients: async (URL) => {
    const response = await fetchData(URL)
    set({
      client: response,
      auxClient: response
    })
  },

  postBannedClient: async (clientID) => {
    const options = { method: 'PUT' }
    const response = await fetchData(`${API.DBONLINE}/client/delete/${clientID}`, options)
    set({
      messageBackend: response
    })
  },

  postUnbannedClient: async (clientID) => {
    const options = { method: 'PUT' }
    const response = await fetchData(`${API.DBONLINE}/client/reverseDelete/${clientID}`, options)
    set({
      messageBackend: response
    })
  }
}))

const fetchData = async (URL, options) => {
  const data = await fetch(URL, options)
    .then(response => response.json())
    .then(results => {
      console.info(results)
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
