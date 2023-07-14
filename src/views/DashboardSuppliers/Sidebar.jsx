import {
  Box,
  Stack,
  useColorModeValue,
  IconButton,
  Collapse,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const DashboardClient = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // llevar luego a otro componente
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
    <Box
      as="aside"
      w="250px"
      h="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      py={6}
      px={0.5}
    >
      <Stack spacing={4}>
        <Link to="publicaciones" spy smooth duration={500} style={linkStyle}>
          <Button variant="outline">Publicar</Button>
        </Link>
        <Link
          to="nuevas-publicaciones"
          spy
          smooth
          duration={500}
          style={linkStyle}
        >
          <Button variant="outline">Ver mis Publicaciones</Button>
        </Link>
        <Link to="obtener-premium" spy smooth duration={500} style={linkStyle}>
          <Button variant="outline">Obtén Premium</Button>
        </Link>
      </Stack>

      <IconButton
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        variant="ghost"
        size="md"
        onClick={toggleCollapse}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        display={{ base: "block", md: "none" }}
        alignSelf="flex-end"
      />

      <Collapse in={isOpen}>
        <Stack spacing={2}>
          <Link to="publicaciones" spy smooth duration={500} style={linkStyle}>
            <Button variant="outline">Publicaciones</Button>
          </Link>
          <Link
            to="nuevas-publicaciones"
            spy
            smooth
            duration={500}
            style={linkStyle}
          >
            <Button variant="outline">Nuevas Publicaciones</Button>
          </Link>
          <Link
            to="obtener-premium"
            spy
            smooth
            duration={500}
            style={linkStyle}
          >
            <Button variant="outline">Obtén Premium</Button>
          </Link>
        </Stack>
      </Collapse>
    </Box>
  );
};

export default DashboardClient;
