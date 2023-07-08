/* eslint-disable react/prop-types */
import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { AtSignIcon, CheckCircleIcon } from '@chakra-ui/icons'
import Tag from '../../singleComponents/Tag/Tag'

export default function SocialProfileSimple ({ name, email, image, profesiones, description, ubicacion }) {
  return (
    <Box
      maxW='350px'
      height='460px'
      w='full'
      colorMode
      bg={useColorModeValue('blackAlpha.500', 'gray.900')}
      boxShadow='2xl'
      rounded='lg'
      p={6}
      textAlign='center'
    >
      <Avatar
        size='xl'
        src={image}
        alt='Avatar'
        mb={4}
        pos='relative'
      />
      <Heading fontSize='2xl' fontFamily='body' color='gray.300'>
        {name}
      </Heading>
      <Text fontWeight={600} color='gray.500' noOfLines={1}>
        <AtSignIcon mr={2} color='teal.400' />
        {email}
      </Text>
      <Text fontWeight={600} color='gray.500' mb={4}>
        <CheckCircleIcon mr={2} color='teal.400' />
        {ubicacion}
      </Text>
      {/* <Stack
        align='center'
        justify='center'
        direction='row'
        mb={2}
      >
        <StarIcon color='yellow' />
        <StarIcon color='yellow' />
        <StarIcon color='yellow' />
        <StarIcon color='white' />
        <StarIcon color='white' />
      </Stack> */}
      <Text
        height='76px'
        textAlign='center'
        color={useColorModeValue('gray.500', 'gray.400')}
        px={3}
        noOfLines={3}
      >
        {description}
      </Text>
      <Stack
        align='center'
        justify='center'
        direction='row'
        wrap='wrap'
        mt={6}
      >
        {
          profesiones && <Tag textTag={profesiones[0].name} />
        }
      </Stack>

      <Stack mt={8} direction='row' spacing={4}>
        <Button
          flex={1}
          fontSize='sm'
          rounded='lg'
          _hover={{ bg: 'gray.300' }}
        >
          Ver detalles
        </Button>
        <Button
          flex={1}
          fontSize='sm'
          rounded='lg'
          bg='teal.400'
          color='white'
          _hover={{
            bg: 'teal.500'
          }}
        >
          Enviar mensaje
        </Button>
      </Stack>
    </Box>
  )
}
