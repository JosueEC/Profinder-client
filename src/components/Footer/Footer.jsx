import {
  Box,
  Container,
  Stack,
  SimpleGrid,
 
  useColorModeValue,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const footerStyles = {
  minH: "100vh",
  left: 0,
  bottom: 0,
  width: "100%",
  dark: {
    900: "#151515",
    700: "#202020",
  },
  text: {
    800: "#908E9B",
  },
};

function Footer() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box bg={bgColor} color={textColor} style={footerStyles}>
      <Container maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={8}>
          <Stack align={"center"} justify="flex-end">
            <Heading as="h2" fontWeight="bold" fontSize="xl" color="blue.500">
              Información
            </Heading>
            <Link to={"./"}>Sobre nosotros</Link>
            <Link to={"./"}>Contáctanos</Link>
            <Link to={"./comofunciona"}>Cómo funciona</Link>
            <Link to={"./"}>Home</Link>
          </Stack>

          <Stack align={"center"} justify="flex-end">
            <Heading as="h2" fontWeight="bold" fontSize="xl" color="blue.500">
              Ingresos
            </Heading>
            <Link to={"./"}>Registro usuario</Link>
            <Link to={"./login"}>Registro Profesional</Link>
            <Link to={"./"}>Inicia sesión</Link>
            <Link to={"./categories"}>Categorías</Link>
          </Stack>
        </SimpleGrid>
        <Stack align={"center"} mt={8}>
          <Text fontSize={"sm"} textAlign="center">
            © 2023 Profinder create. All rights reserved
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
