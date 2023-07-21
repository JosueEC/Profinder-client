import { useEffect, useState } from "react";
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { getProfesionals } from "../../services/redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useSessionState } from "../../services/zustand/useSession";

function PasarelaPagos() {
  const [preferenceId, setPreferenceId] = useState(null);
  const dataSuppliers = useSelector((state) => state.profesionales);
  const userSession = JSON.parse(localStorage.getItem("userSession"));
  const session = useSessionState((state) => state.session);
  const profile = dataSuppliers.find((user) => user.id === userSession.id);
  console.log(session.id)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfesionals());
  }, []);
  useEffect(() => {
    // Obtén la URL actual
    dispatch(getProfesionals());
    const currentUrl = window.location.href;

    // Extrae los parámetros de la URL
    const urlParams = new URLSearchParams(currentUrl);

    // Obtén los datos que necesitas
    const collectionStatus = urlParams.get("collection_status");
    const preferenceId = urlParams.get("preference_id");

    // Aquí puedes utilizar la información como desees
    console.log("collectionStatus:", collectionStatus);
    console.log("preferenceId:", preferenceId);

    // Verifica si collectionStatus es "approved"
    if (collectionStatus === "approved") {
      // Enviar los datos al backend en un JSON mediante una solicitud POST
      axios
        .post("https://backprofinder-production.up.railway.app/premium", {
          collectionStatus: collectionStatus,
          preferenceId: preferenceId,
        })
        .then((response) => {
          console.log("Respuesta del backend:", response.data);
          // Aquí puedes manejar la respuesta del backend, si es necesario
        })
        .catch((error) => {
          console.error("Error al enviar datos al backend:", error);
          // Aquí puedes manejar errores en caso de que ocurran
        });
    }
  }, []);
  initMercadoPago("TEST-6d144f52-f1d4-4a24-853e-d1b4592053fb"); //ocultar cuando este deploy

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://backprofinder-production.up.railway.app/cash",
        {
          description: "Bienvenido",
          price: 9,
          quantity: 1,
          ProfesionalId: session.id,
        }
      );
      console.log(response);
      const { preferenceId } = response.data;
      console.log(preferenceId);
      return preferenceId;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <Center py={6} style={{ height: "100vh" }}>
      <Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          maxW={"500px"}
          w={"full"}
          py={6}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
          >
            <Text
              fontSize={"sm"}
              fontWeight={500}
              bg={useColorModeValue("red.50", "red.900")}
              p={2}
              px={3}
              color={"red.500"}
              rounded={"full"}
            >
              BASICO
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"3xl"}>$</Text>
              <Text fontSize={"6xl"} fontWeight={800}>
                0
              </Text>
              <Text color={"gray.500"}>/mes</Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3} align={"center"}>
              <ListItem>
                <ListIcon as={CloseIcon} color="red.400" />
                Mejor posicionamiento
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Primer publicacion gratis
              </ListItem>
            </List>

            <Button
              mt={10}
              w={"full"}
              colorScheme="gray"
              bg={"gray.600"}
              color={"white"}
              rounded={"xl"}
              _hover={{}}
            >
              Basic
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        maxW={"500px"}
        w={"full"}
        py={6}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue("green.50", "green.900")}
            p={2}
            px={3}
            color={"green.500"}
            rounded={"full"}
          >
            PREMIUM
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"3xl"}>$</Text>
            <Text fontSize={"6xl"} fontWeight={800}>
              999
            </Text>
            <Text color={"gray.500"}>/mes</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <List spacing={3} align={"center"}>
            <ListItem fontSize="lg">
              <ListIcon as={CheckIcon} color="green.400" />
              Mejor posicionamiento
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={CheckIcon} color="green.400" />
              Publicaciones ilimitadas
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={CheckIcon} color="green.400" />
              Todas las caracteristicas
            </ListItem>
          </List>
          <Stack>
            <Button
              loadingText="Submitting"
              bg="teal.400"
              color="white"
              _hover={{ bg: "teal.500" }}
              type="submit"
              size="lg"
              marginTop="5"
              onClick={handleBuy}
            >
              Obtene premium
            </Button>
            {preferenceId && <Wallet initialization={{ preferenceId }} />}
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}

export default PasarelaPagos;
