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
  const filteredPosts = profesionales.filter(
    (post) => post.id === identificador
  );

  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    dispatch(getPostProfesional());
  }, [dispatch]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const imageCount = filteredPosts[0].posts[0].image.length;
      const nextIndex = (prevIndex + 1) % imageCount;
      return nextIndex;
    });
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const imageCount = filteredPosts[0].posts[0].image.length;
      const prevIndexValue = (prevIndex - 1 + imageCount) % imageCount;
      return prevIndexValue;
    });
  };

  const handleToggleContent = () => {
    setShowFullContent((prevValue) => !prevValue);
  };

  return (
    <VStack spacing={10} align="center">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
       
      >
        {filteredPosts.map((professional) =>
          professional.posts.map((post) => (
            <Box
              key={post.id}
              maxW={"500px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
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
                <Text color={"gray.500"} noOfLines={4}>
                  {showFullContent ? post.content : post.content}
                </Text>
              </Box>

              {/* <Box justifyContent="center"   alignItems="center">
                <Grid
                  justifyContent="center"
                  templateColumns="repeat(2, 1fr)"
                  gap={2}
                  alignItems="center"
                > */}
              <Image
                justifyContent="center"
                src={post.image[currentImageIndex]}
                alt={`Image ${currentImageIndex}`}
                boxSize="300px"
                maxW="300px"
                maxH="300px"
                objectFit="contain"
                borderRadius="lg"
                marginTop="5"
                // marginLeft="10px"
                alignItems="center"
                mx="auto"
              />
              {/* <Box>
                    <Button
                      onClick={handlePrevImage}
                      size="sm"
                      fontSize="xl"
                      marginTop="5"
                    >
                      &lt;
                    </Button>
                    <Text fontSize="sm" color={"gray.500"} marginTop="5">
                      Imagen {currentImageIndex + 1} de {post.image.length}
                    </Text>
                    <Button
                      onClick={handleNextImage}
                      size="sm"
                      fontSize="xl"
                      marginTop="5"
                    >
                      &gt;
                    </Button>
                  </Box> */}
              {/* </Grid>
              </Box> */}
            </Box>
          ))
        )}
      </Flex>
    </VStack>
  );
}
