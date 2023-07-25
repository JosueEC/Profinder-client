import { useSelector } from "react-redux";
import { Grid, Box, Text } from "@chakra-ui/react";
import BtnPremium from "../BtnPremium/BtnPremium";

const Data = () => {
  const dataSuppliers = useSelector((state) => state.profesionales);
  const userSession = JSON.parse(localStorage.getItem("userSession"));
  const profile = dataSuppliers.find((user) => user.id === userSession.id);
  //console.log(profile);
  const numPosts = profile && profile.posts ? profile.posts.length : 0;

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={3}
    >
      <Box
        textAlign="center"
        bg="rgba(75, 192, 192, 0.6)"
        borderRadius="10px"
        p={3}
        mb={3}
        color="white"
        fontSize={{ base: "20px", md: "24px" }}
      >
        <Text fontSize={{ base: "24px", md: "30px" }}>Mis Posts</Text>
        <Box fontSize={{ base: "18px", md: "24px" }}>{numPosts}</Box>
      </Box>

      <Box
        textAlign="center"
        bg="rgba(3, 75, 75, 0.6)"
        borderRadius="10px"
        p={3}
        mb={3}
        color="white"
        fontSize={{ base: "20px", md: "24px" }}
      >
        <Text fontSize={{ base: "24px", md: "30px" }}>
          Servicios Terminados
        </Text>
        <Box fontSize={{ base: "18px", md: "24px" }}>15</Box>
      </Box>

      <Box
        textAlign="center"
        bg="rgba(192, 75, 75, 0.6)"
        borderRadius="10px"
        p={3}
        mb={3}
        color="white"
        fontSize={{ base: "20px", md: "24px" }}
      >
        <Text fontSize={{ base: "24px", md: "30px" }}>Servicios Activos</Text>
        <Box fontSize={{ base: "18px", md: "24px" }}>15</Box>
      </Box>
{/* 
      <Box textAlign="center" borderRadius="10px" p={3} mb={3} color="white">
        <BtnPremium />
      </Box> */}
    </Grid>
  );
};

export default Data;
