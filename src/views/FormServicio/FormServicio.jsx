import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useSessionState } from "../../services/zustand/useSession";
// import { useHistory } from 'react-router-dom';


import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  Stack,
  Button,
  useColorModeValue,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

import SelectCategories from "../../singleComponents/SelectCategories";
import { uploadFiles2 } from "../../utils/Firebase/config";
import {
  getAllCategories,
  postServicio,
} from "../../services/redux/actions/actions";

function FormServicio(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: "",
      ocupation: "",
      category: "",
      images: [],
      content: "",
    },
  });
// const history = useHistory()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOccupations, setSelectedOccupations] = useState("");
  const session = useSessionState((state) => state.session);

  const [value, setValue] = useState("");

  const envioCategoria = (value) => {
    setSelectedCategory(value);
  };

  const envioOcupaciones = (value) => {
    setSelectedOccupations(value);
  };

  const onSubmit = async (data) => {
    const imageUrls = await uploadFiles2(data.images);

    const newData = {
      title: data.title,
      image: imageUrls,
      content: data.content,
      ProfesionalId: session.id,
      categories: selectedCategory,
      ocupations: selectedOccupations,
    };

    console.log(newData);
    dispatch(postServicio(newData));
    // history.push("/DashboardSuppliers");
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.800", "gray.800")}
      width="100%"
    >
      <Box
        rounded="lg"
        bg={useColorModeValue("blackAlpha.800", "gray800")}
        boxShadow="lg"
        p={8}
        color="gray.300"
      >
        <Stack spacing={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Titulo</FormLabel>
              <Input
                type="text"
                {...register("title", {
                  required: "El campo nombre es requerido",
                })}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Fotos de trabajos</FormLabel>
              <Input
                type="file"
                multiple // Allow multiple file selection
                {...register("images", {
                  required: "El campo imagen es requerido",
                  validate: {
                    isImage: (value) => {
                      if (value) {
                        const acceptedFormats = [".jpg", ".jpeg", ".png"];
                        for (const file of value) {
                          const fileExtension = file.name.substring(
                            file.name.lastIndexOf(".")
                          );
                          if (!acceptedFormats.includes(fileExtension)) {
                            return false;
                          }
                        }
                      }
                      return true;
                    },
                  },
                })}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Categorías</FormLabel>
              <SelectCategories
                fnSelectCategory={envioCategoria}
                fnSelectOcupation={envioOcupaciones}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Descripcion Trabajo</FormLabel>
              <Textarea
                type="text"
                {...register("content", {
                  required: "El campo contraseña es requerido",
                })}
              />
            </FormControl>

            <FormControl>
              <FormLabel />
              <Button
                type="submit"
                loadingText="Submitting"
                size="lg"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Enviar
              </Button>
            </FormControl>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
}

export default FormServicio;
