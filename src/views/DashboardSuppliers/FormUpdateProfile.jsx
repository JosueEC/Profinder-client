import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../services/redux/actions/actions";
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

import SelectCategories from "../../singleComponents/SelectCategories";
import { uploadFile } from "../../utils/Firebase/config";
import { updateProfesionals } from "../../services/redux/actions/actions";
import { useSessionState } from "../../services/zustand/useSession";

function FormUpdateProfile() {
  const session = useSessionState((state) => state.session);
  const setSessionState = useSessionState((state) => state.setSessionState);

  const { handleSubmit, register } = useForm({
    defaultValues: {
      name: "",
      genre: "",
      years_exp: "",
      ubication: "",
      phone: "",
      ocupations: [],
      categories: [],
      image: "",
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
    //console.log(value); //lega el value
    setSelectedCategory([value]);
  };
  
  const envioOcupaciones = (value) => {
   // console.log(value); //lega el value
    setSelectedOccupations(value);
  };

  const onSubmit = async (data) => {
    console.log(data);
    const imageData = await uploadFile(data.image);
    const newData = {
      name: data.name,
      image: imageData,
      genre: data.genre,
      years_exp: data.years_exp,
      description: "pendiente",
      phone: data.phone,
      ubication: data.ubication,
      ocupations: selectedOccupations,
      categories: selectedCategory,
    };

    const response = await dispatch(updateProfesionals(session.id, newData));
    if (response && response.payload) {
      setSessionState({ ...session, name: newData.name });
    }
  };
  console.log();
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
              <Input type="text" {...register("name")} />
            </FormControl>

            <FormControl>
              <FormLabel>Telefono</FormLabel>
              <Input type="number" {...register("phone")} />
            </FormControl>

            <FormControl>
              <FormLabel>Ubicacion</FormLabel>
              <Input type="text" {...register("ubication")} />
            </FormControl>

            <FormControl>
              <FormLabel>Foto de perfil</FormLabel>
              <Input
                type="file"
                onChange={(e) => uploadFile(e.target.files[0])}
                {...register("image")}
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
                <NumberInputField {...register("years_exp")} />
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
                Actualizar
              </Button>
            </FormControl>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
}

export default FormUpdateProfile;
