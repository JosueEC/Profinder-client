/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import consultoriaIcon from '../../../assets/categoriesIcons/consultoria.png'
import arteDiseñoIcon from '../../../assets/categoriesIcons/pintura.png'
import tecnologiaIcon from '../../../assets/categoriesIcons/informatica.png'
import serviciosIcon from '../../../assets/categoriesIcons/public-service.png'
import manualidadesIcon from '../../../assets/categoriesIcons/artesanias.png'
import ingenieriaIcon from '../../../assets/categoriesIcons/ingeniería.png'

const Card = ({ heading, description, icon }) => {
  const cardBgColor = useColorModeValue('blackAlpha.500', 'gray.900')
  const textColor = useColorModeValue('gray.300', 'gray.300')
  const linkColor = useColorModeValue('teal.400', 'teal.400')
  const iconBgColor = useColorModeValue('gray.900', 'gray.700')

  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w='full'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      p={5}
      bg={cardBgColor}
      color={textColor}
    >
      <Stack align='start' spacing={2}>
        <Flex
          w={16}
          h={16}
          align='center'
          justify='center'
          color='white'
          rounded='full'
          bg={iconBgColor}
          _hover={{ bg: useColorModeValue('gray.300', 'gray.600') }}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size='md'>{heading}</Heading>
          <Text mt={1} fontSize='sm'>
            {description}
          </Text>
        </Box>
        <Link to='/categories'>
          <Button as={Link} to='/categories' variant='link' color={linkColor} size='sm'>
            Learn more
          </Button>
        </Link>
      </Stack>
    </Box>
  )
}

const CategoriesSection = () => {
  return (
    <Box p={4} bg='gray.900' color='gray.300' h='100vh' width='100%'>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW='3xl' textAlign='center'>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight='bold'>
            NUESTRAS CATEGORíAS
          </Heading>
          <Text color='gray.600' fontSize={{ base: 'sm', sm: 'lg' }}>
            Estas son nuestras categorias donde puedes encontrar las ocupaciones de los servicios que procuras!
          </Text>
        </Stack>

        <Container maxW='5xl' mt={12}>
          <Flex flexWrap='wrap' gridGap={6} justify='center'>
            <Card
              heading='Tecnología'
              icon={<img src={tecnologiaIcon} alt='Tecnología' />}
              description='Aquí encontrarás ofertas de servicios en todo lo que respecta al area IT'
              href='#'
            />
            <Card
              heading='Arte y Diseño'
              icon={<img src={arteDiseñoIcon} alt='Arte y Diseño' />}
              description='Aquí encontraras desde diseñadores e ilustradores hasta decoradores de interior, escenófragos, entre otros...'
              href='#'
            />
            <Card
              heading='Consultoría'
              icon={<img src={consultoriaIcon} alt='Consultoría' />}
              description='Aquí encontrarás todo tipo de consultorías'
              href='#'
            />
            <Card
              heading='Servicios'
              icon={<img src={serviciosIcon} alt='Servicios' />}
              description='Aquí encontraras servicios generales.'
              href='#'
            />
            <Card
              heading='Manualidades'
              icon={<img src={manualidadesIcon} alt='Manualidades' />}
              description='Aquí encontrarás productos de oficio. Desde orfebres, esculores hasta cermaistas y floristas.'
              href='#'
            />
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default CategoriesSection;