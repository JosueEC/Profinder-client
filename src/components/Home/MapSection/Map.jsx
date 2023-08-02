import { Box, Text, Heading, Flex, useColorMode, List, ListItem, ListIcon, SimpleGrid } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import MapSection from './MapSection';


const Map = () => {
  const { colorMode } = useColorMode();
  const backgroundColor = colorMode === 'dark' ? 'gray.800' : 'gray.100';
  const titleColor = colorMode === 'dark' ? 'teal.400' : 'teal.400';
  const descriptionColor = colorMode === 'dark' ? 'blue.400' : 'blue.800';
  const exampleDescriptionColor = colorMode === 'dark' ? 'blue.400' : 'blue.800';
  const headingColor = colorMode === 'dark' ?   'gray.100' : 'blue.800';

  return (
    <Flex flexDirection="column" backgroundColor={backgroundColor} p={4} width="90%">
      <Heading fontSize={{ base: '3xl', sm: '4xl' }} fontWeight="bold" textAlign="center" color={headingColor} mb={25}>
        NUESTROS PROFESIONALES POR EL MUNDO!
      </Heading>

    <Flex flexDirection="column" align="center" justify="center">
      <Box textAlign="center" p={4} flex="1">
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight="bold" color={titleColor} borderColor="blue.900">
          Ubicación de nuestros profesionales.
        </Heading>
        <Text fontSize={{ base: 'lg', sm: 'xl' }} fontWeight="bold" mt={4} color={descriptionColor}>
          Aquí verás donde están ubicados nuestros profesionales a lo largo de todo Latinoamérica.
        </Text>
      </Box>

      <Box flex="1" mb="1rem">
        <MapSection />
      </Box>

      <List spacing={5} width="100%" display="flex" flexDirection="column" alignItems="center">
        <SimpleGrid
          columns={{ base: 1, md: 2 }} // Una columna en pantallas pequeñas, dos columnas en pantallas grandes (md)
          spacing={4}
          maxW="50rem"
          gap={10}
          margin="0 auto" // Ajustar el ancho del SimpleGrid y centrarlo verticalmente
        >
          <ListItem fontSize={{ base: 'sm', sm: 'md' }} color={exampleDescriptionColor}>
            <ListIcon as={CheckIcon} color={titleColor} />
            Observá la ubicación de nuestros profesionales.
          </ListItem>
          <ListItem fontSize={{ base: 'sm', sm: 'md' }} color={exampleDescriptionColor}>
            <ListIcon as={CheckIcon} color={titleColor} />
            Asegurate de marcar tu zona en el mapa.
          </ListItem>
          <ListItem fontSize={{ base: 'sm', sm: 'md' }} color={exampleDescriptionColor}>
            <ListIcon as={CheckIcon} color={titleColor} />
            Corroborá la categoria y la ubicación.
          </ListItem>
          <ListItem fontSize={{ base: 'sm', sm: 'md' }} color={exampleDescriptionColor}>
            <ListIcon as={CheckIcon} color={titleColor} />
            Búscalos y matchea con ellos a través del sitio!
          </ListItem>
        </SimpleGrid>
      </List>
    </Flex>
  </Flex>
  );
};
export default Map;