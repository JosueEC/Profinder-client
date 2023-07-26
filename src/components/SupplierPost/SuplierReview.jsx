import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cleanDetail, getPostProfesional } from "./../../services/redux/actions/actions";
import {
  Box,
  Text,
  VStack,
  Image,
  Grid,
  Button,
  Flex,
  useColorModeValue,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

//! aca esta lo mismo
async function fetchPostId() {
  // Simulamos una pausa con setTimeout (puedes reemplazarlo con tu lógica de obtención de ID asincrónico)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(/* aquí obtén el valor del ID asincrónicamente */);
    }, 1000); // Tiempo de pausa de 1 segundo (puedes ajustarlo según tus necesidades)
  });
}

export default function SupplierReview() {
  const [id, setId] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullContent, setShowFullContent] = useState(false);
  const dispatch = useDispatch();
  const professional = useSelector((state) => state.profesionalId);
  // console.log(professional);

  useEffect(() => {
    async function getIdAsync() {
      const postId = await fetchPostId();
      setId(postId);
    }

    getIdAsync();
    return ()=> dispatch(cleanDetail())
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getPostProfesional(id));
    }
    return ()=> dispatch(cleanDetail())
  }, [dispatch, id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleToggleContent = () => {
    setShowFullContent((prevValue) => !prevValue);
  };

  if (!professional || !professional[0]) {
    return <Text>Loading...</Text>;
  }

  return (
    <Stack mt={12} justify="center" spacing={10} align="center">
      <Grid
        templateColumns={["3fr", "1fr", "1fr", "repeat(1, 1fr)"]}
        gap={5}
        justifyContent="center"
      >
        {professional ? (
          professional[0].reviews.map((review) => (
            <Box
              key={id}
              bg={useColorModeValue("blackAlpha.800", "gray.800")}
              maxW={"450px"}
              w={"full"}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
              p={6}
              marginLeft="10px"
            >
              <Box justifyContent="center">
                <EditIcon
                  position="absolute"
                  top="20px"
                  right="20px"
                  cursor="pointer"
                />
              </Box>
              <Flex direction="row" justify="center">
                {[...new Array(5)].map((star, index) => {
                  return index < review.rating ?? 0 ? (
                    <FaStar color="yellow" fontSize="1.3rem" />
                  ) : (
                    <FaStar color="white" fontSize="1.3rem" />
                  );
                })}
              </Flex>

              <Box>
                {/* Contenido del post */}
                <Text color={"gray.200"}>
                  {showFullContent
                    ? review.content
                    : review.content.substring(0, 100)}
                </Text>
              </Box>
            </Box>
          ))
        ) : (
          <Text>No posts found for the given identifier.</Text>
        )}
      </Grid>
    </Stack>
  );
}
