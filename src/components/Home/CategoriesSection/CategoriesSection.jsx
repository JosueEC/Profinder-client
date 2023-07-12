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

import consultoriaIcon from '../../../assets/categoriesIcons/educación.png'
import arteDiseñoIcon from '../../../assets/categoriesIcons/salud.png'
import tecnologiaIcon from '../../../assets/categoriesIcons/desarrollo-de-software.png'
import serviciosIcon from '../../../assets/categoriesIcons/comercio.png'
import manualidadesIcon from '../../../assets/categoriesIcons/hobbie.png'
import ingenieriaIcon from '../../../assets/categoriesIcons/ingeniería.png'

const Card = ({ heading, description, icon }) => {
  const cardBgColor = useColorModeValue('blackAlpha.500', 'gray.900')
  const textColor = useColorModeValue('gray.300', 'gray.300')
  const linkColor = useColorModeValue('teal.400', 'teal.400')

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
          bg={useColorModeValue('gray.100', 'gray.700')}
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
          <Button variant='link' color={linkColor} size='sm'>
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
            NUESTRAS CATEGORIAS
          </Heading>
          <Text color='gray.600' fontSize={{ base: 'sm', sm: 'lg' }}>
            Este es un repaso de nuestras categorias
          </Text>
        </Stack>

        <Container maxW='5xl' mt={12}>
          <Flex flexWrap='wrap' gridGap={6} justify='center'>
            <Card
              heading='Tecnología'
              icon={<img src={tecnologiaIcon} alt='Tecnología' />}
              description='Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              href='#'
            />
            <Card
              heading='Arte y Diseño'
              icon={<img src={arteDiseñoIcon} alt='Arte y Diseño' />}
              description='Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              href='#'
            />
            <Card
              heading='Consultoría'
              icon={<img src={consultoriaIcon} alt='Consultoría' />}
              description='Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              href='#'
            />
            <Card
              heading='Servicios'
              icon={<img src={serviciosIcon} alt='Servicios' />}
              description='Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              href='#'
            />
            <Card
              heading='Manualidades'
              icon={<img src={manualidadesIcon} alt='Manualidades' />}
              description='Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              href='#'
            />
            <Card
              heading='Ingeniería'
              icon={<img src={ingenieriaIcon} alt='Ingeniería' />}
              description='Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              href='#'
            />
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default CategoriesSection;