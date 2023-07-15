import { Link as RouterLink,  } from "react-router-dom";
import {
  Box,
  Flex,
  useColorModeValue,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const DashboardSuppliers = () => {

  //! aqui defino los estilos de los links de la sidebar....... con esto podremos crear variables en otro componente y reutilizar los estilos y en la etiqueta se implementan asi: style={linkStyle}
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
      <Flex flex="1">
   
        <Box w="250px" bg="gray.600" p={4}>
          <Stack spacing={4}>
            <ScrollLink
              to="publicaciones"
              spy
              smooth
              duration={500}
              style={linkStyle}
            >
              <Button variant="outline">Publicar</Button>
            </ScrollLink>
            <ScrollLink
              to="nuevas-publicaciones"
              spy
              smooth
              duration={500}
              style={linkStyle}
            >
              <Button variant="outline">Ver mis Publicaciones</Button>
            </ScrollLink>
            <RouterLink to="/formUpdate" style={linkStyle}>
              <Button variant="outline">Editar mi Perfil</Button>
            </RouterLink>
            <ScrollLink
              to="obtener-premium"
              spy
              smooth
              duration={500}
              style={linkStyle}
            >
              <Button variant="outline">Obtén Premium</Button>
            </ScrollLink>
          </Stack>
        </Box>

      </Flex>

      {/*aca iria un btn hamburguesa para dispositivos moviles */}

    </Box>
  );
};

export default DashboardSuppliers;
