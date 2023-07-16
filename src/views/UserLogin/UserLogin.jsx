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
  Divider
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useCredentials } from '../../utils/customHooks/useCredentials'
import { getSessionUser } from '../../services/redux/actions/actions'
import { emailRules, passwordRules } from './loginValidations'
import DropdownMenu from '../../singleComponents/DropdownMenu'
import jwt_decode from 'jwt-decode'

export default function UserLogin () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const {
    userTypes,
    usuario,
    userRol,
    errorRol,
    setErrorRol,
    handleSelectUser,
    handleUserSession
  } = useCredentials()

  const customSubmit = async (data) => {
    if (userRol !== '') {
      setErrorRol(false)
      const dataSession = {
        email: data.email,
        password: data.password,
        usuario: userRol
      }
      await dispatch(getSessionUser(dataSession))
      handleUserSession('Sesion iniciada', 'Algo salio mal')
    } else setErrorRol(true)
  }

  async function handleCallbackResponse (response) {
    const userObject = jwt_decode(response.credential)
    const dataSessionGoogle = {
      email: userObject.email,
      password: userObject.sub,
      usuario: userRol
    }
    await dispatch(getSessionUser(dataSessionGoogle))
    handleUserSession('Sesion iniciada', 'Algo salio mal')
    setErrorRol(false)
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    google.accounts.id.initialize({
      client_id: '298712469496-c4b7dmru4gl62him455vjft5a9k9hb98.apps.googleusercontent.com',
      callback: handleCallbackResponse
    })
    // eslint-disable-next-line no-undef
    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' }
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
                  {...register('password', passwordRules)}
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
                  {/* <Button
                    bg='teal.50'
                    color='black'
                    _hover={{ bg: 'teal.100' }}
                  >
                    Google
                  </Button> */}
                  <div id='signInDiv' />
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
