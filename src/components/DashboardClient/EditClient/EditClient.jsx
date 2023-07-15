import React, { useRef, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Avatar,
  Spacer,
  IconButton,
  Select,
  Textarea,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { AddIcon, StarIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllClients } from '../../../services/redux/actions/actions';

function EditClient() {
  const fileInputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClients());
  }, []);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <Center p={4} bg={useColorModeValue('gray.900', 'gray.900')} color={useColorModeValue('gray.300', 'gray.300')} h="100vh" w="100%">
      <Box mx="auto" maxW="5xl" w="100%">
        <Center>
          <VStack as="form" alignItems="center" textAlign="center">
            <FormControl>
              <Box>
                <FormLabel>Imagen</FormLabel>
                <Avatar size="xl" name="Nombre y apellido" src="url de la imagen" />
                <IconButton
                  aria-label="Subir imagen"
                  icon={<AddIcon />}
                  variant="outline"
                  onClick={handleFileUpload}
                />
                <Input
                  ref={fileInputRef}
                  type="file"
                  display="none"
                  accept="image/jpeg, image/jpg, image/png, application/pdf"
                />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <FormLabel>Nombre y apellido</FormLabel>
                <Input variant="unstyled" placeholder="Nombre y apellido" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <FormLabel>Correo electrónico</FormLabel>
                <Input variant="unstyled" type="email" placeholder="Correo electrónico" />
              </Box>
            </FormControl>
            
            <FormControl>
              <Box>
                <FormLabel>Teléfono</FormLabel>
                <Input variant="unstyled" type="tel" placeholder="Teléfono" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <FormLabel>Género</FormLabel>
                <Select placeholder="Género">
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </Select>
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <FormLabel>Ubicación</FormLabel>
                <Input variant="unstyled" type="text" placeholder="Ubicación" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <FormLabel>Descripción</FormLabel>
                <Textarea placeholder="Descripción" />
              </Box>
            </FormControl>
            <Spacer />
            <Button type="submit">Guardar cambios</Button>
          </VStack>
        </Center>
      </Box>
    </Center>
  );
}

export default EditClient;