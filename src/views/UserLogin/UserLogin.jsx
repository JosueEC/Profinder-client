/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  Divider,
  useToast
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useCredentials } from '../../utils/customHooks/useCredentials'
import { getSessionUser } from '../../services/redux/actions/actions'
import { emailRules } from './loginValidations'
import DropdownMenu from '../../singleComponents/DropdownMenu'
import jwt_decode from 'jwt-decode'

export default function UserLogin () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [usuario, setUsuario] = useState('Tipo de usuario')
  const [rol, setRol] = useState('')

  const toast = useToast()
  const dispatch = useDispatch()
  const {
    userTypes,
    errorRol,
    setErrorRol,
    handleUserSession
  } = useCredentials()

  function handleSelectUser (event) {
    const { name } = event.target
    let rolUser
    if (name === 'Cliente') {
      setRol('c')
      rolUser = 'c'
    }
    if (name === 'Profesional') {
      setRol('p')
      rolUser = 'p'
    }
    setUsuario(name)
    window.localStorage.setItem('rol', JSON.stringify(rolUser))
  }

  const customSubmit = async (data) => {
    if (rol !== '') {
      setErrorRol(false)
      const dataSession = {
        email: data.email,
        password: data.password,
        usuario: rol
      }
      await dispatch(getSessionUser(dataSession))
      handleUserSession('Sesion iniciada', 'Algo salio mal')
    } else setErrorRol(true)
  }

  async function handleCallbackResponse (response) {
    const rol = JSON.parse(window.localStorage.getItem('rol'))
    if (rol) {
      const userObject = jwt_decode(response.credential)
      const dataSessionGoogle = {
        name: userObject.name,
        email: userObject.email,
        password: `${userObject.given_name.toLowerCase()}GOOAT0`,
        usuario: rol
      }

      await dispatch(getSessionUser(dataSessionGoogle))
      handleUserSession('Sesion iniciada', 'Algo salio mal')
    } else {
      toast({
        title: 'Usuario no especificado',
        description: 'Debes seleccionar el tipo de usuario con el que estas registrado',
        status: 'info',
        position: 'bottom-right',
        duration: 5000,
        isClosable: true
      })
    }
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
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      bg={useColorModeValue('gray.800', 'gray.800')}
    >
      <Stack
        spacing={8}
        mx='auto'
        maxW='lg'
        py={12}
        px={6}
      >
        <Stack align='center'>
          <Heading
            fontSize='4xl'
            bgGradient='linear(to-l, teal.300, green.400)'
            bgClip='text'
          >
            Hola de nuevo!
          </Heading>
          <Text fontSize='lg' color='gray.300'>
            Ingresa para disfrutar de todos nuestros <Link color='teal.300'>servicios</Link>
          </Text>
        </Stack>
        <form onSubmit={handleSubmit(customSubmit)}>
          <Box
            rounded='lg'
            bg={useColorModeValue('blackAlpha.800', 'gray.800')}
            boxShadow='lg' p={8}
          >
            <Stack spacing={4}>
              <FormControl color='gray.300' isInvalid={errors.email}>
                <FormLabel color='gray.300'>Correo electronico</FormLabel>
                <Input
                  type='email'
                  focusBorderColor={errors.email ? 'red.500' : 'teal.400'}
                  placeholder='ejemplo@gmail.com'
                  {...register('email', emailRules)}
                />
                <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl color='gray.300' isInvalid={errors.password}>
                <FormLabel color='gray.300'>Contraseña</FormLabel>
                <Input
                  type='password'
                  focusBorderColor={errors.password ? 'red.500' : 'teal.400'}
                  {...register('password')}
                />
                <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
              </FormControl>
              <Stack spacing={4}>
                <DropdownMenu
                  titleMenu={usuario}
                  menuItems={userTypes}
                  onClick={handleSelectUser}
                />
                <Text color='red.500'>{errorRol && 'Selecciona un tipo de usuario'}</Text>
                <Divider />
                <Stack spacing={5}>
                  {/* <GoogleAuthButton
                    usuario={userRol}
                    action={getSessionUser}
                    succesMessage='Sesion iniciada'
                    errorMessage='Algo salio mal'
                  /> */}
                  <Button
                    id='g_id_onload'
                    bg='gray.50'
                    h='50px'
                    _hover={{
                      bg: 'gray.50'
                    }}
                  />
                  <Button
                    bg='teal.400'
                    color='white'
                    _hover={{ bg: 'teal.500' }}
                    loadingText='Ingresando'
                    type='submit'
                  >
                    Ingresar
                  </Button>
                  <Text color='gray.300' letterSpacing='0.5px'>
                    Aun no tienes una cuenta? Registrate gratis <Link to='/userRegister' style={{ color: 'cyan' }}>aqui</Link>
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  )
}
