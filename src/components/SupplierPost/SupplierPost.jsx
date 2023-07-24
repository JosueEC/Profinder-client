import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  SimpleGrid,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function SupplierPost() {
  const { id } = useParams();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullContent, setShowFullContent] = useState(false);
  const dispatch = useDispatch();
  const professional = useSelector((state) => state.profesionalId);
  console.log(professional);
  useEffect(() => {
    dispatch(getPostProfesional(id));
  }, [dispatch, id]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  if (!professional || !professional[0]) {
    return <Text>Loading...</Text>;
  }
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4} justifyContent="center" alignItems="center">
      {professional ? (
        professional[0].posts.map((post) => (
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
                 
                  letterSpacing={1.1}
                  fontSize={{ base: "xl", md: "2xl" }}
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

              <Slider {...settings}>
                {post.image.map((img, index) => (
                  <Image
                    key={index}
                    justifyContent="center"
                    src={img}
                    alt={`Image ${index}`}
                    boxSize={{ base: "300px", md: "auto" }}
                    maxW={{ base: "300px", md: "100%" }}
                    maxH="300px"
                    objectFit="contain"
                    borderRadius="lg"
                    marginTop="5"
                  />
                ))}
              </Slider>
            </Box>
          </Flex>
        ))
      ) : (
        <Text>No posts found for the given identifier.</Text>
      )}
  </SimpleGrid>
  );
}
