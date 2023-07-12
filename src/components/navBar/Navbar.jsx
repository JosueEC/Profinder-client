import { useState } from 'react';
import { Box, IconButton, Menu, MenuButton, MenuList, MenuItem, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../../utils/Darkmode/DarkmodeToggle';
import logo from '../../assets/categoriesIcons/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  // Obtener el color de fondo de la Navbar según el modo de color actual
  const navbarBgColor = useColorModeValue('gray.200', 'gray.900');

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
          <Link to="/comofunciona" style={{ fontSize: '20px' }} textDecoration="none" ml={4} fontSize="lg">
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
          <ul>
            <li>
              <a style={{ fontSize: '20px' }} href="#" onClick={toggleDropdown} textDecoration="none">
                Registrate ▼
              </a>
              {isOpen && (
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleOptionClick('cliente')}
                      textDecoration="none"
                      style={{ fontSize: '12px' }}
                    >
                      Soy Cliente
                    </a>
                  </li>

                  <li>
                    <a
                      href="/registerProvider"
                      onClick={() => handleOptionClick('profesional')}
                      textDecoration="none"
                      style={{ fontSize: '12px' }}
                    >
                      Soy Profesional
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </Box>
        <DarkModeToggle />

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
