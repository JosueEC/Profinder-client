/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  getAllCategories,
  postProveedor,
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
  // Textarea,
  Stack,
  Button,
  useColorModeValue,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

import SelectCategories from "../../singleComponents/SelectCategories";
import { uploadFile } from "../../utils/Firebase/config";
import { postSessionUser } from "../../services/redux/actions/actions";
import { useCredentials } from "../../utils/customHooks/useCredentials";
import PrivacyNotice from '../../components/PrivacyNotice/PrivacyNotice'
// import {
//   validateCategories,
//   validateGenre,
//   validateImage,
//   validateName,
//   validateOcupations,
//   validatePhone,
//   validateUbication,
//   validateYearsExp,
// } from "../../services/validators/validationsLogin";

function FormProvider() {
  const { handleUserSession } = useCredentials()

  const {
    register,
    // watch,
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

  // Verificar el campo "name" en tiempo real
  // const name = watch("name");
  // useEffect(() => {
  //   try {
  //     validateName(name);
  //   } catch (error) {
  //     errors.name = { message: error.message };
  //   }
  // }, [name]);

  // Verificar el campo "email" en tiempo real
  // const email = watch("email");
  // useEffect(() => {
  //   try {
  //     validateEmail(email);
  //   } catch (error) {
  //     errors.email = { message: error.message };
  //   }
  // }, [email]);

  // Verificar el campo "image" en tiempo real
  // const image = watch("image");
  // useEffect(() => {
  //   try {
  //     validateImage(image);
  //   } catch (error) {
  //     errors.image = { message: error.message };
  //   }
  // }, [image]);

  // Verificar el campo "genre" en tiempo real
  // const genre = watch("genre");
  // useEffect(() => {
  //   try {
  //     validateGenre(genre);
  //   } catch (error) {
  //     errors.genre = { message: error.message };
  //   }
  // }, [genre]);

  // Verificar el campo "years_exp" en tiempo real
  // const yearsExp = watch("years_exp");
  // useEffect(() => {
  //   try {
  //     validateYearsExp(yearsExp);
  //   } catch (error) {
  //     errors.years_exp = { message: error.message };
  //   }
  // }, [yearsExp]);

  // Verificar el campo "categories" en tiempo real
  // const categories = watch("categories");
  // useEffect(() => {
  //   try {
  //     validateCategories(categories);
  //   } catch (error) {
  //     errors.categories = { message: error.message };
  //   }
  // }, [categories]);

  // Verificar el campo "ocupations" en tiempo real
  // const ocupations = watch("ocupations");
  // useEffect(() => {
  //   try {
  //     validateOcupations(ocupations);
  //   } catch (error) {
  //     errors.ocupations = { message: error.message };
  //   }
  // }, [ocupations]);

  // Verificar el campo "phone" en tiempo real
  // const phone = watch("phone");
  // useEffect(() => {
  //   try {
  //     validatePhone(phone);
  //   } catch (error) {
  //     errors.phone = { message: error.message };
  //   }
  // }, [phone]);

  // Verificar el campo "ubicacion" en tiempo real
  // const ubicacion = watch("ubicacion");
  // useEffect(() => {
  //   try {
  //     validateUbication(ubicacion);
  //   } catch (error) {
  //     errors.ubicacion = { message: error.message };
  //   }
  // }, [ubicacion]);

  // const categorias = useSelector((state) => state.categories);
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
    const imageData = await uploadFile(data.image); // Upload the image and get the URL

    const newData = {
      name: data.name,
      email: data.email,
      image: imageData, // Assign the URL of the image
      genre: data.genre,
      years_exp: data.years_exp,
      description: 'pendiente',
      phone: data.phone,
      ubication: data.ubication,
      password: data.password,
      ocupations: [selectedOccupations],
      categories: selectedCategory,
    };

    const sessionData = {
      name: data.name,
      email: data.email,
      password: data.password,
      usuario: 'p'
    }
    console.log(newData);
    await dispatch(postSessionUser(sessionData))
    dispatch(postProveedor(newData));
    handleUserSession('Cuenta creada', 'Algo salio mal')
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
                fnSelectCategory={envioCategoria} // Pasa el manejador para la selección de categoría
                fnSelectOcupation={envioOcupaciones} // Pasa el manejador para la selección de ocupación
              />
            </FormControl>

            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
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
                loadingText="Creando cuenta"
                size="lg"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Registrarme
              </Button>
              <PrivacyNotice />
            </FormControl>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
}

export default FormProvider;
