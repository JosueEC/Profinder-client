import { Box, Stack, Text, Button, useColorModeValue, IconButton, Collapse } from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const DashboardClient = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const linkStyle = {
    display: 'block',
    padding: '10px',
    textDecoration: 'none',
    color: useColorModeValue('gray.700', 'gray.200'),
    _hover: {
      bg: useColorModeValue('gray.200', 'gray.700'),
    },
  };

  return (
    <Box as="aside" w="200px" h="100vh" bg={useColorModeValue('gray.100', 'gray.900')} py={4} px={2}>
      <Stack spacing={4}>
        <Link
          to="publicaciones"
          spy={true}
          smooth={true}
          duration={500}
          style={linkStyle}
        >
          <Text>Publicar</Text>
        </Link>
        <Link
          to="nuevas-publicaciones"
          spy={true}
          smooth={true}
          duration={500}
          style={linkStyle}
        >
          <Text>Ver mis Publicaciones</Text>
        </Link>
        <Link
          to="obtener-premium"
          spy={true}
          smooth={true}
          duration={500}
          style={linkStyle}
        >
          <Text>Obtén Premium</Text>
        </Link>
      </Stack>

      <IconButton
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        variant="ghost"
        size="md"
        onClick={toggleCollapse}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        display={{ base: 'block', md: 'none' }}
        alignSelf="flex-end"
      />

      <Collapse in={isOpen}>
        <Stack spacing={4}>
          <Link
            to="publicaciones"
            spy={true}
            smooth={true}
            duration={500}
            style={linkStyle}
          >
            <Text>Publicaciones</Text>
          </Link>
          <Link
            to="nuevas-publicaciones"
            spy={true}
            smooth={true}
            duration={500}
            style={linkStyle}
          >
            <Text>Nuevas Publicaciones</Text>
          </Link>
          <Link
            to="obtener-premium"
            spy={true}
            smooth={true}
            duration={500}
            style={linkStyle}
          >
            <Text>Obtén Premium</Text>
          </Link>
        </Stack>
      </Collapse>
    </Box>
  );
};

export default DashboardClient;
