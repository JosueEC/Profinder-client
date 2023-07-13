import { useState } from 'react';
import { Box, IconButton, Menu, MenuButton, MenuList, MenuItem, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';
//import DarkModeToggle from '../../utils/Darkmode/DarkmodeToggle';
import logo from '../../assets/categoriesIcons/Logo.png';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  const navbarBgColor = useColorModeValue('gray.200', 'gray.900');

  // variable para controlar la renderizacion de la searchbar"
  const isCategoriesRoute = location.pathname === "/categories";

  return (
    <nav>
      <Flex
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
        <Box flex={{ base: '0 0 100%', md: '0 0 20%' }}>
          <Link to="/" textDecoration="none">
            <Image src={logo} alt="Logo" width="70%" height="auto" />
          </Link>
        </Box>

        <Box display={{ base: 'none', md: 'block' }}>
          <Link to="/comofunciona" style={{ fontSize: '20px', textDecoration: 'none' }} ml={4} fontSize="lg">
            ¿Cómo funciona?
          </Link>
        </Box>

        <Box display={{ base: 'block', md: 'none' }}>
          <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="ghost" textDecoration="none" />
            <MenuList>
              <MenuItem fontSize="lg">
                <Link to="/comofunciona" textDecoration="none">
                  ¿Cómo funciona?
                </Link>
              </MenuItem>

              <MenuItem onClick={() => handleOptionClick('cliente')} fontSize="lg">
                Soy Cliente
              </MenuItem>

              <MenuItem as="a" href="/login" onClick={() => handleOptionClick('profesional')} fontSize="lg">
                Soy Profesional
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }} mt={{ base: 4, md: 0 }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a style={{ fontSize: '20px', textDecoration: 'none' }} href="#" onClick={toggleDropdown}>
                Registrate ▼
              </a>
              {isOpen && (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleOptionClick('cliente')}
                      style={{ fontSize: '12px', textDecoration: 'none' }}
                    >
                      Soy Cliente
                    </a>
                  </li>

                  <li>
                    <a
                      href="/registerProvider"
                      onClick={() => handleOptionClick('profesional')}
                      style={{ fontSize: '12px', textDecoration: 'none' }}
                    >
                      Soy Profesional
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </Box>

        {/* pregunto si es true, si es asi se muestra la search, de lo contrario se oculta */}
        {isCategoriesRoute && <SearchBar />}
        {/* <DarkModeToggle /> */}

        <Box display={{ base: 'none', md: 'block' }}>
          <Link to="/userLogin" textDecoration="none" style={{ fontSize: '20px' }}>
            Login
          </Link>
        </Box>
      </Flex>
    </nav>
  );
};

export default Navbar;
