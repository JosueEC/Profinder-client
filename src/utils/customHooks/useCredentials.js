import { useState } from 'react'
export const useCredentials = () => {
  const userTypes = [
    { name: 'Cliente' },
    { name: 'Profesional' },
    { name: 'Administrador' }
  ]
  const [user, setUser] = useState('Tipo de usuario')
  const [dataSession, setDataSession] = useState({
    name: '',
    email: '',
    password: '',
    user: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    user: ''
  })

  function setUserType (user) {
    setDataSession(prevState => {
      return { ...prevState, user }
    })
  }

  function handleChange (event) {
    const { id, value } = event.target
    setDataSession(prevState => {
      return { ...prevState, [id]: value }
    })
  }

  function handleSelectUser (event) {
    const { name } = event.target
    if (name === 'Cliente') setUserType('c')
    else if (name === 'Profesional') setUserType('p')
    else if (name === 'Administrador') setUserType('a')
    setUser(name)
  }

  return {
    userTypes,
    user,
    dataSession,
    errors,
    setErrors,
    handleChange,
    handleSelectUser
  }
}
