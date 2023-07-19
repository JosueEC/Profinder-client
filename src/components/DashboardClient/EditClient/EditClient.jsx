import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Avatar,
  Spacer,
  Select,
  Textarea,
  Box,
  Center,
} from '@chakra-ui/react';

import { getAllClients, updateClient } from '../../../services/redux/actions/actions';

function EditClient() {
  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [genre, setGenre] = useState('');
  const [ubication, setUbication] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const userSession = JSON.parse(localStorage.getItem("userSession"));

  useEffect(() => {
    if (userSession) {
      setName(userSession.name);
      setEmail(userSession.email);
      setPhone(userSession.phone);
      setGenre(userSession.genre);
      setUbication(userSession.location);
      setDescription(userSession.description);
      setImageUrl(userSession.imageUrl);
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
  
  const handleUbicationChange = (e) => {
    setUbication(e.target.value);
  };
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  
  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newData = {
      name: name,
      email: email,
      phone: phone,
      genre: genre,
      ubication: ubication,
      description: description,
      image: imageUrl,
    };
    
    dispatch(updateClient(userSession.clientId, newData));
    console.log(newData);
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
      setUbication(client.ubication);
      setDescription(client.description);
      setImageUrl(client.image);
    }
  }, [client]);
  
  return (
    <Center p={4} bg={'gray.900'} color={'gray.300'} h="100vh" w="100%">
      <Box mx="auto" maxW="5xl" w="100%">
        <Center>
          <VStack as="form" alignItems="center" textAlign="center" onSubmit={handleSubmit}>
            <FormControl>
              <Box>
                <FormLabel>Imagen</FormLabel>
                <Avatar size="xl" name="Nombre y apellido" src={imageUrl} />
                <Input
                  type="text"
                  placeholder="URL de la imagen"
                  value={imageUrl}
                  onChange={handleImageUrlChange}
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
                  <option value="otro">Otro</option>
                </Select>
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <FormLabel>Ubicación</FormLabel>
                <Input variant="unstyled" type="text" placeholder="Ubicación" value={ubication} onChange={handleUbicationChange} />
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