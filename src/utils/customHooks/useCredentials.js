import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSessionState } from '../../services/zustand/useSession'
import { useToast } from '@chakra-ui/toast'
export const useCredentials = () => {
  const navigate = useNavigate()
  const setSessionState = useSessionState((state) => state.setSessionState)
  const [showPassword, setShowPassword] = useState(false)
  const toast = useToast()
  const userTypes = [
    { name: 'Cliente' },
    { name: 'Profesional' }
    // { name: 'Administrador' }
  ]
  const [usuario, setUser] = useState('Tipo de usuario')
  const [userRol, setUserRol] = useState('')
  const [errorRol, setErrorRol] = useState(false)

  function handleSelectUser (event) {
    const { name } = event.target
    if (name === 'Cliente') setUserRol('c')
    else if (name === 'Profesional') setUserRol('p')
    else if (name === 'Administrador') setUserRol('a')
    setUser(name)
    setErrorRol(false)
  }

  function handleUserSession (succesTitle, errorTitle) {
    const session = JSON.parse(window.localStorage.getItem('userSession'))
    if (session.status) {
      toast({
        title: succesTitle,
        description: session.message,
        status: 'success',
        position: 'bottom-right',
        duration: 5000,
        isClosable: true
      })
      setSessionState(session)
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      navigate((session.usuario === 'c') ? '/dashboardClient' : '/dashboardSuppliers')
    } else {
      toast({
        title: errorTitle,
        description: session.message || session.error,
        status: 'error',
        position: 'bottom-right',
        duration: 5000,
        isClosable: true
      })
      window.localStorage.removeItem('userSession')
    }
  }

  return {
    userTypes,
    usuario,
    userRol,
    errorRol,
    setErrorRol,
    showPassword,
    setShowPassword,
    handleSelectUser,
    handleUserSession
  }
}
