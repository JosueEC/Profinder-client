import { Link as RouterLink } from "react-router-dom";
import { Box, useColorModeValue, Button, Stack } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import FormUpdate from "./FormUpdateProfile";
import { useState, useEffect } from "react";
import FormServicio from "../FormServicio/FormServicio";
import PostsSuppliers from "./PostsSuppliers";

const DashboardSuppliers = () => {
  useEffect(() => {
    const userSession = window.localStorage.getItem("userSession");
    if (userSession) {
      const user = JSON.parse(userSession);
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
  const [showPosts, setShowPosts] = useState(false);
  const [showFormServicio, setShowFormServicio] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    setShowPosts(false);
    setShowFormServicio(false);
  };

  const handleShowPosts = () => {
    setShowForm(false);
    setShowPosts(true);
    setShowFormServicio(false);
  };

  const handleShowFormServicio = () => {
    setShowForm(false);
    setShowPosts(false);
    setShowFormServicio(true);
  };

  return (
    <Box height="100vh" display="flex">
      <Box w="250px" bg="gray.600" p={4}>
        <Stack spacing={4}>
          <ScrollLink
            to="publicaciones"
            spy
            smooth
            duration={500}
            style={linkStyle}
          >
            <Button
              variant="outline"
              onClick={handleShowFormServicio}
              bg={showFormServicio ? "blue.500" : ""}
              color={showFormServicio ? "white" : ""}
            >
              Publicar
            </Button>
          </ScrollLink>
          <ScrollLink
            to="nuevas-publicaciones"
            spy
            smooth
            duration={500}
            style={linkStyle}
          >
            <Button
              variant="outline"
              onClick={handleShowPosts}
              bg={showPosts ? "blue.500" : ""}
              color={showPosts ? "white" : ""}
            >
              Ver mis Publicaciones
            </Button>
          </ScrollLink>
          <RouterLink
            to="/formUpdate"
            style={linkStyle}
            onClick={handleShowForm}
          >
            <Button
              variant="outline"
              bg={showForm ? "blue.500" : ""}
              color={showForm ? "white" : ""}
            >
              Editar mi Perfil
            </Button>
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
        {showForm ? <FormUpdate /> : null}
        {showFormServicio ? <FormServicio /> : null}
        {showPosts ? <PostsSuppliers /> : null}
      </Box>
      <Box></Box>
    </Box>
  );
};

export default DashboardSuppliers;
