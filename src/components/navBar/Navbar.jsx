import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Image,
  useColorModeValue,
  HStack,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../../utils/Darkmode/DarkmodeToggle";
import Logo from "../../assets/categoriesIcons/Logo.png";
//import SearchBar from '../SearchBar/SearchBar'
import NavLink from "../../singleComponents/NavLink";

const Navbar = () => {
  const navigate = useNavigate();
  // const location = useLocation()
  const navbarBgColor = useColorModeValue("gray.200", "gray.900");

  // variable para controlar la renderizacion de la searchbar"
  // const isCategoriesRoute = location.pathname === '/categories'

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Flex
        position='sticky'
        top='0px'
        justifyContent="space-between"
        alignItems="center"
        padding={4}
        bg={navbarBgColor}
        as="div"
        textTransform="uppercase"
        fontWeight="bold"
        fontSize="2xl"
        fontFamily="body"
        color="gray.700"
      >
        <HStack spacing={8} alignItems="center">
          <Box onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
            <Image
              src={Logo}
              width={{ base: "50%", md: "100%", lg: "100%" }}
              height="70px"
            />
          </Box>
          <HStack
            as="nav"
            spacing={10}
            display={{ base: "none", md: "flex" }}
            fontSize="1.2rem"
            fontWeight="bold"
          >
            <NavLink textLink="¿Como funciona?" routeLink="/comofunciona" />
            <NavLink textLink="Categorias" routeLink="/categories" />
            <NavLink textLink="Contacto" routeLink="/" />
            <NavLink textLink="Acerca de" routeLink="/" />
          </HStack>
        </HStack>

        <Box display={{ base: "block", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              size="lg"
              icon={<HamburgerIcon />}
              variant="ghost"
              textDecoration="none"
            />
            <MenuList>
              <MenuItem onClick={() => navigate("/comofunciona")}>
                ¿Como funciona?
              </MenuItem>
              <MenuItem onClick={() => navigate("/categories")}>
                Categorias
              </MenuItem>
              <MenuItem onClick={() => navigate("/")}>Contacto</MenuItem>
              <MenuItem onClick={() => navigate("/")}>Acerca de</MenuItem>
              <MenuItem onClick={() => navigate("/userLogin")}>
                Iniciar sesion
              </MenuItem>
              <MenuItem onClick={() => navigate("/registerCliente")}>
                Registrarse cliente
              </MenuItem>
              <MenuItem onClick={() => navigate("/registerProvider")}>
                Registrarse profesional
              </MenuItem>
              <MenuItem onClick={() => navigate("/dashboardAdmin")}>
                Dashboard Admin
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <DarkModeToggle />
        {/* pregunto si es true, si es asi se muestra la search, de lo contrario se oculta */}
        {/* {isCategoriesRoute && <SearchBar />} */}

        <HStack
          display={{ base: "none", md: "block", lg: "row" }}
          justifyContent="space-between"
        >
          <Button
            variant="solid"
            colorScheme="gray"
            size="md"
            mr={6}
            onClick={() => navigate("/userLogin")}
          >
            Iniciar sesion
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg={useColorModeValue("blue.500", "blue.700")}
              color="gray.100"
              _hover={{
                bg: "blue.600",
              }}
            >
              Registrarse
            </MenuButton>
            <MenuList>
              <MenuItem
                color="gray.800"
                onClick={() => navigate("/registerProvider")}
              >
                Soy profesional
              </MenuItem>
              <MenuItem
                color="gray.800"
                onClick={() => navigate("/registerCliente")}
              >
                Soy cliente
              </MenuItem>
              <MenuItem
                color="gray.800"
                onClick={() => navigate("/dashboardAdmin")}
              >
                Dashboard Admin
              </MenuItem>
            </MenuList>
          </Menu>
          {/* <Button
            variant='solid'
            colorScheme='blue'
            size='md'
            onClick={() => navigate('/userRegister')}
          >
            Registrarse
          </Button> */}
        </HStack>
      </Flex>
    </nav>
  );
};

export default Navbar;
