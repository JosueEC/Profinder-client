import { useSessionState } from "../../../services/zustand/useSession";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostProfesional,
  deletePost,

} from "../../../services/redux/actions/actions";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Text,
  VStack,
  Image,
  Grid,
  Button,
  Flex,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

const PostsSuppliers = () => {
  const session = useSessionState((state) => state.session);
 // console.log(session);

  const profesionales = useSelector((state) => state.profesionales);
  const filteredPosts = profesionales.filter((post) => post.id === session.id);
  //console.log(filteredPosts);

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

  const navigate = useNavigate();



  const handleDeletePost = async (postId) => {
    console.log("ID del posteo a eliminar:", postId);
    try {
      await dispatch(deletePost(postId));
      navigate("/dashboardSuppliers");
    } catch (error) {
      console.error("Error al eliminar el post:", error);
    }
  };


  return (
    <Stack mt={12} justify="center" spacing={10} align="center">
      {/* <Flex > */}
      <Grid
        templateColumns={["1fr", "1fr", "1fr", "repeat(3, 1fr)"]}
        gap={5}
        justifyContent="center"
      >
        {filteredPosts.map((professional) =>
          professional.posts.map((post) => (
            <Box
              key={post.id}
              maxW={"500px"}
              w={"full"}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
              p={6}
              marginLeft="10px"
            >
              <Box justifyContent="center" marginTop="5">
                {/* Título del post */}
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
              <Box justifyContent="center">
                {/* Imagen actual */}
                <Grid
                  justifyContent="center"
                  templateColumns="repeat(2, 1fr)"
                  gap={2}
                  alignItems="center"
                >
                  <Image
                    justifyContent="center"
                    src={post.image[currentImageIndex]}
                    alt={`Image ${currentImageIndex}`}
                    boxSize="300px"
                    maxW="300px"
                    maxH="300px"
                    objectFit="contain"
                    // gridColumn="1 / span 3"
                    // color="black"
                    // layout="fill"

                    borderRadius="lg"
                    marginTop="5"
                    marginLeft="10px"
                  />
                  <Box>
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
                  </Box>
                </Grid>

                {/* Contenido del post */}
                <Text color={"gray.500"}>
                  {showFullContent
                    ? post.content
                    : post.content.substring(0, 100)}
                </Text>
              </Box>
              <Box justifyContent="center">
                <Link to={`/dashboardSuppliers/updatepost/${post.id}`}>
                  <EditIcon cursor="pointer" bg="red" />
                </Link>
                <DeleteIcon
                  cursor="pointer"
                  onClick={() => handleDeletePost(post.id)}
                  color="red.500"
                  w={6}
                  h={6}
                />
              </Box>
            </Box>
          ))
        )}
      </Grid>
    </Stack>
  );
};

export default PostsSuppliers;
