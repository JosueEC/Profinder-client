import { useState } from "react";
import { Box, Flex, useColorModeValue, Button, Stack, Heading, Text, Grid} from "@chakra-ui/react";
import { ChatIcon, ViewIcon, EditIcon, QuestionIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import FormUpdate from "../formUpdateProfile/FormUpdateProfile";
import DataSuppliers from "../DataSuppliers/DataSuppliers";
import CustomChatBot from "../../../components/CustomChatBot/CustomChatBot";
import FormServicio from "../../FormServicio/FormServicio";
import PostsSuppliers from "../PostSuppliers/PostsSuppliers";
import BarData from "../DataSuppliers/BarData";
import { useSelector } from "react-redux";

import PasarelaPagos from "../../PasarelaPagos/PasarelaPagos";

const linkStyle = {
  display: "block",
  padding: "10px",
  textDecoration: "none",
};

const DashboardSuppliers = () => {
  const dataSuppliers = useSelector((state) => state.profesionales);
  const userSession = JSON.parse(localStorage.getItem("userSession"));
  const profile = dataSuppliers.find((user) => user.id === userSession.id);
  const numPosts = profile && profile.posts ? profile.posts.length : 0;

  const [currentPage, setCurrentPage] = useState("Inicio");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Box height="100vh" display="flex"   bg={useColorModeValue("gray.800", "gray.800")}>
      <Box w="250px" bg="gray.600" p={2} >
        <Stack spacing={4}>
          <ScrollLink to="publicaciones" spy smooth duration={500} style={linkStyle}>
            <Button
              variant="outline"
              onClick={() => handlePageChange("Inicio")}
              bg={currentPage === "Inicio" ? "blue.500" : ""}
              color={currentPage === "Inicio" ? "white" : ""}
            >
              Inicio
            </Button>
          </ScrollLink>

          <ScrollLink to="publicaciones" spy smooth duration={500} style={linkStyle}>
            <Button
              variant="outline"
              onClick={() => handlePageChange("FormServicio")}
              bg={currentPage === "FormServicio" ? "blue.500" : ""}
              color={currentPage === "FormServicio" ? "white" : ""}
              leftIcon={<ChatIcon />}
            >
              Publicar
            </Button>
          </ScrollLink>

          <ScrollLink to="nuevas-publicaciones" spy smooth duration={500} style={linkStyle}>
            <Button
              variant="outline"
              onClick={() => handlePageChange("PostsSuppliers")}
              bg={currentPage === "PostsSuppliers" ? "blue.500" : ""}
              color={currentPage === "PostsSuppliers" ? "white" : ""}
              leftIcon={<ViewIcon />}
            >
              Ver mis Publicaciones
            </Button>
          </ScrollLink>

          <RouterLink to="" style={linkStyle} onClick={() => handlePageChange("FormUpdate")}>
            <Button
              variant="outline"
              bg={currentPage === "FormUpdate" ? "blue.500" : ""}
              color={currentPage === "FormUpdate" ? "white" : ""}
              leftIcon={<EditIcon />}
            >
              Editar mi Perfil
            </Button>
          </RouterLink>

          <ScrollLink to="pasarela" spy smooth duration={500} style={linkStyle}>
            <Button
              variant="outline"
              onClick={() => handlePageChange("PasarelaPagos")}
              bg={currentPage === "PasarelaPagos" ? "blue.500" : ""}
              color={currentPage === "PasarelaPagos" ? "white" : ""}
              leftIcon={<ViewIcon />}
            >
            Obtén Premium
            </Button>
          </ScrollLink>
                

        </Stack>
      </Box>

      <Flex direction="column" alignItems="center" flex="1" > {/* Alineamos el contenido en el centro */}
        {currentPage === "Inicio" && (
          <Flex direction="column" alignItems="center">
            <Heading as="h1" size="xl" my={4} color="white">
              MIS DATOS ONLINE
            </Heading>
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
            <Flex direction="row" justifyContent="space-around">
              <DataSuppliers />
            </Flex>
          </Flex>
        )}      

        {currentPage === "FormServicio" && (
          <Flex justifyContent="center" alignItems="center" flex="1"> 
            <FormServicio />
          </Flex>
        )}

        {currentPage === "PostsSuppliers" && (
          <Box>
            <PostsSuppliers />
          </Box>
        )}

        {currentPage === "FormUpdate" && (
          <Flex justifyContent="center" alignItems="center" flex="1"> 
            <FormUpdate />
          </Flex>
        )}

        {currentPage === "Ayuda" && (
          <Flex justifyContent="flex-start" alignItems="flex-end">
            <CustomChatBot />
          </Flex>
        )}
        {currentPage === "PasarelaPagos" && (
          <Box>
            <PasarelaPagos />
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default DashboardSuppliers;
