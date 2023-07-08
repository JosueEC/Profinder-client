import { useForm } from "react-hook-form";
import React from "react";
import { useSelector } from "react-redux";

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
  Text,
  useColorModeValue,
  Link,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";


function FormProvider() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      image: "", //chequear
      description: "Agregue una descripcion",
      genre: "",
      years_exp: "",
      phone:"",
      ubicacion:"",
    },
  });

  const categorias = useSelector((state) => state.categorias);
  const profesiones = useSelector((state) => state.profesiones);

  const [value, setValue] = useState("1");
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      width={"100%"}
    >
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
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
              {errors.name && <p>{errors.name.message}</p>}
            </FormControl>

            <FormControl>
              <FormLabel>Email address</FormLabel>
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
              {errors.phone && <p>{errors.phone.message}</p>}
            </FormControl>
            <FormControl>
              <FormLabel>Tu ubicacion</FormLabel>
              <Input
                type="text"
                {...register("ubicacion", {
                  required: "El campo ubicacion es requerido",
                })}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>

              <Input type="password" />
            </FormControl>

            <FormControl>
              <FormLabel>Foto de perfil</FormLabel>
              <Input
                type="url"
                {...register("image", {
                  required: "El campo imagen es requerido",
                })}
              />
              {errors.image && <p>{errors.image.message}</p>}
            </FormControl>

            <FormControl>
              <FormLabel>Género</FormLabel>
              <RadioGroup onChange={(value) => setValue(value)} value={value}>
                <Stack direction="row">
                  <Radio
                    {...register("genre", {
                      required: "Seleccione una opción de género",
                    })}
                    value="Femenino"
                  >
                    Femenino
                  </Radio>
                  <Radio
                    {...register("genre", {
                      required: "Seleccione una opción de género",
                    })}
                    value="Masculino"
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
              <Select
                placeholder="Select option"
                defaultValue={1}
                {...register("categories")}
              >
                {categorias?.map((c) => (
                  <option value={c.id} key={c.id}>
                    {c.nombre}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Ocupacion</FormLabel>
              <Select
                placeholder="Select option"
                selectedValues={[1, 2]}
                {...register("ocupations", {
                  validate: (value) => value.length > 0,
                })}
              >
                {profesiones?.map((c) => (
                  <option value={c.name} key={c.id}>
                    {c.name}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Descripción</FormLabel>
              <Textarea
                isInvalid
                type="description"
                isRequired
                {...register("description", {
                  required: "El campo descripción es requerido",
                })}
              />
            </FormControl>
            <FormControl>
              <FormLabel></FormLabel>
              <Button
                type="submit"
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Registrarme
              </Button>
            </FormControl>
          </form>
       
        </Stack>
      </Box>
    </Flex>
  );
}

export default FormProvider;
