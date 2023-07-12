import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

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

function FormCliente(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  const onSubmit = async (data) => {
    const newData = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
    };
    console.log(newData);
    // dispatch(postCiente(newData));
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
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                isRequired
                {...register("password", {
                  required: "El campo descripción es requerido",
                })}
              />
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
                Registrarme
              </Button>
            </FormControl>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
}

export default FormCliente;
