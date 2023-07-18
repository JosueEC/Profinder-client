import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const IntroductionDash = () => {
  return (
    <Box width="100%" bg="gray.100" border="1px solid black" borderRadius="md" p={4}>
      <Text fontSize="xl" fontWeight="bold" textAlign="center" color="teal.500">
        Estas en en panel de administracion de cliente. Aqui podras editar todas tus preferencias, guardar tus profesionales favoritos, consultar las categorias, ver profesionales mejor valorados y la seccion de ayuda y q&a.
      </Text>
    </Box>
  );
};

export default IntroductionDash;