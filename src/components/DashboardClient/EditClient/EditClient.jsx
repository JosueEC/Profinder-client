import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { getAllClients, updateClient } from '../../../services/redux/actions/actions';

function EditClient() {
  const fileInputRef = useRef();
  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [genre, setGenre] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const userSession = JSON.parse(localStorage.getItem("userSession"));

  useEffect(() => {
    if (userSession) {
      setName(userSession.name);
      setEmail(userSession.email);
      setPhone(userSession.phone);
      setGenre(userSession.genre);
      setLocation(userSession.location);
      setDescription(userSession.description);
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  
  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };
  
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newData = {
      name: name,
      email: email,
      phone: phone,
      genre: genre,
      location: location,
      description: description,
    };
    
    dispatch(updateClient(userSession.clientId, newData));
  };
  
  const clients = useSelector((state) => state.clients);
  const client = clients.find((client) => client.id === userSession.clientId);

  useEffect(() => {
    dispatch(getAllClients());
  }, []);

  useEffect(() => {
    if (client) {
      setName(client.name);
      setEmail(client.email);
      setPhone(client.phone);
      setGenre(client.genre);
      setLocation(client.location);
      setDescription(client.description);
    }
  }, [client]);
  
  return (
    <Center p={4} bg={useColorModeValue('gray.900', 'gray.900')} color={useColorModeValue('gray.300', 'gray.300')} h="100vh" w="100%">
      <Box mx="auto" maxW="5xl" w="100%">
        <Center>
          <VStack as="form" alignItems="center" textAlign="center" onSubmit={handleSubmit}>
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
                <Input variant="unstyled" placeholder="Nombre y apellido" value={name} onChange={handleNameChange} />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <FormLabel>Correo electrónico</FormLabel>
                <Input variant="unstyled" type="email" placeholder="Correo electrónico" value={email} onChange={handleEmailChange} />
              </Box>
            </FormControl>
            
            <FormControl>
              <Box>
                <FormLabel>Teléfono</FormLabel>
                <Input variant="unstyled" type="tel" placeholder="Teléfono" value={phone} onChange={handlePhoneChange} />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <FormLabel>Género</FormLabel>
                <Select placeholder="Género" value={genre} onChange={handleGenreChange}>
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                  <option value="other">Otro</option>
                </Select>
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <FormLabel>Ubicación</FormLabel>
                <Input variant="unstyled" type="text" placeholder="Ubicación" value={location} onChange={handleLocationChange} />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <FormLabel>Descripción</FormLabel>
                <Textarea placeholder="Descripción" value={description} onChange={handleDescriptionChange} />
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