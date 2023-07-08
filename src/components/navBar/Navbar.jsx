import { useState } from "react";
import SearchBar from '../SearchBar/SearchBar'
import FilterByCategoria  from "../Filteres/FilterByCategories";

import logo from "../../assets/categoriesIcons/logo.png";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";


const Navbar = () => {

  // Estado para controlar la visibilidad del menú desplegable
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar la visibilidad del menú desplegable
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Función para manejar el clic en una opción del menú desplegable
  const handleOptionClick = (option) => {
    console.log("Selected option:", option);
    setIsOpen(false); // Cerrar el menú desplegable al seleccionar una opción
  };

  return (
    <nav>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding={4}
        bg="gray.200"
        as="div"
        textTransform="uppercase"
        fontWeight="bold"
        fontSize="2xl"
        fontFamily="body"
        color="gray.700"
      >
        {/* Logo */}
        <Box flex={{ base: "0 0 100%", md: "0 0 30%" }}>
          <Link to="/" textDecoration="none">
            <Image src={logo} alt="Logo" width="70%" height="auto" />
          </Link>
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <Link to="/comofunciona" textDecoration="none" ml={4} fontSize="lg">
            ¿Cómo funciona?
          </Link>
        </Box>
        <SearchBar/>
        <FilterByCategoria/>

        <Box display={{ base: "block", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="ghost"
              textDecoration="none"
            />
            <MenuList>
              <MenuItem fontSize="lg">
                <Link to="/comofunciona" textDecoration="none">
                  ¿Cómo funciona?
                </Link>
              </MenuItem>

              <MenuItem
                onClick={() => handleOptionClick("cliente")}
                fontSize="lg"
              >
                Soy Cliente
              </MenuItem>

              <MenuItem
                as="a"
                href="/login"
                onClick={() => handleOptionClick("profesional")}
                fontSize="lg"
              >
                Soy Profesional
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <ul>
            <li>
              <a href="#" onClick={toggleDropdown} textDecoration="none">
                Registrate ▼
              </a>
              {isOpen && (
                <ul>
                  {/* Opción: Soy Cliente */}
                  <li>
                    <a
                      href="#"
                      onClick={() => handleOptionClick("cliente")}
                      textDecoration="none"
                      fontSize="lg"
                    >
                      Soy Cliente
                    </a>
                  </li>

                  <li>
                    <a
                      href="/login"
                      onClick={() => handleOptionClick("profesional")}
                      textDecoration="none"
                      fontSize="lg"
                    >
                      Soy Profesional
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <Link to="/userLogin" textDecoration="none">
            Login
          </Link>
        </Box>
      </Flex>
    </nav>
  );
};

export default Navbar;
