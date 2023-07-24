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
      {filteredPosts.map((professional) =>
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
              <Box d="flex" alignItems="center" justifyContent="center" mt="3">
                <Button
                  onClick={handlePrevImage}
                  size="sm"
                  fontSize="xl"
                  mr="3"
                >
                  &lt;
                </Button>
                <Text fontSize="sm" color={"gray.500"}>
                  Imagen {currentImageIndex + 1} de {post.image.length}
                </Text>
                <Button
                  onClick={handleNextImage}
                  size="sm"
                  fontSize="xl"
                  ml="3"
                >
                  &gt;
                </Button>
              </Box>
            </Box>
          </Flex>
        ))
      )}
    </VStack>
  );
}
