import React from 'react';
import { Box, Stack, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-scroll';

const Sidebar = () => {
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
    <Box
      as="aside"
      w="200px"
      h="100vh"
      bg={useColorModeValue('gray.100', 'gray.900')}
      py={4}
      px={2}
    >
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
    </Box>
  );
};

export default Sidebar;
