/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { applyFilters, getAllSuppliers } from '../../services/redux/actions/actions'
import SelectCategories from '../../singleComponents/SelectCategories'
import FilterByRating from '../Filteres/FilterByRating'
import FilterByGenres from '../Filteres/FilterByGenres'

export default function FiltersPanel () {
  const dispatch = useDispatch()
  const filters = useSelector(state => state.filters)
  const categorySelected = filters.category || ''
  const ocupationSelected = filters.ocupation || ''
  const ratingSelected = filters.rating || ''
  const genreSelected = filters.genre || ''

  function handleSelectCategory (value) {
    dispatch(applyFilters({ filter: 'category', value }))
    dispatch(applyFilters({ filter: 'ocupation', value: '' }))
    dispatch(getAllSuppliers())
  }

  function handleSelectOcupation (value) {
    dispatch(applyFilters({ filter: 'ocupation', value }))
    dispatch(getAllSuppliers())
  }

  return (
    <Box
      bg={useColorModeValue('gray.800', 'gray.800')}
      color={useColorModeValue('gray.50', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW='6xl'
        py={4}
        spacing={4}
        justify='center'
        align='center'
        direction='row'
        wrap='wrap'
      >
        <SelectCategories
          fnSelectCategory={handleSelectCategory}
          fnSelectOcupation={handleSelectOcupation}
        />
        <FilterByRating />
        <FilterByGenres />
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle='solid'
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW='6xl'
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'start', md: 'start', lg: 'start' }}
        >
          <Text>
            {`Resultados para ${categorySelected} >> ${ocupationSelected} >> ${ratingSelected} >> ${genreSelected}`}
          </Text>
        </Container>
      </Box>
    </Box>
  )
}
