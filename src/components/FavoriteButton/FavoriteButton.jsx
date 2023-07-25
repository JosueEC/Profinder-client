import { Button } from "@chakra-ui/react";
import { StarIcon, SmallCloseIcon } from "@chakra-ui/icons";

const FavoriteButton = ({isFavorite,onClick}) => {
  const buttonIcon = isFavorite ? <SmallCloseIcon /> : <StarIcon />;
  // console.log(onClick)
  return (
    <Button onClick={onClick} colorScheme={isFavorite ? "red" : "yellow"} maxW='1rem' maxH='2rem'>
      {buttonIcon}
    </Button>
  )
};

export default FavoriteButton;