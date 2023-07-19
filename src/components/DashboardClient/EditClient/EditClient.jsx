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
  CircularProgress,
} from '@chakra-ui/react';

import { getAllClients, updateClient } from '../../../services/redux/actions/actions';

function EditClient() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [genre, setGenre] = useState('');
  const [countryId, setCountryId] = useState('');
  const [locationId, setLocationId] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [countries, setCountries] = useState([]);
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const userSession = JSON.parse(localStorage.getItem("userSession"));

  useEffect(() => {
    if (userSession) {
      setName(userSession.name);
      setEmail(userSession.email);
      setPhone(userSession.phone);
      setGenre(userSession.genre);
      setCountryId(userSession.CountryId);
      setLocationId(userSession.LocationId);
      setDescription(userSession.description);
      setImageUrl(userSession.image);
    }

    fetch("https://backprofinder-production.up.railway.app/country")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
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

  const handleCountryChange = (e) => {
    const countryId = e.target.value;
    setCountryId(countryId);

    if (countryId) {
      fetch(`https://backprofinder-production.up.railway.app/country/${countryId}`)
        .then((response) => response.json())
        .then((data) => {
          const selectedCountry = data;
          if (selectedCountry) {
            fetch("https://backprofinder-production.up.railway.app/location")
              .then((response) => response.json())
              .then((locationsData) => {
                const filteredLocations = locationsData.filter(
                  (location) => location.CountryId === selectedCountry.id
                );
                setLocations(filteredLocations);
              })
              .catch((error) => console.log(error));
          } else {
            setLocations([]);
          }
        })
        .catch((error) => console.log(error));
    } else {
      setLocations([]);
    }
  };

  const handleLocationChange = (e) => {
    setLocationId(e.target.value);
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
      password: "", // Agrega la contraseña aquí si es necesario
      image: [imageUrl], // Convertimos la URL en un arreglo como se espera en el backend
      phone: phone,
      description: description,
      genre: genre,
      CountryId: parseInt(countryId), // Convertimos el ID del país en un número entero
      LocationId: parseInt(locationId), // Convertimos el ID de la provincia/estado en un número entero
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
      setCountryId(client.CountryId);
      setLocationId(client.LocationId);
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
                <FormLabel>País</FormLabel>
                <Select
                  placeholder="País"
                  value={countryId}
                  onChange={handleCountryChange}
                >
                  <option value="">Seleccionar país</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </Select>
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <FormLabel>Provincia/Estado</FormLabel>
                <Select
                  placeholder="Provincia/Estado"
                  value={locationId}
                  onChange={handleLocationChange}
                >
                  <option value="">Seleccionar provincia/estado</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </Select>
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