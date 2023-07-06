import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SimpleCard() {
    return (
      <Flex border='2px' borderColor='red' minH='100vh' align='center' justify='center' bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
          <Stack align='center'>
            <Heading fontSize='4xl'>Ingresa a tu cuenta</Heading>
            <Text fontSize='lg' color='gray.600'>
              para disfrutar de todos nuestros <Link color='blue.400'>servicios</Link>
            </Text>
          </Stack>
          <Box rounded='lg' bg={useColorModeValue('white', 'gray.700')} boxShadow='lg' p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Correo electronico</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Contraseña</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: 'column', sm: 'row' }} align='start' justify='space-between'>
                  <Checkbox>Recordarme</Checkbox>
                  <Link color='blue.400'>Olvidaste tu contraseña?</Link>
                </Stack>
                <Button bg='blue.400' color='white' _hover={{ bg: 'blue.500' }}>
                  Ingresar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }