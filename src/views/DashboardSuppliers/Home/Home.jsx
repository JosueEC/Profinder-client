import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, useColorModeValue, Button, Stack } from "@chakra-ui/react";
import { ChatIcon, ViewIcon, EditIcon, QuestionIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import FormUpdate from "../formUpdateProfile/FormUpdateProfile";
import DataSuppliers from "../DataSuppliers/DataSuppliers";
import { useState } from "react";
import { useEffect } from "react";
import CustomChatBot from "../../../components/CustomChatBot/CustomChatBot";
import FormServicio from "../../FormServicio/FormServicio";
import PostsSuppliers from "../PostSuppliers/PostsSuppliers";
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

  const [showForm, setShowForm] = useState(false);
  const [showPosts, setShowPosts] = useState(false);
  const [showFormServicio, setShowFormServicio] = useState(false);
  const [showInicio, setShowInicio] = useState(false);
  const [showAyuda, setShowAyuda] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    setShowPosts(false);
    setShowFormServicio(false);
    setShowInicio(false);
    setShowAyuda(false);
  };

  const handleShowPosts = () => {
    setShowForm(false);
    setShowPosts(true);
    setShowFormServicio(false);
    setShowInicio(false);
    setShowAyuda(false);
  };

  const handleShowFormServicio = () => {
    setShowForm(false);
    setShowPosts(false);
    setShowFormServicio(true);
    setShowInicio(false);
    setShowAyuda(false);
  };

  const handleShowInicio = () => {
    setShowInicio(true);
    setShowForm(false);
    setShowPosts(false);
    setShowFormServicio(false);
    setShowAyuda(false);
  };
  const handleShowAyuda = () => {
    setShowInicio(false);
    setShowForm(false);
    setShowPosts(false);
    setShowFormServicio(false);
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
            <Button
              variant="outline"
              onClick={handleShowInicio}
              bg={showInicio ? "blue.500" : ""}
              color={showInicio ? "white" : ""}
            >
              Incio
            </Button>
          </ScrollLink>
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
            to="/pasarela"
            spy
            smooth
            duration={500}
            style={linkStyle}
          >
            <Button variant="outline">Obtén Premium</Button>
            <ScrollLink
              to="/pasarela"
              spy
              smooth
              duration={500}
              style={linkStyle}
              onClick={handleShowAyuda}
            >
              <Button variant="outline" leftIcon={<QuestionIcon />}>
                Ayuda
              </Button>
            </ScrollLink>
          </ScrollLink>
        </Stack>
      </Box>

      {showPosts ? <PostsSuppliers /> : null}
      {showForm ? <FormUpdate /> : null}
      {showFormServicio ? <FormServicio /> : null}
      <Flex justifyContent="flex-start" alignItems="flex-end">
        {showAyuda ? <CustomChatBot /> : null}
      </Flex>
      {showInicio ? (
        <Flex direction="row" justifyContent="space-around">
          <DataSuppliers />
          <BarData />
        </Flex>
      ) : null}
    </Box>
  );
};

export default DashboardSuppliers;
