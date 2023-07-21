import { useSessionState } from "../../../services/zustand/useSession";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostProfesional } from "../../../services/redux/actions/actions";
import {  EditIcon } from "@chakra-ui/icons";

import {
  Box,
  Text,
  VStack,
  Image,
  Grid,
  Button,
  Flex
} from "@chakra-ui/react";

const PostsSuppliers = () => {
  const session = useSessionState((state) => state.session);
  const profesionales = useSelector((state) => state.profesionales);
  const filteredPosts = profesionales.filter((post) => post.id === session.id);
  console.log(filteredPosts);

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
    <VStack spacing={4} align="stretch">
    {/* Título de las publicaciones */}
    <Text fontSize="xl" fontWeight="bold" mb={4} textAlign="center" p={4}>
      MIS PUBLICACIONES
    </Text>

    {/* Recorre las publicaciones filtradas */}
    <Flex flexWrap="wrap" justifyContent="space-around"> 
      {filteredPosts.map((professional) =>
        professional.posts.map((post) => (
          <Box
            key={post.id}
            borderWidth="1px"
            borderRadius="md"
            p={2}
            m={2}
            textAlign="center"
            w="300px"
            h="300px"
            bg="lightgray"
            flexDirection="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mx={2} // Ajusta el margen entre las publicaciones
            position="relative"
          >
              <EditIcon
                position="absolute"
                top="20px" // organiza de arriba abajo
                right="20px" // horizontal
                cursor="pointer"
              />  
              {/* Título del post */}
              <Text fontWeight="bold" fontSize="xl" mb={2} color="black">
                {post.title}
              </Text>

              {/* Contenido del post */}
              <Text color="black">
                {showFullContent
                  ? post.content
                  : post.content.substring(0, 100)}
              </Text>

              {/* Botón Leer más / Ver menos */}
              {post.content.length > 100 && (
                <Button
                  colorScheme="blue"
                  size="sm"
                  mt={2}
                  onClick={handleToggleContent}
                >
                  {showFullContent ? "Ver menos" : "Leer más"}
                </Button>
              )}

              {/* Imagen actual */}
              <Grid
                templateColumns="repeat(3, 1fr)"
                gap={2}
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={post.image[currentImageIndex]}
                  alt={`Image ${currentImageIndex}`}
                  objectFit="cover"
                  maxW="400px"
                  maxH="200px"
                  gridColumn="1 / span 3"
                  color="black"
                />
                <Button onClick={handlePrevImage} size="sm" fontSize="xl">
                  &lt;
                </Button>
                <Text fontSize="sm" color="black">
                  Imagen {currentImageIndex + 1} de {post.image.length}
                </Text>
                <Button onClick={handleNextImage} size="sm" fontSize="xl">
                  &gt;
                </Button>
              </Grid>
            </Box>
          ))
        )}
      </Flex>
    </VStack>
  );
};

export default PostsSuppliers;
