import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  Stack,
  // Button
} from '@chakra-ui/react';
import Tag from '../../singleComponents/Tag/Tag';
import { StarIcon, AtSignIcon, TimeIcon, InfoOutlineIcon } from '@chakra-ui/icons';

const ArticleList = () => {
  return (
    <Container // Contenedor principal
      color='gray.300'
      bg={useColorModeValue('gray.800', 'gray.800')}
      maxW={'7xl'}
      p="12">
      <Heading as="h1">Trevor Aquino</Heading>
      <Box // Card Principal
      p={7}
      bg={useColorModeValue('blackAlpha.800', 'gray.800')}
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box // Background con puntos e imagen
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box // Imagen card principal
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
              <Image
                borderRadius="50%"
                src={'https://c8.alamy.com/compes/2bbefc4/el-instalador-muestra-pulgares-hacia-arriba-2bbefc4.jpg'}
                alt="avatar supplier"
                objectFit="contain"
              />
          </Box>
          <Box  // particulas
            zIndex="1"
            width="100%"
            position="absolute"
            height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(teal.300 1px, transparent 1px)',
                'radial(teal.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box  // descripcion del articulo
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <Stack // estrellas de puntuacion
            align='center'
            justify='center'
            direction='row'
            mb={2}>
            <StarIcon color='yellow' fontSize='4xl'/>
            <StarIcon color='yellow' fontSize='4xl'/>
            <StarIcon color='yellow' fontSize='4xl'/>
            <StarIcon color='white' fontSize='4xl'/>
            <StarIcon color='white' fontSize='4xl'/>
          </Stack>
          <Stack // etiquetas de categoria
            align='center'
            justify='center'
            direction='row'
            my={4}>
            <Tag textTag='Electricista' />
            <Tag textTag='Plomero' />
            <Tag textTag='Pintor' />
          </Stack>
          <Text
            as="p"
            marginTop="2"
            color='gray.500'
            fontSize="lg"
            mb={5}>
              Servicio de cerrajeria a domicilio 24hs. Aperturas, cambios de combinacion, copias de llaves, reparacion de cerraduras, venta y colocacion de cerraduras nuevas.
          </Text>
          <Text // correo electronico
            fontWeight={600}
            color='gray.500'
            mb={2}
            fontSize='lg'><AtSignIcon mr={2} color='teal.400'/>
            aquinotrevor@gmail.com
          </Text>
          <Text // años de experiencia
            fontWeight={600}
            color='gray.500'
            mb={2}
            fontSize='lg'><TimeIcon mr={2} color='teal.400'/>
            7 Años de experiencia
          </Text>
          <Text // genero
            fontWeight={600}
            color='gray.500'
            mb={2}
            fontSize='lg'><InfoOutlineIcon mr={2} color='teal.400'/>
            Masculino
          </Text>
          {/* <Stack mt={8} direction='row' spacing={4}>
          <Button
            flex={1}
            fontSize='sm'
            rounded='lg'
            bg='teal.400'
            color='white'
            _hover={{
              bg: 'teal.500',
            }}>
            Enviar mensaje
          </Button>
        </Stack> */}
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Trabajos Recientes
      </Heading>
      <Divider marginTop="5" />
      <Wrap // contenedor de los items
        spacing="30px"
        marginTop="5"
        justify='center'>
        <WrapItem // item del contenedor
          width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box
            w="100%"
            >
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image // imagen de la publicacion
                  transform="scale(1.0)"
                  src={'https://www.camarounds.com/wp-content/uploads/2020/08/Plomeros-24-horas-Trabajos-urgentes-Camarounds.jpg'}
                  alt="some text"
                  objectFit="cover"
                  width="100%"
                  height='240px'
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <Heading // titulo del post
              fontSize="xl"
              marginTop="2">
              Mantenimiento de Tuberias
            </Heading>
            <Text // descripcion del post
              as="p"
              fontSize="md"
              marginTop="2">
              Se realizo mantenimiento del sistema de tuberias de drenaje de una casa habitacion, el trabajo duro 1 semana,etc, etc
            </Text>
          </Box>
        </WrapItem>
        <WrapItem // item del contenedor
          width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image // imagen de la publicacion
                  transform="scale(1.0)"
                  src={'https://irp.cdn-website.com/86e72213/MOBILE/jpg/586.jpg'}
                  alt="image post supplier"
                  objectFit="cover"
                  width="100%"
                  height='240px'
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <Heading // titulo del post
              fontSize="xl"
              marginTop="2">
              Instalacion de sistema de drenaje
            </Heading>
            <Text // descripcion del post
              as="p"
              fontSize="md"
              marginTop="2">
              Se realizo la instalacion del sistema de tuberias para drenaje de una casa habitacion
            </Text>
          </Box>
        </WrapItem>
        <WrapItem // item del contenedor
          width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image // imagen de la publicacion
                  transform="scale(1.0)"
                  src={'https://irp.cdn-website.com/f259aba7/MOBILE/jpg/720.jpg'}
                  alt="image post supplier"
                  objectFit="cover"
                  width="100%"
                  height='240px'
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <Heading // titulo del post
              fontSize="xl"
              marginTop="2">
              Reparacion del sistema de tuberias para tinaco
            </Heading>
            <Text // descripcion del post
              as="p"
              fontSize="md"
              marginTop="2">
              Se realizo la reparacion del sistema de tuberias para el llenado de un tinaco ubicado en la parte alta de una casa habitacion
            </Text>
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default ArticleList;