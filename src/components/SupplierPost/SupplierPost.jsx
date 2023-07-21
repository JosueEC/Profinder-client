/* eslint-disable react/prop-types */
import { Image } from "@chakra-ui/image";
import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SupplierPost({
  imagePost,
  titularPost,
  descriptionPost,
}) {
  const responsiveWidth = {
    base: "100%",
    sm: "45%",
    md: "45%",
    lg: "30%",
  };

  const hoverStyles = {
    transform: "scale(1.05)",
    cursor: "pointer",
  };

  return (
    <Box
      maxW={"445px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      p={6}
      width={responsiveWidth}
    >
      {/* Imagen post */}
      <Box position="relative" h={"210px"} bg={"gray.100"} mb={6}>
        <Image
          src={imagePost || SinImagen}
          layout="fill"
          objectFit="cover"
          borderRadius="lg"
          transition="0.3s ease-in-out"
          _hover={hoverStyles}
        />
      </Box>
      <Stack>
        <Text
          color={"green.500"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"2xl"}
          letterSpacing={1.1}
        >
          {titularPost || "Sin titular"}
        </Text>

        {/* Descripción post */}
        <Text color={"gray.500"}>{descriptionPost || "Sin descripcion"}</Text>
      </Stack>
    </Box>
  );
}
