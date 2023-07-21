import { Grid } from "@chakra-ui/react";
import {
  Box,
  Flex,
  useColorModeValue,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChatIcon, ViewIcon, EditIcon, QuestionIcon } from "@chakra-ui/icons";
import DataSuppliers from "../DataSuppliers/DataSuppliers";
import { useState } from "react";
import { useEffect } from "react";
import CustomChatBot from "../../../components/CustomChatBot/CustomChatBot";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardSuppliers = () => {
  const dataSuppliers = useSelector((state) => state.profesionales);
  const userSession = JSON.parse(localStorage.getItem("userSession"));
  const profile = dataSuppliers.find((user) => user.id === userSession.id);
  // console.log(profile);
  const numPosts = profile && profile.posts ? profile.posts.length : 0;
  // console.log(numPosts);

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
    <Box height="100vh">
      <Grid templateColumns="250px 1fr" gap="2" height="100%">
        {/* Menú de opciones */}
        <Box bg="gray.600" p={2}>
          <Stack spacing={4}>
            <RouterLink
              to="publicaciones"
              spy
              smooth
              duration={500}
              style={linkStyle}
            >
              <Button variant="outline" onClick={handleShowInicio}>
                Incio
              </Button>
            </RouterLink>
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
            <RouterLink
              to="/updateprofile"
              spy
              smooth
              duration={500}
              style={linkStyle}
            >
              <Button variant="outline" leftIcon={<EditIcon />}>
                Editar mi Perfil
              </Button>
            </RouterLink>
            <RouterLink to="#" spy smooth duration={500} style={linkStyle}>
              <Button variant="outline">Obtén Premium</Button>
            </RouterLink>
            <RouterLink to="/help" spy smooth duration={500} style={linkStyle}>
              <Button
                variant="outline"
                leftIcon={<QuestionIcon />}
                onClick={handleShowAyuda}
              >
                Ayuda
              </Button>
            </RouterLink>
          </Stack>
        </Box>

        {/* Contenido principal */}

        <Flex flexDirection="column" alignItems="center">
        <Box textAlign="center" my={2}>
        <Text fontSize="30px" fontWeight="bold">
          MIS DATOS ONLINE
        </Text>
      </Box>
      <Grid
        templateColumns="1fr 1fr"
        gap={3}
        justifyContent="center"
        alignItems="center"
      >
        <Box textAlign="center"  bg="rgba(75, 192, 192, 0.6)"  borderRadius="10px">
          <Text fontSize="30px">Mis Posts</Text>
          <Box fontSize="24px">{numPosts}</Box>
        </Box>

        <Box textAlign="center"  bg="rgba(3, 75, 75, 0.6)" borderRadius="10px">
          <Text fontSize="30px">Servicios Terminados</Text>
          <Box fontSize="24px">15</Box>
        </Box>

        <Box textAlign="center"  bg="rgba(192, 75, 75, 0.6)" borderRadius="10px">
          <Text fontSize="30px">Servicios Activos</Text>
          <Box fontSize="24px">15</Box>
        </Box>

        <Box textAlign="center"  bg= "rgba(200, 200, 20, 0.6)" borderRadius="10px">
          <Text fontSize="30px">Servicios Cancelados</Text>
          <Box fontSize="24px">{numPosts}</Box>
        </Box>
      </Grid>

      <DataSuppliers />

      {/* Mostrar CustomChatBot solo si showAyuda es verdadero */}
      {showAyuda && <CustomChatBot />}
    </Flex>
      </Grid>
    </Box>
  );
};

export default DashboardSuppliers;
