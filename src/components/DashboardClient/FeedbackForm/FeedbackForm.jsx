import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Center,
  Select,
  Textarea,
} from '@chakra-ui/react';

//import { updateFeedback } from '../../../services/redux/actions/actions';

function FeedbackForm() {
  const dispatch = useDispatch();

  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');

  // Obtener el ID del cliente de la sesión actual desde el almacenamiento local
  const userSession = JSON.parse(localStorage.getItem("userSession"));
  const clientId = userSession ? userSession.clientId : null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      content: content,
      rating: Number(rating),
      profesionalId: 789, // Reemplaza con el ID del profesional correspondiente
      clientId: clientId, // Utiliza el ID del cliente de la sesión actual
    };

    dispatch(updateFeedback(newData));
  };

  return (
    <Center p={4} bg={'gray.900'} color={'gray.300'} h="100vh" w="100%">
      <Box mx="auto" maxW="5xl" w="100%">
        <Center>
          <VStack as="form" alignItems="center" textAlign="center" onSubmit={handleSubmit}>
            <FormControl>
              <Box>
                <FormLabel>Valoración</FormLabel>
                <Select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  placeholder="Selecciona una valoración"
                >
                  
                  <option value="1">Malo</option>
                  <option value="2">Regular</option>
                  <option value="3">Bueno</option>
                  <option value="4">Muy bueno</option>
                  <option value="5">Excelente</option>
                </Select>
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <FormLabel>Comentario</FormLabel>
                <Textarea
                  variant="filled"
                  placeholder="Escribe tu comentario"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  size="lg"
                  rows={6}
                />
              </Box>
            </FormControl>
            <Button type="submit">Enviar Feedback</Button>
          </VStack>
        </Center>
      </Box>
    </Center>
  );
}

export default FeedbackForm;