import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Center, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { getAllSuppliers } from '../../../services/redux/actions/actions';
import { Link as RouterLink } from 'react-router-dom';

const TopPro = () => {
  const dispatch = useDispatch();
  const suppliers = useSelector((state) => state.suppliers);

  useEffect(() => {
    dispatch(getAllSuppliers());
  }, [dispatch]);

  // Ordena los proveedores por rating de mayor a menor
  const sortedSuppliers = [...suppliers].sort((a, b) => b.rating - a.rating);

  return (
    <Center p={4} bg={useColorModeValue('gray.900', 'gray.900')} color={useColorModeValue('gray.300', 'gray.300')} h="100vh" w="100%">
      <Box mx="auto" maxW="5xl" w="100%">
        <Box textAlign="center" mt={15}>
          <Heading fontSize="xl" mb={125}>
            Profesionales Mejor Puntuados
          </Heading>
        </Box>
        <Box mt={8} align="center">
          <Box display="grid" gridGap={6} gridTemplateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)' }}>
            {sortedSuppliers.slice(0, 4).map((supplier) => (
              <Card key={supplier.id} supplier={supplier} />
            ))}
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

const Card = ({ supplier }) => {
  const cardBgColor = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.400');
  const linkColor = useColorModeValue('teal.400', 'teal.400');

  return (
    <Box borderWidth="1px" borderRadius="lg" bg={cardBgColor} boxShadow="2xl" p={4}>
      <Flex>
        <Image objectFit="cover" boxSize={{ sm: '100px', md: '200px' }} src={supplier.image} />
        <Stack justifyContent="center" alignItems="center" p={4} pl={6} spacing={2}>
          <Heading fontSize="2xl" fontFamily="body">
            {supplier.name}
          </Heading>
          <Text fontWeight={600} color={textColor} fontSize="sm" mb={2}>
            {supplier.category}
          </Text>
          <Text textAlign="center" color={textColor}>
            Rating: {supplier.rating}
          </Text>
          <Button as={RouterLink} to={`/detail/${supplier.id}`} mt={4} colorScheme="teal" size="sm">
            Ver detalle
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default TopPro;