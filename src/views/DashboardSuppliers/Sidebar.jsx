import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  useColorModeValue,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import FormUpdate from "./FormUpdateProfile"; // Importa el formulario FormUpdate
import { useState, useEffect } from "react";
//import { useSessionState } from "../../services/zustand/useSession";


const DashboardSuppliers = () => {
  // const session = useSessionState((state) => state.session);
  // console.log(session);
  // const setSessionState = useSessionState((state) => state.setSessionState);


  //! aca vienen los datos del usuario email,status,e ID
  useEffect(() => {
    const userSession = window.localStorage.getItem("userSession");
    if (userSession) {
      const user = JSON.parse(userSession);
      console.log(user);
    }
  }, []);


  const linkStyle = {
    display: "block",
    padding: "10px",
    textDecoration: "none",
    color: useColorModeValue("gray.700", "gray.200"),
    _hover: {
      bg: useColorModeValue("gray.200", "gray.700"),
    },
  };

  const [showForm, setShowForm] = useState(false); 

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
            <RouterLink
              to="/formUpdate"
              style={linkStyle}
              onClick={() => setShowForm(true)}
            >
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

        <Box flex="1">
          {showForm ? (
            <FormUpdate />
          ) : (
            <p>Contenido del dashboard</p>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardSuppliers;
