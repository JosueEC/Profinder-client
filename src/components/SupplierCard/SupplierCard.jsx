/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import {useState} from 'react'
import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Icon
} from '@chakra-ui/react'
import { AtSignIcon } from '@chakra-ui/icons'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Tag from '../../singleComponents/Tag'
import NoAvatar from '../../assets/defaultImages/sinfoto.webp'
import StarRatingComponent from 'react-star-rating-component'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import { useDispatch } from 'react-redux'
import { addFavorite,getFavorites,removeFavorite } from '../../services/redux/actions/actions'
import { useLocation } from 'react-router-dom' 

import { useSessionState } from './../../services/zustand/useSession'

export default function SocialProfileSimple ({
  id,
  name,
  email,
  image,
  ubication,
  professions,
  rating

}) {
  const session = useSessionState((state) => state.session)
  // Dispatch
  const dispatch = useDispatch();
  // const location = useLocation();
  // Favorites State
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite =  (id) => {
    // console.log("Estoy en toggleFavorite y muestro el id: " + id)
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    // const favoriteRoute = location.pathname.includes('/favorites');
   
    if(isFavorite){
      console.log(`Se removerá de favoritos el profesional de id: ${id}`)
      dispatch(removeFavorite(id));
      dispatch(getFavorites())
    } else{
      console.log(`Se agregará a favoritos el profesional de id: ${id}`)
      dispatch(addFavorite(id));
      dispatch(getFavorites())

    }
  };
  // Favorites

  // console.log(rating)

  const bgElement = useColorModeValue('white', 'gray.800')
  const txtColor = useColorModeValue('gray.600', 'gray.100')

  return (
    <Box
      maxW='350px'
      // height='430px'
      height='460px'
      w='full'
      bg={bgElement}
      boxShadow='lg'
      rounded='lg'
      p={6}
      textAlign='center'
    >
      {/* {session.status === false ? '' : (
      )} */}
      <Box display='flex' justifyContent='flex-end' >
       <FavoriteButton isFavorite={isFavorite} onClick={()=>toggleFavorite(id)} />
     </Box>
        <Avatar
          border='1px'
          size='xl'
          src={image || NoAvatar}
          loading='lazy'
          alt='Avatar'
          mb={4}
          pos='relative'
        />
      <Heading
        fontSize='2xl'
        fontFamily='body'
        color={txtColor}
        mb={3}
        >
        {name}
      </Heading>
      <Box>
        <StarRatingComponent
          name='rating'
          starCount={5}
          value={rating}
          starColor='#FFD700'
          emptyStarColor='#CCCCCC'
          editing={false}
        />
      </Box>

      <Text fontWeight={600} color='gray.500' noOfLines={1}>
        <AtSignIcon mr={2} color='teal.400' />
        {email}
      </Text>
      <Text
        fontWeight={600}
        color='gray.500'
        mb={4}
      >
        <Icon as={FaMapMarkerAlt} mr={2} color='teal.400' />
        {`${ubication.country}, ${ubication.location}` || 'Sin ubicacion'}
      </Text>
      <Stack
        align='center'
        justify='center'
        direction='column'
        wrap='wrap'
        mt={6}
      >
        {professions
          ? (
              professions.map(({ ocupations }) => {
                return ocupations
                  ? (
                      ocupations.map(({ id, name }) => {
                        return <Tag key={id} textTag={name} />
                      })
                    )
                  : (
                    <Tag textTag='Sin definir' />
                    )
              })
            )
          : (
            <Tag textTag='Sin definir' />
            )}
      </Stack>

      <Stack
        mt={8}
        direction='row'
        spacing={4}
        align='center'
        justify='center'
      >
        {session.status === false
          ? (
            <Link to='/userLogin'>
              {' '}
              <Button
                flex={1}
                fontSize='sm'
                rounded='lg'
                _hover={{ bg: 'gray.300' }}
              >
                Inicia sesion
              </Button>
            </Link>
            )
          : (
            <Link to={`/detail/${id}`}>
              <Button
                flex={1}
                fontSize='sm'
                rounded='lg'
                _hover={{ bg: 'gray.300' }}
              >
                Ver detalles
              </Button>
            </Link>
            )}
      </Stack>
    </Box>
  )
}