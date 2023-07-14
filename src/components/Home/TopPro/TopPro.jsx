import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Center, Flex, Heading, Image, Stack, Text, useColorModeValue, Icon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { getAllSuppliers } from '../../../services/redux/actions/actions';
import { Link as RouterLink } from 'react-router-dom';

const Card = ({ backup, cardBgColor, textColor }) => {
  const ratingStars = Array.from({ length: backup.rating }, (_, index) => (
    <Icon key={index} as={StarIcon} color="teal.400" />
  ));

  return (
    <Box borderWidth="1px" borderRadius="lg" bg={cardBgColor} boxShadow="2xl" p={4}>
      <Flex>
        <Box overflow="hidden" borderRadius="full" boxSize={{ sm: '80px', md: '150px' }}>
          <Image
            objectFit="cover"
            boxSize="100%"
            src={backup.image}
            alt={backup.name}
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Box>
        <Stack justifyContent="center" alignItems="center" p={4} pl={6} spacing={2}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight="bold" mt={15}>
            {backup.name}
          </Heading>
          <Text fontWeight={600} color={textColor} fontSize="sm" mb={2}>
            Categoría: {backup.professions[0].category}
          </Text>
          <Text fontWeight={600} color={textColor} fontSize="sm" mb={2}>
            Rating:
            <Flex align="center" ml={2}>
              {ratingStars}
            </Flex>
          </Text>
          <Button as={RouterLink} to={`/detail/${backup.id}`} mt={4} colorScheme="teal" size="sm">
            Ver detalle
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

const TopPro = ({ cardBgColor, textColor, linkColor }) => {
  const dispatch = useDispatch();
  const backup = useSelector((state) => state.backup);

  useEffect(() => {
    dispatch(getAllSuppliers());
  }, [dispatch]);

  // Ordena los proveedores por rating de mayor a menor
  const sortedSuppliers = [...backup].sort((a, b) => b.rating - a.rating);

  console.log(backup); // Verifica la estructura del objeto en la consola

  return (
    <Center p={4} bg={useColorModeValue('gray.900', 'gray.900')} color={useColorModeValue('gray.300', 'gray.300')} h="100vh" w="100%">
      <Box mx="auto" maxW="5xl" w="100%">
        <Box textAlign="center">
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight="bold" mt={15}>
            PROFESIONALES MEJOR PUNTUADOS
          </Heading>
          <Text mt={4} color={textColor}>
            En esta sección encontrarás los profesionales con mejores calificaciones de nuestro sitio.
          </Text>
        </Box>
        <Box mt={8} align="center">
          <Box display="grid" gridGap={6} gridTemplateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)' }}>
            {sortedSuppliers.slice(0, 4).map((backup) => (
              <Card key={backup.id} backup={backup} cardBgColor={cardBgColor} textColor={textColor} />
            ))}
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default TopPro;
