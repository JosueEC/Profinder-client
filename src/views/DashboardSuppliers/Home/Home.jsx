import { Link as RouterLink } from "react-router-dom";
import { Box, useColorModeValue, Button, Stack } from "@chakra-ui/react";
import { ChatIcon, ViewIcon, EditIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import FormUpdate from "../formUpdateProfile/FormUpdateProfile";
import { useState, useEffect } from "react";
import FormServicio from "../../FormServicio/FormServicio";
import PostsSuppliers from "../PostSuppliers/PostsSuppliers";
import { useSelector } from "react-redux";

const DashboardSuppliers = () => {
  const session = useSelector((state) => state.session);
  //console.log(session); //trae el estado que tengo en redux con la info del profesional actualizada

  useEffect(() => {
    const userSession = window.localStorage.getItem("userSession");
    //console.log(userSession);
    if (userSession) {
      const user = JSON.parse(userSession);
    }
  }, []);

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
              leftIcon={<ChatIcon />}
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
              leftIcon={<ViewIcon />}
            >
              Ver mis Publicaciones
            </Button>
          </ScrollLink>
          <RouterLink to="" style={linkStyle} onClick={handleShowForm}>
            <Button
              variant="outline"
              bg={showForm ? "blue.500" : ""}
              color={showForm ? "white" : ""}
              leftIcon={<EditIcon />}
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
        {/* aca va toda la info en la primer ventana que se abre */}
      </Box>
      <Box></Box>
    </Box>
  );
};

export default DashboardSuppliers;
