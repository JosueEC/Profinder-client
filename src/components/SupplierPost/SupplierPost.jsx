import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditIcon } from "@chakra-ui/icons";

import { getPostProfesional } from "./../../services/redux/actions/actions";
import {
  Box,
  Text,
  VStack,
  Image,
  Grid,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SupplierPost({
  imagePost,
  titularPost,
  descriptionPost,
  identificador,
}) {
  const profesionales = useSelector((state) => state.profesionales);
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    dispatch(getPostProfesional());
  }, [dispatch]);

  
  const professional = profesionales.find(
    (profesional) => profesional.id === identificador
  );


  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={4}
      justifyContent="center"
      alignItems="center"
    >
      {professional ? (
        professional.posts.map((post) => (
          <Flex
            key={post.id}
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <Box
              maxW={{ base: "full", md: "500px" }}
              w={{ base: "full", md: "500px" }}
              bg={useColorModeValue("blackAlpha.800", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
              p={6}
              marginLeft={{ base: "0", md: "10px" }}
              minH="200px"
              maxH="500px"
            >
              <Box justifyContent="center">
                <EditIcon
                  position="absolute"
                  top="20px"
                  right="20px"
                  cursor="pointer"
                />
              </Box>
              <Box justifyContent="center" marginTop="5">
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={700}
                  fontSize={"xl"}
                  letterSpacing={1.1}
                >
                  {post.title}
                </Text>
              </Box>
              <Box
                justifyContent="center"
                maxHeight="150px"
                overflow="hidden"
                marginTop="5"
              >
                <Text
                  color={"gray.500"}
                  noOfLines={showFullContent ? undefined : 4}
                >
                  {post.content}
                </Text>
              </Box>

              <Image
                justifyContent="center"
                src={post.image[currentImageIndex]}
                alt={`Image ${currentImageIndex}`}
                boxSize={{ base: "300px", md: "auto" }}
                maxW={{ base: "300px", md: "100%" }}
                maxH="300px"
                objectFit="contain"
                borderRadius="lg"
                marginTop="5"
              />
            </Box>
          </Flex>
        ))
      ) : (
        <Text>No posts found for the given identifier.</Text>
      )}
    </Grid>
  );
}
