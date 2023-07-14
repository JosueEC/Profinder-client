import { Box, Flex, Text, Heading, VStack, Divider, IconButton, Button } from '@chakra-ui/react';
import { FiSettings, FiUser, FiBell } from 'react-icons/fi';

const Dashboard = () => {
  return (
    <Box>
      {/* Encabezado */}
      <Flex align="center" justify="space-between" py={4} px={6} bg="blue.500" color="white">
        <Heading size="md">Dashboard</Heading>
        <IconButton
          icon={<FiSettings />}
          variant="ghost"
          colorScheme="whiteAlpha"
          aria-label="Configuración"
        />
      </Flex>

      {/* Contenido principal */}
      <Flex>
        {/* Barra lateral */}
        <Box w="250px" bg="gray.100" p={4}>
          <VStack spacing={4} align="flex-start">
            <Button leftIcon={<FiUser />} variant="ghost" justifyContent="flex-start">
              Mi perfil
            </Button>
            <Button leftIcon={<FiBell />} variant="ghost" justifyContent="flex-start">
              Notificaciones
            </Button>
            <Button leftIcon={<FiSettings />} variant="ghost" justifyContent="flex-start">
              Configuración
            </Button>
            <Divider />
            <Button leftIcon={<FiUser />} variant="ghost" justifyContent="flex-start">
              Usuarios
            </Button>
            <Button leftIcon={<FiSettings />} variant="ghost" justifyContent="flex-start">
              Ajustes
            </Button>
          </VStack>
        </Box>

        {/* Contenido principal */}
        <Box flex="1" p={4}>
          <Text fontSize="xl">Contenido principal del dashboard</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
