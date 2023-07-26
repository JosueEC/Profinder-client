import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
  Avatar,
  Spacer,
  Spinner,
} from "@chakra-ui/react";
import {
  FaUserAlt,
  FaRegPaperPlane,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

import NoAvatar from "../../assets/defaultImages/sinfoto.webp";
import InfoLabel from "../../singleComponents/InfoLabel";
import SupplierPost from "../../components/SupplierPost/SupplierPost";
import ClieProfChatBot from "./ChatClieProf";

import {
  cleanDetail,
  getProfesionalIdOnline,
} from "../../services/redux/actions/actions";
import SupplierReview from "../../components/SupplierPost/SuplierReview";

const ArticleList = () => {
  const { id } = useParams();
  const profesionalId = useSelector((state) => state.profesionalId);
  const dispatch = useDispatch();

  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    dispatch(getProfesionalIdOnline(id));

    window.scrollTo(0, 0);
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const hoverStyles = {
    transform: "scale(1.01)",
    cursor: "pointer",
  };

  if (!profesionalId) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Spacer h="100px" bg={useColorModeValue("gray.800", "gray.500")} />
     
      <Container
        key={profesionalId.id}
        // color="gray.300"
        bg={useColorModeValue("gray.800", "gray.500")}
        maxW="100%"
        // py="5"

        px={{ base: "2", md: "8", lg: "10rem" }}
        align={"center"}
        justify={"center"}

      >
         {profesionalId.length === 0 ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="lg"
            />
          ) : (
        <ScaleFade initialScale={0.9} in>
         
            <Box>
              <Flex
                direction={{ base: "column", md: "row" }}
                justify="center"
                align="center"
                // mt={8}
                gap={{ base: "1rem", md: "3rem", lg: "3rem" }}
                maxW={{ base: "full", md: "900px" }}
                w={{ base: "full", md: "900px" }}
              >
                {/* <Box flex={{ base: "1", md: "2" }}>
              <Link to="/categories">
                <Button
                  bg="teal.400"
                  color="white"
                  _hover={{ bg: "teal.500" }}
                  size="lg"
                  w="100%"
                  order={{ base: 2, md: 1 }}
                  alignSelf={{ base: "center", md: "auto" }}
                >
                  Volver
                </Button>
              </Link>
            </Box> */}
                {profesionalId.map(
                  ({
                    id,
                    name,
                    email,
                    image,
                    ubication,
                    description,
                    professions,
                    years_exp,
                    genre,
                    phone,
                    posts,
                  }) => (
                    <Box
                      key={id}
                      rounded={{ base: "none", md: "md" }}
                      boxShadow={"2xl"}
                      align={"center"}
                      _hover={hoverStyles}
                      maxW={{ base: "100%", md: "500px" }}
                      mx={{ base: "auto", md: "0" }}
                      mb={{ base: "3rem", md: "0" }}
                      flex={{ base: "1", md: "2" }}
                      bg={useColorModeValue("blackAlpha.800", "gray.800")}
                    >
                      <Image
                        src={image || NoAvatar}
                        loading="lazy"
                        alt="Image"
                        boxSize={{ base: "300px", md: "auto" }}
                        maxW={{ base: "300px", md: "100%" }}
                        maxH="300px"
                        objectFit="contain"
                        marginTop="5"
                        borderRadius="10px"
                      />
                      <Stack
                        direction="column"
                        spacing={2}
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
                        <InfoLabel textLabel={genre} iconLabel={FaUserAlt} />

                        <InfoLabel textLabel={email} iconLabel={FaMailBulk} />
                        <InfoLabel textLabel={phone} iconLabel={FaPhone} />
                        <Box>
                          <Text fontSize="16px">Años de experiencia:</Text>
                          <InfoLabel fontSize="20px" textLabel={years_exp} />
                        </Box>
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
                  )
                )}
                <Box flex={{ base: "1", md: "1" }}>
                  {isChatOpen && (
                    <ClieProfChatBot profesionalId={profesionalId} />
                  )}
                </Box>
              </Flex>
              <Wrap spacing="50px" justify="center" align="center">
                <SupplierReview profesionalId={id} key={profesionalId.id} />
              </Wrap>
              <Divider my={{ base: 8, md: 16 }} />
            </Box>
       
            <Box>
          <Flex
            direction="column"
            align="center"
            justify="center"
            gap={{ base: "1rem", md: "3rem", lg: "3rem" }}
          >
              <Heading as="h2" textTransform="uppercase" color="blackAlpha.800">
                Trabajos Recientes
              </Heading>
              <Divider my={2} />
              <Wrap spacing="50px" justify="center">
                <SupplierPost profesionalId={id} key={profesionalId.id} />
              </Wrap>
          </Flex>
            </Box>  
        </ScaleFade>)}
        <Divider my={{ base: 8, md: 16 }} /> 
       
      </Container> 
    </>
  );
};

export default ArticleList;
