/* eslint-disable react/prop-types */
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  useToast
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useSessionState } from '../../services/zustand/useSession'
import NavLink from '../../singleComponents/NavLink'
import Logo from '../../assets/categoriesIcons/Logo.png'
import SinFoto from '../../assets/defaultImages/sinfoto.webp'

export default function LoggedNavbar () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const toast = useToast()
  const session = useSessionState(state => state.session)
  const removeSessionState = useSessionState(state => state.removeSessionState)

  function handleLogout () {
    removeSessionState()
    window.localStorage.removeItem('userSession')
    toast({
      title: 'Sesion finalizada',
      description: 'Esperamos verte de nuevo',
      status: 'success',
      variant: 'top-accent',
      position: 'bottom-right',
      duration: 5000,
      isClosable: true
    })
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    navigate('/')
  }

  return (
    <>
      <Box
        bg={useColorModeValue('gray.200', 'gray.900')}
        px='40px'
        py='10px'
      >
        <Flex
          h={16}
          alignItems='center'
          justifyContent='space-between'
        >
          <IconButton
            size='lg'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label='Open Menu'
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems='center'
          >
            <Box onClick={() => navigate('/')} _hover={{ cursor: 'pointer' }}>
              <Image
                src={Logo}
                width={{ base: '70%', md: '100%', lg: '100%' }}
                height='70px'
              />
            </Box>
            <HStack
              as='nav'
              spacing={10}
              display={{ base: 'none', md: 'flex' }}
              fontSize='1.15rem'
              fontWeight='bold'
            >
              <NavLink textLink='¿COMO FUNCIONA?' routeLink='/comofunciona' />
              <NavLink textLink='CATEGORIAS' routeLink='/categories' />
              <NavLink textLink='CONTACTO' routeLink='/' />
              <NavLink textLink='ACERCA DE' routeLink='/' />
            </HStack>
          </HStack>

          <Flex
            alignItems='center'
          >
            <Menu>
              <MenuButton
                as={Button}
                rounded='full'
                variant='link'
                cursor='pointer'
                minW={0}
              >
                <Avatar
                  size={{ base: 'md', md: 'lg', lg: 'lg' }}
                  src={SinFoto}
                />
              </MenuButton>
              <MenuList>
                {
                (session.usuario === 'c')
                  ? <MenuItem onClick={() => navigate('/dashboardClient')}>Dashboard</MenuItem>
                  : <MenuItem onClick={() => navigate('/dashboardSuppliers')}>Dashboard</MenuItem>
                }
                {
                  (session.usuario === 'c')
                    ? <MenuItem onClick={() => navigate('/registerCliente')}>Completar perfil</MenuItem>
                    : <MenuItem onClick={() => navigate('/registerProvider')}>Completar perfil</MenuItem>
                }
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Cerrar sesion</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen
          ? (
            <Box
              pb={4}
              display={{ md: 'none' }}
            >
              <Stack as='nav' spacing={4}>
                <NavLink textLink='¿Como funciona?' routeLink='/comofunciona' />
                <NavLink textLink='Categorias' routeLink='/categories' />
                <NavLink textLink='Contacto' routeLink='/' />
                <NavLink textLink='Acerca de' routeLink='/' />
              </Stack>
            </Box>
            )
          : null}
      </Box>
    </>
  )
}
