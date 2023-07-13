import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/toast'
export const useCredentials = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [showPassword, setShowPassword] = useState(false)
  const userTypes = [
    { name: 'Cliente' },
    { name: 'Profesional' },
    { name: 'Administrador' }
  ]
  const [usuario, setUser] = useState('Tipo de usuario')
  const [dataSession, setDataSession] = useState({
    name: '',
    email: '',
    password: '',
    usuario: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    usuario: ''
  })

  function setUserType (usuario) {
    setDataSession(prevState => {
      return { ...prevState, usuario }
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

  function handleUserSession (succesTitle, errorTitle) {
    const session = JSON.parse(window.localStorage.getItem('userSession'))
    if (session.status) {
      toast({
        title: succesTitle,
        description: session.message,
        status: 'success',
        variant: 'top-accent',
        position: 'bottom-right',
        duration: 5000,
        isClosable: true,
      })
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      navigate('/')
    } else {
      toast({
        title: errorTitle,
        description: session.message || session.error,
        status: 'error',
        variant: 'top-accent',
        position: 'bottom-right',
        duration: 5000,
        isClosable: true,
      })
      window.localStorage.removeItem('userSession')
    }
  }

  return {
    userTypes,
    usuario,
    dataSession,
    errors,
    showPassword,
    setShowPassword,
    setErrors,
    handleChange,
    handleSelectUser,
    handleUserSession
  }
}
