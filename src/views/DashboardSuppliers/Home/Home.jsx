import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  useColorModeValue,
  Button,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { ChatIcon, ViewIcon, EditIcon, QuestionIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import DataSuppliers from "../DataSuppliers/DataSuppliers";
import { useState } from "react";
import { useEffect } from "react";
import CustomChatBot from "../../../components/CustomChatBot/CustomChatBot";
import BarData from "../DataSuppliers/BarData";

const DashboardSuppliers = () => {
  //! variable paar que todas las opciones del panel tengan el mismo estilo
  const linkStyle = {
    display: "block",
    padding: "10px",
    textDecoration: "none",
    color: useColorModeValue("gray.700", "gray.200"),
    _hover: {
      bg: useColorModeValue("gray.200", "gray.700"),
    },
  };

  const [showInicio, setShowInicio] = useState(false);
  const [showAyuda, setShowAyuda] = useState(false);

  const handleShowInicio = () => {
    setShowInicio(true);
    setShowAyuda(false);
  };
  const handleShowAyuda = () => {
    setShowAyuda(true);
  };
  useEffect(() => {
    handleShowInicio();
  }, []);

  return (
    <Box height="100vh" display="flex">
      <Box w="250px" bg="gray.600" p={2}>
        <Stack spacing={4}>
          <ScrollLink
            to="publicaciones"
            spy
            smooth
            duration={500}
            style={linkStyle}
          >
            <Button variant="outline" onClick={handleShowInicio}>
              Incio
            </Button>
          </ScrollLink>
          <RouterLink
            to="/createPost"
            spy
            smooth
            duration={500}
            style={linkStyle}
          >
            <Button variant="outline" leftIcon={<ChatIcon />}>
              Publicar
            </Button>
          </RouterLink>

          <RouterLink
            to="/viewPosts"
            spy
            smooth
            duration={500}
            style={linkStyle}
          >
            <Button variant="outline" leftIcon={<ViewIcon />}>
              Ver mis Publicaciones
            </Button>
          </RouterLink>
          <RouterLink to="/updateprofile" style={linkStyle}>
            <Button variant="outline" leftIcon={<EditIcon />}>
              Editar mi Perfil
            </Button>
          </RouterLink>
          <ScrollLink
            to="/pasarela"
            spy
            smooth
            duration={500}
            style={linkStyle}
          >
            <Button variant="outline">Obtén Premium</Button>
           
          </ScrollLink>
          <RouterLink
            to="/help"
            spy
            smooth
            duration={500}
            style={linkStyle}
          >
            <Button variant="outline"  leftIcon={<QuestionIcon />} onClick={handleShowAyuda}>
              Ayuda
            </Button>
          </RouterLink>
        </Stack>
      </Box>

      <Flex
        position="relative"
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        {showAyuda ? <CustomChatBot /> : null}
      </Flex>
      {showInicio ? (
        <Flex direction="column" alignItems="center">
          {" "}
          {/* Alineamos los elementos en el centro */}
          <Heading as="h1" size="xl" my={4}>
            MIS DATOS ONLINE
          </Heading>{" "}
          {/* Utilizamos un elemento Heading para el título */}
          <Flex direction="row" justifyContent="space-around">
            <DataSuppliers />
            <BarData />
          </Flex>
        </Flex>
      ) : null}
    </Box>
  );
};

export default DashboardSuppliers;
