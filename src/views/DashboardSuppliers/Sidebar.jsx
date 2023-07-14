import React, { useState } from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  IconButton,
  Collapse,
  Button,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const DashboardSuppliers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const linkStyle = {
    display: "block",
    padding: "10px",
    textDecoration: "none",
    color: useColorModeValue("gray.700", "gray.200"),
    _hover: {
      bg: useColorModeValue("gray.200", "gray.700"),
    },
  };

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      {/* Encabezado */}
      <Flex align="center" justify="space-between" py={4} px={6} bg="blue.500" color="white">
        <IconButton
          icon={<HamburgerIcon />}
          variant="ghost"
          colorScheme="whiteAlpha"
          aria-label="Abrir menú"
          onClick={toggleCollapse}
          display={{ base: "block", md: "none" }}
        />
      </Flex>

      <Flex flex="1">
        {/* Barra lateral */}
        <Box w="250px" bg="gray.600" p={4}>
          <Stack spacing={4}>
            <Link to="publicaciones" spy smooth duration={500} style={linkStyle}>
              <Button variant="outline">Publicar</Button>
            </Link>
            <Link to="nuevas-publicaciones" spy smooth duration={500} style={linkStyle}>
              <Button variant="outline">Ver mis Publicaciones</Button>
            </Link>
            <Link to="obtener-premium" spy smooth duration={500} style={linkStyle}>
              <Button variant="outline">Obtén Premium</Button>
            </Link>
          </Stack>
        </Box>

        {/* Panel principal */}
        <Box flex="1" p={4}>
          {/* Caja para renderizar la gráfica */}
          <Box
            bg={useColorModeValue("red", "gray.500")}
            p={4}
            borderRadius="md"
            aspectRatio={1}
            boxShadow="md"
          >
            <Heading size="md" mb={2}>Total de mis publicaciones</Heading>
            <Text fontSize="lg">Aquí va el contenido de la gráfica...</Text>
          </Box>
        </Box>
      </Flex>

      {/* Colapso de la barra lateral en dispositivos móviles */}
      <Collapse in={isOpen}>
        <Box w="250px" bg="gray.900" p={4}>
          <Stack spacing={4}>
            <Link to="publicaciones" spy smooth duration={500} style={linkStyle}>
              <Button variant="outline">Publicaciones</Button>
            </Link>
            <Link to="nuevas-publicaciones" spy smooth duration={500} style={linkStyle}>
              <Button variant="outline">Nuevas Publicaciones</Button>
            </Link>
            <Link to="obtener-premium" spy smooth duration={500} style={linkStyle}>
              <Button variant="outline">Obtén Premium</Button>
            </Link>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default DashboardSuppliers;
