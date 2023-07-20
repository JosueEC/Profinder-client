/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { getSessionUser } from '../services/redux/actions/actions'
import { useDispatch } from 'react-redux'
import { useCredentials } from '../utils/customHooks/useCredentials'
import { Button } from '@chakra-ui/button'

export default function GoogleAuthButton () {
  const dispatch = useDispatch()
  const { handleUserSession } = useCredentials()

  async function handleCallbackResponse (response) {
    const userObject = jwt_decode(response.credential)
    const dataSessionGoogle = {
      email: userObject.email,
      password: userObject.sub,
      usuario: ''
    }
    await dispatch(getSessionUser(dataSessionGoogle))
    handleUserSession('Sesion iniciada', 'Algo salio mal')
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    google.accounts.id.initialize({
      client_id: '298712469496-c4b7dmru4gl62him455vjft5a9k9hb98.apps.googleusercontent.com',
      callback: handleCallbackResponse
    })
    // eslint-disable-next-line no-undef
    google.accounts.id.renderButton(
      document.getElementById('g_id_onload'),
      { theme: 'outline', size: 'large', data_width: '220px' }
    )
  }, [])

  return (
    <Button
      id='g_id_onload'
      bg='gray.50'
      h='50px'
      _hover={{
        bg: 'gray.50'
      }}
    />
  )
}