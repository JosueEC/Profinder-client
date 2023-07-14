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
import { useCredentials } from '../../utils/customHooks/useCredentials'
import { validateEmail } from '../../services/validators/validationsLogin'
import { useDispatch } from 'react-redux'
import { getSessionUser, loginSessionGoogle } from '../../services/redux/actions/actions'
import { Link } from 'react-router-dom'
import DropdownMenu from '../../singleComponents/DropdownMenu'

export default function UserLogin () {
  const dispatch = useDispatch()
  const {
    userTypes,
    usuario,
    dataSession,
    errors,
    setErrors,
    handleChange,
    handleSelectUser,
    handleUserSession
  } = useCredentials()

  async function handleSubmit (event) {
    event.preventDefault()
    try { validateEmail(dataSession.email) } catch (error) { setErrors({ ...errors, email: error.message }) }
    await dispatch(getSessionUser(dataSession))
    handleUserSession('Sesion iniciada', 'Algo salio mal')
  }

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
        <form onSubmit={handleSubmit}>
          <Box // Formulario de Login
            rounded='lg'
            bg={useColorModeValue('blackAlpha.800', 'gray.800')}
            boxShadow='lg' p={8}
          >
            <Stack spacing={4}>
              <FormControl id='email' color='gray.300' isRequired isInvalid={errors.email}>
                <FormLabel color='gray.300'>Correo electronico</FormLabel>
                <Input
                  type='email'
                  focusBorderColor='teal.400'
                  placeholder='ejemplo@gmail.com'
                  id='email'
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl id='password' color='gray.300' isRequired>
                <FormLabel color='gray.300'>Contraseña</FormLabel>
                <Input
                  type='password'
                  focusBorderColor='teal.400'
                  id='password'
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <DropdownMenu
                  titleMenu={usuario}
                  menuItems={userTypes}
                  onClick={handleSelectUser}
                />
                <Divider />
                <Stack spacing={5}>
                  <Button
                    bg='teal.50'
                    color='black'
                    _hover={{ bg: 'teal.100' }}
                    onClick={() => dispatch(loginSessionGoogle())}
                  >
                    Google
                  </Button>
                  <Button
                    bg='teal.400'
                    color='white'
                    _hover={{ bg: 'teal.500' }}
                    loadingText='Ingresando'
                    type='submit'
                    // onMouseUp={notifyUser}
                  >
                    Ingresar
                  </Button>
                  <Text color='gray.300' letterSpacing='0.5px'>
                    Aun no tienes una cuenta? Registrate gratis <Link to='/userRegister'>aqui</Link>
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
