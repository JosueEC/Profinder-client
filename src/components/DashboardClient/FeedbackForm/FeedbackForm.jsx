import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const FeedbackForm = () => {
  return (
    <Box width="100%" bg="gray.100" border="1px solid black" borderRadius="md" p={4}>
      <Text fontSize="xl" fontWeight="bold" textAlign="center" color="teal.500">
        Esta sección está reservada para el feedback de devolución del cliente al profesional
      </Text>
    </Box>
  );
};

export default FeedbackForm;