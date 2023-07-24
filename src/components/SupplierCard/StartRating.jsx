import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating, onChange }) => {
  const MAX_RATING = 5;

  // Función para manejar el clic en una estrella
  const handleClick = (selectedRating) => {
    onChange(selectedRating);
  };

  // Función para renderizar una estrella individual
  const renderStar = (index, currentRating) => {
    const fullStar = index < currentRating;
    const halfStar = index === Math.floor(currentRating) && currentRating % 1 !== 0;

    return (
      <Box
        key={index}
        as="button"
        onClick={() => handleClick(index + 1)}
        color={fullStar || halfStar ? 'yellow.500' : 'gray.200'}
      >
        <Icon as={fullStar ? FaStar : halfStar ? FaStarHalfAlt : FaRegStar} />
      </Box>
    );
  };

  return (
    <Box>
      {[...Array(MAX_RATING)].map((_, index) => renderStar(index, rating))}
    </Box>
  );
};

export default StarRating;
