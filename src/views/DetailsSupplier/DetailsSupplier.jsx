import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  Wrap,
  useColorModeValue,
  Container,
  Stack
} from '@chakra-ui/react'
import { FaMale, FaRegPaperPlane, FaMailBulk, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import NoAvatar from '../../assets/defaultImages/sinfoto.jpg'
import Tag from '../../singleComponents/Tag'
import InfoLabel from '../../singleComponents/InfoLabel'
import SupplierPost from '../../components/SupplierPost/SupplierPost'
import mockupSupplier from '../../utils/Mockups/id-profesional.json'

const ArticleList = () => {
  const supplierData = mockupSupplier[0]

  return (
    // ! Contenedor principal
    <Container
      color='gray.300'
      bg={useColorModeValue('gray.800', 'gray.800')}
      maxW='7xl'
      p='12'
    >
      <Heading as='h1'>{supplierData.name || 'Sin nombre'}</Heading>
      {/* //! Card Principal */}
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
              src={supplierData.image || NoAvatar}
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
            {/* <Tag textTag='Electricista' />
            <Tag textTag='Plomero' />
            <Tag textTag='Pintor' /> */}
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
          <InfoLabel textLabel={supplierData.genre} iconLabel={FaMale} />
          <InfoLabel textLabel={supplierData.years_exp} iconLabel={FaRegPaperPlane} />
          <InfoLabel textLabel={supplierData.email} iconLabel={FaMailBulk} />
          <InfoLabel textLabel={supplierData.phone} iconLabel={FaPhone} />
          <InfoLabel textLabel={supplierData.ubication} iconLabel={FaMapMarkerAlt} />
        </Box>
      </Box>
      {/* //! Titular del contendor de items post */}
      <Heading as='h2' marginTop='5'>
        Trabajos Recientes
      </Heading>
      <Divider marginTop='5' />
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
        {/* <SupplierPost
          imagePost=''
          titularPost='Mantenimiento de Tuberias'
          descriptionPost='Se realizo mantenimiento del sistema de tuberias de drenaje de una casa habitacion, el trabajo duro 1 semana,etc, etc'
        />
        <SupplierPost
          imagePost='https://irp.cdn-website.com/86e72213/MOBILE/jpg/586.jpg'
          titularPost='Instalacion de sistema de drenaje'
          descriptionPost='Se realizo la instalacion del sistema de tuberias para drenaje de una casa habitacion'
        />
        <SupplierPost
          imagePost='https://irp.cdn-website.com/f259aba7/MOBILE/jpg/720.jpg'
          titularPost='Reparacion del sistema de tuberias para tinaco'
          descriptionPost='Se realizo la reparacion del sistema de tuberias para el llenado de un tinaco ubicado en la parte alta de una casa habitacion'
        /> */}
      </Wrap>
    </Container>
  )
}

export default ArticleList
