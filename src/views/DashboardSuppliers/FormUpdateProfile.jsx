/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  getAllCategories,
  updateProfesionals,
} from "../../services/redux/actions/actions";
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
  Stack,
  Button,
  useColorModeValue,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useSessionState } from "../../services/zustand/useSession";
import SelectCategories from "../../singleComponents/SelectCategories";
import { uploadFile } from "../../utils/Firebase/config";

function FormUpdate() {
  const session = useSessionState((state) => state.session);
  //console.log(session);
  const setSessionState = useSessionState((state) => state.setSessionState);

  useEffect(() => {
    const userSession = window.localStorage.getItem("userSession");
    if (userSession) {
      const user = JSON.parse(userSession);
      setSessionState(user);
    }
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      image: "",
      genre: "",
      years_exp: "",
      password: "",
      ubication: "",
      phone: "",
      ocupations: [],
      categories: [],
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedOccupations, setSelectedOccupations] = useState([]);
  const [value, setValue] = useState("");

  const envioCategoria = (value) => {
    setSelectedCategory([value]);
  };

  const envioOcupaciones = (value) => {
    setSelectedOccupations(value);
  };

  const onSubmit = async (data) => {
    const imageData = await uploadFile(data.image);

    const newData = {
      name: data.name,
      email: data.email,
      image: imageData,
      genre: data.genre,
      years_exp: data.years_exp,
      phone: data.phone,
      ubication: data.ubication,
      password: data.password,
      ocupations: [selectedOccupations],
      categories: selectedCategory,
    };

    dispatch(updateProfesionals(session.id, newData));
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
              <FormLabel>Nombre y apellido</FormLabel>
              <Input
                type="text"
                {...register("name", {
                  required: "El campo nombre es requerido",
                })}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                value={session.email}
                disabled
                type="email"
                {...register("email", {
                  required: "El campo email es requerido",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    message: "El formato del email es incorrecto",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </FormControl>

            <FormControl>
              <FormLabel>Telefono</FormLabel>
              <Input
                type="number"
                {...register("phone", {
                  required: "El campo telefono es requerido",
                })}
              />
              {/* {errors.phone && <p>{errors.phone.message}</p>} */}
            </FormControl>

            <FormControl>
              <FormLabel>Ubicacion</FormLabel>
              <Input
                type="text"
                {...register("ubication", {
                  required: "El campo ubicacion es requerido",
                })}
              />
              {/* {errors.ubicacion && <p>{errors.ubicacion.message}</p>} */}
            </FormControl>

            <FormControl>
              <FormLabel>Foto de perfil</FormLabel>
              <Input
                type="file"
                {...register("image", {
                  required: "El campo imagen es requerido",
                  validate: {
                    isImage: (value) => {
                      if (value) {
                        const acceptedFormats = [".jpg", ".jpeg", ".png"];
                        const fileExtension = value[0].name.substring(
                          value[0].name.lastIndexOf(".")
                        );
                        return acceptedFormats.includes(fileExtension);
                      }
                      return true;
                    },
                  },
                })}
                onChange={(e) => uploadFile(e.target.files[0])}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Género</FormLabel>
              <RadioGroup onChange={(value) => setValue(value)} value={value}>
                <Stack direction="row">
                  <Radio
                    {...register("genre", {
                      required: "Seleccione una opción de género",
                    })}
                    value="female"
                  >
                    Femenino
                  </Radio>
                  <Radio
                    {...register("genre", {
                      required: "Seleccione una opción de género",
                    })}
                    value="male"
                  >
                    Masculino
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Años de experiencia</FormLabel>
              <NumberInput defaultValue={0} min={0} max={100}>
                <NumberInputField
                  {...register("years_exp", {
                    required: true,
                  })}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl>
              <FormLabel>Categorías</FormLabel>
              <SelectCategories
                fnSelectCategory={envioCategoria}
                fnSelectOcupation={envioOcupaciones}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
                value={session.password}
                disabled
                type="password"
                {...register("password", {
                  required: "El campo contraseña es requerido",
                })}
              />
              {/* {errors.password && <p>{errors.password.message}</p>} */}
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
                Actualizar
              </Button>
            </FormControl>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
}

export default FormUpdate
