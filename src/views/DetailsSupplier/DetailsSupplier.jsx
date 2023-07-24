import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  Wrap,
  useColorModeValue,
  Container,
  Stack,
  Icon,
  Button,
  Flex,
  ScaleFade,
  Center,
  Avatar,
  IconButton,
  Tag,
} from "@chakra-ui/react";
import {
  FaUserAlt,
  FaRegPaperPlane,
  FaMailBulk,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/customHooks/useFetch";

import NoAvatar from "../../assets/defaultImages/sinfoto.webp";
import InfoLabel from "../../singleComponents/InfoLabel";
import SupplierPost from "../../components/SupplierPost/SupplierPost";
import ClieProfChatBot from "./ChatClieProf";
import StarRatingComponent from "react-star-rating-component";
import { IconBase } from "react-icons/lib";
import { AtSignIcon, CheckCircleIcon, CheckIcon } from "@chakra-ui/icons";

const ArticleList = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(
    `https://backprofinder-production.up.railway.app/profesional/${id}`
  );

  const [isChatOpen, setIsChatOpen] = useState(false);
  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const hoverStyles = {
    transform: "scale(1.01)",
    cursor: "pointer",
  };

  if (isLoading) {
    return <h2>Cargando</h2>;
  }

  const {
    name,
    email,
    image,
    ubication,
    years_exp,
    phone,
    professions,
    rating,
  } = data || {};

  return (
    <Container
      color="gray.300"
      bg={useColorModeValue("gray.800", "gray.800")}
      maxW="100%"
      py="5"
      px={{ base: "8", md: "8", lg: "10rem" }}
      align={"center"}
      justify={"center"}
    >
      <ScaleFade initialScale={0.9} in>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
          mt={8}
          gap={{ base: "1rem", md: "3rem", lg: "3rem" }}
        >
          <Box
            rounded={"md"}
            boxShadow={"2xl"}
            align={"center"}
            bg="gray.900"
            _hover={hoverStyles}
            mb={{ base: "3rem", md: "0" }}
            flex={{ base: "1", md: "2" }}
          >
            <Avatar
              size="10xl"
              src={image || NoAvatar}
              loading="lazy"
              alt="Avatar"
              mb={4}
              pos="relative"
            />
            <Stack
              direction="column"
              spacing={4}
              p={8}
              align="center"
              textTransform={"uppercase"}
              fontWeight={700}
              fontSize={{ base: "lg", md: "2xl" }}
              letterSpacing={1.1}
              textAlign="center"
            >
              <Heading as="h1" textTransform="uppercase">
                {name || "Sin nombre"}
              </Heading>
              <Box>
                <StarRatingComponent
                  name="rating"
                  starCount={5}
                  value={rating}
                  starColor="#FFD700"
                  emptyStarColor="#CCCCCC"
                  editing={false}
                />
              </Box>
              <Text  color="gray.500" mb={4} fontSize="16px">
                <Icon as={FaMapMarkerAlt} mr={2} color="teal.400" />
                {`${ubication.country}, ${ubication.location}` ||
                  "Sin ubicacion"}
              </Text>
              <InfoLabel textLabel={data?.genre} iconLabel={FaUserAlt} />
              <Box>
                <Text fontSize="16px">Años de experiencia:</Text>
                <InfoLabel
                  fontSize="20px"
                  textLabel={years_exp}
                  iconLabel={CheckIcon}
                />
              </Box>

              <InfoLabel textLabel={email} iconLabel={FaMailBulk} />
              <InfoLabel textLabel={phone} iconLabel={FaPhone} />
              <Button
                onClick={handleChatToggle}
                bg={useColorModeValue("teal.500", "teal.400")}
                color="white"
                _hover={{ bg: "teal.600" }}
                leftIcon={<Icon as={FaRegPaperPlane} />}
              >
                Contactar
              </Button>
            </Stack>
          </Box>

          <Box flex={{ base: "1", md: "1" }}>
            {isChatOpen && <ClieProfChatBot data={data} />}
          </Box>
        </Flex>

        <Divider my={{ base: 8, md: 16 }} />

        <Flex
          direction="column"
          align="center"
          justify="center"
          gap={{ base: "1rem", md: "3rem", lg: "3rem" }}
        >
          <Heading as="h2" textTransform="uppercase">
            Trabajos Recientes
          </Heading>
          <Divider my={2} />
          <Wrap spacing="50px" justify="center">
            {data?.posts ? (
              data.posts.map(({ image, content, title, id }) => {
                return (
                  <SupplierPost
                    key={id}
                    identificador={id}
                    imagePost={image[0]}
                    titularPost={title}
                    descriptionPost={content}
                  />
                );
              })
            ) : (
              <Heading>No hay ninguna publicación</Heading>
            )}
          </Wrap>
        </Flex>
      </ScaleFade>
      <Divider my={{ base: 8, md: 16 }} />
    </Container>
  );
};

export default ArticleList;
