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
  Alert,
  AlertIcon,
  CloseButton,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { updateFeedback } from '../../../services/redux/actions/actions';

function FeedbackForm() {
  const dispatch = useDispatch();

  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  // Obtener el ID del cliente de la sesión actual desde el almacenamiento local
  const userSession = JSON.parse(localStorage.getItem('userSession'));
  const clientId = userSession && userSession.id ? userSession.id : null;

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    // Limpia el mensaje de error cuando se selecciona una valoración
    setErrorMessage('');
    setShowErrorAlert(false);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
    // Realiza la validación en tiempo real del contenido del comentario
    if (e.target.value.trim().split(' ').length <= 3) {
      setErrorMessage('El comentario debe tener más de tres palabras.');
      setShowErrorAlert(true);
    } else {
      setErrorMessage('');
      setShowErrorAlert(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating) {
      setErrorMessage('Debes seleccionar una valoración.');
      setShowErrorAlert(true);
      return;
    }

    if (content.trim().split(' ').length <= 3) {
      setErrorMessage('El comentario debe tener más de tres palabras.');
      setShowErrorAlert(true);
      return;
    }

    const newData = {
      content: content,
      rating: Number(rating),
      profesionalId: 789, // Reemplaza con el ID del profesional correspondiente
      clientId: clientId, // Utiliza el ID del cliente de la sesión actual
    };

    dispatch(updateFeedback(newData))
      .then(() => {
        setSuccessMessage('Formulario enviado exitosamente.');
        setShowSuccessAlert(true);
        // Limpia el formulario
        setContent('');
        setRating('');
      })
      .catch(() => {
        setErrorMessage('Ha ocurrido un error. Inténtalo nuevamente.');
        setShowErrorAlert(true);
      });
  };

  const textColor = useColorModeValue('black', 'white');

  return (
    <Center p={4} color={textColor} h="100vh" w="100%">
      <Box mx="auto" maxW="5xl" w="100%">
        <Center>
          <VStack as="form" alignItems="center" textAlign="center" onSubmit={handleSubmit}>
            {showSuccessAlert && (
              <Alert status="success" mb={4} rounded="md">
                <AlertIcon />
                {successMessage}
                <CloseButton ml={2} onClick={() => setShowSuccessAlert(false)} />
              </Alert>
            )}
            {showErrorAlert && (
              <Alert status="error" mb={4} rounded="md">
                <AlertIcon />
                {errorMessage}
                <CloseButton ml={2} onClick={() => setShowErrorAlert(false)} />
              </Alert>
            )}
            <Heading as="h1" size="xl" mb={4}>
              Formulario de devolución de servicio
            </Heading>
            <Text mb={4}>
              En esta sección deberás seleccionar el usuario quien prestó los servicios y luego proceder a valorarlo según tu experiencia.
            </Text>
            <FormControl>
              <Box>
                <FormLabel>Valoración</FormLabel>
                <Select
                  value={rating}
                  onChange={handleRatingChange}
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
                  onChange={handleContentChange}
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