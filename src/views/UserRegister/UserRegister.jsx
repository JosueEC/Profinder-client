import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../../services/redux/actions/actions'
import { useDispatch } from 'react-redux'
import DropdownMenu from '../../singleComponents/DropdownMenu'

export default function SignupCard () {
  const disptach = useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState('Tipo de usuario')
  const [dataSession, setDataSession] = useState({
    name: '',
    email: '',
    password: '',
    user: ''
  })
  const userTypes = [
    { name: 'Cliente' },
    { name: 'Profesional' },
    { name: 'Administrador' }
  ]

  function handleChange (event) {
    const { id, value } = event.target
    setDataSession(prevState => { return { ...prevState, [id]:value }})
  }

  function handleSelectUser (event) {
    const name = event.target.name
    if (name === 'Cliente') setDataSession(prevState => { return { ...prevState, user: 'c' }})
    else if (name === 'Profesional') setDataSession(prevState => { return { ...prevState, user: 'p' }})
    else if (name === 'Administrador') setDataSession(prevState => { return { ...prevState, user: 'a' }})
    setUser(name)
  }

  function handleClickRegister () {
    console.log(dataSession)
    disptach(registerUser(dataSession))
  }

  return (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      bg={useColorModeValue('gray.800', 'gray.800')}
    >
      <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
        <Stack align='center'>
          <Heading
            fontSize='4xl'
            textAlign='center'
            bgGradient='linear(to-l, teal.300, green.400)'
            bgClip='text'
          >
            Registrate
          </Heading>
          <Text fontSize='lg' color='gray.50'>
            para disfrutar de todos nuestros servicios
          </Text>
        </Stack>
        <Box
          rounded='lg'
          bg={useColorModeValue('blackAlpha.800', 'gray.800')}
          color='gray.50'
          boxShadow='lg'
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id='name' isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input type='text' onChange={handleChange}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id='apellido'>
                  <FormLabel>Apellido</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id='email' isRequired>
              <FormLabel>Correo electronico</FormLabel>
              <Input type='email' onChange={handleChange}/>
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Contraseña</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={handleChange}/>
                <InputRightElement h='full'>
                  <Button
                    variant='ghost'
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)}
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <DropdownMenu
              titleMenu={user}
              menuItems={userTypes}
              onClick={handleSelectUser}
            />
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleClickRegister}
                loadingText='Registrando'
                size='lg'
                bg='blue.400'
                color='white'
                _hover={{
                  bg: 'blue.500'
                }}
              >
                Registrar
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align='center'>
                Ya tienes una cuenta? ingresa desde aqui <Link to='/userLogin'>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
