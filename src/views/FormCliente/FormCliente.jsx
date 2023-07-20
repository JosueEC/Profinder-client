import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  postSessionUser,
  postCliente,
} from "../../services/redux/actions/actions";
import { useCredentials } from "../../utils/customHooks/useCredentials";
import PrivacyNotice from "../../components/PrivacyNotice/PrivacyNotice";
// import { uploadFile } from "../../utils/Firebase/config";

function FormCliente(props) {
  const dispatch = useDispatch();
  const { handleUserSession } = useCredentials();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      // image: "",
      phone: "",
    },
  });

  const onSubmit = async (data) => {
    // const imageData = await uploadFile(data.image);
    const newData = {
      name: data.name,
      email: data.email,
      password: data.password,
      // image: imageData,
      phone: data.phone,
    };

    const dataSession = {
      name: data.name,
      email: data.email,
      password: data.password,
      usuario: "c",
    };

    console.log(newData);
    await dispatch(postSessionUser(dataSession));
    dispatch(postCliente(newData));
    handleUserSession("Cuenta creada", "Algo salio mal");
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
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
              )}
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
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email.message}</span>
              )}
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
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password.message}</span>
              )}
            </FormControl>

            <FormControl mb="30px">
              <FormLabel>Telefono</FormLabel>
              <Input
                type="number"
                {...register("phone", {
                  required: "El campo telefono es requerido",
                })}
              />
              {errors.phone && (
                <span style={{ color: "red" }}>{errors.phone.message}</span>
              )}
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
              <PrivacyNotice />
            </FormControl>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
}

export default FormCliente;
