const DOMAIN = 'https://backprofinder-production.up.railway.app/profesional'

export const URL = Object.freeze({
  GET_PROFESIONAL: `${DOMAIN}`,
  GET_BANNED_PROFESIONAL: `${DOMAIN}/delete`,
  GET_ACTIVE_PROFESIONAL: `${DOMAIN}/noDelete`,
  GET_BASIC_PROFESIONAL: `${DOMAIN}/noPremiun`,
  GET_PREMIUM_PROFESIONAL: `${DOMAIN}/premiun`
})
