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
  useDisclosure,
  Button,
  Flex,
  ScaleFade
} from '@chakra-ui/react'
import { FaUserAlt, FaRegPaperPlane, FaMailBulk, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import NoAvatar from '../../assets/defaultImages/sinfoto.webp'
import Tag from '../../singleComponents/Tag'
import InfoLabel from '../../singleComponents/InfoLabel'
import SupplierPost from '../../components/SupplierPost/SupplierPost'
import mockupSupplier from '../../utils/Mockups/id-profesional.json'
import ModalNewPost from '../../components/NewPost/ModalNewPost'

const ArticleList = () => {
  const supplierData = mockupSupplier[0]
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    // ! Contenedor principal
    <Container
      color='gray.300'
      bg={useColorModeValue('gray.800', 'gray.800')}
      maxW='100%'
      py='5'
      px={{ base: '8', md: '8', lg: '10rem' }}
    >
      <Heading as='h1'>{supplierData.name || 'Sin nombre'}</Heading>
      {/* //! Card Principal */}
      <ScaleFade initialScale={0.9} in>
        <Box
          p={7}
          bg={useColorModeValue('blackAlpha.800', 'gray.800')}
          marginTop={{ base: '1', sm: '5' }}
          display='flex'
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent='space-between'
        >
          {/* //! Background con puntos e imagen */}
          <Box
            display='flex'
            flex='1'
            marginRight='3'
            position='relative'
            alignItems='center'
          >
            {/* //! Imagen card principal */}
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex='2'
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop='5%'
            >
              <Image
                borderRadius='50%'
                boxSize='300px'
                src={supplierData.image}
                fallback={NoAvatar}
                loading='lazy'
                alt='avatar supplier'
                objectFit='contain'
              />
            </Box>
            {/* //! particulas de la foto de perfil */}
            <Box
              zIndex='1'
              width='100%'
              position='absolute'
              height='100%'
            >
              <Box
                bgGradient={useColorModeValue(
                  'radial(teal.300 1px, transparent 1px)',
                  'radial(teal.300 1px, transparent 1px)'
                )}
                backgroundSize='20px 20px'
                opacity='0.4'
                height='100%'
              />
            </Box>
          </Box>
          {/* //! Contendor de detalles del profeional */}
          <Box
            display='flex'
            flex='1'
            flexDirection='column'
            justifyContent='center'
            marginTop={{ base: '3', sm: '0' }}
          >
            {/* //! etiquetas de ocupaciones del profesional */}
            <Stack
              align='center'
              justify='center'
              direction='row'
              my={4}
            >
              {
            supplierData.professions &&
            supplierData.professions.map(({ ocupations }) => {
              return ocupations.map(({ id, name }) => {
                return (
                  <Tag key={id} textTag={name} />
                )
              })
            })
          }
            </Stack>
            {/* //! Descripcion del profesional */}
            <Text
              as='p'
              marginTop='2'
              color='gray.500'
              fontSize='lg'
              mb={5}
            >
              {supplierData.description}
            </Text>
            {/* //! Etiquetas de informacion del profesional */}
            <InfoLabel textLabel={supplierData.genre} iconLabel={FaUserAlt} />
            <InfoLabel textLabel={supplierData.years_exp} iconLabel={FaRegPaperPlane} />
            <InfoLabel textLabel={supplierData.email} iconLabel={FaMailBulk} />
            <InfoLabel textLabel={supplierData.phone} iconLabel={FaPhone} />
            <InfoLabel textLabel={supplierData.ubication} iconLabel={FaMapMarkerAlt} />
          </Box>
        </Box>
      </ScaleFade>
      {/* //! Titular del contendor de items post */}
      <Flex
        align='center'
        gap={{ md: '3rem', lg: '3rem' }}
        direction={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <Heading as='h2' marginTop='5'>
          Trabajos Recientes
        </Heading>
        {/* //! Modal nueva publicacion */}
        <Button
          onClick={onOpen}
          mt={{ base: '5', lg: '5' }}
          bg={useColorModeValue('blue.500', 'blue.400')}
          color='gray.50'
          _hover={{ bg: 'blue.600' }}
        >Crear publicación
        </Button>
      </Flex>
      <Divider marginTop='5' />
      <ModalNewPost isOpen={isOpen} onClose={onClose} />
      {/* //! contenedor de los items post */}
      <Wrap
        spacing='30px'
        marginTop='5'
        justify='center'
      >
        {
        (supplierData.jobimages)
          ? (
              supplierData.jobimages.map(({ image, description }) => {
                return (
                  <SupplierPost
                    key={description}
                    imagePost={image[0]}
                    titularPost={description}
                    descriptionPost={description}
                  />
                )
              })
            )
          : (
            <Heading>No hay ninguna publicacion</Heading>
            )
      }
      </Wrap>
    </Container>
  )
}

export default ArticleList
